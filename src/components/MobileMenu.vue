<template lang="pug">
    .mobile-menu#mobile_menu
        nav
            ul
                li.link
                    router-link(to="/" alt="Inicio" @click.native="close")
                        span Inicio
                li.link
                    router-link(to="/sociales" alt="Eventos Sociales" @click.native="close")
                        span Sociales
                li.link
                    router-link(to="/corporativos" alt="Eventos Corporativos" @click.native="close")
                        span Corporativos
                li.link
                    router-link(to="/servicios" alt="Servicios para todo tipo de evento" @click.native="close")
                        span Servicios
                li.link
                    router-link(to="/reservar" alt="Reservaciones" @click.native="close")
                        span Reservar
                li.link
                    router-link(to="/nosotros" alt="Conoce más sobre nosotros" @click.native="close")
                        span Conocenos
        button(@click.stop.prevent="validate").mobile-menu-button
            span.off-screen Menú
            i.bar.top
            i.bar.middle
            i.bar.bottom
</template>

<script>
export default {
  name: "mobile_menu",
  data() {
    return {
        mobile_menu: HTMLElement,
        isOpen: false
    }
  },
  methods: {
      validate() {
          if (this.isOpen) {
              this.close()
          } else {
              this.open()
          }
      },
      open() {
          this.mobile_menu.classList.add("active")
          document.body.classList.add("no-scroll")
          this.isOpen = true
      },
      close() {
          this.mobile_menu.classList.remove("active")
          document.body.classList.remove("no-scroll")
          this.isOpen = false
      }
  },
  mounted() {
    this.mobile_menu = document.getElementById("mobile_menu")
  }
}
</script>
