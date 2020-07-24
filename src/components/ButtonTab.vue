<template>
  <div>
    <router-link :to="`selezionedata?indice=${indice}`">
      <button
        class="text-blue-100 box-border hover:font-bold rounded w-32 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none"
      >Book</button>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["indice"],
};
</script>
