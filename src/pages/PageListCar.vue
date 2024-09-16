<script>
import api from "@/api/index";
import Header from "@/components/UI/Header.vue";
import SettingPage from "@/components/PageListCar/SettingPage.vue";
import CardCar from "@/components/PageListCar/CardCar.vue";
import CountPages from "@/components/UI/CountPages.vue";
import Loader from "@/components/UI/Loader.vue";
export default {
  name: "PageListCar",
  components: {
    Header, SettingPage, CardCar, CountPages, Loader
  },
  data() {
    return {
      search: '',
      currentCount: 9,
      cars: [],
      totalCars: 0,
      currentPage: 1,
      totalPages: 1,
      isLoading: false
    }
  },
  methods: {
    getListCars() {
      this.isLoading = true;
      api.getListCars(this.search, this.currentCount, this.currentPage)
        .then((response) => {
          this.cars = response.data.data
          this.totalCars = response.data.meta.total;
          this.currentCount = Number(response.data.meta.per_page);
          this.currentPage = response.data.meta.current_page;
          this.totalPages = response.data.meta.last_page;
        })
        .catch(e => {
          console.log(e)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    changeCount(value) {
      this.currentCount = value;
      this.getListCars();
    },
    changeSearch(value) {
      this.search = value;
      this.getListCars();
    },
    changePage(value) {
      this.currentPage = value;
      this.getListCars();
    }
  },
  mounted() {
    this.getListCars();
  },
}
</script>

<template>
  <div class="page">
    <Header/>
    <SettingPage :propsCurrentNumber="currentCount" @search="changeSearch" @change-count="changeCount"/>


    <Loader v-if="isLoading"/>

    <div v-else>
      <div class="page__list">
        <CardCar v-for="car in cars" :key="car.id" :car="car"/>
      </div>

      <div class="page__navigation">
        <div class="page__navigation__text">Showing {{ this.currentCount }} out of {{ this.totalCars }}</div>


        <CountPages
            :props-current-page="currentPage"
            :props-total-page="totalPages"
            @next-page="changePage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  margin: 0 auto;

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 30px;
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    &__text {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
      color: rgba(41, 49, 72, 0.8);
    }
  }
}
</style>