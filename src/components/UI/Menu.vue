<script>
export default {
  name: "Menu",
}
</script>

<template>
  <div class="block">
    <div class="block__title">
      Demo Test
    </div>

    <div class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <img src="@/assets/icon/profile.svg" alt="profile">

          <span>Profile</span>
        </li>

        <li class="menu__item">
          <img src="@/assets/icon/vechicles.svg" alt="vechicles">

          <span>Vechicles</span>
        </li>

        <li class="menu__item">
          <img src="@/assets/icon/setting.svg" alt="setting">

          <span>Setting</span>
        </li>
      </ul>

    </div>

    <div class="block__background">
      <img src="@/assets/menu-background.svg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.block {
  width: 20%;
  background-color: rgba(40, 40, 40, 1);
  height: 100vh;
  position: relative;


  &__title {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    padding: 30px 0 30px 56px;
  }

  &__background {
    position: absolute;
    bottom: 0;
    width: 100%;

    img {
      width: 100%;
    }
  }
}

.menu {
  margin-top: 102px;
  margin-left: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: rgba(255, 255, 255, 0.45);


  &__list {
    list-style-type: none;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 28px;

    img {
      margin-right: 20px;
    }

  }
}
</style>