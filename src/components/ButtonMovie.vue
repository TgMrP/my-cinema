<template>
  <div id="ButtonMovie">
    <router-link :to="`schedafilm?indice=${movie}`">
      <button
        class="btn text-blue-100 box-border hover:font-bold rounded md:w-32 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none"
      >Film profile</button>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["movie"],
  data: () => {
    return {};
  },
};
</script>
<style scoped>
.container {
  width: 300px;
}
@media screen and (max-width: 992px) {
  .container {
    width: 250px;
  }
}
@media screen and (max-width: 992px) {
  .btn {
    width: 120px;
  }
}
</style>