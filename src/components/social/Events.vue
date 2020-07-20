<template lang="pug">
  section.events
    .rhomb.pattern
        .container.config-pattern.deep
    h2.off-screen Eventos para toda ocasión
    slick(ref="slider" :options="sliderOptions").reveal.fadeInUp
        div(v-for="event in events")
            figure.event.overflow-hidden
                img(:data-lazy="'/static/img/social/events/' + event.image")
                .rhomb.background-deep-green
                figcaption
                    h3.color-white {{ event.name }} #[span {{ event.tagline }}]
                    router-link(:to="{ name: 'modal_social_event', params: { code_name: event.code_name }}" :alt="'Conoce más sobre' + event.name" data-text="Conoce más").button.principal.color-white
                        span Conoce más
</template>

<script>
import Slick from "vue-slick"

export default {
  name: "social_events",
  components: {
    slick: Slick
  },
  data() {
    return {
        sliderOptions: {
            arrows: false,
            autoplay: true,
            centerMode: true,
            centerPadding: "200px",
            focusOnSelect: true,
            slidesToShow: 5,
            lazyLoad: "ondemand",
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "100px"
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "100px"
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "100px"
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "50px"
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: "200px"
                    }
                },
                {
                    breakpoint: 414,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: "25px"
                    }
                }
            ]
        }
    }
  },
  computed: {
    events() {
        return this.$store.getters.allEvents("social")
    }
  },
  methods: {
    sliderPlay() {
        this.$refs.slider.play()
    },
    sliderPause() {
        this.$refs.slider.pause()
    }
  }
}
</script>

<style src="modules/slick-carousel/slick/slick.css"/>