<template lang="pug">
    .container
        main
            area_header(area_class="social" title="Sociales" description="Eventos Sociales")
            section.objective.social.full-screen
                .column
                    .reveal.fadeInRight
                        .rhomb.pattern
                            .container.config-pattern.deep
                        .rhomb.background
                            .container
                    .reveal.fadeInLeft
                        h2.title.playlist-script.color-green.margin-bottom tu distintiva#[span.color-yellow .]
                            sub Agencia de Eventos
                        p.color-deep-green.margin-bottom Nos distinguimos por ser profesionales certificados, por estar a la vanguardia y por ofrecer eventos de máxima calidad en cada detalle.
                        router-link(to="/servicios" alt="Todos nuestros servicios" data-text="Descubre más").button.principal.color-yellow.reveal.fadeInUp
                            span Descubre más
            memories
            events(ref="events")
            section.call-to-action.full-screen
                .column.reveal.fadeInUp
                    h2.title.playlist-script.color-green.margin-bottom Encontramos la esencia#[span.color-yellow .]
                        sub Cada detalle cuenta
                    p.color-deep-green.margin-bottom Siempre a tu lado, paso a paso, planificamos con una encantadora mezcla de #[b Pasión, Creatividad y Elegancia], porque cada detalle cuenta.
                    router-link(to="/reservar" alt="Reservaciones" data-text="Reservar").button.principal.color-yellow
                        span Reservar
                i.floral-ornament.color-yellow
        main_footer(area_class="social")
        transition(:name="transitionName")
          router-view
</template>

<script>
import ScrollReveal from "../../classes/scroll_reveal.js"

import AreaHeader from "../AreaHeader"
import Footer from "../Footer"
import Memories from "./Memories"
import Events from "./Events"

export default {
  name: "social_home",
  components: {
    area_header: AreaHeader,
    main_footer: Footer,
    memories: Memories,
    events: Events
  },
  data() {
    return {
      transitionName: ""
    }
  },
  methods: {
    scrollReveal() {
      ScrollReveal.reveal(
        this.$el.querySelectorAll(".reveal.fadeIn"),
        { distance: "0" },
        200
      )
      ScrollReveal.reveal(this.$el.querySelectorAll(".reveal.fadeInUp"), {
        distance: "20px"
      })
      ScrollReveal.reveal(this.$el.querySelectorAll(".reveal.fadeInRight"), {
        origin: "left",
        distance: "20px"
      })
      ScrollReveal.reveal(this.$el.querySelectorAll(".reveal.fadeInLeft"), {
        origin: "right",
        distance: "20px"
      })
    }
  },
  mounted() {
    this.scrollReveal()
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'modal-transition-backward' : 'modal-transition-forward'
      if (to.name == "modal_social_event") {
        this.$refs.events.sliderPause()
      } else if (from.name == "modal_social_event") {
        this.$refs.events.sliderPlay()
      }
    }
  },
  metaInfo: {
    title:'Eventos Sociales',
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Nos distinguimos por ser profesionales certificados, por estar a la vanguardia y por ofrecer eventos de máxima calidad en cada detalle.'},
      {vmid: 'kw', name:'keywords', content: 'eventos sociales, sociales, baby shower, bautizo, primer cumpleaños, cumpleaños infantiles, confirmación, primera comunión, xv años, fiestas temáticas, comida familiar, bienvenida a la soltería, fiesta de graduación, cena de compromiso, pedida de mano, noviazgo, despedida de soltero, despedida de soltera, boda, boda civil, boda religiosa, aniversario de bodas, marzalla, marzalla eventos, organizadora de eventos sociales, organizadora de eventos'},
      {vmid: 'inm', itemprop:'name', content: 'Eventos Sociales | Marzalla'},
      {vmid: 'idtn', itemprop:'description', content: 'Nos distinguimos por ser profesionales certificados, por estar a la vanguardia y por ofrecer eventos de máxima calidad en cada detalle.'},
      {vmid: 'purl', property:'og:url', content: 'http://marzallaeventos.com/sociales'},
      {vmid: 'ptt', property:'og:title', content: 'Eventos Sociales | Marzalla'},
      {vmid: 'pdtn', property:'og:description', content: 'Nos distinguimos por ser profesionales certificados, por estar a la vanguardia y por ofrecer eventos de máxima calidad en cada detalle.'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Nos distinguimos por ser profesionales certificados, por estar a la vanguardia y por ofrecer eventos de máxima calidad en cada detalle.'},
      {vmid: 'twtt', name:'twitter:title', content: 'Eventos Sociales | Marzalla'}
    ]
  }
}
</script>
