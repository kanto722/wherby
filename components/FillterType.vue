<template>
  <div class="product-fillter">
    <div class="product-fillter__item">
      <p class="product-fillter__item__title">Бренд</p>
      <input class="product-fillter__item__search" placeholder="Найти бренд..."/>
      <div class="product-fillter__item__elem">
        <label class="product-fillter__elem" for="item1">
          <input id="item1" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Adidas</p>
        </label>
        <label class="product-fillter__elem" for="item2">
          <input id="item2" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Bershka</p>
        </label>
        <label class="product-fillter__elem" for="item3">
          <input id="item3" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
        </label>
        <label class="product-fillter__elem" for="item4">
          <input id="item4" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
        </label>
        <label class="product-fillter__elem" for="item5">
          <input id="item5" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
        </label>
        <label class="product-fillter__elem" for="item6">
          <input id="item6" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FillterType'
}
</script>

<style lang="scss" scoped>
.product-fillter {
  &__item {
    width: 260px;
    &__title {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
    }
    &__search {
      background: #F7F8FC;
      border-radius: 7px;
      border: none;
      padding: 3px 0px 3px 15px;
      margin-top: 15px;
      margin-bottom: 12px;
      max-width: 200px;
      width: 100%;
    }
    &__search::placeholder {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #C6C6C6;
      border: none;
    }
    &__elem {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #393939;
    }
  }
  &__elem {
    display: flex;
  }
  &__input {

  }
  &__text {

  }
}
</style>
