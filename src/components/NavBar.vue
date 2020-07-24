<template>
  <div
    id="NavBar"
    class="font-sans font-bold overflow-hidden bg-blue-800 h-screen w-full pointer-events-none z-30 absolute flex flex-col justify-center items-center"
  >
    <ul
      class="text-4xl h-48 md:h-64 text-blue-100 flex flex-col justify-around text-center md:text-5xl text-3xl"
    >
      <router-link to="/contact">
        <li>
          <p
            href="#"
            class="pointer-events-auto transition ease-linear duration-500 p-3 hover:border-blue-700 border-solid border-l-2 border-r-2 border-blue-800"
            @click="change()"
          >Contact</p>
        </li>
      </router-link>
      <li>
        <router-link to="/tariffe">
          <p
            class="pointer-events-auto transition ease-linear duration-500 p-3 hover:border-blue-700 border-solid border-l-2 border-r-2 border-blue-800"
            @click="change()"
          >Rates</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  data: () => {
    return {};
  },
  methods: {
    ...mapMutations(["CHANGE_BOOLEAN"]),
    change: function () {
      this.CHANGE_BOOLEAN();
    },
  },
};
</script>

<style scoped>
</style>
