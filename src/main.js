import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"

/*Importamos el core de fa*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/*Importamos los iconos que estaremos usando*/
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library NUESTRA LIBRERIA DE ICONOS*/
library.add(faHouse, faFacebook, faTwitter, faGoogleDrive, faBlogger, faUser, faFish, faLessThanEqual)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
