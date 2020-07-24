<template>
  <div class="w-full bg-blue-800 flex flex-col">
    <div class="flex flex-col items-center md:items-start md:flex-row">
      <div
        class="bg-blue-700 w-84 mt-20 md:mt-24 md:w-93 py-10 px-10 md:px-16 md:ml-32 rounded-lg flex flex-col h-full text-md"
      >
        <div class="text-lg">Payment methods:</div>
        <div class="mt-10">
          <div class="flex pb-6">
            <label for="i">
              <input class="input" id="i" type="checkbox" v-model="check" />
              <span class="span"></span>
            </label>
            Credit card
          </div>
          <div v-if="check" class="flex justify-between flex-col pb-10">
            <div class="flex flex-row">
              <div class="w-24 mr-6 uno h-12"></div>
              <div class="w-24 due h-12 bg-black"></div>
            </div>
            <div class="flex flex-row">
              <div class="tre w-24 mr-6 mt-4 h-12 bg-black"></div>
              <div class="quattro w-24 h-12 mt-4 bg-black"></div>
            </div>
          </div>

          <div class="flex">
            <label for="a">
              <input class="input" id="a" type="checkbox" disabled v-model="checks" />
              <span class="span"></span>
            </label>
            Paypal
          </div>
        </div>
      </div>
      <div class="flex-1">
        <CardPayment />
      </div>
    </div>

    <SelezioneNav :uno="true" :due="true" :tre="true" class="absolute bottom-0 mb-10" />
  </div>
</template>
<script>
import CardPayment from "@/components/CardForm";
import SelezioneNav from "./SelezioneNav.vue";
export default {
  components: {
    SelezioneNav,
    CardPayment,
  },
  data: () => {
    return {
      check: true,
      checks: false,
    };
  },
};
</script>
<style lang="scss">
@import "../../src/assets/style.scss";
.uno {
  background: url("../../src/assets/images/visacard.png");
  background-size: 100% 100%;
}
.due {
  background: url("../../src/assets/images/maestrocard.jpg");
  background-size: 100% 100%;
}
.tre {
  background: url("../../src/assets/images/mastercard2.png");
  background-size: 100% 100%;
}
.quattro {
  background: url("../../src/assets/images/postecard.jpg");
  background-size: 100% 100%;
}
.span {
  width: 23px;
  height: 23px;
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
.metodipagamento {
  margin-top: 150px;
}
</style>
