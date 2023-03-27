import Keycloak from 'keycloak-js'
import { keycloakOptions } from '../keycloak'
import { createApp } from 'vue'
import App from './App.vue'

let keycloak = new Keycloak(keycloakOptions)

keycloak.init({ onLoad: 'login-required' }).then((auth) => {
  if (!auth) {
    window.location.reload();
  }

  const app = createApp(App, { props: { keycloak: keycloak } })
  app.mount('#app')

  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        console.info('Token refreshed' + refreshed)
      } else {
        console.warn('Token not refreshed, valid for ' +
          Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds')
      }
    }).catch(() => {
      console.error('Failed to refresh token')
    })
  }, 6000)
}).catch(() => {
  console.error('Authenticated Failed')
})

