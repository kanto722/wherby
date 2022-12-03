<template>
  <div>
    <div class="navigation-wrapper">
      <div ref="slider" class="keen-slider">
        <div class="keen-slider__slide card-slider-img">
          <img src="@/assets/images/force.png" alt="force" />
        </div>
        <div class="keen-slider__slide card-slider-img">
          <img src="@/assets/images/force.png" alt="force" />
        </div>
        <div class="keen-slider__slide card-slider-img">
          <img src="@/assets/images/force.png" alt="force" />
        </div>
        <div class="keen-slider__slide card-slider-img">
          <img src="@/assets/images/force.png" alt="force" />
        </div>
      </div>
    </div>
    <div v-if="slider" class="dots">
      <button
        v-for="(_slide, idx) in dotHelper"
        @click="slider.moveToIdx(idx)"
        :class="{ dot: true, active: current === idx }"
        :key="idx"
      ></button>
    </div>
  </div>
</template>

<script>
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
export default {
  name: 'SliderCard',
  computed: {
    dotHelper() {
      return this.slider
        ? [...Array(this.slider.track.details.slides.length).keys()]
        : []
    },
  },
  data() {
    return {
      current: 0,
      slider: null,
    }
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      initial: this.current,
      slideChanged: (s) => {
        this.current = s.track.details.rel
      },
    })
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy()
  },
}
</script>

<style lang="scss" scoped>
[class^='number-slide'],
[class*=' number-slide'] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 200px;
}
.navigation-wrapper {
  position: relative;
}
.dots {
  display: flex;
  padding: 10px 0;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  bottom: -30px;
}
.dot {
  border: none;
  width: 0px;
  height: 0px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 4px;
  padding: 4px;
  cursor: pointer;
}
.dot:focus {
  outline: none;
}
.dot.active {
  background: #4361EE;
}
.card-slider-img {
  min-width: 205px !important;
  max-width: 100% !important;
}
</style>
