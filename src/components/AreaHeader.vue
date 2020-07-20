<template lang="pug">
  header(:class="area_class").main-header
    .content-background.shades.anime.fadeIn
    .rhomb
    .column
        hgroup
            h2.playlist-script.anime.fadeInBottom {{ title }}#[span.color-yellow .]
            h1.anime.fadeInUp {{ description }}
    i.scroll-marker.yellow
</template>

<script>
import anime from "animejs"

export default {
  name: "area_header",
  props: ["area_class", "title", "description"],
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