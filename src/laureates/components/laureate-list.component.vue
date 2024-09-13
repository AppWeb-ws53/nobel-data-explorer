<script >
import LaureateItem from "./laureate-item.component.vue";

export default {
  name: "laureate-list",
  components: { LaureateItem },
  props: {
    laureates: { type: Array, required: true }
  }
}
</script>

<template>
  <div class="card-container" aria-label="laureates">
    <laureate-item v-for="laureate in laureates"
                   :key="laureate.id"
                   :laureate="laureate"
                    aria-label="laureate card"/>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.laureate-item {
  flex: 1 1 200px;
  max-width: 200px;
}
</style>