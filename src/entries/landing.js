import LandingPage from '../pages/Landing.vue'
import { createLink } from '../shared/utils'

Vue.filter('link', createLink)

LandingPage.el = '#root'
new Vue(LandingPage)
