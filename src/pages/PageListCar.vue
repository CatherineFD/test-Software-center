<script>
import api from "@/api/index";
import Header from "@/components/UI/Header.vue";
import SettingPage from "@/components/PageListCar/SettingPage.vue";
export default {
  name: "PageListCar",
  components: {
    Header, SettingPage
  },
  data() {
    return {
      search: '',
      currentCount: 9,
      cars: []
    }
  },
  methods: {
    getListCars() {
      api.getListCars()
        .then((response) => {
          this.cars = response.data.data
        })
          .catch(e => {
            console.log(e)
          })
    },
    changeCount(value) {
      this.currentCount = value
    },
    changeSearch(value) {
      this.search = value
    }
  },
  mounted() {
    this.getListCars();
  }
}
</script>

<template>
  <div class="page">
    <Header/>
    <SettingPage :propsCurrentNumber="currentCount" @search="changeSearch" @change-count="changeCount"/>
    
  </div>

</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
</style>