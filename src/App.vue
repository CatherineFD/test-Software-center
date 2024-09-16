<template>
  <div class="app">
    <Menu class="menus"/>

    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>
import Menu from "@/components/UI/Menu.vue";
export default {
  components: {Menu},
}
</script>

<style lang="scss">

body {
  margin: 0;
}

#app {
  font-family: "DM Sans", Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.app {
  display: flex;
  min-height: 100vh;
  height: 100%;

}

.menus {
  width: 256px;
  background-color: rgba(40, 40, 40, 1);
}

.content {
  flex-grow: 1;
}

</style>
