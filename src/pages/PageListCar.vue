<script>
import api from "@/api/index";
import Menu from "@/components/UI/Menu.vue"
import Header from "@/components/UI/Header.vue";
export default {
  name: "PageListCar",
  components: {
    Menu, Header
  },
  data() {
    return {
      cars: []
    }
  },
  methods: {
    getListCars() {
      api.getListCars()
        .then((response) => {
          this.cars = response.data
        })
          .catch(e => {
            console.log(e)
          })
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
  </div>

</template>

<style scoped lang="scss">
.page {
  display: flex;
  justify-content: space-between;

}
</style>