const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
   // user: 'gabrieloliveira_AIYkXP',
   // key: 'LqqyyJk2E3p9x7xHzwir',
    //services: ['browserstack'],
    //services:['appium'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "12.0",
        "deviceName": "Android12",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
    }],

    /*capabilities: [{
        'app': 'bs://d5838ae5769f5ee4f898078156a0602f5e305738',
        // Specify device and os_version for testing
        'device': 'Samsung Galaxy Note 20',
        'os_version': '10.0',
        // Set other BrowserStack capabilities
        'project': 'Primeiro projeto device farm browser stack',
        'build': '1',
        'name': 'login'
    }]*/
    waitForTimeout: 50000,
    mochaOpts: {
        timeout: 400000
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }], [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }]
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        driver.takeScreenshot();
    }

}