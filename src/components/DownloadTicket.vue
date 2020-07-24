<template>
  <div class="flex flex-col">
    <div class="w-full text-center text-3xl md:mt-10 mt-20">Thank you!</div>
    <div class="flex flex-col md:flex-row">
      <div class="flex-1 flex flex-col items-center md:mt-32 mt-10">
        <div>
          <div
            id="capture"
            class="md:w-100 w-84 h-48 bg-blue-100 rounded-md relative shadow-lg overflow-hidden"
          >
            <div class="text-xs w-full h-10 bg-blue-700 flex items-center justify-between">
              <div>
                <span class="ml-10 text-sm text-blue-300 font-semibold">MY</span>
                <span>CINEMA</span>
              </div>
              <div class="text-blue-100 text-blue-100 md:text-xl mr-10 text-md">{{titolo}}</div>
            </div>
            <div class="flex">
              <div class="flex-1 flex flex-col text-blue-900 mt-6 ml-10 space-y-1">
                <div>
                  Data:
                  <span>{{date.getDate()}}/{{date.getMonth()}}/{{date.getFullYear()}}</span>
                </div>
                <div>
                  Time:
                  <span>{{orario}}</span>
                </div>
                <div>
                  Seat:
                  <span>{{check}}</span>
                </div>
                <div>
                  Total:
                  <span>{{totale}},00€</span>
                </div>
              </div>
              <div class="mt-8 qr flex flex-col items-center">
                <qrcode-vue class="mr-10" :value="value" foreground="#2A4365" background="#EBF8FF"></qrcode-vue>
              </div>
            </div>
          </div>
          <button
            @click="saveCanvas()"
            class="bg-blue-800 text-blue-100 box-border hover:font-bold rounded md:w-40 w-40 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none mt-4"
          >Download</button>
        </div>
      </div>
      <div class="flex-1">
        <form class="flex flex-col items-center mt-16 md:mt-32 md:w-full m-auto w-84" action>
          <div class="flex flex-col text-lg justify-center">
            Enter the email on which you want to receive the pdf of the ticket:
            <input
              type="text"
              class="block w-84 border-none bg-blue-100 text-blue-900 h-8 px-2 rounded-sm mt-6"
            />
            <label for="info">
              <input class="input" type="checkbox" name id="info" />
              <span class="span mt-6"></span>
              <div class="inline-block opacity-75 text-sm">I have read the privacy policy</div>
            </label>
            <label for="news">
              <input class="input" type="checkbox" name id="news" />
              <span class="span mt-6"></span>
              <div
                class="inline-block opacity-75 text-sm"
              >I want to receive news and info on this cinema</div>
            </label>
            <button
              class="bg-blue-800 text-blue-100 box-border hover:font-bold rounded md:w-40 w-40 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none mt-8"
            >Submit</button>
            <div class="mt-2 opacity-75 text-sm">
              Did you not receive any email?
              <u>Contact support</u>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="w-full text-center">
      <router-link to="/contact">
        <button
          class="m-auto bg-blue-800 text-blue-100 box-border hover:font-bold rounded md:w-40 w-40 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none mt-24 md:mb-0 mb-10"
        >Map</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import { mapState } from "vuex";
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    QrcodeVue,
  },
  data: () => {
    return {
      value: "",
    };
  },
  computed: {
    ...mapState(["check", "orario", "totale", "date", "titolo"]),
  },
  methods: {
    saveCanvas() {
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        var image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        window.location.href = image;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.span {
  width: 17px;
  height: 17px;
  border: 1px solid #ebf8ff;
  display: inline-block;
  margin-right: 10px;
  border-radius: 3px;
}
.input {
  display: none;
  &:checked ~ span {
    background: #ebf8ff;
  }
}
</style>