<template>
  <div class="product">
    <div class="container">
      <div class="product-row">
        <div class="product-content">
          <div class="product-navigation">
            <a class="product-navigation__link" href="#">Одежда</a> /
            <a class="product-navigation__link" href="#">Мужская одежда</a> /
            <a class="product-navigation__link" href="#">Блузы и рубашки</a>
          </div>
          <h2 class="product-title">Блузы и рубашки</h2>
          <div class="product-container">
            <FillterType />
          </div>
        </div>
        <div class="product-wrapper">
          <div class="product-wrapper__block">
            <div class="product-wrapper__block__item">Цена</div>
            <div class="product-wrapper__block__item">Рейтинг</div>
            <div class="product-wrapper__block__item">Скидка</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FillterType from '~/components/FillterType.vue'
export default {
  name: 'typeProduct',
  components: {
    FillterType,
  },
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 100px;
  &-row {
    display: flex;
  }
  &-content {
    display: flex;
    flex-direction: column;
  }
  &-navigation {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #9dadf6;
    &__link {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #9dadf6;
    }
    &__link:last-child {
      color: #4361ee;
    }
  }
  &-title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
  }
  &-wrapper {
    margin-top: 25px;
    &__block {
      display: flex;
      &__item {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #393939;
        margin-right: 19px;
      }
      &__item:last-child {
        margin-right: 0;
      }
    }
  }
  &-container {
    margin-top: 20px;
  }
}
</style>
