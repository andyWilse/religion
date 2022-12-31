<template>
  <div class="container">
    <div class="home">
      <!-- 标题 -->
      <div class="home_fire">
        <span class="spn_fire">|</span>
        <span class="fire">紧急预警</span>
      </div>
      <!--教堂-->
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
      <!-- 按钮 -->
      <div class="home_btn">
        <div class="home_top_btn">
          <div class="home_top_d">自查巡查</div>
          <div class="home_top_d">问题上报</div>
          <div class="home_top_d">加分奖励</div>
          <div class="home_top_d">活动上报</div>
        </div>
        <div class="home_bottom">
          <div class="home_bottom_b">网络舆情</div>
          <div class="home_bottom_b">巡查反馈</div>
          <div class="home_bottom_b">下达任务</div>
          <div class="home_bottom_b">统计台账</div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="home_bottom_lb">
      <div class="home_educate">
        <div class="educate_li">
          <span>|</span>
          <span class="educate_li_sp">宣传教育</span>
        </div>
        <div class="educate_div">
          <span>更多</span>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="carouselMap">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="@/assets/imagee.jpg" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/imagee.jpg" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/imagee.jpg" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/imagee.jpg" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 文章 -->
      <div class="essay">
        <div class="d">
          <span>习近平：坚持我国宗教中国化方向</span>
          <span class="lis">2022.11.18</span>
        </div>
        <div class="d">
          <span class="sp">积极引导宗教与社会主义社会相适应，深入推进</span>
          <span class="s">2022.09.06</span>
        </div>
        <div class="d">
          <span class="sp">弘扬中华优秀文化传统，不断深入推进我国宗教</span>
          <span class="ss">2022.08.12</span>
        </div>
        <div class="d">
          <span class="sp">藏传佛教是佛教中国化的产物 宗教中国化是历史</span>
          <span class="sss">2022.06.10</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style scoped lang="less">
.home {
  height: 450px;
  background-color: #f7f7f8;
}
.home_fire {
  height: 3.4375rem;
  line-height: 55px;
  padding-left: 10px;
  .spn_fire {
    font-size: 14px;
  }
  .fire {
    padding-left: 5px;
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
        color: #636363;
        margin-top: 6px;
      }
    }
    .home_conter_right {
      width: 100px;
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
    width: 100px;
    margin-right: 15px;
    line-height: 60px;
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
      width: 100px;
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
    width: 100px;
    margin-right: 15px;
    line-height: 75px;
    text-align: center;

    .sptns {
      font-weight: 900;
      font-size: 24px;
      color: #0aa3ec;
    }
  }
}
// 按钮
.home_btn {
  height: 11.25rem;
  margin-top: 20px;
  .home_top_btn {
    height: 5rem;
    display: flex;
    text-align: center;

    .home_top_d {
      width: 88px;
      height: 74px;
      line-height: 74px;
      margin-left: 8px;
      margin-top: 3px;
      border-radius: 0.5rem;
      background-color: #00acff;
    }
  }
  .home_bottom {
    height: 5rem;
    display: flex;
    margin-top: 20px;
    text-align: center;
  }
  .home_bottom_b {
    width: 88px;
    height: 74px;
    line-height: 74px;
    margin-left: 8px;
    margin-top: 3px;
    border-radius: 0.5rem;
    background-color: #00acff;
  }
}
.home_bottom_lb {
  height: 16.5625rem;

  margin-top: 2px;
  .home_educate {
    height: 32px;
    line-height: 32px;
    display: flex;
  }
  .educate_li {
    flex: 1;
    padding-left: 0.625rem;
    .educate_li_sp {
      padding-left: 0.3125rem;
    }
  }
  .educate_div {
    margin-right: 1.25rem;
  }
  // 轮播图
  .carouselMap {
    height: 4.75rem;
    margin-top: 0.375rem;

    .my-swipe .van-swipe-item {
      height: 76px;
      color: #fff;
      font-size: 20px;
      line-height: 76px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
  .essay {
    height: 8.4375rem;
    margin-top: 10px;
    margin-left: 10px;

    .lis {
      margin-left: 92px;
    }
    .s {
      margin-left: 20px;
    }
    .d {
      margin-top: 5px;
    }
    .ss {
      margin-left: 20px;
    }
    .sss {
      margin-left: 18px;
    }
  }
  .essay_sp {
    display: block;
    margin-top: 5px;
  }
}
</style>
