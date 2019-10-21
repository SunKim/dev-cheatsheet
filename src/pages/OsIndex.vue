<template>
  <q-page :class="paddingClass">
    <page-title>Operating Systems</page-title>

    <div>
      <q-tabs
        v-model="tab"
        align="left"
        :dense="$q.screen.lt.md"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
      >
        <q-tab name="ubuntu" label="Ubuntu" />
        <q-tab name="macos" label="Mac OS" />
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        keep-alive
        animated
        transition-prev="fade"
        transition-next="fade"
      >
        <q-tab-panel name="ubuntu" class="pa0">
          <ubuntu></ubuntu>
        </q-tab-panel>

        <q-tab-panel name="macos" class="pa0">
          <macos></macos>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <!-- <div>
      <q-tabs
        v-model="tab"
        align="left"
        :dense="$q.screen.lt.md"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
      >
        <q-route-tab name="ubuntu" label="Ubuntu" to="/os/ubuntu" exact />
        <q-route-tab name="macos" label="Mac OS" to="/os/macos" exact />
      </q-tabs>
    </div> -->
  </q-page>
</template>

<script>
export default {
  name: 'OsIndex',
  data () {
    return {
      paddingClass: this.$q.screen.lt.md ? 'q-pa-sm' : 'q-pa-md',
      tab: 'ubuntu'
    }
  },
  components: {
    PageTitle: () =>
      import('components/PageTitle.vue').then(
        // console.log('PageTitle.vue(Async Component) is dynamically loaded')
      ),
    Ubuntu: () => import('pages/os/Ubuntu.vue'),
    Macos: () => import('pages/os/Macos.vue')
  },
  mounted: function () {
    // console.log(this.$q.screen)
  }
}
</script>
