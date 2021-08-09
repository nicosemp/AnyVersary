<template>
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
    {{ `${versary.nth}: ${versary.date}` }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      showPast: false,
    };
  },
  props: {
    versaries: { type: Array, required: true },
  },
};
</script>

<style lang="sass" scoped>
.past-versary
  color: #aaa
</style>
