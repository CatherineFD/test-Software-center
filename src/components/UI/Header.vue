<script>
export default {
  name: "Header"
}
</script>

<template>
  <header class="header">
    <div class="header__title">
      <h1>Vechicles</h1>

      <span class="header__counter">256</span>
    </div>

    <div class="setting">
      <div class="setting__btn">
        <button ><img src="@/assets/icon/plus.svg" alt="plus"></button>
      </div>

      <div class="setting__profile">
        <span class="setting__profile__photo"><img src="@/assets/photo.png" alt="photo"></span>
        <p class="setting__profile__name">John Doe</p>
      </div>

      <div class="setting__lang">
       <img class="setting__lang__flag" src="@/assets/flags/UK.svg" alt="UK">
        <span class="setting__lang__country">En</span>
        <span class="setting__lang__arrow"><img src="@/assets/icon/arrow.svg" alt="arrow"></span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  padding: 30px 30px 26px;
  border-bottom: 1px solid rgba(228, 228, 228, 1);

  display: flex;
  justify-content: space-between;

  &__title {
    display: flex;
    align-items: center;

    h1 {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
      text-align: left;
      color: rgba(41, 49, 72, 1);
    }
  }

  &__counter {
    margin-left: 18px;
    background-color: rgba(243, 246, 248, 1);
    border-radius: 6px;
    padding: 4px 14px 4px 14px;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    color: rgba(41, 49, 72, 0.8);
  }
}

.setting {
  display: flex;

  &__btn {
    margin-right: 40px;
    button {
      border: 1px solid rgba(232, 110, 132, 1);
      background-color: rgba(0, 0, 0, 0);
      border-radius: 6px;
      padding: 9px;
      display: flex;
      align-items: center;
    }
  }

  &__profile {
    display: flex;
    align-items: center;
    margin-right: 30px;

    &__photo {
      margin-right: 11px;
      img {
        width: 46px;
        height: 46px;
      }
    }

    &__name {
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      text-align: left;
      color: rgba(41, 49, 72, 1)
    }
  }

  &__lang {
    display: flex;
    align-items: center;

    &__flag {
      width: 24px;
      height: 24px;
      margin-right: 14px;
    }

    &__country {
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      text-align: left;
      color: rgba(41, 49, 72, 1);
    }

    &__arrow {
      display: flex;
      align-items: center;
    }
  }
}
</style>