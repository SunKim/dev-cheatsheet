<template>
  <q-page :class="paddingClass">
    <page-title>Etc</page-title>

    <section-title>Serveo</section-title>
    <section>
      <p class="p-title">사용법 (localhost:8080을 cs.serveo.net 으로)</p>
      <p class="p-content shell-prompt">
        ssh -R cs:80:localhost:8080 serveo.net
      </p>
      <p class="p-cf">
        <a
          target="_blank"
          class="q-link text-blue-grey"
          href="https://serveo.net"
          >https://serveo.net</a
        >
      </p>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Etc',
  components: {
    PageTitle: () => import('components/PageTitle.vue'),
    SectionTitle: () => import('components/SectionTitle.vue')
  },
  data () {
    return {
      paddingClass: this.$q.screen.lt.md ? 'q-pa-sm' : 'q-pa-md'
    }
  }
}
</script>
