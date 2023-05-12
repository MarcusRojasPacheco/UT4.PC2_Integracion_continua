![LOGO](https://www.jenkins.io/sites/default/files/jenkins_logo.png?w=144)

![Última confirmación](https://img.shields.io/github/last-commit/MarcusRojasPacheco/UT4.PC2_Integracion_continua/main?style=plastic)
![Tamaño del repositorio](https://img.shields.io/github/repo-size/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)
![Recuento de archivos](https://img.shields.io/github/directory-file-count/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)
![Versión del manifiesto](https://img.shields.io/github/manifest-json/v/MarcusRojasPacheco/UT4.PC2_Integracion_continua?style=plastic)
![License](https://img.shields.io/github/license/MarcusRojasPacheco/UT4.PC2_Integracion_continua)

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

### CONFIGURAR SONARQUBE
#### QUE SE VA NECESITAR
 - [![SonarQubePlugins](https://img.shields.io/badge/SonarQube_Plugins-2.15-4E9BCD?logo=sonarqube&logoColor=fff&style=plastic)](https://plugins.jenkins.io/sonar/)
 - [![Docker Pipeline](https://img.shields.io/badge/DockerHub-sonarqube:9.7.1_community-blue?style=plastic&logo=docker)]([https://plugins.jenkins.io/docker-workflow/](https://hub.docker.com/layers/library/sonarqube/9.7.1-community/images/sha256-d8247aa44526ccf185bf07fd0331a663f16d96f9d12f3e483982c2808083d2f0?context=explore))
#### DESCARGAMOS EL DOCKER DE SONARQUBE
Ahora vamos a descargar el `docker` en el cual se va ejecutar con el siguiente comando:
```bash
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:9.7.1-community
```
Una vez descargado entramos con la ruta que tendremos, en mi caso `localhost:9000` y la primera vez que entre nos obligara cambiar la contraseña de la que tiene por defecto.

#### NUEVO PROYECTO EN SONARQUBE
Ahora vamos a crear un `Nuevo Proyecto`, en el cual vamos a poner de nombre `Angular-SonarQube`
