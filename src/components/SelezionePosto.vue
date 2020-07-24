<template>
  <div class="w-full bg-blue-800 flex flex-col">
    <div class="flex flex-col items-center md:flex-row">
      <div
        class="selezione w-102 h-98 flex flex-wrap mt-20 md:mt-32 p-12 border-t-2 border-blue-500 md:ml-6"
      >
        <label
          v-for="(n, i) in posti"
          :key="n.value"
          :for="i"
          :class="{'pointer-events-none' :pointerEvents}"
        >
          <input :id="i" type="checkbox" v-model="sits" @change="changeCheck();" :value="i" />
          <span class="text-center"></span>
        </label>
      </div>
      <div
        class="biglietti mb-10 md:mb-10 md:w-3/12 m-auto pr-8 pl-8 md:ml-24 mt-10 md:mt-20 flex text-lg flex-col justify-center space-y-12 w-12/12 bg-blue-700 h-98 rounded-lg relative"
      >
        <div
          v-for="(selezione, index) in selezioni"
          :key="index"
          class="w-full flex justify-between items-center"
        >
          {{selezione.name}}:
          <div
            class="flex justify-between w-32 bg-transparent h-8 text-blue-100 items-center p-2 rounded-lg"
          >
            <div class="text-3xl cursor-pointer" @click="decrement(selezione); changeTot();">-</div>
            <div class="text-2xl">{{selezione.value}}</div>
            <div
              class="text-3xl font-light cursor-pointer"
              @click="increment(selezione); changeTot(); "
            >+</div>
          </div>
        </div>
        <div class="text-xl w-full flex justify-between border-t pt-4">
          <div class="text-xl">Total:</div>
          <div class="text-xl">{{totale}},00€</div>
        </div>
        <div class="flex w-full">
          <div class="-mt-6" :class="{'pointer-events-none' :isDisabled}">
            <router-link to="/selezionepagamento">
              <button
                class="bg-blue-700 text-blue-100 box-border hover:font-bold rounded md:w-40 w-40 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none"
              >Payment</button>
            </router-link>
            <div
              class="text-red-400 absolute text-xs bottom-0 mb-2 flex-none leading-4 pr-10"
              v-if="isThere"
            >The number of seats selected must be equal to the number of tickets.</div>
          </div>
        </div>
      </div>
    </div>
    <SelezioneNav :uno="true" :due="true" class="absolute bottom-0 mb-10" />
  </div>
</template>
    

<script>
import { mapMutations, mapState } from "vuex";
import SelezioneNav from "./SelezioneNav.vue";
export default {
  components: {
    SelezioneNav,
  },
  data: () => {
    return {
      sits: [],
      tot: 15,
      prenotazioni: 1,
      postoCliccabile: false,
      controllo: false,
    };
  },
  computed: {
    ...mapState(["check", "posti", "totale", "selezioni"]),
    isDisabled() {
      return this.prenotazioni != this.sits.length || this.prenotazioni == 0;
    },
    pointerEvents() {
      return this.prenotazioni <= this.sits.length;
    },
    isThere() {
      return this.prenotazioni != this.sits.length && this.prenotazioni != 0;
    },
  },
  methods: {
    ...mapMutations(["CHANGE_CHECK", "CHANGE_TOTALE"]),
    changeCheck: function () {
      this.CHANGE_CHECK(this.sits);
    },
    changeTot: function () {
      this.CHANGE_TOTALE(this.tot);
    },
    increment: function (elem) {
      elem.value++;
      this.prenotazioni++;
      this.tot += elem.increment;
    },
    decrement: function (elem) {
      if (elem.value > 0) {
        this.prenotazioni--;
        elem.value--;
        this.tot -= elem.increment;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .selezione {
    width: 350px;
    height: 100%;
    padding: 10px 0;
  }
}
span {
  width: 50px;
  height: 40px;
  border: 2px solid #2a4365;

  display: inline-block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid #4299e1;
  transition: all linear 0.3s;
  margin: 0 5px;
}
@media screen and (max-width: 600px) {
  span {
    width: 24px;
    height: 20px;
    margin: 0 1;
  }
}
input {
  display: none;
  &:checked ~ span {
    background: #4299e1;
    border-color: #4299e1;
    pointer-events: auto;
    border-bottom: 2px solid #ebf8ff;
  }
}
</style>