![LOGO](https://www.jenkins.io/sites/default/files/jenkins_logo.png?w=144)

![Última confirmación](https://img.shields.io/github/last-commit/MarcusRojasPacheco/UT4.PC2_Integracion_continua/main?style=plastic)
![Tamaño del repositorio](https://img.shields.io/github/repo-size/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)
![Recuento de archivos](https://img.shields.io/github/directory-file-count/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)
![Contributors](https://img.shields.io/github/contributors/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)
![Versión del manifiesto](https://img.shields.io/github/manifest-json/v/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)
![License](https://img.shields.io/github/license/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)


---

### PLUGINS NECESARIOS EN JENKINS
[![SSH Server](https://img.shields.io/badge/SSH_Server-3.275-brightgreen?style=plastic&logo=ssh)](https://plugins.jenkins.io/sshd/)

[![SSH Pipeline Steps](https://img.shields.io/badge/SSH_Pipeline_Steps-2.0.65-brightgreen?style=plastic&logo=ssh)](https://plugins.jenkins.io/ssh-steps/)

[![GitHub Branch Source](https://img.shields.io/badge/GitHub_Branch_Source-1703.vd5a_2b_29c6cdc-brightgreen?style=plastic&logo=github)](https://plugins.jenkins.io/github-branch-source/)

[![SonarQubePlugins](https://img.shields.io/badge/SonarQube_Plugins-2.15-4E9BCD?logo=sonarqube&logoColor=fff&style=plastic)](https://plugins.jenkins.io/sonar/)

[![Slack Notification](https://img.shields.io/badge/Slack_Notification-664.vc9a_90f8b_c24a_-4A154B?style=plastic&logo=slack)](https://plugins.jenkins.io/slack/)

[![NodeJS Plugin](https://img.shields.io/badge/NodeJS_Plugin-1.6.0-339933?logo=nodedotjs&logoColor=fff&style=plastic)](https://plugins.jenkins.io/nodejs/)

[![Docker Plugin](https://img.shields.io/badge/Docker_Plugin-1.3.0-2496ED?logo=docker&style=plastic)](https://plugins.jenkins.io/docker-plugin/)

[![Docker Pipeline](https://img.shields.io/badge/Docker_Pipeline-563.vd5d2e5c4007f-blue?style=plastic&logo=docker)](https://plugins.jenkins.io/docker-workflow/)

[![ClouBess Docker Build and Publish plugin](https://img.shields.io/badge/ClouBess_Docker_Build_and_Publish_plugin-1.4.0-blue?style=plastic&logo=docker)](https://plugins.jenkins.io/docker-build-publish/)

[![Docker Pipeline](https://img.shields.io/badge/DockerHub-sonarqube:9.7.1_community-blue?style=plastic&logo=docker)]([https://plugins.jenkins.io/docker-workflow/](https://hub.docker.com/layers/library/sonarqube/9.7.1-community/images/sha256-d8247aa44526ccf185bf07fd0331a663f16d96f9d12f3e483982c2808083d2f0?context=explore))

[![Docker Pipeline](https://img.shields.io/badge/DockerHub-sunamylol/myapp-blue?style=plastic&logo=docker)](https://hub.docker.com/repository/docker/sunamylol/myapp/general)

[![SonarQubePlugins](https://img.shields.io/badge/Zip_SonarQube-4E9BCD?logo=sonarqube&logoColor=fff&style=plastic)]([https://plugins.jenkins.io/sonar/](https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856.zip))

---

### REFLEXION DE ["Is One Programming Language More Secure Than The Rest?"](https://www.mend.io/resources/blog/is-one-programming-language-more-secure/)

[![Reflexión Marcos Rojas Pacheco](https://img.shields.io/badge/Reflexión%20Marcos%20Rojas%20Pacheco-181717?logo=github&logoColor=fff&style=plastic)](assets/doc/reflexion_marcos_G2.md)

[![Reflexión Daniel Ruiz Raposo](https://img.shields.io/badge/Reflexión%20Daniel%20Ruiz%20Raposo-181717?logo=github&logoColor=fff&style=plastic)](assets/doc/reflexion_daniel_G2.md)

---

### QUE SE TIENE HACER EN LA ACTIVIDAD
En un entorno de desarrollo complejo y dinámico, este proyecto implementa sistemas seguros de despliegue de software, enfocándose en la integración continua, automatización de pruebas y prácticas de DevOps. Utilizamos Jenkins, una herramienta de integración continua, para automatizar partes del proceso de desarrollo de software, incluyendo control de versiones, construcción de software y pruebas. Implementamos herramientas SAST y DAST para mejorar la seguridad del software, analizando el código en busca de vulnerabilidades. Integramos SonarQube para escanear y analizar el código, Docker para la creación y gestión de contenedores, y Slack para notificaciones en tiempo real durante cada paso del pipeline. El proyecto también implica una reflexión sobre la seguridad de los lenguajes de programación. Este enfoque integral garantiza un desarrollo de software eficiente y seguro, capaz de responder rápidamente a las demandas cambiantes del mercado.

---

### CONFIGURAR SLACK PARA JENKINS
#### QUE SE VA NECESITAR
 - [![Slack Badge](https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=fff&style=plastic)](https://app.slack.com/)
 - [![Slack Notification](https://img.shields.io/badge/Slack_Notification-664.vc9a_90f8b_c24a_-4A154B?style=plastic&logo=slack)](https://plugins.jenkins.io/slack/)
#### INSTALACIÓN DEL PLUGINS DE SLACK EN JENKINS
Primero, necesitas instalar el plugin de Slack en tu servidor Jenkins. Para ello, ve a `Manage Jenkins` > `Manage Plugins`. En la pestaña `Available`, busca `Slack Notification Plugin` y procede a la instalación.
#### CREAR UN CANAL DE SLACK
En tu espacio de trabajo de Slack, crea un canal donde se enviarán las notificaciones. Puedes hacerlo haciendo clic en el signo `+` junto a `Channels` en Slack.

> Como se observa tendremos darle un nombre a nuestro `Canal`, en el cual se pondra el siguiente:

![SLACK](/assets/img/SLACK-01.png)

> Ahora nos dira que si el `Canal`, quiere que este en `Publico` o `Privado`, con lo cual elegimos la opción de `Publico`, ya que sera mas facil y comodo conectarlo mas adelante ese `Canal`.

![SLACK](/assets/img/SLACK-02.png)

#### CONECTAR SLACK CON JENKINS
Ahora vamos a conectar `Jenkins` con `Slack`, para ello vamos a `Ajuste y Administración` > `Gestionar Aplicaciones` y dentro del gestor vamos a buscar `Jenkins CI`, en el cual vamos hacer lo siguiente:

> Ahora vamos a darle a `Añadir a Slack`.

![SLACK](/assets/img/SLACK-05.png)

> Ahora vamos a poner en el canal que se publicara las notificaciones, en el cual vamos poner `angular-jenkis`.

![SLACK](/assets/img/SLACK-06.png)

> Nos daras unos pasos a seguir, en el cual nos facilita como se conecta, en el cual vamos a copiar el `Token` que no genera, junto con el nombre que hemos puesto al area de trabajo.

![SLACK](/assets/img/SLACK-07.png)

> Ahora vamos a `Jenkins` y ponemos en formato de la credencial en `Secret Text` y ponemos el `Token` dado y le ponemos un nombre para saber de que clave trata.

![SLACK](/assets/img/SLACK-08.png)

> Ahora vamos hacer `Test Connection` en el cual nos dice si los datos introducido son correctos.

![SLACK](/assets/img/SLACK-09.png)

> Como observamos `Jenkins` se ha conectado a nuestra area de trabajo.

![SLACK](/assets/img/SLACK-04.png)

##### PRUEBA DE NOTIFICACIÓN
Ahora vamos hacer una prueba en la cual con el siguiente `pipeline`, se podra ver en `Slack` la notificación del mensaje puesto.

```javascript
pipeline {
    agent any

    stages {
        stage('Test Slack Notification') {
            steps {
                script {
                    slackSend (
                        color: '#00FF00', 
                        message: "Prueba Slack", 
                        channel: "#angular-jenkis"
                    )
                }
            }
        }
    }
}
```
> Como observamos `Jenkins` se ha conectado a nuestra area de trabajo.

![SLACK](/assets/img/SLACK-03.png)

---

### CONFIGURAR SONARQUBE
#### QUE SE VA NECESITAR
 - [![SonarQubePlugins](https://img.shields.io/badge/SonarQube_Plugins-2.15-4E9BCD?logo=sonarqube&logoColor=fff&style=plastic)](https://plugins.jenkins.io/sonar/)
 - [![Docker Pipeline](https://img.shields.io/badge/DockerHub-sonarqube:9.7.1_community-blue?style=plastic&logo=docker)]([https://plugins.jenkins.io/docker-workflow/](https://hub.docker.com/layers/library/sonarqube/9.7.1-community/images/sha256-d8247aa44526ccf185bf07fd0331a663f16d96f9d12f3e483982c2808083d2f0?context=explore))
 - [![SonarQubePlugins](https://img.shields.io/badge/Zip_SonarQube-4E9BCD?logo=sonarqube&logoColor=fff&style=plastic)]([https://plugins.jenkins.io/sonar/](https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856.zip))
#### DESCARGAMOS EL DOCKER DE SONARQUBE
Ahora vamos a descargar el `docker` en el cual se va ejecutar con el siguiente comando:
```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:9.7.1-community
```
Una vez descargado entramos con la ruta que tendremos, en mi caso `localhost:9000` y la primera vez que entre nos obligara cambiar la contraseña de la que tiene por defecto.

#### NUEVO PROYECTO EN SONARQUBE
> Ahora vamos a crear un `Nuevo Proyecto`, en el cual vamos a poner de nombre `Angular-SonarQube`:

![SONARQUBE](/assets/img/SONARQUBE-01.png)

> Ahora vamos a señalar en `locally` en el cual vamos a generar un `Token`, en el cual se usara mas adelante.

![SONARQUBE](/assets/img/SONARQUBE-02.png)

> Vamos a poner que tiempo va durar ese `Token` de uso, en el cual en mi caso `Nunca caduce` y ahora le daremos a `Generar`.

![SONARQUBE](/assets/img/SONARQUBE-03.png)

> Ahora vamos a indicar en el lenguaje se encuentra, en mi caso se dara en `Otros`, y el sistema operativo se pondra `Linux`, con lo generado se tendra poner en nuestro `Pipeline`.
> Ahora mas adelante se configurar el plugins para que este conectado con `Jenkins`.

![SONARQUBE](/assets/img/SONARQUBE-04.png)

> **NOTA**: Se ha tenido instalar el lanzador de `SonarQube` para que se pueda ejecutar correctamente - [![SonarQubePlugins](https://img.shields.io/badge/Zip_SonarQube-4E9BCD?logo=sonarqube&logoColor=fff&style=plastic)]([https://plugins.jenkins.io/sonar/](https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856.zip))

#### INTEGRAR SONARQUBE CON JENKINS
> Una vez instalado el `Plugins` de `SonarQube`, vamos a configurar la **IP** del servidor de SonarQube y las `Credenciales` necesarias, quedara de la siguiente forma:

![SONARQUBE](/assets/img/SONARQUBE-05.png)

> Ponemos la versión en la cual se ejecuta el `SonarQube` en el cual lo señalamos, pero en mi caso se puso el fichero en local ya que existia el problema de que la versón se ejecutaba mal.

![SONARQUBE](/assets/img/SONARQUBE-06.png)

##### PIPELINES SONERQUBE
Ahora vamos poner lo generado por `SonarQube` en el cual se tiene que poner de la siguiente manera, una vez se inicie el `Test`, lo enviara a SonarQube.
```javascript
            steps {
                nodejs(nodeJSInstallationName: 'Node 16') {
                    dir('angular') {
                        withSonarQubeEnv('APP-JENKINS') {
                            sh """/opt/sonar-scanner-4.8.0.2856/bin/sonar-scanner \
                                -Dsonar.projectKey=Angular-SonarQube \
                                -Dsonar.sources=. \
                                -Dsonar.host.url=http://localhost:9000 \
                                -Dsonar.login=sqp_44f3bbb54ec25e769a304b7dfa2bfd923c54b626"""
                        }
                    }
                }
            }
```
##### PRUEBA DE SONARQUBE LANZADO
> Una vez puesto el codigo en nuestro `Pipeline`, vemos como se ejecuta en el `SonarQube`.

![SONARQUBE](/assets/img/SONARQUBE-07.png)

---

### DOCKER PARA HACER EL CONTAINER
#### QUE SE VA NECESITAR
- [![Docker Plugin](https://img.shields.io/badge/Docker_Plugin-1.3.0-2496ED?logo=docker&style=plastic)](https://plugins.jenkins.io/docker-plugin/)
- [![Docker Pipeline](https://img.shields.io/badge/Docker_Pipeline-563.vd5d2e5c4007f-blue?style=plastic&logo=docker)](https://plugins.jenkins.io/docker-workflow/)
- [![ClouBess Docker Build and Publish plugin](https://img.shields.io/badge/ClouBess_Docker_Build_and_Publish_plugin-1.4.0-blue?style=plastic&logo=docker)](https://plugins.jenkins.io/docker-build-publish/)
- [![Docker Pipeline](https://img.shields.io/badge/DockerHub-sunamylol/myapp-blue?style=plastic&logo=docker)](https://hub.docker.com/repository/docker/sunamylol/myapp/general)
> **NOTA**: Los plugins Docker en `Jenkins` permiten construir, publicar y manejar imágenes `Docker` sin otorgar a Jenkins acceso directo a Docker, mejorando la seguridad y el control.

En este proyecto, se ha tomado la decisión de otorgar permisos a `Jenkins` para que pueda ejecutar `Docker` directamente. Este enfoque proporciona un control total sobre las tareas de `Docker`, permitiendo una integración más estrecha y directa entre `Jenkins` y `Docker`. Aunque existen plugins de Docker para Jenkins, preferimos este método ya que ofrece más flexibilidad y control sobre el proceso de construcción y despliegue de contenedores. Asimismo, al permitir que Jenkins ejecute Docker directamente, podemos aprovechar todas las características y funcionalidades de Docker sin las limitaciones que podrían imponer los plugins.

#### COMANDOS PARA DAR PERMISO EN DOCKER A JENKINS

Para otorgar a Jenkins los permisos necesarios para ejecutar Docker, debes agregar el usuario de Jenkins al grupo de Docker. Aquí están los comandos que necesitas ejecutar en la terminal de tu servidor Jenkins:
```bash
sudo usermod -aG docker jenkins
```
Este comando agrega al usuario `jenkins` al grupo `Docker`, después de hacer esto, tendrás que reiniciar Jenkins para que los cambios tengan efecto:
```bash
sudo systemctl restart jenkins
```
Esto reiniciará el servicio de Jenkins. Ahora, Jenkins debería tener los permisos necesarios para ejecutar Docker.

#### COMANDO PARA CONSTRUIR EL CONTENEDOR
Para construir una imagen Docker desde Jenkins, debes utilizar el comando docker build. Aquí están los pasos que necesitas seguir en tu Jenkinsfile:
```javascript
steps {
    sh 'docker build -t myapp:latest ./angular'
}
```
Este fragmento de código realiza lo siguiente:
- `sh`: Ejecuta un comando de shell dentro de la etapa del pipeline de Jenkins.
- `docker build -t myapp:latest ./angular`: Este es el comando de Docker que se va a ejecutar. Construye una nueva imagen Docker a partir del `Dockerfile` ubicado en el directorio `./angular`. La imagen resultante se etiqueta como `myapp:latest`.

#### DOCKER CREADO CON JENKINS SE VA AL DOCKER HUB

Antes de empezar se necesita generar un `Tokens` en nuestro `Docker Hub`, en el cual vamos al apartado `Configuración de la Cuenta` > `Securidad` y vamos añadir a `Nuevo Token `.

![DOCKERHUB](/assets/img/DOCKER-HUB-01.png)

Ahora le tenemos que ponerle un `Nombre` y decir que `Permisos` va tener con este token, en mi caso se le pondra todos los permisos para que pueda subir la imagen.

![DOCKERHUB](/assets/img/DOCKER-HUB-02.png)

Ahora debemos añadir la `Credenciales` como anteriormente se ha añadidos , se hace el mismo procedimiento, se tiene poner el `Usuario` y en vez la contraseña debemos poner el `Token` generado para que tenga una conexión exitosa.

#### DOCKER HUB CON PIPELINE
Para interactuar con Docker Hub desde Jenkins, necesitas autenticarte con tus credenciales de `Docker Hub`. Aquí están los pasos que necesitas seguir en tu `Jenkinsfile`:
```javascript
withCredentials([usernamePassword(credentialsId: 'login-dockerhub', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
    sh '''
        echo $DOCKER_HUB_PASSWORD | docker login -u $DOCKER_HUB_USERNAME --password-stdin
        docker tag myapp:latest $DOCKER_HUB_USERNAME/myapp:latest
        docker push $DOCKER_HUB_USERNAME/myapp:latest
    '''
}
```
- `echo $DOCKER_HUB_PASSWORD | docker login -u $DOCKER_HUB_USERNAME --password-stdin`: Este comando inicia sesión en Docker Hub utilizando las credenciales proporcionadas.
- `docker tag myapp:latest $DOCKER_HUB_USERNAME/myapp:latest`: Este comando etiqueta la imagen Docker myapp:latest con el nombre de usuario de Docker Hub, lo que permite subir la imagen a ese repositorio en Docker Hub.
- `docker push $DOCKER_HUB_USERNAME/myapp:latest`: Este comando sube la imagen Docker al repositorio en Docker Hub.

Ahora vemos en nuestro `Docker Hub` que lo hemos subido correctamente.

![DOCKERHUB](/assets/img/DOCKER-HUB-03.png)

---

### COMANDO PARA DESPLEGAR EL CONTENIDO CREADO

Ahora vamos a desplegar el contenedor con la imagen creada, con lo cual se necesita un `docker-compose.yml` y el comando `Docker-compose` para que sea ejecutado sin problema.

Pero ante se necesita el fichero de `docker-compose.yml`:
```YAML
version: '3.7'
services:
  myapp:
    image: sunamylol/myapp:latest
    ports:
      - 80:80
```
> **NOTA**: Los parametros del `docker-compose`, se tiene poner segun como sea necesario para su funcionamiento.

Ahora vamos implementarlo en nuestro `Pipeline` en el cual se tiene poner lo siguiente:
```javascript
        stage('DEPLOY: Docker Compose') {
            steps {
                dir('angular') {
                    sh 'docker-compose up -d'
                }
                slackSend (color: '#00FF00', message: "Despliegue de Docker Compose completado", channel: "#jenkins-web")
            }
        }
}
```
- `dir('angular')`: Este comando cambia el directorio de trabajo al directorio 'angular'. Todos los comandos que se ejecutan dentro de este bloque se llevarán a cabo en el contexto de este directorio.

- `sh 'docker-compose up -d'`: Este comando ejecuta Docker Compose, que leerá un archivo llamado 'docker-compose.yml' en el directorio actual y procederá a desplegar los servicios que en él se definan. La opción -d indica que los servicios se deben ejecutar en segundo plano.

### TODO FINALIZADO SE PONE A PRUEBA

Ahora todo preparado ejecutado el `Pipeline` y le damos a `Contruir Ahora`, obviamente todo esto tendra un tiempo en el cual se va creado, pero una vez finalizado debera ser de la siguiente forma:

![PIPELINE](/assets/img/TEST-01.png)

En el `Slack` deberia estar las siguientes notificaciones si ha salido todo correctamente.

![PIPELINE](/assets/img/TEST-02.png)

Con todo esto el `Pipeline` estara terminado y todo lo demas terminado.
