<template>
  <q-page class="q-pa-md">
    <page-title>Front-End</page-title>

    <select>
      <optgroup label="Coffee">
        <option>Americano</option>
        <option>Caffe Mocha</option>
        <option label="Cappuccino" value="Cappuccino"></option>
      </optgroup>
      <optgroup label="Latte" disabled>
        <option>Caffe Latte</option>
        <option>Vanilla Latte</option>
      </optgroup>
      <optgroup label="Smoothie">
        <option>Plain</option>
        <option>Strawberry</option>
        <option>Banana</option>
        <option>Mango</option>
      </optgroup>
    </select>

    <progress value="70" max="100">70 %</progress>
    <p><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd></p>
    , <kbd>ESC</kbd>
  </q-page>
</template>

<script>
export default {
  name: 'FrontIndex',
  components: {
    PageTitle: () => import('components/PageTitle.vue')
  }
}
</script>
