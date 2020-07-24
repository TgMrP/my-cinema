<template>
  <div class="content w-full md:w-full flex flex-col md:pl-16 overflow-hidden">
    <div class="flex justify-between text-2xl md:mt-6 mt-10 md:w-84">
      <div
        class="border-b border-blue-800 hover:border-blue-100 cursor-pointer"
        :class="{'is-active' : tab.isActive }"
        @click="selectTab(tab)"
        v-for="(tab, index) in tabs"
        :key="index"
      >{{tab.name}}</div>
    </div>
    <div class="text-4xl mt-6 font-bold">{{movie.title}}</div>
    <div v-show="tabs[0].isActive" name="Descrizione" selected="true">
      <div
        class="mt-6 opacity-75 h-48 md:h-48 tw overflow-y-scroll overflow-x-hidden md:w-100 leading-relaxed"
      >{{movie.overview}}</div>
    </div>
    <div v-show="tabs[1].isActive" class="md:w-100 tw" name="Info">
      <div class="flex flex-wrap w-full mt-10">
        <div class="w-1/2 flex flex-col">
          <div class>
            <p class="opacity-75 inline">Release date:</p>
            <span class="md:inline block md:pl-2 opacity-100">{{movie.release_date}}</span>
          </div>
          <div class="mt-12">
            <p class="opacity-75 inline">Original language:</p>
            <span class="md:inline block md:pl-2 opacity-100">{{movie.original_language}}</span>
          </div>
        </div>
        <div class="w-1/2 flex flex-col">
          <div>
            <p class="opacity-75 inline">Rating(TMDB):</p>
            <span class="md:inline block md:pl-2">{{movie.vote_average}}</span>
          </div>
          <div class="mt-12">
            <p class="opacity-75 inline">Genere:</p>
            <span class="md:inline block md:pl-2">{{genere}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tabs[2].isActive" class="mt-4 tw md:w-100">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(elem, i) in credits" :key="i">
          <SliderCast
            :image="'http://image.tmdb.org/t/p/w185/' + elem.profile_path"
            :nome="elem.name"
          />
        </swiper-slide>

        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SliderCast from "./SliderCast.vue";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import axios from "axios";
export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderCast,
  },

  data: () => {
    return {
      credits: [],
      orari: ["12.00", "16.00", "18.00", "21.00"],
      tabs: [
        {
          name: "Descrizione",
          isActive: true,
        },
        {
          name: "Info",
          isActive: false,
        },
        {
          name: "Cast",
          isActive: false,
        },
      ],

      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,

        breakpoints: {
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapState(["showNav", "results", "titolo", "genres"]),
    movie() {
      return this.results[this.$route.query.indice];
    },
    genere() {
      var rix = "";
      for (var i = 0; i < this.genres.length; i++) {
        if (this.movie.genre_ids.includes(this.genres[i].id)) {
          rix += this.genres[i].name + ", ";
        }
      }
      return rix;
    },
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.movie.id +
          "/credits?api_key=1cf8f771f38657fb50a9decb80e435c2"
      )

      .then((response) => (this.credits = response.data.cast));
  },
};
</script>
<style scoped lang="scss">
.swiper-slide {
  display: flex;
}
.swiper-container {
  height: 200px;
  margin-top: 10px;
  width: 100%;
}

.is-active {
  border-bottom: 1px solid white;
}
.content {
  height: 450px;
  position: relative;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}
</style>