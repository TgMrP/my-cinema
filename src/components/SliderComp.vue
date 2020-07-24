<template>
  <div class="flex flex-col items-center relative w-full h-screen">
    <DateComp class="flex-none pt-10 md:pt-0" />

    <div class="flex-1 justify-center w-full flex items-center md:pt-2">
      <swiper
        @slideChange="changeSwiperIndex(); changeTitle();"
        :options="swiperOption"
        ref="mySwiper"
      >
        <swiper-slide v-for="(elem, index) in movies" :key="index">
          <SliderMovie :image="'http://image.tmdb.org/t/p/w500/' + elem.poster_path" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="btn-container flex justify-between mb-20 md:mb-10">
      <ButtonMovie :movie="swiperIndex" />
      <ButtonTab :indice="swiperIndex" />
    </div>
  </div>
</template>




<script>
// import dayjs from 'dayjs'
import { mapState, mapMutations } from "vuex";
import SliderMovie from "./SliderMovie";
import ButtonMovie from "./ButtonMovie.vue";
import ButtonTab from "./ButtonTab.vue";
import DateComp from "./DateComp.vue";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "SliderComp",
  components: {
    SliderMovie,
    Swiper,
    SwiperSlide,
    ButtonMovie,
    DateComp,
    ButtonTab,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperIndex: 0,
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "4",
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
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
    ...mapState(["showNav", "results", "date", "titolo"]),
    movies() {
      return this.results;
      // return this.results.map((movie) => {
      //   // var endDate = dayjs(movie.release_date).add(4, "week")
      //   // endDate.isAfter(dayjs(this.date))
      //   // console.log(endDate.isAfter(dayjs(this.date)))

      //   return true
      // });
    },
    changeTitle() {
      return this.CHANGE_TITLE(this.results[this.swiperIndex].title);
    },
  },
  methods: {
    ...mapMutations(["CHANGE_TITLE"]),
    changeSwiperIndex() {
      return (this.swiperIndex = this.$refs.mySwiper.$swiper.activeIndex);
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 992px) {
  .swiper-slide {
    height: 350px;
    width: 200px;
  }
  .swiper-container {
    height: 350px;
  }
}
.swiper-slide {
  display: flex;
  justify-content: center;
  height: 430px;
  width: 300px;
}
.swiper-container {
  position: absolute;
  width: 100%;
}
.btn-container {
  width: 300px;
}
</style>