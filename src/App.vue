<template lang="pug">
  #app
    main_nav
    mobile_menu(ref="mobileMenu")
    transition(:name="transitionName")
      router-view
</template>

<script>
import MainNav from './components/MainNav'
import MobileMenu from './components/MobileMenu'

export default {
  name: 'app',
  methods: {
    isMobile() {
      const userAgent = navigator.userAgent
      return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i)
        || userAgent.match(/Android/i)
        || userAgent.match(/BlackBerry/i)
        || userAgent.match(/iPhone|iPad|iPod/i)
        || userAgent.match(/Opera Mini/i)
    }
  },
  beforeMount() {
    if (!this.isMobile()) {
      document.body.classList.add("no-touch")
    }
  },
  components: {
    'main_nav': MainNav,
    'mobile_menu': MobileMenu
  },
  data() {
    return {
      transitionName: ""
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? "page-transition-backward" : "page-transition-forward"
    }
  },
  metaInfo: {
    title: 'Agencia de Eventos',
    titleTemplate: '%s | Marzalla',
    meta:[
      {vmid: 'dtn', name:'description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'kw', name:'keywords', content: 'marzalla,marzalla eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizadora de eventos,agencia de eventos,Morelia,agencia de eventos en Morelia,organizadora de eventos en Morelia,organizadora de eventos sociales en Morelia,organizadora de eventos corporativos en Morelia,marzalla Morelia'},
      {vmid: 'inm', itemprop:'name', content: 'Agencia de Eventos | Marzalla'},
      {vmid: 'idtn', itemprop:'description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'ptt', property:'og:title', content: 'Agencia de Eventos | Marzalla'},
      {vmid: 'pdtn', property:'og:description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'twtt', name:'twitter:title', content: 'Agencia de Eventos | Marzalla'},
      {itemprop:'image', content:'http://marzallaeventos.com/static/img/social.png'},
      {property:'fb:app_id', content:''},
      {property:'og:site_name', content:'Marzalla'},
      {property:'og:locale', content:'es_ES'},
      {property:'og:type', content:'website'},
      {property:'og:image', content:'http://marzallaeventos.com/static/img/social.png'},
      {name:'twitter:card', content:'summary_large_image'},
      {name:'twitter:site', content:'@Marzalla'},
      {name:'twitter:image', content:'http://marzallaeventos.com/static/img/social.png'}
    ]
  }
}
</script>

<style lang="stylus" src="./stylus/main.styl"/>
<style lang="stylus" src="./stylus/responsive.styl"/>
