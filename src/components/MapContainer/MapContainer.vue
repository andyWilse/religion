<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import bus from "@/bus/bus";
window._AMapSecurityConfig = {
  securityJsCode: "eaff27aa124cfae67ff0d2f7493f2bb6",
};
export default {
  data() {
    return {
      map: null, // 地图
      autoOptions: {
        input: "",
      },
      searchPlaceInput: "",
      auto: null,
      placeSearch: null,
      district: null,
      polygons: [],
      showHeatOrNot: false,
      heatmap: null,
      heatmapList: null,
      infoWindow: null,
      markers: [],
      markersPosition: [],
      // 定义图片
      styleObjectArr: [],
      massMarks: null,
      marker: {},
      mapData: [],
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "021090ed7f49fe6a940aaef5b0fbedb6", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.HawkEye",
          "AMap.MapType",
          "AMap.Geolocation",
          "AMap.AutoComplete",
          "AMap.PlaceSearch",
          "AMap.InfoWindow",
          "AMap.MarkerClusterer",
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 14, //初始化地图级别
            center: [120.68309, 27.974069], //经度+纬度
          });
          // 显示地图控键工具
          this.map.addControl(new AMap.ToolBar());
          // 海量加点的工具
          this.auto = new AMap.AutoComplete(this.autoOptions);
          this.placeSearch = new AMap.PlaceSearch({
            map: this.map,
          });
          //构造地点查询类
          this.auto.on("select", this.select);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    select(e) {
      this.placeSearch.setCity(e.poi.adcode);
      this.placeSearch.search(e.poi.name); //关键字查询查询
      this.drawBounds(e.poi.name);
      this.map.setZoom(16, true, 1);
    },
    // 行政区区域划分
    drawBounds(newValue) {
      //加载行政区划插件
      if (!this.district) {
        //实例化DistrictSearch
        var opts = {
          subdistrict: 1, //获取边界不需要返回下级行政区
          extensions: "all", //返回行政区边界坐标组等具体信息
          level: "district", //查询行政级别为 市
        };

        this.map.plugin(["AMap.DistrictSearch"], () => {
          this.district = new AMap.DistrictSearch(opts);
        });
      }
      //行政区查询
      this.district.search(newValue, (status, result) => {
        if (result != null) {
          // this.feedBack("区域搜索成功", "success");
          if (this.polygons != null) {
            this.map.remove(this.polygons); //清除上次结果
            this.polygons = [];
          }
          this.map.add(this.polygons);
          this.map.setFitView(this.polygons); //视口自适应
        } else {
          // console.log("成功");
        }
      });
    },
    // 地点查询
    showHeatMap() {
      this.map.plugin(["AMap.PlaceSearch"], () => {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 50, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: this.searchPlaceInput, // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
        });
        //关键字查询
        placeSearch.search("道教协会", (status, result) => {
          // console.log(result);
          this.getHotChartPos("道教协会", result);
        });
      });
    },
    getHotChartPos(detail, result) {
      let lengthSize = result.poiList.pageSize;
      const count = result.poiList.count;
      // const lengthPage = count / lengthSize
      if (lengthSize > count) {
        lengthSize = count;
      }
      for (var n = 0; n < lengthSize; n++) {
        // this.map.plugin(['AMap.PlaceSearch'], () => {
        //构造地点查询类
        var realSearch = new AMap.PlaceSearch({
          pageSize: 50, // 单页显示结果条数
          pageIndex: n + 1, // 页码
          city: this.searchPlaceInput, // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
        });
        realSearch.search(detail, (status, result) => {
          // console.log(status, result);
        });
      }
    },
    showHatChart(result) {
      var info = [];
      for (let i = 0; i < 50; i++) {
        info.push({
          lng: result.poiList.pois[i].location.lng,
          lat: result.poiList.pois[i].location.lat,
          count: 3 * 50 * Math.round(Math.random() * (10 - 2) + 2),
        });
      }
      this.map.plugin(["AMap.HeatMap"], () => {
        //初始化heatmap对象
        this.heatmap = new AMap.HeatMap(this.map, {
          radius: 56, //给定半径
          opacity: [0, 0.5],
        });
        //设置数据集
        this.heatmap.setDataSet({
          data: info,
          max: 100,
        });
        this.heatmapList.push(this.heatmap);
        this.heatmap.show();
      });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  // 初始化 input搜索框
  created() {
    bus.$on("shareUserInput", (val) => {
      this.autoOptions.input = val.inputId;
      this.searchPlaceInput = val.userInput;
      val.userInput = "";
    });
    bus.$on("shareHeatMapShow", (val) => {
      this.showHeatOrNot = val;
    });
  },
  // 监听 input输入框
  watch: {
    searchPlaceInput(newValue) {
      if (newValue != null) {
        this.placeSearch.search(newValue);
        this.drawBounds(newValue);
        this.map.setZoom(16, true, 1);
      }
    },
    showHeatOrNot(newValue) {
      if (newValue) {
        this.showHeatMap();
      } else {
        this.heatmap.hide();
      }
    },
  },
};
</script>

<style scoped lang="less" >
#container {
  height: 44vh;
  height: calc(100vh - 50px);
  width: 100% !important;
}
</style>
