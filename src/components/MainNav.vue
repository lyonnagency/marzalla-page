<template lang="pug">
  nav.main-nav#main_nav
    .column
      ul
        li.link
          router-link(to="/sociales" alt="Eventos Sociales")
            span Sociales
        li.link
          router-link(to="/corporativos" alt="Eventos Corporativos")
            span Corporativos
        li
          router-link(to="/" alt="Inicio").logotipo
            span.off-screen Marzalla Eventos
            img(src="../assets/img/logos/logotipo.svg" alt="Marzala Eventos")
        li.link
          router-link(to="/servicios" alt="Servicios para todo tipo de evento")
            span Servicios
        li.link
          router-link(to="/reservar" alt="Reservaciones")
            span Reservar
</template>

<script>
export default {
  name: "main_nav",
  data() {
    return {
      main_nav: HTMLElement,
      lastScrollTop: 0
    }
  },
  methods: {
    scroll() {
      let deltaScroll = 100
      window.addEventListener("scroll", () => {
        let scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop
        if (scrollTop >= deltaScroll) this.main_nav.classList.add("scroll")
        else this.main_nav.classList.remove("scroll")
        if (Math.abs(this.lastScrollTop - scrollTop) <= this.deltaScroll)
          return
        if (
          scrollTop > this.lastScrollTop &&
          scrollTop > this.main_nav.offsetHeight
        )
          this.main_nav.classList.add("hide")
        else this.main_nav.classList.remove("hide")
        this.lastScrollTop = scrollTop
      })
    }
  },
  mounted() {
    this.main_nav = document.getElementById("main_nav")
    this.scroll()
  }
}
</script>
