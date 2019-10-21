<template>
  <q-page class="q-pa-md">
    <page-title>Back-End</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'BackIndex',
  components: {
    PageTitle: () =>
      import('components/PageTitle.vue').then(
        // console.log('PageTitle.vue(Async Component) is dynamically loaded')
      )
  }
}
</script>
