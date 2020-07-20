<template lang="pug">
  .modal(@click.stop.prevent="close").social
    article
      .container(@click.stop="")
        a(@click.stop.prevent="close").button.action.close.color-yellow.close-modal
          span.off-screen Cerrar
        header
          h2 {{ event.name }}
        .image(:style="'background-image: url(/static/img/social/events/' + event.image + ')'")
        .description
          section
            .information
              div
                p(v-html="event.description")
                ul(v-if="event.inclusions").list.marker-yellow
                  li(v-for="inclusion in event.inclusions")
                    span {{ inclusion }}
            .control
              ul
                li
                  router-link(to="/reservar" alt="Reservaciones" data-text="Reservar").button.principal.color-yellow
                    span Reservar
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "social_event",
  props: ["code_name"],
  beforeMount() {
    document.body.classList.add("no-scroll")
    this.$store.dispatch('getEvent', { area: "social", code_name: this.code_name })
  },
  computed: mapGetters([
    'event'
  ]),
  methods: {
    getUrl() {
      let protocol = location.protocol
      let hostname = window.location.hostname
      let url = protocol.concat("//").concat(hostname)
      return url.concat(this.$route.fullPath)
    },
    close() {
      this.$router.push({
        name: this.$route.matched[0].name
      })
    },
    getMetaKeywords() {
      let keywords = ''
      if (this.event.keywords.length > 0) {
        keywords = this.event.keywords.join()
      }
      return keywords
    }
  },
  metaInfo() {
    return {
      title: this.event.name,
      meta: [
        {
          vmid: 'dtn',
          name: 'description',
          content: this.event.description
        },
        {
          vmid: 'kw',
          name: 'keywords',
          content: this.getMetaKeywords()
        },
        {
          vmid: 'inm',
          itemprop: 'name',
          content: this.event.name + " | Marzalla"
        },
        {
          vmid: 'idtn',
          itemprop: 'description',
          content: this.event.description
        },
        {
          vmid: 'ptt',
          property: 'og:title',
          content: this.event.name + " | Marzalla"
        },
        {
          vmid: 'pdtn',
          property: 'og:description',
          content: this.event.description
        },
        {
          vmid: 'tdtn',
          name: 'twitter:description',
          content: this.event.description
        },
        {
          vmid: 'twtt',
          name: 'twitter:title',
          content: this.event.name + " | Marzalla"
        },
        {
          vmid: 'purl',
          property: 'og:url',
          content: this.getUrl()
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" src="../../stylus/modal.styl"/>
