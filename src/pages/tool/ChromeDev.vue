<template>
  <q-page :class="paddingClass">
    <page-title>Chrome Developer Tool</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'Chromedev',
  components: {
    PageTitle: () => import('components/PageTitle.vue')
  },
  data () {
    return {
      paddingClass: this.$q.screen.lt.md ? 'q-pa-sm' : 'q-pa-md'
    }
  }
}
</script>
