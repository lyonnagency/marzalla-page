<template lang="pug">
    .container
        main
            header.main-header.serices
                .content-background.shades.anime.fadeIn
                .rhomb
                .column
                    hgroup
                        h2.playlist-script.color-blue.anime.fadeInBottom Servicios#[span.color-yellow .]
                        h1.color-blue.anime.fadeInUp Lo que necesitas
                i.scroll-marker.yellow
            section.services
                .column
                    .grid.service-1.reveal.fadeInUp
                        .grid-item.item-title
                            h3.title.color-blue Ambientación
                                sub & decoración
                        .grid-item.item-image
                        .grid-item.item-information
                            div
                                ul.list.marker-yellow
                                    li: span.color-white Floristería
                                    li: span.color-white Telares y candiles
                                    li: span.color-white Toldos y estructuras
                                    li: span.color-white Set fotográfico (Backdrop)
                                    li: span.color-white Globos
                                    li: span.color-white Iluminación
                                    li: span.color-white Música
                    .grid.service-2.reveal.fadeInUp
                        .grid-item.item-title
                            h3.title.color-deep-green Alimentos
                                sub Comida & Bebida
                        .grid-item.item-image
                        .grid-item.item-information
                            div
                                ul.list.marker-white
                                    li: span.color-white Buffete
                                    li
                                        span.color-white Menús 2 ó 3 tiempos
                                        ul.sublist
                                            li: span.color-white Tradicional / Regional
                                            li: span.color-white Gourmet / De autor
                                    li: span.color-white Bocadillos
                                    li: span.color-white Trasnochados
                                    li
                                        span.color-white Mesas
                                        ul.sublist
                                            li: span.color-white Postres
                                            li: span.color-white Saladas
                                            li: span.color-white Quesos
                                            li: span.color-white Ensaladas
                                    li: span.color-white Box lunch
                    .grid.service-3.reveal.fadeInUp
                        .grid-item.item-title
                            h3.title.color-blue Sedes
                                sub Salones & Jardines
                        .grid-item.item-image
                        .grid-item.item-information
                            div
                                ul.list.marker-yellow
                                    li: span.color-white Salones
                                    li: span.color-white Jardines
                                    li: span.color-white Quintas
                                    li: span.color-white Haciendas
                                    li: span.color-white Hoteles
                                    li: span.color-white Etc.
                    .grid.service-4.reveal.fadeInUp
                        .grid-item.item-title
                            h3.title.color-blue Rentas
                                sub Artículos en renta
                        .grid-item.item-image
                        .grid-item.item-information
                            div
                                ul.list.marker-yellow
                                    li: span.color-white Cristalería
                                    li: span.color-white Mantelería
                                    li: span.color-white Mesas
                                    li: span.color-white Sillas
                                    li: span.color-white Loza
                                    li: span.color-white Cubiertos
        main_footer(area_class="corporate")
</template>

<script>
import anime from "animejs"
import ScrollReveal from "../classes/scroll_reveal.js"

import Footer from "./Footer"

export default {
  name: "services",
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
          targets: this.$el.querySelectorAll(".anime.fadeInUp"),
          opacity: [0, 1],
          translateY: [10, 0]
        })
    },
    scrollReveal() {
      ScrollReveal.reveal(
        this.$el.querySelectorAll(".reveal.fadeInUp"),
        { distance: "20px" }
      )
    }
  },
  mounted() {
    this.initAnimations()
    this.scrollReveal()
  },
  metaInfo: {
    title:'Servicios',
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Necesitas saber más sobre nuestros servicios.'},
      {vmid: 'kw', name:'keywords', content: 'servicios,servicios para eventos,decoración para eventos,flores para eventos,floristería,globos,globos para eventos,iluminación para fiestas,música para fiestas,comida y bebida para eventos,comida gourmet para fiestas,salones de fiestas,salones para eventos,jardines para fiestas,renta de cristalería,renta de manteles,renta de mantelería,renta de sillas y mesas,marzalla,marzalla eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizadora de eventos,agencia de eventos,Morelia,agencia de eventos en Morelia,organizadora de eventos en Morelia,organizadora de eventos sociales en Morelia,organizadora de eventos corporativos en Morelia,marzalla Morelia'},
      {vmid: 'inm', itemprop:'name', content: 'Servicios | Marzalla'},
      {vmid: 'idtn', itemprop:'description', content: 'Conoce más sobre la amplia gama de servicios que tenemos para ti.'},
      {property:'og:url', content: 'http://marzallaeventos.com/servicios'},
      {vmid: 'ptt', property:'og:title', content: 'Servicios | Marzalla'},
      {vmid: 'pdtn', property:'og:description', content: 'Conoce más sobre la amplia gama de servicios que tenemos para ti.'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Conoce más sobre la amplia gama de servicios que tenemos para ti.'},
      {vmid: 'twtt', name:'twitter:title', content: 'Servicios | Marzalla'},
    ]
  }
}
</script>
