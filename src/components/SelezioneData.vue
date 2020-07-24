<template>
  <div class="w-full h-full bg-blue-800 flex flex-col items-center">
    <div
      class="w-10/12 flex flex-col md:flex-row mt-20 md:-mt-6 md:items-center m-auto md:m-0 h-full"
    >
      <SliderMovie
        class="md:ml-32 m-auto flex-1"
        :image="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
      />
      <div class="md:ml-20 w-full flex-col mt-10 md:mt-0">
        <div>Select the date:</div>

        <div class="data pointer-events-auto mt-4 relative text-blue-100 flex h-10">
          <div class="absolute left-0">
            <DatePicker
              :popover="{ placement: 'bottom', visibility: 'click' }"
              :min-date="new Date()"
              :value="date"
              @input="changeDate2"
            >
              <input
                placeholder="10/10/2020"
                id="date"
                slot-scope="{ inputProps, inputEvents }"
                class="border-blue-100 border-b text-center focus:outline-none text-blue-100 w-64 bg-transparent h-10 text-xl placeholder-blue-100 cursor-pointer placeholder-opacity-75"
                v-bind="inputProps"
                v-on="inputEvents"
              />
            </DatePicker>
          </div>
          <div class="absolute left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="icon w-8 h-8 fill-current opacity-75"
            >
              <path
                d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
              />
            </svg>
          </div>
        </div>
        <div class="mt-10">Select a time:</div>

        <div class="flex flex-wrap justify-between w-full md:w-8/12 mt-5">
          <label v-for="(orario, i) in orari" :key="orario" :for="i">
            <input
              class="input"
              :id="i"
              type="radio"
              v-model="checked"
              @change="changeOrario"
              :value="orario"
            />
            <span
              class="span bg-blue-700 text-blue-100 hover:font-bold rounded hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none mb-5"
            >{{orario}}</span>
          </label>
        </div>
        <div
          class="w-full md:w-8/12 flex justify-around md:justify-between md:flex-row-reverse mt-5"
        >
          <router-link to="/selezioneposto">
            <button
              class="bg-blue-800 text-blue-100 box-border hover:font-bold rounded md:w-40 mr-2 w-40 border border-blue-100 hover:bg-blue-100 hover:text-blue-900 h-10 focus:outline-none mb-10 md:mb-0"
            >Seat selection</button>
          </router-link>
        </div>
      </div>
    </div>
    <SelezioneNav :uno="true" class="absolute bottom-0 mb-10" />
  </div>
</template>
<script>
import SliderMovie from "./SliderMovie.vue";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import { mapState, mapMutations } from "vuex";
import SelezioneNav from "./SelezioneNav.vue";
export default {
  components: {
    SliderMovie,
    DatePicker,
    SelezioneNav,
  },
  data: () => {
    return {
      checked: [],
      orari: ["12,00", "16,00", "18,00", "21,00"],
    };
  },
  computed: {
    ...mapState(["showNav", "results", "orario", "date"]),
    movie() {
      return this.results[this.$route.query.indice];
    },
  },
  methods: {
    ...mapMutations(["CHANGE_ORARIO", "CHANGE_DATE"]),
    changeOrario: function () {
      this.CHANGE_ORARIO(this.checked);
    },
    changeDate2: function (date) {
      this.CHANGE_DATE(date);
    },
  },
};
</script>
<style lang="scss" scoped>
.data {
  width: 50%;
}
.input {
  display: none;
  &:checked ~ .span {
    background: #ebf8ff;
    color: #2a4365;
    font-weight: bold;
  }
}
.span {
  width: 160px;
  height: 40px;
  text-align: center;
  padding: 10px;
  border: none;
}
@media screen and (max-width: 992px) {
  .span {
    width: 120px;
  }
}
</style>