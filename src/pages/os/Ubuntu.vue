<template>
  <q-page :class="paddingClass">
    <page-title>Ubuntu(16.04)</page-title>

  </q-page>
</template>

<script>
export default {
  name: 'Ubuntu',
  components: {
    PageTitle: () =>
      import('components/PageTitle.vue').then(
        // console.log('PageTitle.vue(Async Component) is dynamically loaded')
      )
  },
  data () {
    return {
      paddingClass: this.$q.screen.lt.md ? 'q-pa-sm' : 'q-pa-md'
    }
  }
}
</script>
