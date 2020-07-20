<template lang="pug">
  .container
    main
      home_header
      section.areas.full-screen
        .column
          .wedding
            div
              .rhombus.reveal.fadeInRight
                .rhomb.background
                  .container
              .information.reveal.fadeIn
                h1.title.playlist-script.color-green #[span.color-deep-green Eventos] Sociales
                p.color-deep-green Comparte con tu familia y amigos, los mejores eventos de tu vida.
                router-link(to="/sociales" alt="Eventos Sociales" data-text="Conoce más").button.principal.color-deep-green
                  span Conoce más
          .corporate
            div
              .rhombus.reveal.fadeInLeft
                .rhomb.background
                  .container
              .information.reveal.fadeIn
                h1.playlist-script.color-yellow #[span.color-blue Eventos] Corporativos
                p.color-blue Fortalece las relaciones laborales y mejora los resultados de tu empresa.
                router-link(to="/corporativos" alt="Eventos Corporativos" data-text="Conoce más").button.principal.color-blue
                  span Conoce más
      section.objective.home.full-screen
        .column
          .reveal.fadeInRight
            .rhomb.pattern
              .container.config-pattern.deep
            .rhomb.background
              .container
          .reveal.fadeInLeft
            h2.title.playlist-script.color-blue.margin-bottom Nuestro objetivo#[span.color-yellow .]
              sub Crear experiencias
            p.color-blue.margin-bottom Brindarte la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.
            router-link(to="/reservar" alt="Reservaciones" data-text="Reservar").button.principal.color-blue
              span Reservar
      section.call-to-services.full-screen
        .column
          .grid
            .grid-item.background.reveal.zoomIn
            .grid-item.background.reveal.zoomIn
            .grid-item.background.reveal.zoomIn
            .grid-item.config-pattern.light
            .grid-item.background.reveal.zoomIn
            .grid-item.background.reveal.zoomIn
            .grid-item.background.reveal.zoomIn
            .grid-item.background.reveal.zoomIn
            .grid-item.background.reveal.zoomIn
            .grid-item.background.reveal.zoomIn
            .grid-item.config-pattern.deep
            .grid-item.background.reveal.zoomIn
            .grid-item.config-pattern.deep
            .grid-item.config-pattern.light
            .grid-item.background.reveal.zoomIn
          .reveal.fadeIn
            h2.title.playlist-script.color-blue Qué necesitas?#[span.color-yellow .]
              sub Nuestros servicios
            p.color-blue Te sorprenderá la #[b versatilidad con la que trabajamos], podemos ofrecerte una amplia gama de temáticas, o bien enfocarnos en personalizar y hacer único tu evento. En Marzalla Eventos, contamos con alianzas estratégicas con diferentes proveedores de la ciudad y sus alrededores, lo que nos permite brindarte un sin fin de servicios. Desde alimentos hasta la decoración, #[b todo lo que imagines].
            router-link(to="/servicios" alt="Todos nuestros servicios" data-text="Descubre más").button.principal.color-blue
              span Descubre más
    main_footer(area_class="corporate")
</template>

<script>
import ScrollReveal from "../classes/scroll_reveal.js"

import HomeHeader from "./HomeHeader"
import Footer from "./Footer"

export default {
  name: "home",
  components: {
    home_header: HomeHeader,
    main_footer: Footer
  },
  methods: {
    scrollReveal() {
      ScrollReveal.reveal(this.$el.querySelectorAll(".reveal.fadeIn"), {
        distance: "0"
      })
      ScrollReveal.reveal(this.$el.querySelectorAll(".reveal.fadeInRight"), {
        origin: "left",
        distance: "20px"
      })
      ScrollReveal.reveal(this.$el.querySelectorAll(".reveal.fadeInLeft"), {
        origin: "right",
        distance: "20px"
      })
      ScrollReveal.reveal(
        this.$el.querySelectorAll(".reveal.zoomIn"),
        {
          viewFactor: 0.1,
          duration: 1000,
          distance: "0",
          scale: 0.9
        },
        100
      )
    }
  },
  mounted() {
    this.scrollReveal()
  },
  metaInfo: {
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'kw', name:'keywords', content: 'marzalla,marzalla eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizadora de eventos,agencia de eventos,Morelia,agencia de eventos en Morelia,organizadora de eventos en Morelia,organizadora de eventos sociales en Morelia,organizadora de eventos corporativos en Morelia,marzalla Morelia'},
      {vmid: 'inm', itemprop:'name', content: 'Agencia de Eventos | Marzalla'},
      {vmid: 'idtn', itemprop:'description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'purl', property:'og:url', content: 'http://marzallaeventos.com/'},
      {vmid: 'ptt', property:'og:title', content: 'Agencia de Eventos | Marzalla'},
      {vmid: 'pdtn', property:'og:description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Te brindaremos la seguridad de nuestro profesionalismo, garantizando que tus invitados y tú vivan Momentos Inolvidables, llenos de magia e innovación.'},
      {vmid: 'twtt', name:'twitter:title', content: 'Agencia de Eventos | Marzalla'}
    ]
  }
}
</script>
