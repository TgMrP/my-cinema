<template>
    <div id="SliderCast">
      <div>
      <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
      <div class="border-blue-700 text-sm text-center pt-2">{{nome}}</div>
      </div>
    </div>
</template>
<script>
export default {
  props: ["image", "nome"]
};
</script>
<style scoped>
.image {
  height: 170px;
  width: 140px;
  background-size: cover;
  background-position: 100% 0;
  border-radius: 2px;
}

</style>