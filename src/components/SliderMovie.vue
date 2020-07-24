<template>
  <div class="movie">
    <div class="locandina" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
  </div>
</template>
<script>
export default {
  name: "movie",
  props: ["image"]
};
</script>
<style scoped>
.movie {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  height: 430px;
  width: 300px;
}
.locandina {
  width: 300px;
  height: 430px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
@media screen and (max-width: 992px) {
  .locandina {
    height: 350px;
    width: 250px;
  }
  .movie {
    height: 350px;
    width: 250px;
  }
}
</style>