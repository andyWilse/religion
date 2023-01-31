<template>
  <div class="page">
    <van-search
      v-model="searchName"
      background="#F6F6F6"
      placeholder="输入场所名称、设备编号查询"
    />
    <div class="screen-title fontSize12 weight700" v-if="source == 'search'">
      茶山街道 - 王某某
    </div>
    <div class="screen" v-else>
      <div class="screen-block" @click="showChurch = true">
        <div class="screen-block-name fontSize14 weight700">
          {{ church.name || "选择教派" }}
        </div>
        <img class="screen-block-icon" src="/images/icon004.png" />
      </div>
      <div class="screen-block marginLeft15" @click="showStreet = true">
        <div class="screen-block-name fontSize14 weight700">
          {{ street.name || "选择街道" }}
        </div>
        <img class="screen-block-icon" src="/images/icon004.png" />
      </div>
    </div>
    <div class="video">
      <div id="dplayer"></div>
      <!-- <img src="/images/img001.jpg"> -->
    </div>
    <div class="con padding15">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="切换摄像头" name="1">
          <div class="content hasColor1 fontSize12">
            <div
              class="camera"
              v-for="(item, index) in cameraList"
              :key="index"
            >
              <img class="camera-icon" src="/images/icon016.png" />
              <div class="name fontSize14 blueColor weight700">
                监控1-前门：FJA057401
              </div>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="历史回看" name="2">
          <div class="item_progress">
            <!-- 时间条 -->
            <div class="progressBar_time">
              <span class="time">
                <span class="time_time">13:40</span>
              </span>
              <span class="time">
                <span class="time_time"> 14:00</span>
              </span>
              <span class="time">
                <span class="time_time">14:20</span>
              </span>
              <span class="time">
                <span class="time_time">14:40</span>
              </span>
              <span class="time">
                <span class="time_time">15:00</span>
              </span>
            </div>

            <!-- 进度条 -->
            <div class="progressBar">
              <!-- 三个红色进度条 -->
              <div class="progress_e"></div>
              <div class="progress"></div>
              <div class="progress_l"></div>
            </div>
            <!-- 时间条 -->
            <div class="timeBar"></div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="场所概况" name="3">
          <div class="content hasColor1 fontSize12">
            <div class="line">场所名称：**寺</div>
            <div class="line">设备编号：fj4659601</div>
            <div class="line">所属机构：瓯海区 泽雅镇</div>
            <div class="line">登记证号：宗教证字（浙）J030030096</div>
            <div class="line">
              第一负责人：陈*旺
              <span class="blueColor1" @click="tel('138****744')"
                >138****744</span
              >
            </div>
            <div class="line">
              工作联络员：陈*旺
              <span class="blueColor1" @click="tel('138****744')"
                >138****744</span
              >
            </div>
            <div class="line">
              场所电话：<span class="blueColor1" @click="tel('0577-88511932')"
                >0577-88511932</span
              >
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <DialTel :telShow="telShow" :tel="phone" @close="telShow = false"></DialTel>
    <!-- 选择教派 -->
    <van-popup v-model="showChurch" position="bottom">
      <van-picker
        show-toolbar
        :columns="churchList"
        @confirm="confirmChurch"
        value-key="name"
        @cancel="showChurch = false"
      />
    </van-popup>
    <!-- 选择街道 -->
    <van-popup v-model="showStreet" position="bottom">
      <van-picker
        show-toolbar
        :columns="streetList"
        @confirm="confirmStreet"
        value-key="name"
        @cancel="showStreet = false"
      />
    </van-popup>
  </div>
</template>

<script>
// import flvjs from 'flv.js';
import BScroll from "@better-scroll/core";
import Hls from "hls.js";
import DPlayer from "dplayer";
import DialTel from "@/components/DialTel/DialTel.vue";
export default {
  components: {
    DialTel,
  },
  data() {
    return {
      source: "",
      searchName: "",
      telShow: false,
      phone: "",
      //滚动
      scroll: null,
      // 教派
      showChurch: false,
      church: { id: 0, name: "" },
      churchList: [
        { id: 1, name: "杭州" },
        { id: 2, name: "宁波" },
        { id: 3, name: "温州" },
      ],

      // 街道
      showStreet: false,
      street: {},
      streetList: [
        { id: 1, name: "街道1" },
        { id: 2, name: "街道2" },
        { id: 3, name: "街道3" },
      ],
      activeNames: ["3"],
      cameraList: [1, 2, 3],

      // 视频信息
      dp: {}, // 视频对象
      duration: 0, // 视频总时长
      live: false, // 是否直播
      // videoUrl: '/11.flv',
      // videoUrl: 'http://wz10.qqy189.com:12321/live/12209800010000758301.flv',
      // videoUrl: 'http://wz10.qqy189.com:12321/live/12209800010000758301/hls.m3u8'
      videoUrl:
        "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
    };
  },
  watch: {
    live(n, o) {
      console.log("n", n);
      if (n) this.loadVideo();
    },
  },
  mounted() {
    this.loadVideo();
    this.itemBar();
  },
  created() {
    this.source = this.$route.query.source || "";
  },
  methods: {
    /**
     * 滑动
     */
    itemBar() {},
    /**
     * 播放视频
     */
    loadVideo() {
      let that = this;

      that.dp = new DPlayer({
        container: document.getElementById("dplayer"),
        live: that.live,
        autoplay: true,
        airplay: true,
        video: {
          url: that.videoUrl,
          type: "customHls",
          customType: {
            customHls: function (video, player) {
              // console.log('customHls' , video);
              const hls = new Hls();
              hls.loadSource(that.videoUrl);
              hls.attachMedia(video);
            },
            //         customFlv: function (video, player) {
            // console.log('customFlv' , video);
            //             const flvPlayer = flvjs.createPlayer({
            //                 type: 'flv',
            //                 url: that.videoUrl,
            //             });
            //             flvPlayer.attachMediaElement(video);
            //             flvPlayer.load();
            //         },
          },
        },
      });

      that.dp.on("canplay", function () {
        that.duration = parseFloat(that.dp.video.duration);
        console.log("canplay", that.duration);
        that.live = that.duration <= 0 ? true : false;
        if (!that.live) {
          // that.dp.seek(100);
        }
      });

      that.dp.on("timeupdate", function () {
        that.duration = parseFloat(that.dp.video.duration);
        that.live = that.duration <= 0 ? true : false;
      });
    },
    /**
     * 拨打电话
     * @param {Object} phone
     */
    tel(phone) {
      this.telShow = true;
      this.phone = phone;
    },
    /**
     * 选择教派
     * @param {Object} e
     */
    confirmChurch(e) {
      console.log("选择教派", e);
      this.church = e;
      this.showChurch = false;
    },
    /**
     * 选择街道
     * @param {Object} e
     */
    confirmStreet(e) {
      this.street = e;
      this.showStreet = false;
    },
  },
};
</script>

<style scoped lang="less">
.van-search {
  padding: 15px;
}

.van-search__content {
  background-color: #fff;
  border-radius: 5px;
}

.van-search .van-cell {
  padding: 10px 8px 10px 0;
}

.screen-title {
  background-color: #f6f6f6;
  padding: 0px 15px 10px;
}

.screen {
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 0px 15px 10px;

  .screen-block {
    display: flex;
    align-items: center;

    .screen-block-icon {
      width: 10px;
      height: auto;
      margin-left: 5px;
    }
  }
}

.video {
  background-color: #f6f6f6;
  padding: 0px 15px 10px;
  height: 200px;

  img {
    width: 100%;
    height: 200px;
  }
}

.con {
  ::v-deep .van-cell {
    padding: 10px 0px;
  }

  ::v-deep .van-cell__title {
    font-size: 14px;
    color: #000000;
    font-weight: 700;
  }

  ::v-deep .van-hairline--top-bottom::after {
    border-width: 0px;
  }

  ::v-deep .van-collapse-item--border::after,
  ::v-deep .van-cell::after {
    left: 0px;
    right: 0px;
  }

  ::v-deep .van-collapse-item--border::after,
  ::v-deep .van-cell::after {
    border-top: 1px dashed #c8c8c8;
  }

  ::v-deep .van-collapse-item__content {
    padding: 0px;
  }

  .content {
    padding: 10px 0px;

    .camera {
      background-color: #e9f2f8;
      border: 1px solid #1a559a;
      border-radius: 22px;
      display: inline-flex;
      align-items: center;
      padding: 2px 5px;
      margin-bottom: 10px;

      .camera-icon {
        width: 14px;
        height: 15px;
        margin-right: 7px;
      }
    }

    .camera:last-child {
      margin-bottom: 0px;
    }
  }
}
// 进度条
.item_progress {
  height: 135px;
  background-color: #f0f0f0;
}
.progressBar {
  position: relative;
  width: 200px;
  height: 14px;
  top: 75px;
  background-color: #d2d2d2;
  border-radius: 5px;
  .progress {
    position: absolute;
    left: 127px;
    top: 0;
    right: 0;
    bottom: 0;
    width: 14px;
    height: 14px;
    background-color: #9b2e25;
  }
  .progress_e {
    position: absolute;
    left: 112px;
    top: 0;
    right: 0;
    bottom: 0;
    width: 5px;
    height: 14px;
    background-color: #9b2e25;
  }
  .progress_l {
    position: absolute;
    left: 160px;
    top: 0;
    right: 0;
    bottom: 0;
    width: 11px;
    height: 14px;
    background-color: #9b2e25;
  }
}
// 时间条
.timeBar {
  position: absolute;

  left: 162px;
  top: 90px;
  right: 0;
  bottom: 0;
  width: 3px;
  height: 80px;
  background-color: #000000;
}
//时间
.progressBar_time {
  position: absolute;
  height: 30px;
  top: 45px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  .time {
    width: 1px;
    height: 7px;
    margin-left: 19px;
    margin-right: 19px;
    background-color: #000000;
  }
  .time_time {
    display: inline-block;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #000000;
    margin-left: -15px;
    margin-top: 15px;
  }
}
</style>