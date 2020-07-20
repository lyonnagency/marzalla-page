<template lang="pug">
    .container
        main
            area_header(area_class="corporate" title="Corporativos" description="Eventos Corporativos")
            section.objective.corporate.full-screen
                .column
                    .reveal.fadeInRight
                        .rhomb.pattern
                            .container.config-pattern.deep
                        .rhomb.background
                            .container
                    .reveal.fadeInLeft
                        h2.title.playlist-script.color-blue.margin-bottom tu ejecutiva#[span.color-yellow .]
                            sub Agencia de Eventos
                        p.color-blue.margin-bottom Queremos que tu empresa cuente con todas las herramientas necesarias para llevar a cabo eventos de calidad, que cumplan con el objetivo meta. Trabajamos arduamente para ofrecerte una gran variedad de servicios. Conocemos la importancia de la formalidad, la puntualidad y la excelencia.
                        router-link(to="/servicios" alt="Todos nuestros servicios" data-text="Descubre más").button.principal.color-yellow.reveal.fadeInUp
                            span Descubre más
            memories
            events(ref="events")
            section.call-to-action.full-screen
                .column.reveal.fadeInUp
                    h2.title.playlist-script.color-blue.margin-bottom Encontramos la esencia#[span.color-yellow .]
                        sub Cada detalle cuenta
                    p.color-blue.margin-bottom Siempre a tu lado paso a paso planificamos cada evento con una encantadora mezcla de #[b Pasión, Elegancia y Creatividad], donde cada detalle cuenta.
                    router-link(to="/reservar" alt="Reservaciones" data-text="Reservar").button.principal.color-yellow
                        span Reservar
                i.ornament.color-yellow
        main_footer(area_class="corporate")
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
  name: "corporate",
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
      if (to.name == "modal_corporate_event") {
        this.$refs.events.sliderPause()
      } else if (from.name == "modal_corporate_event") {
        this.$refs.events.sliderPlay()
      }
    }
  },
  metaInfo: {
    title:'Eventos Corporativos',
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Trabajamos arduamente para ofrecerte todas las herramientas necesarias que permitan llevar a cabo eventos de calidad, que cumplan con el objetivo de tu empresa.'},
      {vmid: 'kw', name:'keywords', content: 'eventos corporativos, corporativo, cursos y talleres, conferencias, exposiciones, convenciones, congresos, muestras, feria, ruedas de prensa, presentación de productos, brindis, coffee break, lanzamiento de producto, rueda de prensa, evento de fin de año, posadas para empresas, cenas navideñas para empresas, marzalla, marzalla eventos, organizadora de eventos corporativos, organizadora de eventos'},
      {vmid: 'inm', itemprop:'name', content: 'Eventos Corporativos | Marzalla'},
      {vmid: 'idtn', itemprop:'description', content: 'Trabajamos arduamente para ofrecerte todas las herramientas necesarias que permitan llevar a cabo eventos de calidad, que cumplan con el objetivo de tu empresa.'},
      {vmid: 'purl', property:'og:url', content: 'http://marzallaeventos.com/corporativos'},
      {vmid: 'ptt', property:'og:title', content: 'Eventos Corporativos | Marzalla'},
      {vmid: 'pdtn', property:'og:description', content: 'Trabajamos arduamente para ofrecerte todas las herramientas necesarias que permitan llevar a cabo eventos de calidad, que cumplan con el objetivo de tu empresa.'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Trabajamos arduamente para ofrecerte todas las herramientas necesarias que permitan llevar a cabo eventos de calidad, que cumplan con el objetivo de tu empresa.'},
      {vmid: 'twtt', name:'twitter:title', content: 'Eventos Corporativos | Marzalla'}
    ]
  }
}
</script>
