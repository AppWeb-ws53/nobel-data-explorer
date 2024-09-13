<script>
import {LaureateApiService} from "./laureates/services/laureate-api.service.js";
import {Laureate} from "./laureates/model/laureate.entity.js";

import FooterContent from "./public/components/footer-content.component.vue";
import ToolbarContent from "./public/components/toolbar-content.vue";
import LaureateList from "./laureates/components/laureate-list.component.vue";


export default {
  name: "App",
  components: {  ToolbarContent, FooterContent, LaureateList },
  data(){
    return {
      drawerVisible: false,
      laureates: [],
      errors: [],
      laureateapi: new LaureateApiService()
    }
  },
  methods: {
    buildLaureateListFromResponseData(laureates) {
      return laureates.map(
          laureate => new Laureate(
              laureate.id,
              laureate.firstname,
              laureate.surname,
              laureate.born,
              laureate.died,
              laureate.bornCountry,
              laureate.bornCountryCode,
              laureate.bornCity,
              laureate.diedCountry,
              laureate.diedCountryCode,
              laureate.diedCity,
              laureate.gender,
              laureate.prizes
          )
      );
    },
    getLaureates() {
      this.laureateapi.getLaureates()
          .then(response => {
            let laureates = response.data.laureates;
            this.laureates = this.buildLaureateListFromResponseData(laureates);
          })
          .catch(e => {
            this.errors.push(e);
            console.error('API call failed:', e);
          });
    }
  },
  created() {
    this.getLaureates();
  }
}

</script>

<template>
  <toolbar-content/>
  <laureate-list :laureates="laureates"/>
  <footer-content/>
</template>

<style scoped>

</style>
