<template lang="pug">
  <!--footer(:class="area_class").overflow-hidden-->
    <!--.rhomb.pattern-->
      <!--.container.config-pattern.deep-->
    <!--.column-->
      <!--.animated.fadeInRight-->
        <!--ul.quicklinks-->
          <!--li-->
            <!--router-link(alt="Conoce más sobre nosotros" to="/nosotros") Conocenos-->
          <!--li-->
            <!--a(alt="" href="") Blog-->
          <!--li-->
            <!--a(alt="" href="") FAQ-->
      <!--div-->
        <!--.isotipo.animated.fadeIn-->
          <!--span.off-screen Marzalla Eventos-->
          <!--img(src="../assets/img/logos/isotipo_corporate.svg" alt="Marzala Eventos | Corporativos").corporate-->
          <!--img(src="../assets/img/logos/isotipo_social.svg" alt="Marzala Eventos | Sociales").social-->
      <!--.animated.fadeInLeft-->
        <!--ul.social-network-->
          <!--li-->
            <!--h3 Siguenos-->
          <!--li-->
            <!--a(alt="Instagram Marzalla" href="https://www.instagram.com/marzalla.eventos/" target="_blank").icon-instagram-->
              <!--span.off-screen Instagram-->
          <!--li-->
            <!--a(alt="Facebook Marzalla" href="https://www.facebook.com/marzalla.eventos/" target="_blank").icon-facebook-->
              <!--span.off-screen Facebook-->
    <!--.copyright-->
      <!--ul.column-->
        <!--li-->
          <!--span Copyright &copy 2018 Marzalla Eventos.-->
</template>

<script>
import ScrollReveal from "../classes/scroll_reveal.js"

export default {
  name: "main_footer",
  props: ["area_class"],
  methods: {
    scrollReveal() {
      ScrollReveal.reveal(this.$el.querySelector(".animated.fadeIn"), {
        distance: "0"
      })
      ScrollReveal.reveal(this.$el.querySelector(".animated.fadeInRight"), {
        origin: "left",
        distance: "20px"
      })
      ScrollReveal.reveal(this.$el.querySelector(".animated.fadeInLeft"), {
        origin: "right",
        distance: "20px"
      })
    }
  },
  mounted() {
    this.scrollReveal()
  }
}
</script>
