<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-md-4 col-xl-3 mb-3 mb-md-0 text-center">
        <h2 class="mb-3">Anniversary</h2>
        <DatePicker
          v-model="anniversaryDate"
          mode="dateTime"
          :first-day-of-week="2"
        />
      </div>

      <div class="col-md-8 col-xl-9">
        <h2 class="text-center mb-3">AnyVersaries</h2>

        <div class="row">
          <div
            v-for="type in versaryTypes"
            :key="type.slug"
            class="col-12 col-xl-6 mb-3"
          >
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">{{ type.name }}versary</h4>
                <div class="d-flex align-items-center mb-3">
                  <p class="me-3 mb-0">Interval:</p>
                  <input
                    type="number"
                    class="form-control me-3"
                    v-model.number="type.interval"
                  />
                </div>

                <VersariesList :versaries="allVersaries[type.slug]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <VersariesCalendar :versaries="combinedVersaries" />
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";

import VersariesCalendar from "@/components/VersariesCalendar";
import VersariesList from "@/components/VersariesList";

export default {
  components: {
    DatePicker,
    VersariesCalendar,
    VersariesList,
  },
  data() {
    return {
      locale: navigator.language,
      anniversaryDate: new Date(),
      now: parseInt(new Date().getTime() / 1000),
      timer: "",

      versaryTypes: [
        { slug: "seconds", name: "Second", interval: 10000000 },
        { slug: "minutes", name: "Minute", interval: 100000 },
        { slug: "hours", name: "Hour", interval: 1000 },
        { slug: "days", name: "Day", interval: 100 },
        { slug: "weeks", name: "Week", interval: 25 },
      ],
      pastToShow: 20,
      futureToShow: 5,
    };
  },
  computed: {
    anniversaryUnix() {
      return parseInt(this.anniversaryDate.getTime() / 1000);
    },

    allVersaries() {
      let allVersaries = {};

      this.versaryTypes.forEach((type) => {
        let versaries = [];
        const pastVersariesCount = Math.ceil(
          (this.now - this.anniversaryUnix) / this.intervalSecs(type)
        );

        const start = Math.max(0, pastVersariesCount - this.pastToShow);
        const end = Math.min(
          start + 25,
          pastVersariesCount + this.futureToShow
        );

        for (let i = start; i < end; i++) {
          let versaryDate = new Date(
            (this.anniversaryUnix + this.intervalSecs(type) * i) * 1000
          );
          versaries.push({
            nth: this.toOrdinal(i),
            date: this.formatDate(versaryDate),
            past: i < end - 5,
            dates: versaryDate, // serve per il calendario
            type, // serve per il calendario
            customData: {
              title: `${this.toOrdinal(i)} ${
                type.name
              }versary: ${this.formatDate(versaryDate)}`,
            },
          });
        }
        allVersaries[type.slug] = versaries;
      });
      return allVersaries;
    },

    combinedVersaries() {
      let combinedVersaries = [];
      Object.values(this.allVersaries).forEach((versaries) => {
        combinedVersaries.push(...versaries);
      });
      return combinedVersaries;
    },
  },
  methods: {
    intervalSecs(type) {
      const intervalToSeconds = {
        seconds: type.interval,
        minutes: type.interval * 60,
        hours: type.interval * 60 * 60,
        days: type.interval * 60 * 60 * 24,
        weeks: type.interval * 60 * 60 * 24 * 7,
      };
      return intervalToSeconds[type.slug];
    },

    /**
     * Transform any integer to an ordinal position
     * @arg {int} n The number to be made ordinal
     */
    toOrdinal(n) {
      var s = ["th", "st", "nd", "rd"],
        v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    },

    formatDate(date) {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      let dateTimeFormat = new Intl.DateTimeFormat(this.locale, options);
      return dateTimeFormat.format(date);
    },
  },
};
</script>
