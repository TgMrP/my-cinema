<template>
  <div
    id="app"
    class="h-screen overflow-x-hidden md:h-screen w-screen bg-blue-800 md:overflow-hidden font-sans text-blue-100"
    :class="{'overflow-hidden' :showNav}"
  >
  <div class="w-screen h-20 bg-blue-800 absolute z-10  md:hidden"></div>
    <div class="text-l md:text-xl left-0 md:ml-16 top-0 mt-6 absolute ml-4 z-20">
      <span class="text-blue-300 font-bold text-2xl md:text-3xl">MY</span>CINEMA
    </div>
    <div class="right-0 mr-2 md:mr-10 top-0 mt-4 absolute z-50">
      <button
        class="hamburger hamburger--spin focus:outline-none z-50"
        :class="{'is-active':showNav}"
        @click="change()"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    
    <nav-bar v-if="showNav" class="w-full h-full" />
    <router-view />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  
  computed: {
    ...mapState(["showNav", "results"])
  },
  methods: {
    ...mapMutations(["CHANGE_BOOLEAN"]),
    change: function() {
      this.CHANGE_BOOLEAN();
    },
  },
  mounted() {
    this.$store.dispatch("loadResults");
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Oswald&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,900&display=swap");

.slide-enter-active {
  transition: transform 0.6s;
}
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.fade-leave-to {
  transform: translateY(-100%);
}
.slide-leave-to {
  transform: translateY(-100%);
}
</style>


