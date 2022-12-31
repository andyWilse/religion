<template>
  <div class="map">
    <div id="container"></div>
  </div>
</template>
<script>
// window._AMapSecurityConfig = {
//   securityJsCode: '740e4791a7f3a5239bac8c6b286f178b'
// }
export default {
  name: 'seaRch',
  data () {
    return {
      // map: null,
      // placeSearch: null
    }
  },
  mounted () {
    // this.initMap()

    // this.getLocation()
  },
  methods: {
    // initMap () {
    //   this.map = new AMap.Map("container", {  //设置地图容器id
    //     resizeEnable: true,
    //     viewMode: "3D",    //是否为3D地图模式
    //     zoom: 10,           //初始化地图级别
    //     center: [120.708827, 27.914241], //温州市的瓯海区的经度纬度
    //     plugins: ['AMap.PlaceSearch'],
    //     // isHotspot: true
    //   })
    //   // var ismap = ("complete", function () {
    //   //   log.success("地图加载完成！");
    //   // })
    //   // console.log(ismap);

    // },
    //定位 
    // getLocation () {
    //   AMap.plugin('AMap.Geolocation', function () {
    //     var geolocation = new AMap.Geolocation({
    //       // 是否使用高精度定位，默认：true
    //       enableHighAccuracy: true,
    //       // 设置定位超时时间，默认：无穷大
    //       timeout: 10000,
    //       // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    //       buttonOffset: new AMap.Pixel(10, 20),
    //       //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //       zoomToAccuracy: true,
    //       //  定位按钮的排放位置,  RB表示右下
    //       buttonPosition: 'RB'
    //     })
    //     geolocation.getCurrentPosition()
    //     AMap.event.addListener(geolocation, 'complete', onComplete)
    //     AMap.event.addListener(geolocation, 'error', onError)
    //     function onComplete (data) {
    //       // data是具体的定位信息
    //       // console.log(data);
    //     }
    //     function onError (data) {
    //       console.log('定位失败', data.message);
    //       // 定位出错
    //     }
    //   })

    // },
    //精准定位
    // getPositioning () {
    //   AMap.plugin('AMap.CitySearch', function () {
    //     var citySearch = new AMap.CitySearch()
    //     citySearch.getLocalCity((status, result) => {
    //       console.log(status, result);
    //     })
    //   });
    // }

  },
}
</script>
<style scoped lang="less">
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
.map {
  height: 100%;
  width: 100%;
  float: left;
}
.info-title {
  font-weight: bolder;
  color: #000;
  font-size: 14px;
  width: 250px;
  line-height: 26px;
  padding: 0 0 0 6px;
}
.info-content {
  width: 250px;
  padding: 4px;
  color: #666666;
  line-height: 23px;
  font: 12px Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", Arial;
}
.info-content img {
  float: left;
  margin: 3px;
}
.amap-info-combo .keyword-input {
  height: auto;
}
</style>
