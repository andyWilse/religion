<template>
  <div class="container">
    <!-- 标题 -->
    <div class="home_fire">
      <span class="spn_fire"> </span>
      <span class="fire weight700">紧急事件</span>
    </div>
    <!-- 垟坑基督教堂 -->
    <div class="home_top" v-for="(item, index) in urgent" :key="index">
      <div class="home_left">
        <img src="@/assets/imagee.jpg" alt="" class="img" />
      </div>
      <!-- 文字 -->
      <div class="home_conter">
        <div class="home_conter_left">
          <span class="conter_span">垟坑基督教堂</span>
          <span class="span_log" v-if="item.type == 1"></span>
          <span class="span_log1" v-else></span>
        </div>

        <div class="conter_span_s">
          <span class="span_item">时间:2022-12-09 08:21:11 </span>
        </div>
      </div>
      <div class="home_rigth">
        <div
          class="home_rigth_span fontSize14 weight700 whiteColor"
          v-if="item.type == 1"
          @click="$router.push('/fire')"
        >
          警告
        </div>

        <div
          class="home_rigth_span seeBack fontSize14 weight700 hasColor2"
          v-else
          @click="$router.push('/fire')"
        >
          查看
        </div>
      </div>
    </div>
    <!--6个按钮  -->
    <div class="userhome_btn">
      <div class="user_home_btn">
        <div class="userhome_btn1">
          <span class="userhome_btn1_span redColor1">教派统计</span>
          <span class="userhome_btn1_spn redColor1">659座</span>
        </div>
        <div class="userhome_btn2">
          <span class="userhome_btn2_span yellowColor1">佛教</span>
          <span class="userhome_btn2_spn yellowColor1">159座</span>
        </div>
        <div class="userhome_btn3">
          <span class="userhome_btn3_span redColor1">道教</span>
          <span class="userhome_btn3_spn redColor1">109座</span>
        </div>
      </div>
      <div class="userhome_set">
        <div class="userhome_btn4">
          <span class="userhome_btn4_span blueColor">基督教</span>
          <span class="userhome_btn4_spn blueColor">91座</span>
        </div>
        <div class="userhome_btn5">
          <span class="userhome_btn5_span greenColor">天主教</span>
          <span class="userhome_btn5_spn greenColor">206座</span>
        </div>
        <div class="userhome_btn6">
          <span class="userhome_btn6_span">伊斯兰教</span>
          <span class="userhome_btn6_spn">40座</span>
        </div>
      </div>
    </div>
    <!-- 我的任务 -->
    <div class="div">
      <!-- 我的任务 -->
      <div class="home_fire">
        <span class="spn_fire"> </span>
        <span class="fire_lis weight700">我的任务</span>
      </div>
      <!-- 任务摄像头1 -->
      <div class="list padding15">
        <div class="li" v-for="(item, index) in list" :key="index">
          <div class="top fontSize14 blackColor weight700">
            摄像头检查
            <span class="top_span" v-if="item == 1"></span>
            <span class="top_span1" v-else></span>
          </div>

          <div class="bottom">
            <div class="left">
              <div class="left-line hasColor1">地址：泽雅镇垟坑基督教堂</div>
              <div class="left-line hasColor1">时间：2022-12-09 08:21:11</div>
            </div>
            <span class="redColor1 marginLeft14">待完成</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 宣传教育 -->
    <div class="userhome_fire">
      <span class="user_spn_fire"> </span>
      <span class="user_fire_lis weight700">宣传教育</span>
    </div>
    <!-- 首页图片 -->
    <div class="home_container">
      <img src="@/assets/image/img.png" alt="" />
    </div>
    <!-- 首页文章 -->
    <div class="home_essay">
      <div class="home_essay_left">
        <div class="home_essay_yue">
          <span class="home_essay_yue_span">09/</span>
        </div>
        <div class="home_essay_hao">
          <span class="home_essay_hao_span">12月 2022</span>
        </div>
      </div>
      <!-- 文字 -->
      <div class="home_writing" @click="$router.push('/Article/Info')">
        <h1 class="home_writing_h3">习近平:坚持我国宗教中国化方向</h1>
        <span class="home_writing_span">部分详情内容显示...</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reporting",
  data() {
    return {
      active: 0,
      urgent: [
        {
          type: 1,
        },
        {
          type: 2,
        },
      ], // 紧急事件
      list: [1, 2],
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.container {
  height: 55rem;
}
.home_fire {
  padding-top: 10px;

  .spn_fire {
    display: inline-block;
    width: 2px;
    height: 12px;
    margin-left: 10px;
    background-image: url("@/assets/image/img001.png");
  }

  .fire {
    font-size: 14px;
    color: #9b2e25;
    margin-left: 10px;
  }
  // 修改
  .fire_lis {
    font-size: 14px;
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
  box-shadow: 0px 0px 27px 0px rgba(232, 232, 232, 0.54);

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
      background-image: url("@/assets/icon_image/icon_log3.png");
      vertical-align: middle;
    }
    .span_log1 {
      display: inline-block;
      width: 58px;
      height: 18px;
      margin-left: 8px;
      background-image: url("@/assets/icon_image/icon_log4.png");
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      background-color: #9b2e25;
      border-radius: 44px;
    }

    .seeBack {
      background-color: #f3f7fc;
    }
  }
}
// 6个按钮
.userhome_btn {
  height: 9.625rem;
  margin-top: 10px;
  .user_home_btn {
    height: 77px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .userhome_btn1 {
      width: 96px;
      height: 61px;
      margin-left: 25px;
      border-radius: 10px;
      background-image: url("@/assets/icon_image/icon_tubiao1.png");
      .userhome_btn1_span {
        display: block;
        margin-top: 8px;
        margin-left: 10px;
      }
      .userhome_btn1_spn {
        display: block;
        margin-left: 10px;
        margin-top: 2px;
      }
    }
    .userhome_btn2 {
      width: 96px;
      height: 61px;
      border-radius: 10px;
      background-image: url("@/assets/icon_image/icon_tubiao2.png");
      .userhome_btn2_span {
        display: block;
        margin-top: 8px;
        margin-left: 10px;
      }
      .userhome_btn2_spn {
        display: block;
        margin-left: 10px;
        margin-top: 2px;
      }
    }
    .userhome_btn3 {
      width: 96px;
      height: 61px;
      margin-right: 23px;
      border-radius: 10px;
      background-image: url("@/assets/icon_image/icon_tubiao3.png");
      .userhome_btn3_span {
        display: block;
        margin-top: 8px;
        margin-left: 10px;
      }
      .userhome_btn3_spn {
        display: block;
        margin-left: 10px;
        margin-top: 2px;
      }
    }
  }
  .userhome_set {
    height: 77px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .userhome_btn4 {
      width: 96px;
      height: 61px;
      margin-left: 25px;
      border-radius: 10px;
      background-image: url("@/assets/icon_image/icon_tubiao4.png");
      .userhome_btn4_span {
        display: block;
        margin-top: 8px;
        margin-left: 10px;
      }
      .userhome_btn4_spn {
        display: block;
        margin-left: 10px;
        margin-top: 2px;
      }
    }
    .userhome_btn5 {
      width: 96px;
      height: 61px;
      border-radius: 10px;
      background-image: url("@/assets/icon_image/icon_tubiao5.png");
      .userhome_btn5_span {
        display: block;
        margin-top: 8px;
        margin-left: 10px;
      }
      .userhome_btn5_spn {
        display: block;
        margin-left: 10px;
        margin-top: 2px;
      }
    }
    .userhome_btn6 {
      width: 96px;
      height: 61px;
      margin-right: 23px;
      border-radius: 10px;
      background-image: url("@/assets/icon_image/icon_tubiao6.png");
      .userhome_btn6_span {
        display: block;
        margin-top: 8px;
        margin-left: 10px;
        color: #3d1c9a;
      }
      .userhome_btn6_spn {
        display: block;
        margin-left: 10px;
        margin-top: 2px;
        color: #3d1c9a;
      }
    }
  }
}
//  我的任务
.div {
  height: 212px;
}
.list {
  margin-bottom: 60px;
  .li {
    padding: 0px 15px;
    background: #ffffff;
    box-shadow: 0px 0px 27px 0px rgba(232, 232, 232, 0.54);
    border-radius: 10px;
    margin-bottom: 10px;

    .top {
      padding: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e9e9e9;
    }

    .top_span {
      display: inline-block;
      width: 58px;
      height: 18px;
      margin-right: 10px;
      background-image: url("@/assets/icon_image/icon_log1.png");
    }
    .top_span1 {
      display: inline-block;
      width: 58px;
      height: 18px;
      margin-right: 10px;
      background-image: url("@/assets/icon_image/icon_log2.png");
    }
    .marginLeft14 {
      margin-right: 15px;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0px;

      .right {
        .btn {
          padding: 2px 10px;
          background: #9b2e25;
          border-radius: 5px;
        }

        .info {
          background: #1a559a;
        }
      }
    }
  }
}

// 宣传教育
.userhome_fire {
  margin-top: 52px;
  .user_spn_fire {
    display: inline-block;
    width: 2px;
    height: 12px;
    margin-left: 10px;
    background-image: url("@/assets/image/img001.png");
  }
  .user_fire_lis {
    font-size: 14px;
    margin-left: 10px;
  }
}

.home_container {
  height: 4.75rem;
  position: relative;
  margin: 12px 12px 12px 12px;
  border-radius: 55px;
}
.home_container img {
  width: 100%;
  height: 100%;
  border-radius: 55px;
}
// 首页文章
.home_essay {
  height: 3.8125rem;
  display: flex;
  border-bottom: 1px solid #f2f3f4;
  .home_essay_left {
    width: 4.25rem;
    height: 2.375rem;
    margin-left: 22px;
    margin-top: 14px;
    display: flex;
    // background-color: aqua;
    border-radius: 10px;
    .home_essay_yue {
      width: 2rem;
      height: 1.875rem;
      margin-top: 6px;
      margin-left: 5px;
    }
    .home_essay_hao {
      width: 27px;
      height: 29px;
      margin-top: 4px;
      margin-left: 2px;
      // background-color: darkgray;
    }
    .home_essay_yue_span {
      font-size: 1.3125rem;
    }
  }
  // 文字
  .home_writing {
    flex: 1;
    height: 34px;
    margin-top: 17px;
    margin-left: 10px;
    .home_writing_h3 {
      font-weight: 900;
      font-size: 13px;
    }
    .home_writing_span {
      color: #9f9e9e;
    }
  }
}
</style>
