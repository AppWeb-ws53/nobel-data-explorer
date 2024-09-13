<script>
import { Laureate } from '../model/laureate.entity.js';

export default {
  name: "laureate-item",
  components: {},
  props: {
    laureate: { type: Laureate, required: true }
  }
}
</script>

<template>
  <pv-card style="margin: 20px" >

    <template #content>
      <p> {{ $t('laureate.id') }}: {{ laureate.id }} </p>
      <p> {{ $t('laureate.name') }}: {{ laureate.firstname }} </p>
      <p> {{ $t('laureate.surname') }}: {{ laureate.surname }} </p>
      <p> {{ $t('laureate.born') }}: {{ laureate.born }}</p>
      <p> {{ $t('laureate.gender') }}: {{ laureate.gender }}</p>
      <p> {{ $t('laureate.numberPrizes') }}: {{ laureate.prizes.length }}</p>

    </template>
  </pv-card>
</template>

<style scoped>

</style>