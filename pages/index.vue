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
        <div class="content-catalog-container" style="gap: 40px">
          <!-- <div
            v-for="item in items?.actual"
            :key="item.id"
            class="content-catalog__item"
          >
            <ElementCard :item="item" :season="false" />
          </div> -->
          <div v-for="item in items" :key="item">
            <NuxtLink to="/bags">
              <div class="catalog__elem">
                <div class="catalog__elem-images">
                  <SliderCard />
                  <span class="catalog__elem-sale">-50%</span>
                </div>
                <div class="catalog__elem-info">
                  <div class="catalog__elem-info_price">
                    <p>{{ item.price_sale }} ₽</p>
                    <span class="catalog__elem-info_price-span"
                      >{{ item.price }} ₽</span
                    >
                  </div>
                  <h3 class="catalog__elem-info_title">{{ item.name }}</h3>
                  <span class="catalog__elem-info-new">Новинка</span>
                  <div class="catalog__elem-info_reiting">
                    <div class="catalog__elem-info_star">
                      <img src="@/assets/images/svg/star.svg" alt="star" />
                      <img src="@/assets/images/svg/star.svg" alt="star" />
                      <img src="@/assets/images/svg/star.svg" alt="star" />
                      <img src="@/assets/images/svg/star.svg" alt="star" />
                      <img src="@/assets/images/svg/star.svg" alt="star" />
                    </div>
                    <span>{{ item.otzyv }} отзывов </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="content-catalog">
        <h2>Сезонные предложения</h2>
        <div class="content-catalog-container" style="gap: 10px">
          <!-- <div
            v-for="item in items?.season"
            :key="item.id"
            class="content-catalog__item"
          >
            <ElementCard :season="true" :item="item" />
          </div> -->
          <div v-for="seas in season" :key="seas">
            <NuxtLink to="/bags">
              <div class="catalog__elem">
                <div class="catalog__elem-images">
                  <img src="@/assets/images/кед.png" alt="png" />
                </div>
                <div class="catalog__elem-info">
                  <div class="catalog__elem-info_price">
                    <p>{{ seas.price_sale }} ₽</p>
                    <span class="catalog__elem-info_price-span"
                      >{{ seas.price }} ₽</span
                    >
                  </div>
                  <h3 class="catalog__elem-info_title">{{ seas.name }}</h3>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="head-right" style="margin-bottom: 40px">
        <img src="@/assets/images/banner/head-right-banner.png" alt="banner" />
        <img src="@/assets/images/banner/head-right-banner.png" alt="banner" />
      </div>
      <div class="content-catalog-container">
        <!-- <div
            v-for="item in items?.actual"
            :key="item.id"
            class="content-catalog__item"
          >
            <ElementCard :item="item" :season="false" />
          </div> -->
        <div v-for="item in items" :key="item">
          <NuxtLink to="/bags">
            <div class="catalog__elem" style="margin-bottom: 40px">
              <div class="catalog__elem-images">
                <SliderCard />
                <span class="catalog__elem-sale">-50%</span>
              </div>
              <div class="catalog__elem-info">
                <div class="catalog__elem-info_price">
                  <p>{{ item.price_sale }} ₽</p>
                  <span class="catalog__elem-info_price-span"
                    >{{ item.price }} ₽</span
                  >
                </div>
                <h3 class="catalog__elem-info_title">{{ item.name }}</h3>
                <span class="catalog__elem-info-new">Новинка</span>
                <div class="catalog__elem-info_reiting">
                  <div class="catalog__elem-info_star">
                    <img src="@/assets/images/svg/star.svg" alt="star" />
                    <img src="@/assets/images/svg/star.svg" alt="star" />
                    <img src="@/assets/images/svg/star.svg" alt="star" />
                    <img src="@/assets/images/svg/star.svg" alt="star" />
                    <img src="@/assets/images/svg/star.svg" alt="star" />
                  </div>
                  <span>{{ item.otzyv }} отзывов </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ElementCard from '@/components/ElementCard.vue'

// import { ItemApi } from '@/services/api'
import SliderCard from '@/components/CardSlider.vue'

import '@/scss/globals.scss'

export default {
  name: 'IndexPage',
  components: {
    // ElementCard,
    SliderCard,
  },
  data() {
    return {
      items: [
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
        {
          name: 'Толстовка GreenBody',
          price: '899',
          price_sale: '599',
          otzyv: '158',
        },
      ],
      season: [
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
        { name: 'Кроссовки SpikeSt', price: '899', price_sale: '599' },
      ],
    }
  },

  // data() {
  //   return {
  //     items: null,
  //   }
  // },

  // async mounted() {
  //   try {
  //     const res = await ItemApi.getItems()

  //     this.items = res
  //   } catch (error) {
  //     // В идеале показывать пользователю.
  //     // eslint-disable-next-line no-console
  //     console.error(error)
  //   }
  // },
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

.catalog__elem {
  max-width: 260px;
  cursor: pointer;
  position: relative;
  &-images {
    background: #f7f8fc;
    border-radius: 10px;
    position: relative;
    padding: 49px 28px 80px 27px;
  }
  &-sale {
    position: absolute;
    bottom: 13px;
    left: 10px;
    background: #ff99ff;
    border-radius: 4px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    padding: 1px 4px 1px 5px;
  }
  &-info {
    &_price {
      display: flex;
      align-items: center;
      p {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 27px;
        color: #000000;
        margin-right: 5px;
      }
      &-span {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #393939;
        position: relative;
      }
      span:before {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 2px;
        background: #ff99ff;
        top: 10px;
        transform: rotate(3deg);
      }
    }
    &_title {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
    }
    &_reiting {
      display: flex;
      align-items: center;
      margin-top: 6px;
      .catalog__elem-info_star {
        margin-right: 5px;
        img {
        }
      }
      span {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #4361ee;
      }
    }
    &-new {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: #ff99ff;
    }
  }
}
@media screen and (max-width:992px) {
.content-catalog-container {
  gap: 20px !important;
  justify-content: center;
}
.content .head-right {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content .head-right img {
  width: 100%;
  max-height: 187px;
  max-width: 100%;
}
}
</style>
