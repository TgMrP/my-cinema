<template>
  <div class="w-full flex flex-col items-center hidden md:flex">
    <div class="flex flex-row w-1/3 justify-between items-center">
      <div class="w-4 h-4 border-blue-100 border rounded-full" :class="{'bg-blue-100' :uno} "></div>
      <div class="w-1/3 h-0 border-b border-blue-100"></div>
      <div class="w-4 h-4 border-blue-100 border rounded-full" :class="{'bg-blue-100' :due} "></div>
      <div class="w-1/3 h-0 border-b border-blue-100"></div>
      <div class="w-4 h-4 border-blue-100 border rounded-full" :class="{'bg-blue-100' :tre} "></div>
    </div>
    <div class="tab flex justify-between text-sm text-center mt-5">
      <p v-for="tab in tabs" :key="tab.name">{{tab.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["uno", "due", "tre"],
  data: () => {
    return {
      tabs: [
        {
          name: "Date and time",
          isActive: false,
        },
        {
          name: "Place",
          isActive: false,
        },
        {
          name: "Payment",
          isActive: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
.tab {
  width: 38%;
}
</style>