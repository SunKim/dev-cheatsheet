<template>
  <q-page :class="paddingClass">
    <page-title>MariaDB</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'Mariadb',
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
