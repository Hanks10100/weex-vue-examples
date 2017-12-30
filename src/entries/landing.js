import LandingPage from '../pages/Landing.vue'
import { createURL } from '../shared/utils'

Vue.filter('url', createURL)

LandingPage.el = '#root'
new Vue(LandingPage)
