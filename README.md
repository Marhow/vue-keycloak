# vue-keycloak

## Start the docker container
```
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=test -e KEYCLOAK_ADMIN_PASSWORD=test quay.io/keycloak/keycloak:21.0.2 start-dev
```

## Project setup
```
npm install
```

## Run the playwright script
```
npm run setup
Note: In the package.json file. The setup script is appended with --debug to run the playwright tests in debug mode. remove this if you like.
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
