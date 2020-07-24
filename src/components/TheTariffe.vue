<template>
  <div class="flex flex-col mt-24">
    <div class="flex flex-col md:flex-row justify-around items-center">
      <div class="rounded-lg w-84 md:w-97 h-98 bg-blue-700 flex flex-col justify-between p-10">
        <div class="text-3xl font-bold">Rates:</div>
        <div class="flex w-full justify-between">
          <div class="text-xl">
            Full
            <span class="text-base ml-2 opacity-75">15-60</span>
          </div>
          <div class="text-2xl">15,00€</div>
        </div>
        <div class="flex w-full justify-between">
          <div class="text-xl">
            Reduced
            <span class="text-base ml-2 opacity-75">-15/60+</span>
          </div>
          <div class="text-2xl">7,00€</div>
        </div>
        <div class="flex w-full justify-between">
          <div class="text-xl">Students</div>
          <div class="text-2xl">10,00€</div>
        </div>
        <div class="text-sm opacity-75">**Rates may change based on schedule</div>
      </div>
      <div
        class="w-84 md:mt-0 mt-20 md:w-97 h-98 bg-blue-700 rounded-lg p-10 overflow-hidden cursor-default"
      >
        <div class="text-3xl font-bold mb-8">Communications:</div>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eveniet pariatur? Ea nisi adipisci eum voluptas earum laborum facilis quidem unde.
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eveniet pariatur? Ea nisi adipisci eum voluptas earum laborum facilis quidem unde.
          </swiper-slide>
          <swiper-slide class="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eveniet pariatur? Ea nisi adipisci eum voluptas earum laborum facilis quidem unde.
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eveniet pariatur? Ea nisi adipisci eum voluptas earum laborum facilis quidem unde.
          </swiper-slide>
          <swiper-slide class="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eveniet pariatur? Ea nisi adipisci eum voluptas earum laborum facilis quidem unde.
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eveniet pariatur? Ea nisi adipisci eum voluptas earum laborum facilis quidem unde.
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="w-full flex justify-around mt-12">
      <router-link to="/">
        <button
          class="bg-blue-800 text-blue-100 box-border hover:font-bold rounded md:w-40 w-40 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none md:mb-0 mb-10"
        >Programming</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data: () => {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 80%;
}
</style>