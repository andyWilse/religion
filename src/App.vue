<template>
  <div id="app">
    <router-view />
    <ToggleIcon v-if="show" />
  </div>
</template>
<script>
import ToggleIcon from "./components/ToggleIcon/ToggleIcon.vue";
export default {
  name: "App",
  data() {
    return {
      show: true,
    };
  },
  components: {
    ToggleIcon,
  },
  watch: {
    $route(to) {
      if (
        to.name === "reporting" ||
        to.name === "themap" ||
        to.name === "alerts" ||
        to.name === "ltsmine"
      ) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
};
</script>
<style  lang="less"></style>
