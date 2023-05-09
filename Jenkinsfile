pipeline {
    agent any
    stages {
        stage('clonning from GIT') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'gitprueba', url: 'https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git']])
                git branch: 'main', credentialsId: 'gitprueba', url: 'https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git'
            }
        }
        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner-4.8'
            }
            steps {
                withSonarQubeEnv('APP-JENKINS') {
                    sh """/opt/sonar-scanner-4.8.0.2856/bin/sonar-scanner \
                        -D sonar.projectKey=APP-JENKINS \
                        -D sonar.sources=. \
                        -D sonar.host.url=http://localhost:9000 \
                        -D sonar.login=sqp_e57484f9f8d9c6346daf1a266e27d85f83f7eaad"""
                }
            }
        }
    }
}
