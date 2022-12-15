<template>
  <li class="cart-product">
    <div class="cart-product__select">
      <label for="select-product-1" class="checkbox">
        <input
          id="select-product-1"
          type="checkbox"
          class="checkbox__input"
          :checked="checked"
          @on-change="handleChange"
        />
      </label>
    </div>
    <div class="cart-product__image">
      <img :src="product.image" alt="image - Кроссовки SpikeStreet" />
    </div>
    <div class="cart-product__body">
      <div class="cart-product__header">
        <div class="cart-product__info">
          <h3 class="cart-product__title">
            {{ product.category }} <span>{{ product.title }}</span>
          </h3>
          <p class="cart-product__description">
            {{ product.description }}
          </p>
          <NuxtLink to="/product" class="cart-product__brand">
            {{ product.brand }}
          </NuxtLink>
        </div>
        <div class="cart-product__price">
          <span class="cart-product__price-standard"
            >{{ product.discountPrice || product.price }} ₽</span
          >
          <span
            v-if="product.discountPrice"
            class="cart-product__price-discount"
            >{{ product.price }} ₽</span
          >
        </div>
      </div>
      <div class="cart-product__count">
        <button :disabled="product.count === 1" @click="decrement(product.id)">
          <svg-icon name="cart/minus" />
        </button>
        <span>{{ product.count }}</span>
        <button @click="increment(product.id)">
          <svg-icon name="cart/plus" />
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CartProductCard',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: null,
    },
    increment: {
      type: Function,
      default: null,
    },
    decrement: {
      type: Function,
      default: null,
    },
    onChecked: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleChange(e) {
      this.props.onChecked(e.target.checked, this.product.id)
    },
  },
}
</script>

<style lang="scss" scoped>
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

    background: #f7f8fc;
    border-radius: 10px;
    overflow: hidden;
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
    background: #f7f8fc;
    padding: 5px 10px;
    border: 1px solid #d9dffc;
    border-radius: 10px;

    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
    gap: 20px;

    span {
      text-align: center;
      min-width: 10px;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      width: 14px;
      height: 14px;
      padding: 0;
      transition: opacity 0.25s ease-in-out;
      &:disabled {
        opacity: 0.2;
        pointer-events: none;
      }
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>