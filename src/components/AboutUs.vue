<template lang="pug">
    .container
        main
          section.about
            .column
              .imagotipo
                img(src="../assets/img/logos/isotipo_ornament_social.svg" alt="Marzala Eventos")
              .description
                h2.off-screen Sobre Marzalla Eventos
                p.color-blue.margin-bottom Marzalla Eventos cuenta con el apoyo de personal profesional altamente calificado. Nuestros Wedding & Event Planner cuentan con un certificación internacional, avalada por la #[a(href="http://www.unioneuroamericana.org/" alt="Unión Euroamericana de Event Planners" target="_blank").button.secondary.color-blue: span Unión Euroamericana de Event Planners].
                h3.title.color-yellow.margin-bottom Certificados
                ul.cetificates
                  li
                    span.off-screen Certificate Wedding & Event Planner
                    img(src="/static/img/certificates/certify_one.svg" alt="Certificate Wedding & Event Planner")
                  li
                    span.off-screen Union Euroamericana Event Planner
                    img(src="/static/img/certificates/certify_two.svg" alt="Union Euroamericana Event Planner")
        main_footer(area_class="social")
</template>

<script>
import Footer from "./Footer"

export default {
  name: "reserve",
  components: {
    main_footer: Footer
  },
  metaInfo: {
    title:'Nosotros',
    meta:[
      {name:'robots', content:'index, follow'},
      {vmid: 'dtn', name:'description', content: 'Te bridaremos todo el apoyo que necesites y juntos aremos que tu evento sea inolvidable.'},
      {vmid: 'kw', name:'keywords', content: 'acerca,acerca de nosotros,nosotros,sobre nosotros,marzalla,marzalla eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizadora de eventos,agencia de eventos,Morelia,agencia de eventos en Morelia,organizadora de eventos en Morelia,organizadora de eventos sociales en Morelia,organizadora de eventos corporativos en Morelia,marzalla Morelia'},
      {vmid: 'inm', itemprop:'name', content: 'Nosotros | Marzalla'},
      {vmid: 'idtn', itemprop:'description', content: 'Te bridaremos todo el apoyo que necesites y juntos aremos que tu evento sea inolvidable.'},
      {property:'og:url', content: 'http://marzallaeventos.com/nosotros'},
      {vmid: 'ptt', property:'og:title', content: 'Nosotros | Marzalla'},
      {vmid: 'pdtn', property:'og:description', content: 'Te bridaremos todo el apoyo que necesites y juntos aremos que tu evento sea inolvidable.'},
      {vmid: 'tdtn', name:'twitter:description', content: 'Te bridaremos todo el apoyo que necesites y juntos aremos que tu evento sea inolvidable.'},
      {vmid: 'twtt', name:'twitter:title', content: 'Nosotros | Marzalla'},
    ]
  }
}
</script>
