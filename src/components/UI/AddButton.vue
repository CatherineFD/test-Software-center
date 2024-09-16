<script>
export default {
  name: "AddButton",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button class="button" >
    <img class="button__img" src="@/assets/icon/plus-white.svg" alt="add">
    {{title}}
  </button>
</template>

<style scoped lang="scss">
.button {
  background-color: rgba(217, 14, 50, 1);
  padding: 9px 18px;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;

  &__img {
    margin-right: 16px;
  }
}
</style>