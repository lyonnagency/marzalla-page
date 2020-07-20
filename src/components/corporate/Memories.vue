<template lang="pug">
  section.memories
    .column
        h2.title.playlist-script.color-blue.margin-bottom.reveal.fadeInUp tus recuerdos#[span.color-yellow .]
            sub Viven con nostros
        div
            .memory.reveal.fadeIn
                .photo
                    i.testimony-marker.icon-quote
                .info
                    p.color-blue.margin-bottom "Una ocasión especial digna de la magia de Marzalla Eventos, como no confiar en un equipo con las herramientas necesarias para cumplir con las más altas expectativas."
                    ul
                        li
                            h3.color-blue Cristina Suazo #[span.color-yellow Cena Navideña]
                        li
                            router-link(to="/reservar" alt="Ver evento" data-text="Ver evento").button.secondary.color-blue
                                span Ver evento
            .memory.reveal.fadeIn
                .photo
                    i.testimony-marker.icon-quote
                .info
                    p.color-blue.margin-bottom "Necesitábamos que nuestra capacitación se volviera más amena, pero Marzalla Eventos lo transformo en toda una experiencia con cada detalle."
                    ul
                        li
                            h3.color-blue Joaquín Pérez #[span.color-yellow Coffe break]
                        li
                            router-link(to="/reservar" alt="Ver evento" data-text="Ver evento").button.secondary.color-blue
                                span Ver evento
    i.ornament.color-yellow
</template>

<script>
export default {
  name: "corporative_memories"
}
</script>