<template>
  <div class="container">
    <div class="log_container">
      <div class="log_f">
        <img src="@/assets/userimage/jinglt.png" alt="" />
      </div>
      <div class="log_d">
        <img src="@/assets/userimage/jinglt2.png" alt="" />
      </div>
      <div class="log_j">
        <img src="@/assets/userimage/jinglt3.png" alt="" />
      </div>
      <div class="log_t">
        <img src="@/assets/userimage/jinglt1.png" alt="" />
      </div>
      <div class="log_y">
        <img src="@/assets/userimage/jinglt4.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/bus/bus";
export default {
  name: "Log",

  created() {
    bus.$on("usermap", (value) => {
      console.log(value);
    });
  },
};
</script>
<style scoped lang="less">
.log_container {
  width: 70px;
  height: 168px;
  position: absolute;
  right: 0;
  top: 25%;
}

.log_f img {
  width: 100%;
  height: 37px;
}
.log_d img {
  width: 100%;
  height: 37px;
  margin-top: 5px;
}
.log_j img {
  width: 100%;
  height: 37px;
  margin-top: 5px;
}
.log_t img {
  width: 100%;
  height: 37px;
  margin-top: 5px;
}
.log_y img {
  width: 100%;
  height: 37px;
  margin-top: 5px;
}
</style>
