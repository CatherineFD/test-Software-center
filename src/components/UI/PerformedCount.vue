<script>
export default {
  name: "PerformedCount",
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      allCount: 30
    }
  },
  computed: {
    isPerformed() {
      return this.count === this.allCount;
    }
  }
}
</script>

<template>
  <div class="block" :class="{'performed': isPerformed}">
    <img v-if="isPerformed" src="@/assets/icon/performed.svg" alt="performed">
    <p>{{count}}/{{allCount}}</p>
  </div>
</template>

<style scoped lang="scss">
.block {
  display: flex;
  align-items: center;
  padding: 4px 14px 4px 14px;
  background-color: rgba(237, 237, 237, 1);
  border-radius: 6px;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: rgba(41, 49, 72, 0.8);

  p {
    margin: 0;

  }
}

.performed {
  background-color: rgba(228, 245, 221, 1);
  color: rgba(127, 199, 94, 1);

  p {
    margin-left: 8px;
  }
}
</style>