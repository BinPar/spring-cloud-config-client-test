# Spring Cloud Config Client Testing Repo

Cliente para testear Spring Cloud Config desde node empleando la librearía [cloud-config-client](https://www.npmjs.com/package/cloud-config-client).

Este proyecto surge como parte de la investigación realizada en el [issue #68 de DevOps](https://github.com/BinPar/DevOps/issues/68).

## Prerequisitos

- **Node 10** o superior
- Realizar **npm install**
- **Docker** (para correr el Spring Config Server)

## Uso de los tests

### Arranque del Spring Config Server

Para iniciar el Spring Config Server ejecutaremos:

```terminal
npm run startConfigServer
```

Esto iniciará nuestro servidor de configuración de string en [localhost:8888](http://localhost:8888).

> **Nota:** En caso de realizar una petición http al raíz del config server nos retornará una *Whitelabel Error Page* genérica.
