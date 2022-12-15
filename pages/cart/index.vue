<template>
  <div class="cart">
    <div class="container">
      <div class="cart__title">
        <h2 class="cart__title-text">Корзина</h2>
        <p class="cart__title-count">3 товара</p>
      </div>
      <div class="cart__content">
        <div class="cart__body">
          <div class="cart__header cart-container cart-container_header">
            <div class="cart__select-all">
              <label for="select-all" class="checkbox">
                <input
                  id="select-all"
                  type="checkbox"
                  class="checkbox__input"
                />
                <span class="checkbox__text">Выбрать все</span>
              </label>
            </div>
            <button class="cart__remove-selected">
              <img src="@/assets/images/svg/blue-close.svg" alt="cross" />
              <span>Удалить выбранные</span>
            </button>
          </div>
          <ul class="cart__products cart-container">
            <li class="cart__product cart-product">
              <div class="cart-product__select">
                <label for="select-product" class="checkbox">
                  <input
                    id="select-product"
                    type="checkbox"
                    class="checkbox__input"
                  />
                </label>
              </div>
              <div class="cart-product__image">
                <img
                  src="@/assets/images/sneakers.png"
                  alt="image - Кроссовки SpikeStreet"
                />
              </div>
              <div class="cart-product__body">
                <div class="cart-product__header">
                  <div class="cart-product__info">
                    <h3 class="cart-product__title">
                      Кроссовки <span>SpikeStreet</span>
                    </h3>
                    <p class="cart-product__description">
                      цвет белый, размер RU 42 / UK 9.0...
                    </p>
                    <NuxtLink to="/product" class="cart-product__brand">
                      Arduino
                    </NuxtLink>
                  </div>
                  <div class="cart-product__price">
                    <span class="cart-product__price-standard">599 ₽</span
                    ><span class="cart-product__price-discount">899 ₽</span>
                  </div>
                </div>
                <div class="cart-product__count cart-container cart-container_count">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="cart__sidebar">
          <div class="cart__info cart-info cart-container">
            <div class="cart-info__title">
              <span class="cart-info__item-label">Итого:</span>
              <span class="cart-info__item-value">1797 ₽</span>
            </div>
            <ul class="cart-info__list">
              <li class="cart-info__item">
                <div class="cart-info__item-label">Ваша корзина:</div>
                <div class="cart-info__item-value">3 товара, 850 гр</div>
              </li>
              <li class="cart-info__item">
                <div class="cart-info__item-label">Скидка:</div>
                <div class="cart-info__item-value">-900 ₽</div>
              </li>
              <li class="cart-info__item">
                <div class="cart-info__item-label">Доставка:</div>
                <div class="cart-info__item-value">Бесплатно</div>
              </li>
            </ul>
            <div class="cart-info__title">
              <span class="cart-info__title-label">Доставка:</span>
              <span class="cart-info__title-value">Пункт выдачи</span>
            </div>
          </div>
          <button class="cart__checkout">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
}
</script>

<style lang="scss" scoped>
.cart-container {
  padding: 25px;
  background: #ffffff;

  border: 1px solid #d9dffc;
  border-radius: 10px;

  &_header {
    padding: 15px 25px;
  }
  &_count {
    padding: 8px 10px;
  }
}

.cart {
  background: #f7f8fc;
  padding: 50px 0;
  // .cart_title
  &__title {
    display: flex;
    align-items: flex-end;
    color: #000000;
    font-family: 'Manrope';
    font-style: normal;
    gap: 10px;
    &-text {
      font-weight: bold;
      font-size: 24px;
      line-height: 33px;
    }

    &-count {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;

      color: #9dadf6;
    }
  }

  // .cart__content
  &__content {
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    gap: 40px;
  }

  // .cart__body
  &__body {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-basis: 100%;
  }

  // .cart__header
  &__header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  // .cart__select-all
  &__select-all {
  }

  // .cart__remove-selected
  &__remove-selected {
    background: none;
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: 'Manrope';
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;

    color: #4361ee;
    border: none;
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  // .cart__products
  &__products {
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
  }

  // .cart__product
  &__product {
    width: 100%;

    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: #d9dffc;

      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(25px);
    }
  }

  // .cart__sidebar
  &__sidebar {
    flex-basis: 360px;
    flex-shrink: 0;
  }

  // .cart__info
  &__info {
  }

  // .cart__checkout
  &__checkout {
  }
}
.checkbox {
  // .checkbox__input
  &__input {
  }

  // .checkbox__text
  &__text {
  }
}
.cart-product {
  display: flex;
  gap: 30px;
  // .cart-product__select
  &__select {
  }

  // .cart-product__image
  &__image {
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  // .cart-product__body
  &__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  // .cart-product__header
  &__header {
    display: flex;
    justify-content: space-between;
  }

  // .cart-product__info
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  // .cart-product__title
  &__title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    color: #000000;

    span {
      font-weight: bold;
    }
  }

  // .cart-product__description
  &__description {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #c6c6c6;
    /* TODO: добавить ограничитель по символам */
  }

  // .cart-product__brand
  &__brand {
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }

  // .cart-product__price
  &__price {
    font-family: 'Manrope';
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  // .cart-product__price-standard
  &__price-standard {
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
  }

  // .cart-product__price-discount
  &__price-discount {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #393939;
    position: relative;
    padding-left: 10%;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: center;
      width: 105%;
      height: 2px;
      background: #ff99ff;
      transform: translate(-45%, -50%) rotate(3deg);
    }
  }

  // .cart-product__count
  &__count {
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-self: center;
    margin-top: auto;
    margin-left: auto;

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }
}
.cart-info {
  // .cart-info__title
  &__title {
  }

  // .cart-info__item-label
  &__item-label {
  }

  // .cart-info__item-value
  &__item-value {
  }

  // .cart-info__list
  &__list {
  }

  // .cart-info__item
  &__item {
  }

  // .cart-info__title-label
  &__title-label {
  }

  // .cart-info__title-value
  &__title-value {
  }
}
</style>