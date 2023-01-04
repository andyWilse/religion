<template>
  <div class="container">
    <!-- 标题 -->
    <div class="home_fire">
      <span class="spn_fire">
        <!-- <img src="@/assets/image/圆角矩形3.png" alt="" /> -->
      </span>
      <span class="fire">紧急事件</span>
    </div>
    <!-- 垟坑基督教堂 -->
    <div class="home_top">
      <div class="home_left">
        <img src="@/assets/imagee.jpg" alt="" class="img" />
      </div>
      <!-- 文字 -->
      <div class="home_conter">
        <div class="home_conter_left">
          <span class="conter_span">垟坑基督教堂</span>
          <span class="span_log"></span>
        </div>
        <div class="conter_span_s">
          <span class="span_item">时间:2022-12-09 08:21:11 </span>
        </div>
      </div>
      <div class="home_rigth">
        <span class="home_rigth_span">
          <span class="home_rigth_spans"></span>
        </span>
      </div>
    </div>
    <!--  教堂2 -->
    <div class="home_contain">
      <div class="home_left">
        <img src="@/assets/imagee.jpg" alt="" class="img" />
      </div>
      <!-- 文字 -->
      <div class="home_conter">
        <div class="home_conter_left">
          <span class="conter_span">垟坑基督教堂</span>
          <span class="span_log"></span>
        </div>
        <div class="conter_span_s">
          <span class="span_item">时间:2022-12-09 08:21:11 </span>
        </div>
      </div>
      <div class="home_rigth">
        <span class="home_rigth_span">
          <span class="home_rigth_spans"></span>
        </span>
      </div>
    </div>
    <!--  log 图标 -->
    <div class="reporting_log">
      <van-badge content="85例">
        <div class="reporting_log_yi"></div>
        <span class="span">人脸识别</span>
      </van-badge>
      <van-badge content="12例">
        <div class="reporting_log_er"></div>
        <span class="spans">人流集聚</span>
      </van-badge>
      <van-badge content="1例">
        <div class="reportion_log_san"></div>
        <span class="spans">火灾预警</span>
      </van-badge>
      <van-badge content="19例">
        <div class="reportion_log_si"></div>
        <span class="spans">任务预警</span>
      </van-badge>
    </div>
    <!-- 预警事件台账 -->
    <div class="ledger">
      <!-- 全部 -->
      <div class="ledger_div">
        <span class="spn_fires"></span>
        <span class="fires">预警事件台账</span>
      </div>
      <van-tabs
        v-model="active"
        line-height="1px"
        line-width="0px"
        title-active-color="#9B2E25"
      >
        <van-tab title="全部">
          <!-- 火灾预警 -->
          <div class="ledger_div_contain">
            <div class="ledger_left">
              <img src="@/assets/imagee.jpg" alt="" class="ledger_left_img" />
            </div>
            <!-- 文字 -->
            <div class="ledger_conter">
              <div class="home_conter_left">
                <span class="ledger_span">垟坑基督教堂</span>
                <span class="ledger_log"></span>
              </div>
              <div class="ledger_span_s">
                <span class="ledger_item">时间:2022-12-09 08:21:11 </span>
              </div>
            </div>
            <div class="ledger_rigth">
              <span class="ledger_rigth_span">
                <span class="ledger_rigth_spans">已完成</span>
              </span>
            </div>
          </div>
          <!-- 人脸识别 -->
          <div class="ledger_div_contain">
            <div class="ledger_left">
              <img src="@/assets/imagee.jpg" alt="" class="ledger_left_img" />
            </div>
            <!-- 文字 -->
            <div class="ledger_conter">
              <div class="home_conter_left">
                <span class="ledger_span">垟坑基督教堂</span>
                <span class="ledger_log"></span>
              </div>
              <div class="ledger_span_s">
                <span class="ledger_item">时间:2022-12-09 08:21:11 </span>
              </div>
            </div>
            <div class="ledger_rigth">
              <span class="ledger_rigth_span">
                <span class="ledger_rigth_spans">已完成</span>
              </span>
            </div>
          </div>
          <!-- 任务预警 -->
          <div class="ledger_div_contain">
            <div class="ledger_left">
              <img src="@/assets/imagee.jpg" alt="" class="ledger_left_img" />
            </div>
            <!-- 文字 -->
            <div class="ledger_conter">
              <div class="home_conter_left">
                <span class="ledger_span">垟坑基督教堂</span>
                <span class="ledger_log"></span>
              </div>
              <div class="ledger_span_s">
                <span class="ledger_item">时间:2022-12-09 08:21:11 </span>
              </div>
            </div>
            <div class="ledger_rigth">
              <span class="ledger_rigth_span">
                <span class="ledger_rigth_spans">已完成</span>
              </span>
            </div>
          </div>
        </van-tab>
        <van-tab title="人脸识别">
          <!--  教堂2 -->
        </van-tab>
        <van-tab title="人流聚集"> </van-tab>
        <van-tab title="火灾预警"> </van-tab>
        <van-tab title="任务预警"> </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reporting",
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.container {
  background-color: #f6f6f6;
}
.home_fire {
  padding-top: 10px;
  .spn_fire {
    display: inline-block;
    width: 2px;
    height: 12px;
    margin-left: 10px;
    background-image: url("@/assets/image/圆角矩形3.png");
  }

  .fire {
    font-weight: 900;
    font-size: 14px;
    color: #9b2e25;
    margin-left: 10px;
  }
}

// 教堂
.home_top {
  height: 3.75rem;
  display: flex;
  border-radius: 0.5rem;
  margin: 10px 16px 0 16px;
  align-items: center;
  background-color: #ffff;
  border: 1px solid #ffffff;

  .home_left {
    width: 65px;
    height: 51px;
    margin-left: 4px;
  }
  .img {
    width: 65px;
    height: 51px;
    border-radius: 5px;
    margin-left: 5px;
  }
  // 文字
  .home_conter {
    flex: 1;
    .conter_span {
      display: inline-block;
      margin-left: 12px;
      font-size: 13px;
    }
    .span_log {
      display: inline-block;
      width: 58px;
      height: 18px;
      margin-left: 8px;
      background-image: url("@/assets/image/组1.png");
      vertical-align: middle;
    }
    .conter_span_s {
      margin-left: 13px;
      margin-top: 9px;
    }
    .span_item {
      color: #9f9e9e;
    }
  }

  .home_rigth {
    width: 44px;
    height: 44px;
    margin-right: 10px;

    .home_rigth_span {
      display: block;
      width: 44px;
      height: 44px;
      background-image: url("@/assets/image/椭圆1.png");
    }
    .home_rigth_spans {
      display: block;
      width: 44px;
      height: 44px;
      background: url("@/assets/image/警告.png") no-repeat center;
    }
  }
}
// 教堂2
.home_contain {
  height: 3.75rem;
  display: flex;
  border-radius: 0.5rem;
  margin: 10px 16px 0 16px;
  align-items: center;
  background-color: #ffff;
  border: 1px solid #ffffff;
  .home_left {
    width: 65px;
    height: 51px;
    margin-left: 4px;
  }
  .img {
    width: 65px;
    height: 51px;
    border-radius: 5px;
    margin-left: 5px;
  }
  // 文字
  .home_conter {
    flex: 1;
    .conter_span {
      display: inline-block;
      margin-left: 12px;
      font-size: 13px;
    }
    .span_log {
      display: inline-block;
      width: 58px;
      height: 18px;
      margin-left: 8px;
      background-image: url("@/assets/image/rwu.png");
      vertical-align: middle;
    }
    .conter_span_s {
      margin-left: 13px;
      margin-top: 9px;
    }
    .span_item {
      color: #9f9e9e;
    }
  }

  .home_rigth {
    width: 44px;
    height: 44px;
    margin-right: 10px;

    .home_rigth_span {
      display: block;
      width: 44px;
      height: 44px;
      background-image: url("@/assets/image/y.png");
    }
    .home_rigth_spans {
      display: block;
      width: 44px;
      height: 44px;
      background: url("@/assets/image/查看.png") no-repeat center;
    }
  }
}
// tab 栏切换
.ledger_div {
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
  margin-top: 8px;
  .spn_fires {
    display: inline-block;
    width: 2px;
    height: 12px;
    margin-left: 10px;
    background-image: url("@/assets/image/圆角矩形3.png");
  }

  .fires {
    font-weight: 900;
    color: #000000;
    font-size: 14px;
    margin-left: 13px;
  }
}
.ledger_div_contain {
  height: 3.75rem;
  display: flex;
  border-radius: 0.5rem;
  align-items: center;
  background-color: #ffffff;
  margin: 10px 16px 10px 16px;
  border: 1px solid #ffffff;
  .ledger_left {
    width: 65px;
    height: 51px;
    margin-left: 4px;
  }
  .ledger_left_img {
    width: 65px;
    height: 51px;
    border-radius: 5px;
    margin-left: 5px;
  }
  // 文字
  .ledger_conter {
    flex: 1;
    .ledger_span {
      display: inline-block;
      margin-left: 12px;
      font-size: 13px;
    }
    .ledger_log {
      display: inline-block;
      width: 58px;
      height: 18px;
      margin-left: 8px;
      background-image: url("@/assets/image/rwu.png");
      vertical-align: middle;
    }
    .ledger_span_s {
      margin-left: 13px;
      margin-top: 9px;
    }
    .ledger_item {
      color: #9f9e9e;
    }
  }

  .ledger_rigth_spans {
    font-size: 16px;
    color: #6c7b84;
    margin-right: 22px;
  }
}
// 图标
.reporting_log {
  height: 6.25rem;
  margin-top: 5px;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #ffffff;
  display: flex;
  .reporting_log_yi {
    width: 54px;
    height: 54px;
    margin-top: 17px;
    margin-left: 28px;
    margin-bottom: 5px;
    background-image: url("@/assets/image/zhu.png");
    border: 1px dashed #ccc;
    border-radius: 4px;
  }
  .span {
    font-weight: 900;
    color: #000000;
    margin-left: 20px;
  }
  .spans {
    font-weight: 900;
    color: #000000;
    margin-left: 35px;
  }
  ::v-deep .van-badge--fixed {
    position: absolute;
    top: 22px;
    right: 5px;
    background-color: #1a559a;
  }
  .reporting_log_er {
    width: 54px;
    height: 54px;
    margin-top: 17px;
    margin-left: 34px;
    margin-bottom: 5px;
    background-image: url("@/assets/image/qun.png");
    border: 1px dashed #ccc;
  }

  .reportion_log_san {
    width: 54px;
    height: 54px;
    margin-top: 17px;
    margin-left: 34px;
    margin-bottom: 5px;
    background-image: url("@/assets/image/huo.png");
    border: 1px dashed #ccc;
  }
  .reportion_log_si {
    width: 54px;
    height: 54px;
    margin-top: 17px;
    margin-left: 34px;
    margin-bottom: 5px;
    background-image: url("@/assets/image/jingbao.png");
    border: 1px dashed #ccc;
  }
}
</style>
