<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <img src="@/assets/images/logo.png" alt="logo" />
          <span>ООО «Рус Ритейл».</span>
          <span>Все права защищены.</span>
          <div class="footer-info__social">
            <img src="@/assets/images/social/tg.png" alt="tg" />
            <img src="@/assets/images/social/vk.png" alt="vk" />
          </div>
        </div>
        <div class="footer-navigation">
          <div class="footer-item">
            <span>Покупателям Wherby</span>
            <li>
              <a href="#">Как сделать заказ</a>
            </li>
            <li>
              <a href="#">Способы оплаты</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">Возврат товаров</a>
            </li>
            <li>
              <a href="#">Возврат денежных средств</a>
            </li>
            <li>
              <a href="#">Условия обработки персональных данных</a>
            </li>
            <li>
              <a href="#">Правила продажи</a>
            </li>
            <li>
              <a href="#">Правила пользования платформой</a>
            </li>
          </div>
          <div class="footer-item">
            <span>Продавцам Wherby</span>
            <li>
              <a href="#">Продавайте на Wherby</a>
            </li>
            <li>
              <a href="#">Станьте партнером Wherby</a>
            </li>
            <li>
              <a href="#">Открытость</a>
            </li>
            <li>
              <a href="#">Безопасность</a>
            </li>
          </div>
          <div class="footer-item">
            <span>Компания</span>
            <li>
              <a href="#">О Wherby / About Wherby</a>
            </li>
            <li>
              <a href="#">Реквизиты</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtFooter',
}
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #4361EE;
    padding: 33px 0px 64px 0px;
    &-content {
      display: flex;
      justify-content: space-between;      
    }
    &-info {
      display: flex;
      flex-direction: column;
      margin-right: 100px;
      width: 20%;
      img {
        max-width: 143px;
        margin-bottom: 8px;
      }
      span {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #D9DFFC;
      }
      &__social {
        margin-top: 12px;
        img {
          margin-right: 17px;
          margin-bottom: 0;
        }
        img:last-child {
          margin-right: 0;
        }
      }
    }
    &-navigation {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .footer-item {
        margin-right: 15px;
        span {
          font-family: 'Manrope';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          color: #FFFFFF;
          margin-bottom: 10px;
        }
        li {
          list-style-type: none;
          margin-bottom: 10px;
          a {
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #FFFFFF;
          }
        }
        li:nth-child {
          margin-bottom: 0;
        }
      }
      .footer-item:last-child {
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width:992px) {
    .footer-content {
      flex-wrap: wrap;
      justify-content: center;
      
    }
    .footer-info {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 30px;
      order: 1;
      margin-right: 0px;
    }
  }
  @media screen and (max-width:480px) {
    .footer-navigation {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .footer-item {
      margin-right: 0px;
    }
    .footer-info {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
