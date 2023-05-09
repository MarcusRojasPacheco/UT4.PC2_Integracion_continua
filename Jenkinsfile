pipeline {
    agent any
    stages {
        stage('CHECK GITHUB') {
            steps {
                sh 'git ls-remote https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git'
                slackSend (color: '#00FF00', message: "Verificación de GitHub completada", channel: "#jenkins-web")
            }
        }
        stage('CLONAR') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'gitprueba', url: 'https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git']])
                git branch: 'main', credentialsId: 'gitprueba', url: 'https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git'
                slackSend (color: '#00FF00', message: "Clonación de repositorio completada", channel: "#jenkins-web")
            }
        }
        stage('Test and SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner-4.8'
            }
            steps {
                withSonarQubeEnv('APP-JENKINS') {
                    sh """cd angular && /opt/sonar-scanner-4.8.0.2856/bin/sonar-scanner \
                        -Dsonar.projectKey=APP-ANGULAR \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=sqp_c1cb6571fb5310eb98abb536f964b25bbad4d8de"""
                    slackSend (color: '#00FF00', message: "Análisis de SonarQube completado", channel: "#jenkins-web")
                }
            }
        }
    }
}
