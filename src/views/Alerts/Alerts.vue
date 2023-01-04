<template>
  <div class="container">
    <!-- 搜索框 + 省级 -->
    <div class="alerts_inpt">
      <!-- 输入框 -->
      <div class="alerts_in">
        <van-search
          class="int"
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
          size="small"
        />
        <van-button round type="info" size="small" class="btn">查询</van-button>
      </div>
      <!-- 省级 -->
      <div class="provincial">
        <div class="prvoincial_one">
          <select class="select_provincial">
            <option value="1">选择教派</option>
            <option value="2">佛教</option>
          </select>
        </div>
        <div class="prvoincial_two">
          <select class="select_provincial">
            <option value="1">选择街镇</option>
            <option value="2">瓯海区</option>
          </select>
        </div>
        <div class="prvoincial_three">
          <select class="select_provincial">
            <option value="1">选择场所</option>
            <option value="2">佛教场所</option>
          </select>
        </div>
      </div>
      <!-- 宗教场所 -->
      <div class="provincial_location">
        <div class="location_one">
          <div class="provincial_location_one">log</div>
          <div class="provincial_loaction_two">
            <h3>宗教场所</h3>
          </div>
          <div class="probincial_loaction_three">
            <span class="probincial_loaction_three_spn">225</span>
          </div>
        </div>
        <div class="location_two">
          <div class="provincial_location_one">log</div>
          <div class="provincial_loaction_two">
            <h3>监控设备</h3>
          </div>
          <div class="probincial_loaction_three">
            <span class="probincial_loaction_three_spn">675</span>
          </div>
        </div>
        <div class="loaction_three">
          <div class="provincial_location_one">log</div>
          <div class="provincial_loaction_two">
            <h3>在线设备</h3>
          </div>
          <div class="probincial_loaction_three">
            <span class="probincial_loaction_three_spn">656</span>
          </div>
        </div>
        <div class="loation_four">
          <div class="provincial_location_one">log</div>
          <div class="provincial_loaction_two">
            <h3>保修设备</h3>
          </div>
          <div class="probincial_loaction_three">
            <span class="probincial_loaction_three_spn">19</span>
          </div>
        </div>
      </div>
      <!--AI预警动态数据 -->
      <div class="earlyWarning">
        <div class="earlyWarning_onde">
          <div class="earywarning_log">
            <span></span>
            <h3 class="earywarning_log_h3">AI预警动态数据</h3>
          </div>
          <div class="earywarning_log_two">
            <van-button square type="primary" size="small" class="vbtn"
              >人脸</van-button
            >
            <van-button square type="primary" size="small" class="vbtn"
              >人流</van-button
            >
            <van-button square type="primary" size="small" class="vbtn"
              >火灾</van-button
            >
          </div>
        </div>
        <!-- 数据可视化图 -->
        <div class="visualization" id="zation"></div>
      </div>
      <!-- 预警事件趋势图 -->
      <div class="earlyWarning_events">
        <div class="earlyWarning_events_onde">
          <div class="earlyWarning_events_log">
            <span></span>
            <h3 class="earlyWarning_events_log_h3">预警事件趋势图</h3>
          </div>
          <div class="earlyWarning_events_two">
            <van-button square type="primary" size="small" class="vbtn"
              >日</van-button
            >
            <van-button square type="primary" size="small" class="vbtn"
              >周</van-button
            >
            <van-button square type="primary" size="small" class="vbtn"
              >月</van-button
            >
          </div>
        </div>
        <!-- 数据可视化图 -->
        <div class="earlyWarning_events_shuju">
          <div class="earlyWarning_option" id="exar"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "Alerts",
  data() {
    return {
      value: "",
      data: [],
    };
  },
  mounted() {
    this.lization();
    //预警事件趋势图
    var myChart = echarts.init(document.getElementById("exar"));
    var option = {
      title: {},
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["人脸", "人流", "火灾"],
      },
      toolbox: {
        show: true,
      },
      xAxis: {
        boundaryGap: false,
        data: ["T-6", "T-5", "T-4", "T-3", "T-2", "T-1", "今日"],
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            //y轴分隔线样式设置
            color: "#004C63", //颜色
            type: "dashed", //虚线
          },
        },
      },
      series: [
        {
          name: "人脸",
          type: "line",
          smooth: true,
          data: [50, 21, 15, 38, 18, 26, 16],
        },
        {
          name: "人流",
          type: "line",
          smooth: true,
          data: [20, 14, 16, 38, 20, 29, 18],
        },
        {
          name: "火灾",
          type: "line",
          smooth: true,
          data: [0, 0.1, 0, 0.3, 0, 0, 0],
        },
      ],
    };
    myChart.setOption(option);
  },
  methods: {
    lization() {
      // ai预警动态数据
      var myCharts = echarts.init(document.getElementById("zation"));
      const colors = ["#5470C6", "#ccccc"];
      var zaTionOption = {
        color: colors,
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {},
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1],
              },
            },
            axisPointer: {
								label: {
									formatter: function(params) {

										// return (
										//   //点击时候，返回params的value值
										//   '' +
										//   params.value +
										//   (params.seriesData.length ? '：' + params.seriesData[0].data : '')
										// );
									}
								}
							},
            // prettier-ignore
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0],
              },
            },
            axisPointer: {
								label: {
									formatter: function(params) {
										return (
											'Precipitation  ' +
											params.value +
											(params.seriesData.length ? '：' + params.seriesData[0].data :
												'')
										);
									}
								}
							},
            // prettier-ignore
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              lineStyle: {
                //y轴分隔线样式设置
                color: "#004C63", //颜色
                type: "dashed", //虚线
              },
            },
          },
        ],
        series: [
          {
            type: "line",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            data: [
              3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3,
              0.7,
            ],
          },
        ],
      };
      myCharts.setOption(zaTionOption);
    },
  },
};
</script>

<style scoped lang="less">
.alerts_inpt {
  margin-top: 1rem;
  height: 8rem;

  .alerts_in {
    display: flex;
  }

  .int {
    width: 100%;
  }

  .btn {
    margin-top: 0.6rem;
    width: 5rem;
  }

  .provincial {
    height: 4rem;
    margin-top: 0.5rem;
    line-height: 4rem;
    display: flex;
    // background-color: darkblue;
  }

  .select_provincial {
    font-size: 14px;
    margin-left: 10px;
    margin-right: 10px;
    color: #000;
    border: 0;
    outline: none;
    background: #ffffff;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    // 去掉小箭头
    // appearance: none;
    // -moz-appearance: none;
    // -webkit-appearance: none;
  }
}

//  宗教场所
.provincial_location {
  height: 14rem;
  display: flex;
  background-color: #f7f7f8;

  .location_one {
    width: 8rem;
    height: 8rem;
    margin-top: 3rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
    text-align: center;
    background-color: aqua;

    .provincial_location_one {
      height: 4rem;
      line-height: 4rem;
    }

    .provincial_loaction_two {
      height: 2rem;
      line-height: 2rem;
    }

    .probincial_loaction_three {
      height: 2rem;
      line-height: 2rem;
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      background-color: #065e86;
    }

    .probincial_loaction_three_spn {
      color: #ffffff;
      font-size: 20px;
    }
  }

  .location_two {
    width: 8rem;
    height: 8rem;
    margin-top: 3rem;
    text-align: center;
    margin-left: 1rem;
    border-radius: 0.5rem;
    background-color: aqua;

    .provincial_location_one {
      height: 4rem;
      line-height: 4rem;
    }

    .provincial_loaction_two {
      height: 2rem;
      line-height: 2rem;
    }

    .probincial_loaction_three {
      height: 2rem;
      line-height: 2rem;
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      background-color: #065e86;
    }

    .probincial_loaction_three_spn {
      color: #ffffff;
      font-size: 20px;
    }
  }

  .loaction_three {
    width: 8rem;
    height: 8rem;
    margin-top: 3rem;
    text-align: center;
    margin-left: 1rem;
    border-radius: 0.5rem;
    background-color: aqua;

    .provincial_location_one {
      height: 4rem;
      line-height: 4rem;
    }

    .provincial_loaction_two {
      height: 2rem;
      line-height: 2rem;
    }

    .probincial_loaction_three {
      height: 2rem;
      line-height: 2rem;
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      background-color: #065e86;
    }

    .probincial_loaction_three_spn {
      color: #ffffff;
      font-size: 20px;
    }
  }

  .loation_four {
    width: 8rem;
    height: 8rem;
    margin-top: 3rem;
    text-align: center;
    margin-left: 1rem;
    border-radius: 0.5rem;
    background-color: aqua;

    .provincial_location_one {
      height: 4rem;
      line-height: 4rem;
    }

    .provincial_loaction_two {
      height: 2rem;
      line-height: 2rem;
    }

    .probincial_loaction_three {
      height: 2rem;
      line-height: 2rem;
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      background-color: #065e86;
    }

    .probincial_loaction_three_spn {
      color: #ffffff;
      font-size: 20px;
    }
  }
}

//  AI预警
.earlyWarning {
  height: 16rem;

  border-radius: 10px;
  background-color: #022a3a;

  .earlyWarning_onde {
    height: 4rem;
    display: flex;
    line-height: 4rem;
  }

  .earywarning_log {
    width: 11rem;
    text-align: center;

    .earywarning_log_h3 {
      display: inline-block;
      color: #ffffff;
      margin-left: 1rem;
    }
  }

  .earywarning_log_two {
    width: 11rem;
    display: flex;

    .vbtn {
      width: 4rem;
      margin-top: 1rem;
      margin-left: 5px;
      color: #ccc;
      font-size: 16px;
      background-color: #022a3a;
      border: 0;
    }
  }

  #zation {
    height: 13rem;
    margin-left: 2rem;
  }
}

// 预警事件趋势图
.earlyWarning_events {
  height: 16rem;
  border-radius: 10px;
  background-color: #022a3a;
  margin-top: 1rem;

  .earlyWarning_events_onde {
    height: 4rem;
    display: flex;
    line-height: 4rem;
  }

  .earlyWarning_events_log {
    width: 11rem;
    text-align: center;

    .earlyWarning_events_log_h3 {
      display: inline-block;
      color: #ffffff;
      margin-left: 1rem;
    }
  }

  .earlyWarning_events_two {
    width: 11rem;
    display: flex;

    .vbtn {
      width: 4rem;
      margin-top: 1rem;
      margin-left: 5px;
      color: #ccc;
      font-size: 16px;
      background-color: #022a3a;
      border: 0;
    }
  }

  #exar {
    margin-left: 2rem;
    height: 15rem;
  }
}
</style>
