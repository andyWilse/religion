<template>
  <div class="container">
    <!-- 标题 -->
    <div class="home_fire">
      <span class="spn_fire">|</span>
      <span class="fire">紧急事件</span>
    </div>
    <!-- 下来刷新 -->

    <div class="home_top">
      <div class="home_left">
        <img src="@/assets/imagee.jpg" alt="" class="img" />
      </div>
      <div class="home_conter">
        <div class="home_conter_left">
          <span class="conter_span">场所 ｜</span>
          <span class="conter_span">时间 ｜</span>
          <span class="conter_span">类别 ｜</span>
        </div>
        <div class="home_conter_right">
          <span class="conter_sp">垟坑基督教堂</span>
          <span class="conter_sp">22-12-10</span>
          <h3 class="conter_sps">火灾预警</h3>
        </div>
      </div>
      <div class="home_rigth">
        <div class="home_y">
          <h1 class="sptn">警告!</h1>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="home_tops">
      <div class="home_left">
        <img src="@/assets/imagee.jpg" alt="" class="img" />
      </div>
      <div class="home_conter">
        <div class="home_conter_left">
          <span class="conter_span">场所 ｜</span>
          <span class="conter_span">时间 ｜</span>
          <span class="conter_span">类别 ｜</span>
        </div>
        <div class="home_conter_right">
          <span class="conter_sp">垟坑基督教堂</span>
          <span class="conter_sp">22-12-10</span>
          <h3 class="conter_sps">人脸识别</h3>
        </div>
      </div>
      <div class="home_rigth">
        <h3 class="sptns">查看</h3>
      </div>
    </div>
    <!-- 人脸识别 -->
    <div class="reporting_identify">
      <div class="identify">
        <div class="log_identify"></div>
        <div class="face_identify">人脸识别</div>
        <div class="identify_lie">
          <h3 class="identify_h3">85</h3>
          <span class="identify_sp">例</span>
        </div>
      </div>
      <div class="identify">
        <div class="log_identify"></div>
        <div class="face_identify">人员聚集</div>
        <div class="identify_lie">
          <h3 class="identify_h3">25</h3>
          <span class="identify_sp">例</span>
        </div>
      </div>
      <div class="identify">
        <div class="log_identify"></div>
        <div class="face_identify">火灾预警</div>
        <div class="identify_lie">
          <h3 class="identify_h3">1</h3>
          <span class="identify_sp">例</span>
        </div>
      </div>
      <div class="identify">
        <div class="log_identify"></div>
        <div class="face_identify">任务预警</div>
        <div class="identify_lie">
          <h3 class="identify_h3">18</h3>
          <span class="identify_sp">例</span>
        </div>
      </div>
    </div>
    <!-- 预警事件台账 -->
    <div class="ledger">
      <div class="ledger_div">
        <span class="spn_fires">|</span>
        <h2 class="fires">紧急事件</h2>
      </div>
      <!-- 全部 -->
      <van-tabs
        v-model="active"
        line-height="1px"
        line-width="30px"
        title-active-color="#0d9ed8"
      >
        <van-tab title="全部">
          <!-- 1 -->
          <div class="home_tops">
            <div class="home_left">
              <img src="@/assets/imagee.jpg" alt="" class="img" />
            </div>
            <div class="home_conter">
              <div class="home_conter_left">
                <span class="conter_span">场所 ｜</span>
                <span class="conter_span">时间 ｜</span>
                <span class="conter_span">类别 ｜</span>
              </div>
              <div class="home_conter_right">
                <span class="conter_sp">垟坑基督教堂</span>
                <span class="conter_sp">22-12-10</span>
                <h3 class="conter_sps_spen">人脸识别</h3>
              </div>
            </div>
            <div class="home_rigth">
              <h3 class="sptns_sli">待查实</h3>
            </div>
          </div>
          <!-- 2 -->
          <div class="home_tops">
            <div class="home_left">
              <img src="@/assets/imagee.jpg" alt="" class="img" />
            </div>
            <div class="home_conter">
              <div class="home_conter_left">
                <span class="conter_span">场所 ｜</span>
                <span class="conter_span">时间 ｜</span>
                <span class="conter_span">类别 ｜</span>
              </div>
              <div class="home_conter_right">
                <span class="conter_sp">垟坑基督教堂</span>
                <span class="conter_sp">22-12-10</span>
                <h3 class="conter_sps">人脸预警</h3>
              </div>
            </div>
            <div class="home_rigth">
              <h3 class="sptns_sli">误报</h3>
            </div>
          </div>
          <!-- 3 -->
          <div class="home_tops">
            <div class="home_left">
              <img src="@/assets/imagee.jpg" alt="" class="img" />
            </div>
            <div class="home_conter">
              <div class="home_conter_left">
                <span class="conter_span">场所 ｜</span>
                <span class="conter_span">时间 ｜</span>
                <span class="conter_span">类别 ｜</span>
              </div>
              <div class="home_conter_right">
                <span class="conter_sp">垟坑基督教堂</span>
                <span class="conter_sp">22-12-10</span>
                <h3 class="conter_sps_sn">任务预警</h3>
              </div>
            </div>
            <div class="home_rigth">
              <h3 class="sptns_sli">已完成</h3>
            </div>
          </div>
        </van-tab>
        <van-tab title="人脸识别">
          <div class="home_tops">
            <div class="home_left">
              <img src="@/assets/imagee.jpg" alt="" class="img" />
            </div>
            <div class="home_conter">
              <div class="home_conter_left">
                <span class="conter_span">场所 ｜</span>
                <span class="conter_span">时间 ｜</span>
                <span class="conter_span">类别 ｜</span>
              </div>
              <div class="home_conter_right">
                <span class="conter_sp">垟坑基督教堂</span>
                <span class="conter_sp">22-12-10</span>
                <h3 class="conter_sps_spen">人脸识别</h3>
              </div>
            </div>
            <div class="home_rigth">
              <h3 class="sptns_sli">待查实</h3>
            </div>
          </div>
        </van-tab>
        <van-tab title="人流聚集">
          <!-- 3 -->
          <div class="home_tops">
            <div class="home_left">
              <img src="@/assets/imagee.jpg" alt="" class="img" />
            </div>
            <div class="home_conter">
              <div class="home_conter_left">
                <span class="conter_span">场所 ｜</span>
                <span class="conter_span">时间 ｜</span>
                <span class="conter_span">类别 ｜</span>
              </div>
              <div class="home_conter_right">
                <span class="conter_sp">垟坑基督教堂</span>
                <span class="conter_sp">22-12-10</span>
                <h3 class="conter_sps_sn">任务预警</h3>
              </div>
            </div>
            <div class="home_rigth">
              <h3 class="sptns_sli">已完成</h3>
            </div>
          </div>
        </van-tab>
        <van-tab title="火灾预警">
          <div class="home_tops">
            <div class="home_left">
              <img src="@/assets/imagee.jpg" alt="" class="img" />
            </div>
            <div class="home_conter">
              <div class="home_conter_left">
                <span class="conter_span">场所 ｜</span>
                <span class="conter_span">时间 ｜</span>
                <span class="conter_span">类别 ｜</span>
              </div>
              <div class="home_conter_right">
                <span class="conter_sp">垟坑基督教堂</span>
                <span class="conter_sp">22-12-10</span>
                <h3 class="conter_sps">人脸预警</h3>
              </div>
            </div>
            <div class="home_rigth">
              <h3 class="sptns_sli">误报</h3>
            </div>
          </div>
        </van-tab>
        <van-tab title="任务预警">
          <div class="home_tops">
            <div class="home_left">
              <img src="@/assets/imagee.jpg" alt="" class="img" />
            </div>
            <div class="home_conter">
              <div class="home_conter_left">
                <span class="conter_span">场所 ｜</span>
                <span class="conter_span">时间 ｜</span>
                <span class="conter_span">类别 ｜</span>
              </div>
              <div class="home_conter_right">
                <span class="conter_sp">垟坑基督教堂</span>
                <span class="conter_sp">22-12-10</span>
                <h3 class="conter_sps">人脸预警</h3>
              </div>
            </div>
            <div class="home_rigth">
              <h3 class="sptns_sli">误报</h3>
            </div>
          </div>
        </van-tab>
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
  height: 54.8rem;
}
.home_fire {
  height: 3.4375rem;
  line-height: 3.4375rem;
  padding-left: 10px;
  .spn_fire {
    color: red;
    font-weight: 900;
    font-size: 16px;
  }
  .fire {
    font-weight: 900;
    font-size: 14px;
    padding-left: 5px;
    color: red;
  }
}
// 教堂1
.home_top {
  height: 4.875rem;
  display: flex;
  border-radius: 0.5rem;
  border: 1px solid #e20e05;
  .home_left {
    width: 88px;
    height: 50px;
    line-height: 75px;
    margin-left: 10px;
  }
  .img {
    width: 4.6875rem;
    height: 50px;
    border-radius: 5px;
    margin-left: 5px;
  }
  .home_conter {
    width: 9.375rem;
    margin-left: 8px;
    display: flex;
    .home_conter_left {
      width: 2.5rem;
      .conter_span {
        display: block;
        color: #636363;
        margin-top: 6px;
      }
    }
    .home_conter_right {
      width: 6.25rem;
      margin-left: 5px;
      .conter_sp {
        display: flex;
        margin-top: 6px;
      }
      .conter_sps {
        display: flex;
        margin-top: 6px;
        font-size: 14px;
        color: red;
      }
    }
  }
  .home_rigth {
    width: 6.25rem;
    margin-right: 15px;
    line-height: 3.75rem;
    text-align: center;
    .home_y {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      margin-top: 8px;
      margin-left: 20px;
      background-color: #e20e05;
    }
    .sptn {
      font-size: 18px;
      font-weight: 900;
      color: #fff;
    }
  }
}
// 教堂2
.home_tops {
  height: 4.875rem;
  display: flex;
  border-radius: 0.5rem;
  margin-top: 15px;
  border: 1px solid #0d9ed8;
  .home_left {
    width: 88px;
    height: 50px;
    line-height: 75px;
    margin-left: 10px;
  }
  .img {
    width: 75px;
    height: 50px;
    border-radius: 5px;
    margin-left: 5px;
  }
  .home_conter {
    width: 150px;
    margin-left: 8px;
    display: flex;
    .home_conter_left {
      width: 40px;
      .conter_span {
        display: block;
        margin-top: 6px;
        color: #636363;
      }
    }
    .home_conter_right {
      width: 6.25rem;
      margin-left: 5px;
      .conter_sp {
        display: flex;
        margin-top: 6px;
      }
      .conter_sps {
        display: flex;
        margin-top: 6px;
        font-size: 14px;
        color: #00acff;
      }
    }
  }
  .home_rigth {
    width: 6.25rem;
    margin-right: 15px;
    line-height: 75px;
    text-align: center;

    .sptns {
      font-weight: 900;
      font-size: 24px;
      color: #0aa3ec;
    }
  }
  // 修改
  .conter_sps_spen {
    display: flex;
    margin-top: 6px;
    font-size: 14px;
    color: red;
  }
  .conter_sps_sn {
    display: flex;
    margin-top: 6px;
    font-size: 14px;
    color: #e59e63;
  }
  .sptns_sli {
    font-weight: 900;
    font-size: 18px;
    color: #7c7f7e;
  }
}
.reporting_identify {
  height: 12rem;
  background-color: #f7f7f8;
  margin-top: 20px;
  display: flex;
  .identify {
    width: 8rem;
    height: 8rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    background-color: #00acff;
    margin-left: 8px;
  }
  .log_identify {
    height: 4rem;
  }
  .face_identify {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
  .identify_lie {
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: #e6e6e6;
  }
  .identify_h3 {
    display: inline-block;
    font-size: 18px;
    font-weight: 900;
    color: #01a5ea;
  }
  .identify_sp {
    color: #11a0df;
    margin-left: 5px;
  }
}
.ledger_div {
  height: 3.4375rem;
  line-height: 3.4375rem;
  padding-left: 10px;
  .spn_fires {
    font-weight: 900;
    font-size: 16px;
  }
  .fires {
    display: inline-block;
    color: #2e2e2e;
    font-size: 16px;
    padding-left: 5px;
  }
}
</style>
