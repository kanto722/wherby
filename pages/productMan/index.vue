<template>
  <div class="product">
    <div class="container">
      <div class="product-content">
        <div class="product-navigation">
          <a class="product-navigation__link" href="#">Одежда</a> /
          <a class="product-navigation__link" href="#">Мужская одежда</a> /
          <a class="product-navigation__link" href="#">Толстовки, свитшоты и худи</a>
        </div>
      </div>
      <div class="product-row">
        <div class="product-wrap">
          <h2 class="product-title">Толстовки, свитшоты и худи</h2>
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
          <div class="product-wrapper__content">
            <div v-for="item in items" :key="item">
              <NuxtLink to="/bags">
                <div class="catalog__elem" style="margin-bottom: 40px">
                  <div class="catalog__elem-images">
                    <img src="@/assets/images/man/6.jpg" alt="png" />
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
            <div v-for="twos in two" :key="twos">
              <NuxtLink to="/bags">
                <div class="catalog__elem" style="margin-bottom: 40px">
                  <div class="catalog__elem-images">
                    <img src="@/assets/images/man/8.jpg" alt="png" />
                    <span class="catalog__elem-sale">-50%</span>
                  </div>
                  <div class="catalog__elem-info">
                    <div class="catalog__elem-info_price">
                      <p>{{ twos.price_sale }} ₽</p>
                      <span class="catalog__elem-info_price-span"
                        >{{ twos.price }} ₽</span
                      >
                    </div>
                    <h3 class="catalog__elem-info_title">{{ twos.name }}</h3>
                    <span class="catalog__elem-info-new">Новинка</span>
                    <div class="catalog__elem-info_reiting">
                      <div class="catalog__elem-info_star">
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                      </div>
                      <span>{{ twos.otzyv }} отзывов </span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
            <div v-for="threes in three" :key="threes">
              <NuxtLink to="/bags">
                <div class="catalog__elem" style="margin-bottom: 40px">
                  <div class="catalog__elem-images">
                    <img src="@/assets/images/man/9.jpg" alt="png" />
                    <span class="catalog__elem-sale">-50%</span>
                  </div>
                  <div class="catalog__elem-info">
                    <div class="catalog__elem-info_price">
                      <p>{{ threes.price_sale }} ₽</p>
                      <span class="catalog__elem-info_price-span"
                        >{{ threes.price }} ₽</span
                      >
                    </div>
                    <h3 class="catalog__elem-info_title">{{ threes.name }}</h3>
                    <span class="catalog__elem-info-new">Новинка</span>
                    <div class="catalog__elem-info_reiting">
                      <div class="catalog__elem-info_star">
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                        <img src="@/assets/images/svg/star.svg" alt="star" />
                      </div>
                      <span>{{ threes.otzyv }} отзывов </span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FillterType from '~/components/FillterType.vue'
export default {
  name: 'TypeProduct',
  components: {
    FillterType,
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
      ],
      two: [
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
      three: [
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
    }
  },
}
</script>

<style lang="scss" scoped>
.product-wrapper__content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
}
.product-wrap {
  margin-right: 40px;
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
    img {
      width: 100%;
    }
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
.product-wrapper__content {
      max-width: 860px;

}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 100px;
  &-row {
    display: flex;
    flex-wrap: wrap;

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
    @media screen and (max-width:992px) {
      .product-row {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .product-wrapper__content {
        max-width: 100%;
        justify-content: center;
      }
    }
</style>
