<template>
  <q-page class="q-pa-md">
    <page-title>Database</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'DbIndex',
  components: {
    PageTitle: () => import('components/PageTitle.vue')
  }
}
</script>
