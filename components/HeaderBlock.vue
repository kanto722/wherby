<template>
  <div class="header">
    <div class="container">
      <div class="header-content">
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
            <img src="@/assets/images/logo.png" alt="logo">
          </NuxtLink>
          <NuxtLink to="/typeProduct" class="button-catalog">
            <img src="@/assets/images/svg/line.svg" alt="line">
            <span>Каталог</span>
          </NuxtLink>
          <div class="header-search">
            <input type="text" placeholder="Искать на wherby">
            <a class="header-search_watch" href="#">
              <img src="@/assets/images/svg/search.svg" alt="search">
            </a>
          </div>
          <div class="header-nav">
            <div class="header-nav-item">
              <img src="@/assets/images/svg/man.svg" alt="man">
              <span>Войти</span>
            </div>
            <div class="header-nav-item">
              <img src="@/assets/images/svg/buy.svg" alt="buy">
              <span>Корзина</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtHeader',
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 21px;
    padding-bottom: 36px;
    background: #4361EE;
    &-content {

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
      color: #D9DFFC;
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
          color: #D9DFFC;
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
      display: flex;
      align-items: center;
      border: 1px solid #FFFFFF;
      border-radius: 10px;
      padding: 10px 12px 10px 13px;
      max-height: 37px;
      max-width: 109px;
      cursor: pointer;
      margin-right: 17px;
      img {
        margin-right: 7px;
      }
      span {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #FFFFFF;
      }
    }
    .header-search {
      max-width: 607px;
      width: 100%;
      position: relative;
      margin-right: 60px;
      input {
        padding: 13px 17px 13px 20px;
        background: #FFFFFF;
        border-radius: 15px;
        border: none;
        width: 100%;
        outline:none;
      }
      input::placeholder {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #C6C6C6;
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

          color: #D9DFFC;
        }
      }
       &-item:last-child {
        margin-right: 60px;
       }
    }
  }
</style>
