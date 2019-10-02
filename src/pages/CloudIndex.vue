<template>
  <q-page class="q-pa-md">
    <page-title>Cloud Services</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'CloudIndex',
  components: {
    PageTitle: () => import('components/PageTitle.vue')
  }
}
</script>
