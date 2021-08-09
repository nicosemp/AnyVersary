<template>
  <div class="py-5">
    <h2 class="text-center mb-3">AnyVersaries Calendar</h2>

    <Calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="versaries"
      disable-page-swipe
      is-expanded
    >
      <template #day-content="{ day, attributes }">
        <div class="day-content d-flex flex-column h-100">
          <span class="day-label">{{ day.day }}</span>
          <div class="day-events flex-grow-1">
            <p
              v-for="(attr, i) in attributes"
              :key="i"
              class="p-1 mt-0 mb-1 bg-primary text-white"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<script>
import { Calendar } from "v-calendar";

export default {
  components: { Calendar },
  data() {
    return {
      masks: {
        weekdays: "WWW",
      },
    };
  },
  props: {
    versaries: { type: Array, required: true },
  },
};
</script>

<style lang="sass" scoped>
.day-content
  z-index: 10
  overflow: hidden
  .day-label
    font-size: 14px
    color: var(--gray-900)
  .day-events
    overflow: auto
    p
      font-size: 12px
      line-height: 1.25rem
      border-radius: 3px

::-webkit-scrollbar
  width: 0px
::-webkit-scrollbar-track
  display: none

::v-deep .custom-calendar.vc-container
  --day-border: 1px solid #b8c2cc
  --day-border-highlight: 1px solid #b8c2cc
  --day-width: 90px
  --day-height: 10vh
  --weekday-bg: #f8fafc
  --weekday-border: 1px solid #eaeaea
  border-radius: 0
  width: 100%
  .vc-header
    background-color: #f1f5f8
    padding: 10px 0
  .vc-weeks
    padding: 0
  .vc-weekday
    background-color: var(--weekday-bg)
    border-bottom: var(--weekday-border)
    border-top: var(--weekday-border)
    padding: 5px 0
  .vc-day
    padding: 0 5px 3px 5px
    text-align: left
    height: var(--day-height)
    min-width: var(--day-width)
    background-color: white
    &.weekday-1,
    &.weekday-7
      background-color: #eff8ff
    &:not(.on-bottom)
      border-bottom: var(--day-border)
      &.weekday-1
        border-bottom: var(--day-border-highlight)
    &:not(.on-right)
      border-right: var(--day-border)
  .vc-day-dots
    margin-bottom: 5px
</style>
