<template>
  <q-page :class="paddingClass">
    <page-title>Flutter</page-title>
  </q-page>
</template>

<script>
export default {
  name: 'Flutter',
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
