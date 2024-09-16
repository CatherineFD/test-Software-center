<script>
export default {
  name: "CountPages",
  emits: [
    'next-page'
  ],
  props: {
    propsCurrentPage: {
      type: Number,
      default: 1
    },
    propsTotalPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    isEnableNext() {
      return this.propsCurrentPage < this.propsTotalPage
    },
    isEnablePrev() {
      return this.propsCurrentPage > 1
    }
  }
}
</script>

<template>
  <div class="navigation">
  <button :disabled="!isEnablePrev" class="navigation__btn" :class="{'disable': !isEnablePrev}" @click="$emit('next-page', propsCurrentPage-1)"><img src="@/assets/icon/prev-arrow.svg" alt="prev"></button>

  <span class="navigation__number">{{propsCurrentPage}}</span>
  of

  <span class="navigation__number">{{propsTotalPage}}</span>
  <button class="navigation__btn" :disabled="!isEnableNext" :class="{'disable': !isEnableNext}" @click="$emit('next-page', propsCurrentPage+1)"><img src="@/assets/icon/next-arrow.svg" alt="next"></button>
</div>
</template>

<style scoped lang="scss">
.navigation {
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(41, 49, 72, 0.8);
  display: flex;
  align-items: center;
  cursor: default;

  &__btn {
    background-color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #eeeeee;
    }
  }

  &__number {
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 6px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    margin-right: 12px;
  }
}

.disable {
  background-color: #eeeeee;
}
</style>