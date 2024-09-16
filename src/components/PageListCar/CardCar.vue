<script>
import PerformedCount from "@/components/UI/PerformedCount.vue";
export default {
  name: "CardCard",
  components: {
    PerformedCount
  },
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  computed: {
    numberDay() {
      const now = Date.now();

      const timestampInMs = this.car.created_at * 1000;

      const diffInMs = now - timestampInMs;

      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      return diffInDays;
    }
  }
}
</script>

<template>
<div class="card">
  <div class="card__details"><img src="@/assets/icon/details.svg" alt="details"></div>

  <div class="card__info">
    <img :src="car.preview" alt="car">

    <div class="card__info__text">
      <p class="card__info__text__title">{{car.vehicle_name}} {{car.model}}</p>
      <p class="card__info__text__subtitle">WDB {{car.vin}}</p>
    </div>
  </div>

  <div class="card__time">
    <PerformedCount :count="car.photos_count"/>

    <p class="card__date">
      {{numberDay}} days left
    </p>
  </div>
</div>
</template>

<style scoped lang="scss">
.card {
  background-color: rgba(243, 246, 248, 1);
  border-radius: 10px;
  padding: 10px 20px 20px;

  box-sizing: border-box;
  width: 350px;

  &__details {
    display: flex;
    justify-content: flex-end;

    img {
      cursor: pointer;
    }
  }

  &__info {
    border-bottom: 1px rgba(228, 228, 228, 1) solid;

    img {
      width: 85%;
      max-width: 290px;
    }

    &__text {

      &__title {
        font-size: 20px;
        font-weight: 700;
        line-height: 22px;
        text-align: left;
        color: rgba(41, 49, 72, 1);
        margin: 20px 0 12px;
      }

      &__subtitle {
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.30000001192092896px;
        text-align: left;
        color: rgba(41, 49, 72, 0.6);
        margin: 0;
        margin-bottom: 18px;
      }
    }
  }

  &__time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 18px;
  }

  &__date {
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    text-align: right;
    color: rgba(41, 49, 72, 0.6);
    margin: 0;
  }
}
</style>