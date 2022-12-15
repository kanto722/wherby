<template>
  <div class="content">
    <div class="container">
      <div class="head-top">
        <div>
          <!-- <img :src="require(`${items}`)" alt="banner" /> -->
          <img src="@/assets/images/banner/баннер.png" alt="banner" />
        </div>
      </div>
      <div class="head-right">
        <img src="@/assets/images/banner/head-right-banner.png" alt="banner" />
        <img src="@/assets/images/banner/head-right-banner.png" alt="banner" />
      </div>
      <div class="head-bottom">
        <img src="@/assets/images/banner/head-bottom-banner.png" alt="banner" />
      </div>
      <div class="content-catalog">
        <h2>Только до <span>15.01</span></h2>
        <div class="content-catalog-container">
          <div
            v-for="item in items?.actual"
            :key="item.id"
            class="content-catalog__item"
          >
            <ElementCard :item="item" :season="false" />
          </div>
        </div>
      </div>
      <div class="content-catalog">
        <h2>Сезонные предложения</h2>
        <div class="content-catalog-container">
          <div
            v-for="item in items?.season"
            :key="item.id"
            class="content-catalog__item"
          >
            <ElementCard :season="true" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElementCard from '@/components/ElementCard.vue'

import { ItemApi } from '@/services/api'

import '@/scss/globals.scss'

export default {
  name: 'IndexPage',
  components: {
    ElementCard,
  },

  data() {
    return {
      items: null,
    }
  },

  async mounted() {
    try {
      const res = await ItemApi.getItems()

      this.items = res
    } catch (error) {
      // В идеале показывать пользователю.
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .head-top {
    margin-top: 50px;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }
  .head-right {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    img {
      width: 100%;
      max-width: 560px;
      border-radius: 10px;
    }
  }
  .head-bottom {
    margin-top: 40px;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }
  .content-catalog {
    margin-top: 47px;
    margin-bottom: 115px;
    h2 {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;
      color: #000000;
      margin-bottom: 20px;
      span {
        color: #4361ee;
      }
    }
    &__item {
    }
    &-container {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
    }
  }
}
</style>
