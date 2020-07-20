<template lang="pug">
    .container
        main
            header.main-header.reserve
                .content-background.shades.anime.fadeIn
                .rhomb
                .column
                    hgroup
                        h2.playlist-script.color-blue.anime.fadeInBottom Reserva#[span.color-yellow .]
                        h1.color-blue.anime.fadeInUp.one Con nosotros
                        .telephon.anime.fadeInUp.two
                            span.color-blue Llámanos al
                            a(alt="Teléfono" href="tel:+524434254078" rel="nofollow").button.secondary.color-yellow
                                span Tel. (443) 425 4078
                i.scroll-marker.yellow
            section.contact
                .column
                    .reveal.fadeIn
                        address
                            div
                                h3.title.color-blue.margin-bottom Evíanos un mensaje
                                    sub Despejamos tus dudas
                                a(alt="Correo electrónico" href="mailto:contacto@marzallaeventos.com" rel="nofollow").button.secondary.color-blue
                                    span contacto@marzallaeventos.com
                            div
                                h3.title.color-blue.margin-bottom Síguenos
                                    sub Mantente en contacto
                                ul.social-network
                                    li
                                        a(alt="Instagram" href="https://www.instagram.com/marzalla.eventos/" target="_blank").button.secondary.color-blue
                                            span.icon-instagram Instagram
                                    li
                                        a(alt="Facebook" href="https://www.facebook.com/marzalla.eventos/" target="_blank").button.secondary.color-blue
                                            span.icon-facebook Facebook
                    .reveal.fadeIn
                        address
                            div
                                h3.title.color-blue.margin-bottom Visítanos
                                    sub Será un gusto
                                p.color-blue Boulevard García de León No. 777, Chapultepec Sur, Morelia, Michoacán. #[a(alt="Ubicación" href="https://www.google.com.mx/maps/place/Marzalla+Eventos/@19.690645,-101.1750361,17.5z/data=!4m13!1m7!3m6!1s0x842d0de33337f33b:0x1b40fa4b95f1d213!2sBlvd.+Garc%C3%ADa+de+Le%C3%B3n+777,+Chapultepec+Sur,+58260+Morelia,+Mich.!3b1!8m2!3d19.6904871!4d-101.1723371!3m4!1s0x842d0dfcc61185df:0x9ee5f8ff1ec14692!8m2!3d19.690475!4d-101.1722887" data-text="Ver en mapa" rel="nofollow" target="_blank").button.secondary.color-blue #[span Ver en mapa.]]
                            div
                                h3.title.color-blue.margin-bottom Horarios
                                    sub De Lunes a Sábado
                                p.color-blue De Lunes a Viernes de 10 de la mañana a 6 de la tarde y Sábado de 10 de la mañana a 2 de la tarde.
                i.ornament.color-yellow
        main_footer(area_class="corporate")
</template>

<script>
import anime from "animejs"
import ScrollReveal from "../classes/scroll_reveal.js"

import Footer from "./Footer"

export default {
  name: "reserve",
  components: {
    main_footer: Footer
  },
  methods: {
    initAnimations() {
      let timeline = anime.timeline({
        easing: "linear",
        delay: 200,
        duration: 600
      })
      timeline
        .add({
          targets: this.$el.querySelector(".anime.fadeIn"),
          opacity: [0, 1]
        })
        .add({
          targets: this.$el.querySelector(".anime.fadeInBottom"),
          opacity: [0, 1],
          translateY: [-10, 0]
        })
        .add({
          targets: this.$el.querySelectorAll(".anime.fadeInUp.one"),
          opacity: [0, 1],
          translateY: [10, 0]
        })
        .add({
          targets: this.$el.querySelectorAll(".anime.fadeInUp.two"),
          opacity: [0, 1],
          translateY: [10, 0]
        })
    },
    scrollReveal() {
      ScrollReveal.reveal(
        this.$el.querySelectorAll(".reveal.fadeIn"),
        { distance: "0" },
        200
      )
    }
  },
  mounted() {
    this.initAnimations()
    this.scrollReveal()
  },
  metaInfo: {
    title:'Reservar',
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Reserva con nosotros, tus invitados y tú vivirán momentos inolvidables.'},
      {vmid: 'kw', name:'keywords', content: 'reservar,¿Cómo reservar en marzalla?,reservar en marzalla,teléfono de marzalla,visitanos,Morelia,dirección,domicilio,contacto,contáctanos,horario,teléfono,correo,marzalla,marzalla eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizadora de eventos,agencia de eventos,Morelia,agencia de eventos en Morelia,organizadora de eventos en Morelia,organizadora de eventos sociales en Morelia,organizadora de eventos corporativos en Morelia,marzalla Morelia'},
      {vmid: 'inm', itemprop:'name', content: 'Reservar | Marzalla'},
      {vmid: 'idtn', itemprop:'description', content: 'Reserva con nosotros, tus invitados y tú vivirán momentos inolvidables.'},
      {property:'og:url', content: 'http://marzallaeventos.com/reservar'},
      {vmid: 'ptt', property:'og:title', content: 'Reservar | Marzalla'},
      {vmid: 'pdtn', property:'og:description', content: 'Reserva con nosotros, tus invitados y tú vivirán momentos inolvidables.'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Reserva con nosotros, tus invitados y tú vivirán momentos inolvidables.'},
      {vmid: 'twtt', name:'twitter:title', content: 'Reservar | Marzalla'},
    ]
  }
}
</script>
