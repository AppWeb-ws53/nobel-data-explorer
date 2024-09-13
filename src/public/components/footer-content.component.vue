<script >

export default {
  name : "footer-content"

}

</script>

<template>
  <div class="grid bg-primary mt-4 p-4 align-content-start" aria-label="footer">
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>Copyright © 2024 Nobel Data Explorer. {{ $t('footer.rights') }} .</p>
    </div>
    <div class="col-12 ml-3 mt-3 align-items-center justify-content-center">
      <p> {{ $t('footer.developed') }} U202110237 Juan Astonitas </p>
    </div>
  </div>
</template>

<style scoped>

</style>