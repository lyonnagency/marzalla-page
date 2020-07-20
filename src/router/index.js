import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Social from '@/components/social/Home'
import SocialEvent from '@/components/social/Event'
import Corporate from '@/components/corporate/Home'
import CorporateEvent from '@/components/corporate/Event'
import Services from '@/components/Services'
import Reserve from '@/components/Reserve'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

const asyncScrolling = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ x: 0, y: 0 })
  }, 500)
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sociales',
      name: 'social',
      component: Social,
      children: [
        {
          name: 'modal_social_event',
          path: 'evento/:code_name',
          component: SocialEvent,
          props: true
        }
      ]
    },
    {
      path: '/corporativos',
      name: 'corporate',
      component: Corporate,
      children: [
        {
          name: 'modal_corporate_event',
          path: 'evento/:code_name',
          component: CorporateEvent,
          props: true
        }
      ]
    },
    {
      path: '/servicios',
      name: 'services',
      component: Services
    },
    {
      path: '/reservar',
      name: 'reserve',
      component: Reserve
    },
    {
      path: '/nosotros',
      name: 'about_us',
      component: AboutUs
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.name.indexOf("modal_") == -1) {
      if (from.name.indexOf("modal_") != -1) {
        document.body.classList.remove("no-scroll")
        if (to.name != "social" && to.name != "corporate") {
          return asyncScrolling
        }
      } else {
        return asyncScrolling
      }
    }
  }
})
