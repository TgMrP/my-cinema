<template>
  <div id="SchedaFilm" class="h-full flex flex-col items-center justify-center bg-blue-800">
    <div class="w-full mt-32 md:-mt-12">
      <div class="w-10/12 m-auto items-center flex flex-col md:flex-row bg-blue-800 relative">
        <slider-movie
          class="md:ml-32 md:mt-0 mt-40"
          :image="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
        />
        <div class="alt relative w-full md:w-8/12">
          <TheTab />
          <div class="flex w-full md:ml-16 md:-mt-16">
            <ButtonTab :indice="this.$route.query.indice" class="md:mr-10 mr-4 z-10" />
            <div class="flex space-x-2 md:space-x-5 w-full md:mt-0 mt-2 md:pb-0 pb-10 items-center">
              <span class="text-blue-600" v-for="orario in orari" :key="orario">{{orario}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonTab from "./ButtonTab";
import { mapState } from "vuex";
import TheTab from "./TheTab.vue";
import SliderMovie from "./SliderMovie.vue";
export default {
  components: {
    TheTab,
    SliderMovie,
    ButtonTab,
  },
  data: () => {
    return {
      orari: ["12.00", "16.00", "18.00", "21.00"],
    };
  },
  computed: {
    ...mapState(["showNav", "results"]),
    movie() {
      return this.results[this.$route.query.indice];
    },
  },
};
</script>
<style scoped>
.locandina {
  background-size: 100% 100%;
  background-position: center;
  width: 300px;
  height: 450px;
}
.container {
  height: 450px;
}
.alt {
  height: 450px;
}
@media screen and (max-width: 992px) {
  .btn {
    position: relative;
    bottom: 50px;
  }
}
</style>