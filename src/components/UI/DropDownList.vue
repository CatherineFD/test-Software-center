<script>
export default {
  name: "DropDownList",
  props: {
    currentNumber: {
      type: Number,
      default: 9
    }
  },
  emits: [
      'changeCount'
  ],
  data() {
    return {
      allNumber: 10,
      isShow: false
    }
  },
  methods: {
    showList() {
      this.isShow = !this.isShow
    },

  }
}
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__info" @click="showList">
      <span class="dropdown__info__number">{{currentNumber}}</span>

      <img src="@/assets/icon/arrow.svg" alt="arrow">
    </div>

    <div class="dropdown__list" v-if="isShow">
      <div class="dropdown__list__item" v-for="i in allNumber" @click="$emit('changeCount', i); this.showList()">
        {{i}}
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;


  &__info {
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 8px;
    padding: 9px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &__number {
      margin-right: 30px;
    }

    &:hover {
      background-color: rgb(213, 210, 210);
    }
  }

  &__list {
    position: absolute;
    right: 0;

    &__item {
      border: 1px solid rgba(228, 228, 228, 1);
      border-radius: 8px;
      padding: 9px 16px;
      margin-top: 3px;
      transition: background-color 0.3s ease;
      background-color: #fff;

      &:hover {
        background-color: rgb(213, 210, 210);
      }
    }
  }
}
</style>