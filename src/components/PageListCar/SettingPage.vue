<script>
import DropDownList from "@/components/UI/DropDownList.vue";
import AddButton from "@/components/UI/AddButton.vue";
export default {
  name: "SettingPage",
  components: {
    DropDownList,
    AddButton
  },
  emits: ['change-count', 'search'],
  props: {
    propsCurrentNumber: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      search: '',
      currentNumber: this.propsCurrentNumber,
    }
  },
  methods: {
    changeCount(value) {
      this.currentNumber = value;
      this.$emit('change-count', value)
    },
    searchCars() {
      this.$emit('search', this.search)
    }
  },
  watch: {
    propsCurrentNumber() {
      this.currentNumber = this.propsCurrentNumber
    }
  }
}
</script>

<template>
  <div class="block">
    <div class="block__search">
      <div class="search">
        <input class="search__input" type="text" v-model="search" @input="searchCars" placeholder="Search VIN">
        <img class="search__img" src="@/assets/icon/search.svg" alt="search">
      </div>

      <div class="count-elements">
        <p class="count-elements__text">Select vehicles per page:</p>
        <DropDownList :current-number="currentNumber" @change-count="changeCount"></DropDownList>
      </div>
    </div>

    <AddButton :title="'Add Vechicle'"/>
  </div>

</template>

<style scoped lang="scss">
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;

  &__search {
    display: flex;
    align-items: center;
  }
}

.search {
  position: relative;
  margin-right: 30px;

  &__input {

    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 8px;
    padding: 10px 15px;
    min-width: 300px;
  }

  &__img {
    position: absolute;
    right: 15px;
    top: 7px;
  }
}

.count-elements {
  display: flex;
  align-items: center;

  &__text {
    margin-right: 16px;
  }
}
</style>