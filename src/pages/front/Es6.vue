<template>
  <q-page :class="paddingClass">
    <page-title>ECMA Script 6(2015)</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'Es6',
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
