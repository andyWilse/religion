<template>
  <div class="page">
    <div class="reporting_log">
      <van-badge content="85例" color="#1A559A">
        <img class="reporting_log_icon" src="/images/icon007.png" alt="" />
        <div class="weight700 marginTop10">人脸识别</div>
      </van-badge>
      <van-badge content="12例" color="#9A7A19">
        <img class="reporting_log_icon" src="/images/icon008.png" alt="" />
        <div class="weight700 marginTop10">人流集聚</div>
      </van-badge>
      <van-badge content="1例" color="#9B2E25">
        <img class="reporting_log_icon" src="/images/icon009.png" alt="" />
        <div class="weight700 marginTop10">火灾预警</div>
      </van-badge>
    </div>
    <div class="echarts-block">
      <div class="top">
        <div class="left">
          <img class="icon" src="/images/icon015.png" />
          <div class="name fontSize14 weight700">AI预警动态数据</div>
        </div>
        <div class="tables fontSize14 weight700">
          <div
            class="table"
            :class="{ check: index == tableIndex }"
            v-for="(item, index) in tableList"
            :key="index"
            @click="selectTable(index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div id="data" class="con"></div>
    </div>
    <div class="echarts-block">
      <div class="top">
        <div class="left">
          <img class="icon" src="/images/icon014.png" />
          <div class="name fontSize14 weight700">预警事件趋势图</div>
        </div>
        <div class="tables fontSize14 weight700">
          <div
            class="table"
            :class="{ check: index == timeIndex }"
            v-for="(item, index) in timeList"
            :key="index"
            @click="selectTime(index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div id="trend" class="con"></div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      searchName: "",
      tableIndex: 1,
      tableList: [
        {
          id: 1,
          name: "人脸",
        },
        {
          id: 2,
          name: "人流",
        },
        {
          id: 3,
          name: "火灾",
        },
      ],
      timeIndex: 0,
      timeList: [
        {
          id: 1,
          name: "日",
        },
        {
          id: 2,
          name: "月",
        },
        {
          id: 3,
          name: "周",
        },
      ],
    };
  },
  mounted() {
    this.getData();
    this.getTrend();
  },
  methods: {
    /**
     * 切换
     * @param {Object} index
     */
    selectTable(index) {
      this.tableIndex = index;
      this.getData();
    },
    /**
     * 切换
     * @param {Object} index
     */
    selectTime(index) {
      this.timeIndex = index;
      this.getTrend();
    },
    /**
     * 动态数据
     */
    getData() {
      //预警事件趋势图
      let myChart = echarts.init(document.getElementById("data"));

      // 指定图表的配置项和数据
      let option = {
        tooltip: {},
        color: ["#FD5E02"],
        xAxis: {
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6", "7"],
        },
        yAxis: {},
        grid: {
          left: "0%",
          top: "10%",
          right: "5px",
          bottom: "0%",
          containLabel: true,
        },
        series: [
          {
            type: "line",
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(253, 94, 2, 0.8)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(250, 208, 184, 0.2)",
                    },
                  ],
                  false
                ),
              },
            },
            smooth: true,
            data: [5, 20, 36, 10, 10, 20, 55],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    /**
     * 趋势图
     */
    getTrend() {
      //预警事件趋势图
      let myChart = echarts.init(document.getElementById("trend"));

      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: 10,
          right: "0%",
          data: ["人脸", "人流", "火灾"],
        },
        color: ["#2C9A35", "#9A7A19", "#3D1C9A"],
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6", "7"],
        },
        yAxis: {},
        grid: {
          left: "0%",
          top: "20%",
          right: "0%",
          bottom: "0%",
          containLabel: true,
        },
        series: [
          {
            name: "人脸",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "人流",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "火灾",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="less">
.page {
  width: 100vw;
  min-height: 100vh;
  background-color: #f6f6f6;
}

::v-deep .van-search__content {
  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.title {
  padding: 0px 25px;
}

.typeList {
  background-color: #ffffff;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .type-icon {
    width: 60px;
    height: 60px;
  }

  ::v-deep .van-badge--fixed {
    position: absolute;
    top: 5px;
    right: 8px;
    padding: 1px 4px;
  }

  .type-name {
    margin-top: 5px;
  }
}

.echarts-block {
  margin: 10px 8px 0px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      .icon {
        height: 15px;
        margin-right: 5px;
      }
    }

    .tables {
      display: flex;
      align-items: center;

      .table {
        width: 45px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 25px;
      }

      .check {
        background: #fcefee;
        border: 1px solid #9b2e25;
        color: #9b2e25;
      }
    }
  }

  #data,
  #trend {
    width: 100%;
    height: 200px;
  }
}

.reporting_log {
  padding: 10px 20px;
  text-align: center;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  // border-bottom: 10px solid #f6f6f6;

  .reporting_log_icon {
    width: 95px;
    height: 54px;
  }

  ::v-deep .van-badge--fixed {
    position: absolute;
    top: 5px;
    right: 15px;
    padding: 1px 4px;
  }
}
</style>
