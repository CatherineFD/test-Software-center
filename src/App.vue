<template>
  <div class="app">
    <Menu/>

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
}

.content {
  flex-grow: 1;
}

</style>
