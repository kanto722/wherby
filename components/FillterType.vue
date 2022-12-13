<template>
  <div class="product-fillter">
    <div class="product-fillter__item">
      <p class="product-fillter__item__title">Бренд</p>
      <input
        class="product-fillter__item__search"
        placeholder="Найти бренд..."
      />
      <div class="product-fillter__item__elem">
        <label class="product-fillter__elem" for="item1">
          <input id="item1" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Adidas</p>
          <span class="product-fillter__span"></span>
        </label>
        <label class="product-fillter__elem" for="item2">
          <input id="item2" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Bershka</p>
          <span class="product-fillter__span"></span>
        </label>
        <label class="product-fillter__elem" for="item3">
          <input id="item3" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
          <span class="product-fillter__span"></span>
        </label>
        <label class="product-fillter__elem" for="item4">
          <input id="item4" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
          <span class="product-fillter__span"></span>
        </label>
        <label class="product-fillter__elem" for="item5">
          <input id="item5" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
          <span class="product-fillter__span"></span>
        </label>
        <label class="product-fillter__elem" for="item6">
          <input id="item6" class="product-fillter__input" type="checkbox" />
          <p class="product-fillter__text">Valiri</p>
          <span class="product-fillter__span"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FillterType',
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
      background: #f7f8fc;
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
      color: #c6c6c6;
      border: none;
    }
    &__elem {
      max-height: 130px;
      overflow-y: scroll;
    }
  }

  &__elem {
    display: flex;
    position: relative;
    margin-bottom: 5px;
    cursor: pointer;
  }
  &__elem:last-child {
    margin-bottom: 0;
  }
  &__elem input:checked ~ .product-fillter__span {
    background-color: #2196f3;
  }
  &__elem input:checked ~ .product-fillter__span:after {
    display: block;
  }
  &__elem .product-fillter__span:after {
    left: 0px;
    top: 0px;
    width: 6px;
    height: 3px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &__text {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #393939;

    margin-left: 18px;
  }
  &__span {
    position: absolute;
    top: 5px;
    left: 0;
    height: 10px;
    width: 10px;
    background: #d9dffc;
    border-radius: 2px;
  }
  &__span:after {
    content: '';
    position: absolute;
    display: none;
  }
}
</style>
