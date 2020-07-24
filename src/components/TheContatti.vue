<template>
  <div class="flex flex-col items-center">
    <div
      class="flex flex-col md:flex-row items-center rounded-lg w-84 md:w-101 h-98 bg-blue-700 mt-24"
    >
      <div class="w-84 h-full bg-blue-700 rounded-lg py-12 px-10">
        <div>Phone;</div>
        <div class="font-medium text-xl mt-2">0445531166</div>
        <div class="mt-6">Street:</div>
        <div class="font-medium text-xl mt-2">Via Pasubio 25, Schio</div>
        <div class="mt-6">Mail:</div>
        <div class="font-medium text-xl mt-2">mycinema@mycinima.com</div>
        <div class="flex justify-between mt-12">
          <div class="facebook w-10 h-10"></div>
          <div class="istagram w-10 h-10"></div>
          <div class="twitter w-10 h-10 mr-16"></div>
        </div>
      </div>
      <div class="relative md:block hidden">
        <iframe
          class
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216232.98502714382!2d34.938544454183365!3d32.13301273594541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4849fd90c6c7%3A0x6b3c93051b7ffa1e!2z16HXmdeg157XlCDXodeZ15jXmSDXktec15nXnNeV16o!5e0!3m2!1siw!2sil!4v1595582240678!5m2!1siw!2sil"
          width="650"
          height="448"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
    <button
      class="bg-blue-800 text-blue-100 box-border hover:font-bold rounded md:w-40 w-40 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none mt-10"
    >
      <a
        href="https://www.google.co.il/maps/dir//%D7%A1%D7%99%D7%A0%D7%9E%D7%94+%D7%A1%D7%99%D7%98%D7%99+%D7%92%D7%9C%D7%99%D7%9C%D7%95%D7%AA,+%D7%91%D7%A0%D7%99%D7%99%D7%9F+%D7%94%D7%A8%D7%91+%D7%9E%D7%9B%D7%A8,+%D7%A8%D7%9E%D7%AA+%D7%94%D7%A9%D7%A8%D7%95%D7%9F%E2%80%AD/@32.1330127,34.9385445,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x151d4849fd90c6c7:0x6b3c93051b7ffa1e!2m2!1d34.8044874!2d32.1463675!3e0"
      >Navigate</a>
    </button>
  </div>
</template>
<style scoped>
.facebook {
  background: url("../../src/assets/images/facebook.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.istagram {
  background: url("../../src/assets/images/insta.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.twitter {
  background: url("../../src/assets/images/twitter.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>