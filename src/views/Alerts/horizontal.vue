<template>
  <!-- 时间条 -->
  <div class="item_proherss">
    <div class="scroll-content" ref="scroll">
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
        <div class="progressBar">
          <div class="progress_e"></div>
          <div class="progress"></div>
          <div class="progress_l"></div>
        </div>
      </div>
    </div>
    <div class="timeBar mouse-wheel-wrapper"></div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  name: "horizontal",
  data() {
    return {
      emojis: [
        "👉🏼 😁 😂 🤣 👈🏼",
        "😄 😅 😆 😉 😊",
        "😫 😴 😌 😛 😜",
        "👆🏻 😒 😓 😔 👇🏻",
        "😑 😶 🙄 😏 😣",
        "😞 😟 😤 😢 😭",
        "🤑 😲 ☹️ 🙁 😖",
        "👍 👎 👊 ✊ 🤛",
        "☝️ ✋ 🤚 🖐 🖖",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
      ],
    };
  },
  mounted() {
    this.info();
  },
  methods: {
    info() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        probeType: 3, // listening scroll event
      });
      this.bs.on("scrollStart", () => {
        console.log("scrollStart-");
      });
      this.bs.on("scroll", ({ y }) => {
        console.log("scrolling-");
      });
      this.bs.on("scrollEnd", () => {
        console.log("scrollingEnd");
      });
    },
  },
};
</script>
<style scoped lang="less">
.horizontal-container .scroll-wrapper {
  white-space: nowrap;
}

.scroll-content {
  display: inline-block;
}

.item_proherss {
  height: 140px;
  margin-top: 11px;
  background-color: #f0f0f0;
}
.progressBar {
  position: relative;
  width: 90%;
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
  top: 200px;
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
  top: 145px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
