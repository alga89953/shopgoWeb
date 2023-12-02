pipeline {
    agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Construir la aplicación') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Desplegar la aplicación (opcional)') {
            when {
                expression { params.DEPLOY }
            }
            steps {
                script {
                    // Agrega los pasos necesarios para desplegar tu aplicación
                }
            }
        }

        stage('Ejecutar pruebas (opcional)') {
            when {
                expression { params.TEST }
            }
            steps {
                script {
                    // Agrega los pasos necesarios para ejecutar las pruebas
                }
            }
        }
    }

    post {
        always {
            // Puedes agregar acciones posteriores a la ejecución del pipeline
        }
    }
}
