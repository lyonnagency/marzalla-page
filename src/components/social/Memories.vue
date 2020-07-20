<template lang="pug">
  section.memories
    .column
        h2.title.playlist-script.color-green.margin-bottom.reveal.fadeInUp tus recuerdos#[span.color-yellow .]
            sub Viven con nostros
        div
            .memory.reveal.fadeIn
                .photo
                    i.testimony-marker.icon-quote
                .info
                    p.color-deep-green.margin-bottom "Siempre soñé con una boda de cuentos de hadas y el maravilloso equipo de “Marzalla Eventos” logro cumplir mis expectativas de un día inolvidable."
                    ul
                        li
                            h3.color-deep-green Elsiee Martinez #[span.color-green Boda]
                        li
                            router-link(to="/reservar" alt="Ver su historia" data-text="Ver su historia").button.secondary.color-yellow
                                span Ver su historia
            .memory.reveal.fadeIn
                .photo
                    i.testimony-marker.icon-quote
                .info
                    p.color-deep-green.margin-bottom "La fiesta de mis sueños, con una comida muy rica, todo bien organizado, cosas con buena calidad y todo su personal muy capacitado para los eventos."
                    ul
                        li
                            h3.color-deep-green Jerusalem González #[span.color-green XV Años]
                        li
                            router-link(to="/reservar" alt="Ver su historia" data-text="Ver su historia").button.secondary.color-yellow
                                span Ver su historia

    i.floral-ornament.color-yellow
</template>

<script>
export default {
  name: "social_memories"
}
</script>