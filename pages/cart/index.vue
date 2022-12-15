<template>
  <div class="cart">
    <div class="container">
      <div class="cart__title">
        <h2 class="cart__title-text">Корзина</h2>
        <p class="cart__title-count">{{ items.length }} товара</p>
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
            <button class="cart__remove-selected" @click="clearCart">
              <img src="@/assets/images/svg/blue-close.svg" alt="cross" />
              <!-- <span>Удалить выбранные</span> -->
              <span>Очистить корзину</span>
            </button>
          </div>
          <ul v-if="items.length" class="cart__products cart-container">
            <CartProductCard
              v-for="item in items"
              :key="item.id"
              :product="item"
              :checked="item?.checked"
              :decrement="decrementProduct"
              :increment="incrementProduct"
              :on-checked="onChecked"
            />
          </ul>
          <div v-else class="cart-container">
            <span> В корзине сейчас пусто </span>
          </div>
        </div>
        <div class="cart__sidebar">
          <div class="cart__info cart-info cart-container">
            <div class="cart-info__title">
              <span class="cart-info__title-label">Итого:</span>
              <span class="cart-info__title-value">{{ totalPrice }} ₽</span>
            </div>
            <ul class="cart-info__list cart-info__list_with-lines">
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
            <div class="cart-info__title cart-info__title_delivery">
              <span class="cart-info__title-label">Доставка:</span>
              <span class="cart-info__title-value">Пункт выдачи</span>
            </div>
            <ul class="cart-info__list">
              <li class="cart-info__item">
                <div class="cart-info__item-label">Время работы:</div>
                <div class="cart-info__item-value">Пн-Вс 9:00-19:00</div>
              </li>
              <li class="cart-info__item">
                <div class="cart-info__item-label">Дата:</div>
                <div class="cart-info__item-value">20-23 сентября</div>
              </li>
              <li class="cart-info__item">
                <div class="cart-info__item-label">Адрес:</div>
                <div class="cart-info__item-value">
                  Москва (Россия) Пушкина 5к3
                </div>
              </li>
            </ul>
          </div>
          <button class="cart__checkout">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductCard from '@/components/cards/CartProduct.vue'
export default {
  name: 'CartPage',

  components: { CartProductCard },
  computed: {
    items() {
      return this.$store.state.cart.items
    },
    totalPrice() {
      return this.$store.state.cart.items.reduce(
        (acc, item) => (acc += (item.discountPrice || item.price) * item.count),
        0
      )
    },
  },
  mounted() {
    this.$store.commit('cart/add', {
      image: require('@/assets/images/sneakers.png'),
      category: 'Кроссовки',
      title: 'SpikeStreet',
      description: 'цвет белый, размер RU 42 / UK 9.0...',
      brand: 'Arduino',
      price: 599,
      discountPrice: null,
      count: 1,
      id: 123,
    })
  },

  methods: {
    incrementProduct(id) {
      this.$store.commit('cart/incrementProduct', id)
    },
    decrementProduct(id) {
      this.$store.commit('cart/decrementProduct', id)
    },
    clearCart() {
      this.$store.commit('cart/clear')
    },
    onChecked(id, checked) {
      this.$store.commit('cart/changeChecked', id, checked)
    },
  },
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
}

.cart {
  background: #f7f8fc;
  padding: 50px 0;

  // .cart_title
  &__title {
    display: flex;
    align-items: baseline;
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
    margin-top: 15px;
    border: none;

    width: 100%;
    padding: 30px 10px;
    background: #d9ed4a;
    border-radius: 15px;

    font-family: 'Manrope';
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #393939;
    cursor: pointer;
    transition: background 0.25s ease-in-out;

    &:hover {
      background: #e6fb50;
    }
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

.cart-info {
  // .cart-info__title
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    font-family: 'Manrope';
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    margin-bottom: 20px;

    // .cart-info__title-label
    &-label {
    }

    // .cart-info__title-value
    &-value {
      text-align: right;
    }

    &_delivery {
      margin-bottom: 10px;

      .cart-info__title-value {
        font-family: 'Manrope';
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-align: right;
        text-decoration-line: underline;

        color: #ff99ff;
      }
    }
  }

  // .cart-info__list
  &__list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &_with-lines {
      padding: 20px 0;
      border-top: 1px solid #d9dffc;
      border-bottom: 1px solid #d9dffc;
      margin: 0 0 25px;
    }
  }

  // .cart-info__item
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    font-family: 'Manrope';
    font-size: 16px;
    line-height: 22px;

    // .cart-info__item-label
    &-label {
      color: #4361ee;
      font-weight: 600;
    }

    // .cart-info__item-value
    &-value {
      text-align: right;
      font-weight: 400;
      color: #393939;
      max-width: 150px;
    }
  }
}
</style>