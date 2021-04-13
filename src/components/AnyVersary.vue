<template>
  <div class="col-12 col-xl-6 mb-3">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ name }}versary</h4>

        <div class="d-flex align-items-center mb-3">
          <p class="me-3 mb-0">Interval:</p>
          <input
            type="number"
            class="form-control me-3"
            v-model.number="interval"
          />
        </div>

        <div class="d-flex align-items-center mb-3">
          <input type="checkbox" v-model="showPast" />
          <p class="ms-3 mb-0">Show past (20 max)</p>
        </div>

        <p
          v-for="versary in versaries"
          :key="versary"
          :class="{
            'd-none': versary.past && !showPast,
            'past-versary': versary.past,
          }"
        >
          {{ `${versary.nth} ${name}versary: ${versary.date}` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnyVersaries",
  data() {
    return {
      interval: this.startInterval,
      showPast: false,
      locale: navigator.language,
      pastToShow: 20,
      futureToShow: 5,
    };
  },
  props: {
    name: String,
    type: {
      validator: (value) => {
        // The type must match one of these strings
        return (
          ["seconds", "minutes", "hours", "days", "weeks"].indexOf(value) !== -1
        );
      },
    },
    startInterval: { type: Number, required: true },
    anniversary: Number,
    now: Number,
  },
  computed: {
    intervalSecs() {
      const intervalToSeconds = {
        seconds: this.interval,
        minutes: this.interval * 60,
        hours: this.interval * 60 * 60,
        days: this.interval * 60 * 60 * 24,
        weeks: this.interval * 60 * 60 * 24 * 7,
      };
      return intervalToSeconds[this.type];
    },
    versaries() {
      let versaries = [];
      const pastVersariesCount = Math.ceil(
        (this.now - this.anniversary) / this.intervalSecs
      );

      const start = Math.max(0, pastVersariesCount - this.pastToShow);
      const end = Math.min(start + 25, pastVersariesCount + this.futureToShow);

      for (let i = start; i < end; i++) {
        let versary = new Date(
          (this.anniversary + this.intervalSecs * i) * 1000
        );
        versaries.push({
          nth: this.toOrdinal(i),
          date: this.formatDate(versary),
          past: i < end - 5,
        });
      }

      return versaries;
    },
  },
  methods: {
    toOrdinal(n) {
      /**
       * Transform any integer to an ordinal position
       * @arg {int} n The number to be made ordinal
       */
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

<style lang="sass" scoped>
.past-versary
  color: #aaa
</style>
