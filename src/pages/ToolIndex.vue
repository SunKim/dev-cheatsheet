<template>
  <q-page class="q-pa-md">
    <page-title>Tools</page-title>

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

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="ubuntu">
          <ubuntu></ubuntu>
        </q-tab-panel>

        <q-tab-panel name="macos">
          <div class="text-h6">hahaasdfasdf</div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ToolIndex',
  data () {
    return {
      tab: 'ubuntu'
    }
  },
  components: {
    PageTitle: () =>
      import('components/PageTitle.vue').then(
        console.log('PageTitle.vue(Async Component) is dynamically loaded')
      ),
    Ubuntu: () => import('pages/os/Ubuntu.vue')
  },
  mounted: function () {
    // console.log(this.$q.screen)
  }
}
</script>
