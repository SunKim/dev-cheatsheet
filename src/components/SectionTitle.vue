<template>
  <h6 class="q-mt-sm q-mb-lg text-h6 text-indigo-6 section-title">
    <slot></slot>
  </h6>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style scoped>
.section-title {
  border-bottom: 1px solid #ddd;
  margin-top: 40px;
  margin-bottom: 0px;
}
</style>
