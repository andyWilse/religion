<template>
  <div class="container">
    <Search class="sar" />
    <map-container />
    <Loglis />
  </div>
</template>
<script>
import MapContainer from "@/components/MapContainer/MapContainer.vue";
import Search from "@/components/Search/Search.vue";
//精灵图
import Loglis from "@/components/Log/Log.vue";
export default {
  name: "Themap",
  data() {
    return {
      active: "home",
      inputObje: {
        input: "",
      },
    };
  },
  methods: {},
  components: {
    MapContainer,
    Search,
    Loglis,
  },
};
</script>
<style scoped lang="less">
.sear {
  width: 100%;
  z-index: 999;
  display: flex;
  position: absolute;
  margin-top: 20px;
}
.sar {
  flex: 1;
  background-color: rgba(248, 244, 244, 0.1);
}
.btn {
  width: 60px;
  margin-top: 10px;
  margin-right: 5px;
}
</style>
