<template>
  <div id="DateComp" class="pointer-events-none z-20  w-full">
    <div class="pointer-events-auto mt-8 text-blue-100 w-screen">
      <DatePicker
        class="outline-none z-auto"
        :value="date"
        :popover="{ placement: 'bottom', visibility: 'click' }"
        :min-date="new Date()"
        :max-date="dateLimit.$d"
        @input="changeDate"
      >
        <button class="focus:outline-none border-none w-8 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-8 h-8 fill-current">
            <path
              d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
            />
          </svg>
        </button>
      </DatePicker>
      <div class="flex justify-around">
        <div class="data text-xl">{{date.getDate()}}/{{date.getMonth()}}/{{date.getFullYear()}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import dayjs from "dayjs";
import { mapState } from "vuex";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  components: {
    DatePicker
  },
  data: () => {
    return {
      newResults: []
    };
  },
  computed: {
    ...mapState(["showNav", "results", "date"]),
    dateLimit() {
      return dayjs().add(2, "week");
    }
  },
  methods: {
    ...mapMutations(["CHANGE_DATE"]),
    changeDate: function(date) {
      this.CHANGE_DATE(date);
    }
  }
};
</script>
<style scoped>
button {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>