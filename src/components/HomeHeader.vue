<template lang="pug">
  header.main-header.home
    slick(ref="slick" :options="sliderOptions").shades.anime.fadeIn
      div
        .content-background.bg-1
      div
        .content-background.bg-2
      div
        .content-background.bg-3
    .rhomb
    .column
      hgroup
        h2.playlist-script.color-blue.anime.fadeInBottom Hazlo inolvidable#[span.color-yellow .]
        h1.color-blue.anime.fadeInUp tu distintiva Agencia de Eventos
    i.scroll-marker.yellow
</template>

<script>
import Slick from "vue-slick"
import anime from "animejs"

export default {
  name: "home_header",
  components: {
    slick: Slick
  },
  data() {
    return {
      sliderOptions: {
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 600
      }
    }
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
          targets: this.$el.querySelector(".anime.fadeInUp"),
          opacity: [0, 1],
          translateY: [10, 0]
        })
    }
  },
  mounted() {
    this.initAnimations()
  }
}
</script>

<style src="modules/slick-carousel/slick/slick.css"/>