# Spring Cloud Config Client Testing Repo

Cliente para testear Spring Cloud Config desde node empleando la librearía [cloud-config-client](https://www.npmjs.com/package/cloud-config-client).

Este proyecto surge como parte de la investigación realizada en el [issue #68 de DevOps](https://github.com/BinPar/DevOps/issues/68).

## Prerequisitos

- **Node 10** o superior
- Realizar **npm install**
- **Docker** (para correr el Spring Config Server)

## Uso de los tests

Los test testearán la configuración contra un config server montado de forma local por lo que es necesario arrancarlo y luego en otra pestaña ejecutar los test.

### Arranque del Spring Config Server

Para iniciar el Spring Config Server ejecutaremos:

```terminal
npm run startConfigServer
```

Esto iniciará nuestro servidor de configuración de string en [localhost:8888](http://localhost:8888).

> **Nota:** En caso de realizar una petición http al raíz del config server nos retornará una *Whitelabel Error Page* genérica.

### Correr los tests

Para correr los tests ejecutaremos:

```terminal
npm run test
```

O en caso de querer desarrollar nuevos:

```terminal
npm run test-dev
```

## Conclusiones de las pruebas realizadas

> **TLTR**: Más complejo de lo que parecía a simple vista y menos adaptable a FullStack JS de lo esperado, es una solución perfectamente que encaja para Java, pero no tanto para nosotros.

Cosas aprendidas en el proceso:

- Es una buena opción tener de un repositorio centrado de ajustes
- La configuración mediante un solo ajuste (endpoint de ajustes) es recomendable

### Ventajas

- Solución extendida y verificado
- Uso de SW maduro
- Contenedor mantenido

### Problemas

- Configuración más difícil de lo que debería
- Acceso a repo privado (requisito lógico) mediante uso de [private key](https://github.com/spring-cloud/spring-cloud-config/blob/master/docs/src/main/asciidoc/spring-cloud-config.adoc#git-ssh-configuration-using-properties) con **user impersonation**
- Si una aplicación tiene acceso, puede ver todas las aplicaciones / instancias (no hay principio de aislamiento)
- Ausencia de un modelo opinionado para entornos
- Sincronización mediante un **pool** con tiempo configurable de de **git pools** y no mediante desencadenadores (Webhooks)
- La librería cliente de node es muy limitada:
  - No permite obtener cambios
  - Obtiene propiedades discretas y no objetos ('config.database.port' en vez de 'config.database' y luego poder emplear database.port)
  - No compatible con YAML arrays
- Actualización por pool
- Carece de un modelo de isomorfismo para entornos de desarrollo (solo en el caso de Node) que requeriría un parseo innecesario
- Ausencia de modelo tipado
- No tiene un diseño de default props
- No tiene un modelo de herencia (genérico / instancia / entorno)
- No tiene un modelo de public / private props
