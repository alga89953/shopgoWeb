pipeline {
    agent any
    
    stages {
        stage('Clonar repositorio') {
            steps {
                // Clonar el repositorio desde Git
                git 'URL_DEL_REPOSITORIO'
            }
        }
        
        stage('Instalar dependencias') {
            steps {
                // Instalar las dependencias usando npm
                sh 'npm install'
            }
        }
        
        stage('Construir') {
            steps {
                // Construir la aplicación React
                sh 'npm run build'
            }
        }
        
        stage('Desplegar') {
            steps {
                sh 'rsync -avz ./build/ usuario@servidor:/ruta/del/despliegue'
            }
        }
    }
    
    post {
        always {
            
        }
    }
}
