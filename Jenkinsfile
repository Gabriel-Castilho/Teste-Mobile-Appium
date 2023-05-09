pipeline {
    agent any
 options {
        ansiColor('xterm')
    }
    stages {
        stage('Clonar repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/Gabriel-Castilho/Teste-Mobile-Appium'
            }
            
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
            
        }
        stage('Executar testes') {
            steps {
                bat 'npm test'
            }
            
        }
    }
}