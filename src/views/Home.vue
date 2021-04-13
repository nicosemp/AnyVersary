<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-md-4 col-xl-3 mb-3 mb-md-0 text-center">
        <h2 class="mb-3">Anniversary</h2>
        <DatePicker
          v-model="anniversaryDate"
          mode="dateTime"
          :timezone="timezone"
          :first-day-of-week="2"
        />
      </div>

      <div class="col-md-8 col-xl-9">
        <h2 class="text-center mb-3">AnyVersaries</h2>

        <div class="row">
          <AnyVersary
            name="Second"
            type="seconds"
            :startInterval="10000000"
            :anniversary="anniversaryUnix"
            :now="nowUnix"
          />
          <AnyVersary
            name="Minute"
            type="minutes"
            :startInterval="100000"
            :anniversary="anniversaryUnix"
            :now="nowUnix"
          />
          <AnyVersary
            name="Hour"
            type="hours"
            :startInterval="1000"
            :anniversary="anniversaryUnix"
            :now="nowUnix"
          />
          <AnyVersary
            name="Day"
            type="days"
            :startInterval="100"
            :anniversary="anniversaryUnix"
            :now="nowUnix"
          />
          <AnyVersary
            name="Week"
            type="weeks"
            :startInterval="25"
            :anniversary="anniversaryUnix"
            :now="nowUnix"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";

import AnyVersary from "@/components/AnyVersary";

export default {
  name: "Home",
  components: {
    DatePicker,
    AnyVersary,
  },
  data() {
    return {
      anniversaryDate: new Date(),
      timezone: "",
      now: new Date(),
      timer: "",
    };
  },
  computed: {
    nowUnix() {
      return parseInt(this.now.getTime() / 1000);
    },
    anniversaryUnix() {
      return parseInt(this.anniversaryDate.getTime() / 1000);
    },
    secondVersary() {
      if (isNaN(this.anniversaryUnix)) return null;
      return this.nowUnix - this.anniversaryUnix;
    },
  },
  created() {
    // Timer to update current Date
    // this.timer = setInterval(this.updateNow, 10000);
  },
  methods: {
    updateNow() {
      /**
       * Updates the current Date
       */
      this.now = new Date();
    },
  },
};
</script>
