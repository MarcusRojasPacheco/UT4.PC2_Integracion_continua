pipeline {
    agent any
    stages {
        stage('CHECK GITHUB AND CLONE') {
            steps {
                sh 'git ls-remote https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git'
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'gitprueba', url: 'https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git']])
                git branch: 'main', credentialsId: 'gitprueba', url: 'https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua.git'
                slackSend (color: '#00FF00', message: ":tm::two: Verificación de GitHub y clonación de repositorio completadas :tm::two:", channel: "#angular-jenkis")
            }
            post {
                failure {
                    slackSend (color: 'danger', message: ":tm::two: Fallo en la verificación o clonación del repositorio :tm::two:", channel: "#angular-jenkis")
                }
            }
        }
        stage('Build: Compilar codigo') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 16') {
                    dir('angular') {
                        sh '''
                            npm update
                            npm install
                            ng build --prod
                        '''
                        slackSend (color: '#00FF00', message: ":tm::two: Compilación completada :tm::two:", channel: "#angular-jenkis")
                    }
                }
            }
            post {
                failure {
                    slackSend (color: 'danger', message: ":tm::two: La compilación ha fallado :tm::two:", channel: "#angular-jenkis")
                }
            }
        }
        stage('TEST: SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner-4.8'
            }
            steps {
                nodejs(nodeJSInstallationName: 'Node 16') {
                    dir('angular') {
                        withSonarQubeEnv('APP-JENKINS') {
                            sh """/opt/sonar-scanner-4.8.0.2856/bin/sonar-scanner \
                                -Dsonar.projectKey=Angular-SonarQube \
                                -Dsonar.sources=. \
                                -Dsonar.host.url=http://localhost:9000 \
                                -Dsonar.login=sqp_44f3bbb54ec25e769a304b7dfa2bfd923c54b626"""
                            slackSend (color: '#00FF00', message: ":tm::two: Análisis de SonarQube completado :tm::two:", channel: "#angular-jenkis")
                        }
                    }
                }
            }
            post {
                failure {
                    slackSend (color: 'danger', message: ":tm::two: El análisis de SonarQube ha fallado :tm::two:", channel: "#angular-jenkis")
                }
            }
        }
        stage('CONTAINER: CREAR DOCKER Y PUSH HUB') {
            steps {
                sh 'docker build -t myapp:latest ./angular'
                slackSend (color: '#00FF00', message: ":tm::two: Construcción de contenedor Docker completada :tm::two:", channel: "#angular-jenkis")
                
                withCredentials([usernamePassword(credentialsId: 'login-dockerhub', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh '''
                        echo $DOCKER_HUB_PASSWORD | docker login -u $DOCKER_HUB_USERNAME --password-stdin
                        docker tag myapp:latest $DOCKER_HUB_USERNAME/myapp:latest
                        docker push $DOCKER_HUB_USERNAME/myapp:latest
                    '''
                    slackSend (color: '#00FF00', message: ":tm::two: Imagen Docker enviada a Docker Hub :tm::two:", channel: "#angular-jenkis")
                }
            }
            post {
                failure {
                    slackSend (color: 'danger', message: ":tm::two: La creación o subida del contenedor Docker ha fallado :tm::two:", channel: "#angular-jenkis")
                }
            }
        }
        stage('DEPLOY: Docker Compose') {
            steps {
                dir('angular') {
                    sh 'docker-compose up -d'
                }
                slackSend (color: '#00FF00', message: ":tm::two: Despliegue de Docker Compose completado :tm: :two:", channel: "#angular-jenkis")
            }
            post {
                failure {
                    slackSend (color: 'danger', message: ":tm::two: El despliegue con Docker Compose ha fallado :tm::two:", channel: "#angular-jenkis")
                }
            }
        }
    }
}

