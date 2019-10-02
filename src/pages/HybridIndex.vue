<template>
  <q-page class="q-pa-md">
    <page-title>Multi-Platform</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'HybridIndex',
  components: {
    PageTitle: () =>
      import('components/PageTitle.vue').then(
        console.log('PageTitle.vue(Async Component) is dynamically loaded')
      )
  }
}
</script>
