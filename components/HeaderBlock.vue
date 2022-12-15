<template>
  <div class="header">
    <div class="header-content">
      <div class="container">
        <div class="header-top">
          <a class="header-phone" href="tel:+79999999999">+7 (999) 999-99-99</a>
          <div class="header-top__info">
            <a href="#">Продавайте на <span>Wherby</span></a>
            <a href="#">Доставка и оплата</a>
            <a href="#">
              <span>Сообщить о проблеме</span>
            </a>
          </div>
        </div>
        <div class="header-bottom">
          <NuxtLink to="/" class="header-logo">
            <img src="@/assets/images/logo.png" alt="logo" />
          </NuxtLink>
          <ButtonStandard
            class="button-catalog"
            variant-type="no-background"
            :class="{ button_active: openCatalog }"
            @click.prevent="toggleOpenCatalog"
          >
            <template #prepend>
              <img
                v-if="!openCatalog"
                src="@/assets/images/svg/white-menu.svg"
                alt="menu"
              />
              <img
                v-else
                src="@/assets/images/svg/blue-close.svg"
                alt="close"
              />
            </template>
            Каталог
          </ButtonStandard>
          <div class="header-search">
            <input type="text" placeholder="Искать на wherby" />
            <a class="header-search_watch" href="#">
              <img src="@/assets/images/svg/search.svg" alt="search" />
            </a>
          </div>
          <div class="header-nav">
            <div class="header-nav-item">
              <img src="@/assets/images/svg/man.svg" alt="man" />
              <span>Войти</span>
            </div>
            <NuxtLink to="/cart" class="header-nav-item">
              <img src="@/assets/images/svg/buy.svg" alt="buy" />
              <span>Корзина</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div v-if="openCatalog" class="tabs">
      <div class="container">
        <ul class="tabs__list" role="tablist">
          <li class="tabs__item" role="presentation">
            <ButtonStandard
              class="tabs__link"
              role="tab"
              tabindex="0"
              :class="{ button_active: isActive('womens') }"
              @click.prevent="setActive('womens')"
            >
              Женщицы
            </ButtonStandard>
          </li>
          <li class="tabs__item" role="presentation">
            <ButtonStandard
              class="tabs__link"
              role="tab"
              tabindex="-1"
              :class="{ button_active: isActive('mans') }"
              @click.prevent="setActive('mans')"
            >
              Мужчины
            </ButtonStandard>
          </li>
          <li class="tabs__item" role="presentation">
            <ButtonStandard
              class="tabs__link"
              role="tab"
              tabindex="-1"
              :class="{ button_active: isActive('children') }"
              @click.prevent="setActive('children')"
            >
              Дети
            </ButtonStandard>
          </li>
        </ul>

        <section
          class="tabs__section tabs__section_fade"
          role="tabpanel"
          :class="{ tabs__section_show: isActive('womens') }"
        >
          <div class="tabs__body tabs-body">
            <h3 class="tabs-body__title">Одежда</h3>
            <ul class="tabs-body__content">
              <NuxtLink to="/productWomen">
                <li @click="toggleOpenCatalog" class="tabs-body__item">Блузы и рубашки</li>
              </NuxtLink>
              <NuxtLink to="/productWomenBru">
              <li @click="toggleOpenCatalog" class="tabs-body__item">Брюки, бриджи, капри</li>
              </NuxtLink>
              <NuxtLink to="/productWomenVerx">
              <li @click="toggleOpenCatalog" class="tabs-body__item">Верхняя одежда</li>
              </NuxtLink>
            </ul>
          </div>
          <div class="tabs__body tabs-body">
            <h3 class="tabs-body__title">Обувь</h3>
            <ul class="tabs-body__content">
              <NuxtLink to="/productWomenOby">
              <li @click="toggleOpenCatalog" class="tabs-body__item">Обувь</li>
              </NuxtLink>
            </ul>
          </div>
        </section>
        <section
          class="tabs__section tabs__section_fade"
          role="tabpanel"
          :class="{ tabs__section_show: isActive('mans') }"
        >
          <div class="tabs__body">
            <h3 class="tabs-body__title">Одежда</h3>
            <ul class="tabs-body__content">
              <NuxtLink to="/productMan">
              <li @click="toggleOpenCatalog" class="tabs-body__item">Толстовки, свитшоты и худи</li>
              </NuxtLink>
              <NuxtLink to="/productManBru">
              <li @click="toggleOpenCatalog" class="tabs-body__item">Брюки, бриджи, капри</li>
              </NuxtLink>
              <NuxtLink to="/productManOdex">
              <li @click="toggleOpenCatalog" class="tabs-body__item">Верхняя одежда</li>
              </NuxtLink>
            </ul>
          </div>
          <div class="tabs__body tabs-body">
            <h3 class="tabs-body__title">Обувь</h3>
            <ul class="tabs-body__content">
              <NuxtLink to="/productManObyv">
              <li @click="toggleOpenCatalog" class="tabs-body__item">Обувь</li>
              </NuxtLink>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div v-if="openCatalog" class="tabs-overlay" @click="toggleOpenCatalog" />
  </div>
</template>

<script>
import ButtonStandard from '@/components/ui/buttons/ButtonStandard.vue'

export default {
  name: 'NuxtHeader',
  components: {
    ButtonStandard,
  },
  data() {
    return {
      activeItem: 'womens',
      openCatalog: false,
    }
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
    },
    toggleOpenCatalog() {
      this.openCatalog = !this.openCatalog
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 2;

  &-content {
    background: #4361ee;
    padding-top: 21px;
    padding-bottom: 36px;
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
  }
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-phone {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #d9dffc;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 15px;

    a {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      text-align: right;
      color: #d9dffc;
    }
  }
}

.header-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  .header-logo {
    margin-right: 24px;

    img {
    }
  }

  .button-catalog {
    margin-right: 17px;
  }

  .header-search {
    max-width: 607px;
    width: 100%;
    position: relative;
    margin-right: 60px;

    input {
      padding: 13px 17px 13px 20px;
      background: #ffffff;
      border-radius: 15px;
      border: none;
      width: 100%;
      outline: none;
    }

    input::placeholder {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #c6c6c6;
    }

    &_watch {
      position: absolute;
      right: 20px;
      top: 8px;

      img {
      }
    }
  }

  .header-nav {
    display: flex;
    gap: 44px;

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      img {
        margin-bottom: 2px;
      }

      span {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        text-align: center;

        /* Голубой оч. тусклый */

        color: #d9dffc;
      }
    }

    &-item:last-child {
      margin-right: 60px;
    }
  }
}

.tabs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  background-color: #ffffff;
  box-shadow: 0px -13px 70px rgba(255, 255, 255, 0.2),
    0px 4px 100px rgba(67, 97, 238, 0.2);
  padding: 43px 0 50px;
  z-index: -1;
  // .tabs__list
  &__list {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    padding: 0 0 22px;
    list-style: none;
  }

  // .tabs__item
  &__item {
  }

  // .tabs__link
  &__link {
  }

  // .tabs__section
  &__section {
    border-top: 1px solid #d9dffc;
    padding-top: 20px;
    flex-direction: column;
    gap: 50px;

    &_fade {
      display: none;
    }

    &_show {
      display: flex;
    }
  }

  // .tabs__body
  &__body {
  }
}

.tabs-body {
  // .tabs-body__title
  &__title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    margin-bottom: 15px;
  }

  // .tabs-body__content
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    list-style: none;
    padding: 0;
    gap: 12px;
  }

  // .tabs-body__item
  &__item {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
        outline: none;
    text-decoration: none;
    color: #000;
  }
}

.tabs-overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
}
@media screen and (max-width:992px) {
.header-search {
  display: none;
}
.header-bottom .header-logo {
  width: 100%;
}
@media screen and (max-width:678px) {
.header-top__info {
  display: none;
}
.header-bottom .header-nav {
  flex-direction: column;
  grid-gap: 0px;
  gap: 10px;
}
.button {
  max-height: 44px;
}
.header-bottom .header-nav-item:last-child {
  margin-right: 0;
}
}
@media screen and (max-width:480px)  {
.header-bottom .header-nav {
  display: none;
}
.header-bottom {
  flex-direction: column;
  align-items: center;
}
.header-bottom .button-catalog {
  max-width: 122px;
  margin-right: 0;
}
.header-bottom .header-logo {
  margin-right: 0;
}
.container {
  align-items: center;
}
}
}
</style>
