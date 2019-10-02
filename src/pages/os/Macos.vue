<template>
  <q-page :class="paddingClass">
    <page-title>Mac OS</page-title>

    <section-title>CLI</section-title>
    <section>
      <p class="p-title">파일 내용으로 찾기</p>
      <p class="p-content shell-prompt">mdfind -onlyin /Users/Sun/workspace_vue "SideBar.vue"</p>
      <p class="p-content shell-prompt">mdfind -onlyin /Users/Sun/workspace_vue -live "SideBar.vue"</p>

      <p class="p-title">Global 단축키</p>
      <p class="p-content">Cmd + Shift + / : 도움말 메뉴 보기</p>

      <p class="p-title">Finder 단축키</p>
      <p class="p-content">Cmd + Shift + G : 위치로 이동</p>
      <p class="p-content">Cmd + Shift + H : HOME으로 이동</p>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Macos',
  components: {
    PageTitle: () => import('components/PageTitle.vue'),
    SectionTitle: () => import('components/SectionTitle.vue')
  },
  data () {
    return {
      paddingClass: this.$q.screen.lt.md ? 'q-pa-sm' : 'q-pa-md'
    }
  }
}
</script>
