export const keycloakOptions = {
    // URL must specically point to the /auth endpoint or the URL will not be found.
    url: 'http://localhost:8080/auth',
    realm: 'vue-keycloak',
    clientId: 'vue-app'
}