<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-content",
  components: { LanguageSwitcher }
}

</script>

<template>
  <pv-toolbar class="laureate-toolbar" aria-label="toolbar">
    <template #start>
      <span> {{ $t('toolbar.title') }} </span>
    </template>

    <template #end>
      <language-switcher/>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>