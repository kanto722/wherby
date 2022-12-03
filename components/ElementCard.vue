<template>
  <div class="catalog__elem">
    <div class="catalog__elem-images">
      <SliderCard />
      <span v-if="!season" class="catalog__elem-sale">-50%</span>
    </div>
    <div class="catalog__elem-info">
      <div class="catalog__elem-info_price">
        <p>{{ item.item_price }} ₽</p>
        <span class="catalog__elem-info_price-span"
          >{{ item.sale_price }} ₽</span
        >
      </div>
      <h3 class="catalog__elem-info_title">{{ item.name }}</h3>
      <span v-if="!season" class="catalog__elem-info-new">Новинка</span>
      <div v-if="!season" class="catalog__elem-info_reiting">
        <div class="catalog__elem-info_star">
          <img src="@/assets/images/svg/star.svg" alt="star" />
          <img src="@/assets/images/svg/star.svg" alt="star" />
          <img src="@/assets/images/svg/star.svg" alt="star" />
          <img src="@/assets/images/svg/star.svg" alt="star" />
          <img src="@/assets/images/svg/star.svg" alt="star" />
        </div>
        <span> {{ item.comments_quantity }} отзывов </span>
      </div>
    </div>
  </div>
</template>

<script>
import SliderCard from '@/components/CardSlider.vue'
export default {
  name: 'ElementCard',
  components: {
    SliderCard,
  },
  props: {
    item: {
      comments_quantity: Number,
      en_type: String,
      item_id: String,
      item_price: Number,
      item_rating: String,
      name: String,
      photo: [String],
      sale_price: Number,
    },
    season: Boolean,
  },
}
</script>

<style lang="scss" scoped>
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
</style>
