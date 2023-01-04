<template>
  <div class="container">
    <!-- 导航部分 -->
    <div class="fire_head">
      <div class="fire_img">
        <img src="@/assets/imagee.jpg" alt="" class="img" />
      </div>

      <div class="fire_text">
        <div class="fire_d">
          <span class="blackColor weight700 fontSize14">垟坑基督教堂</span>
          <span class="fire_log"></span>
          <span class="fire_span blackColor">基督教 </span>
        </div>
        <span class="span hasColor1">所属机构：瓯海区 泽雅镇 </span>
        <span class="hasColor1">地址：泽雅镇垟坑基督教堂</span>
        <div class="fire_daohang">
          <span class="fire_icon"></span>
          <span class="fire_icon_span blackColor">一键导航</span>
        </div>
      </div>
    </div>
    <!-- 中间 图片 -->
    <div class="fire_conter">
      <div class="fire_icon_img">
        <img class="icon_img" src="@/assets/imagee.jpg" alt="" />
      </div>
      <!--下面文字 -->
      <div class="fire_wenzi">
        <span class="fire_wenzi_span blackColor"
          >预警设备：OH220856 09:23:51
        </span>
        <span class="fire_wenzi_span blackColor">预警时间：2022-12-10</span>
        <span class="wenzi_span">事件动态：</span>
        <span class="wenzi_span blueColor">处理完成</span>
      </div>
      <div class="fire_conter_icon"></div>
    </div>
    <!-- 查看监控 -->
    <div class="fire_view">
      <div class="fire_view_yi">
        <div class="fire_view_yi_span"></div>
        <div class="blackColor fire_report">一键上报</div>
      </div>
      <div class="fire_view_yi">
        <div class="fire_icon"></div>
        <div class="blackColor fire_report">调看监控</div>
      </div>
      <div class="fire_view_yi">
        <div class="fire_view_icon"></div>
        <div class="blackColor fire_report">误报解除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fire",
};
</script>
<style scoped lang="less">
.fire_head {
  height: 7.75rem;
  margin-top: 4px;
  display: flex;
  background-color: #fff;
  .fire_img {
    width: 112px;
    height: 96px;
    margin: 15px 0 0 19px;
    border-radius: 10px;
  }
  .fire_text {
    flex: 1;
    margin-left: 18px;
    margin-top: 20px;

    .fire_log {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      margin-left: 14px;
      border: 1px dashed #9f9e9e;
      background-image: url("@/assets/icon_image/img.png");
    }
    .fire_d {
      margin-bottom: 10px;
    }
    .fire_span {
      margin-left: 8px;
    }
    .span {
      position: relative;
      display: block;
    }
  }
  .fire_daohang {
    position: absolute;
    width: 111px;
    height: 55px;
    top: 83px;
    left: 140px;
    border: 1px dashed #9f9e9e;
    line-height: 55px;
    background-image: url("@/assets/icon_image/y.png");
    .fire_icon {
      display: inline-block;
      width: 29px;
      height: 29px;
      margin-left: 15px;
      vertical-align: middle;
      border: 1px dashed #9f9e9e;
      background-image: url("@/assets/icon_image/daohang.png");
    }
  }
}
.img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
// 图片
.fire_conter {
  height: 20.125rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  .fire_icon_img {
    height: 15.375rem;
  }
  .fire_wenzi {
    width: 180px;
    height: 43px;
    margin-top: 15px;
    margin-left: 17px;
  }
  .fire_conter_icon {
    width: 91px;
    height: 26px;
    margin-top: 26px;
    margin-left: 72px;
    border-radius: 5px;
    background-image: url("@/assets/icon_image/huozai.png");
  }
  .fire_wenzi_span {
    display: block;
  }
  .wenzi_span {
    display: inline-block;
  }
}

.icon_img {
  width: 100%;
  height: 100%;
}
// 查看监控
.fire_view {
  height: 84px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  justify-items: space-between;
  background-color: #f6f6f6;
  .fire_view_yi {
    width: 104px;
    height: 35px;
    margin-left: 15px;
    display: flex;
    line-height: 35px;
    border-radius: 8px;
    background-color: #fff;
    .fire_view_yi_span {
      width: 50px;
      height: 35px;
      background-color: #eaf3f8;
      background: url("@/assets/icon_image/shuju.png") no-repeat center;
    }
    .fire_icon {
      width: 50px;
      height: 35px;
      background-color: #eaf3f8;
      background: url("@/assets/icon_image/jk.png") no-repeat center;
    }
    .fire_view_icon {
      width: 50px;
      height: 35px;
      background-color: #eaf3f8;
      background: url("@/assets/icon_image/kaisuo.png") no-repeat center;
    }
    .fire_report {
      padding-right: 5px;
    }
  }
}
</style>
