<template>
  <div class="page">
    <!-- <van-sticky> -->
    <!-- <van-search
      v-model="searchName"
      background="#F6F6F6"
      placeholder="输入场所名称、设备编号查询"
    /> -->
    <!-- </van-sticky> -->
    <!-- <div class="title fontSize12 weight700">茶山街道 - 王某某</div>
    <div class="typeList">
      <van-badge content="85例" color="#2C9A35">
        <div class="type-block" @click="selectTable(1)">
          <img class="type-icon" src="/images/icon010.png" />
          <div class="type-name weight700 textAlignCenter">宗教场所</div>
        </div>
      </van-badge>
      <van-badge content="584例" color="#9A7A19">
        <div class="type-block" @click="selectTable(2)">
          <img class="type-icon" src="/images/icon011.png" />
          <div class="type-name weight700 textAlignCenter">监控设备</div>
        </div>
      </van-badge>
      <van-badge content="565例" color="#1052A1">
        <div class="type-block" @click="$router.push('/monitor/search')">
          <img class="type-icon" src="/images/icon012.png" />
          <div class="type-name weight700 textAlignCenter">在线设备</div>
        </div>
      </van-badge>
      <van-badge content="19例" color="#3D1C9A">
        <div class="type-block" @click="selectTable(3)">
          <img class="type-icon" src="/images/icon013.png" />
          <div class="type-name weight700 textAlignCenter">报修设备</div>
        </div>
      </van-badge>
    </div> -->
    <div class="deviceList">
      <!-- 报修设备 -->
      <div class="camera" v-if="tableIndex == 3">
        <div
          class="li"
          v-for="(item, index) in list"
          :key="index"
          @click="$router.push('/ltsmine/handle')"
        >
          <div class="top fontSize14 blackColor weight700">
            摄像头FJa00215401检查
          </div>
          <div class="bottom">
            <div class="left">
              <div class="left-line hasColor1">地址：泽雅镇垟坑基督教堂</div>
              <div class="left-line hasColor1">时间：2022-12-09 08:21:11</div>
            </div>
            <div class="right fontSize14 weight700 whiteColor">
              <div class="btn info" v-if="item.status == 1">去处理</div>
              <div class="btn" v-else-if="item.status == 2">未解决</div>
              <div class="hasColor2" v-else-if="item.status == 3">已解决</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 宗教场所 -->
      <div
        class="device padding15"
        v-for="(item, index) in list"
        :key="index"
        v-else
      >
        <div
          class="device-name fontSize14 blackColor weight700"
          @click="$router.push('/Monitor/Search')"
        >
          卧云禅寺
        </div>
        <div class="device-msg hasColor1">
          温州市瓯海区雪山路367号景山公园内
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableIndex: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      searchName: "",
      list: [
        { status: 1 },
        { status: 2 },
        { status: 1 },
        { status: 1 },
        { status: 3 },
        { status: 3 },
      ],
      tableIndex: 3,
    };
  },
  mounted() {},
  created() {
    // this.tableIndex = this.$route.query.tableIndex;
  },
  methods: {
    selectTable(index) {
      this.tableIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.van-search__content {
  background-color: #fff;
  border-radius: 5px;
}

.van-search .van-cell {
  padding: 10px 8px 10px 0;
}

.title {
  padding: 0px 25px 10px;
  background-color: #f6f6f6;
}

.flexCenter {
  display: flex;
  align-items: center;
}

.flexCenterBetween:extend(.flexCenter) {
  justify-content: space-between;
}

.typeList:extend(.flexCenterBetween) {
  background-color: #ffffff;
  padding: 15px 25px;
  border-bottom: 10px solid #f6f6f6;

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

.list {
  .list-title {
    position: relative;
    padding-left: 10px;
  }

  .list-title::before {
    width: 2px;
    height: 13px;
    content: "";
    background-color: #9b2e25;
    position: absolute;
    left: 0px;
    top: 5px;
  }

  .tables:extend(.flexCenter) {
    margin-top: 10px;

    .table:extend(.flexCenter) {
      margin-right: 10px;
      height: 25px;
      line-height: 25px;
      padding-right: 10px;
      border-radius: 25px;

      .left:extend(.flexCenter) {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        justify-content: center;
        background-color: #ecf6e5;
        margin-right: 5px;

        .table-icon {
          width: 15px;
          height: 12px;
        }
      }

      .left2 {
        background-color: #faf1ed;
      }

      .left3 {
        background-color: #f0f2ff;
      }
    }

    .check1 {
      background-color: #ecf6e5;
      color: #2c9a35;

      .left {
        margin-right: 0px;
      }
    }

    .check2 {
      background-color: #faf1ed;
      color: #9a7a19;

      .left {
        margin-right: 0px;
      }
    }

    .check3 {
      background-color: #f0f2ff;
      color: #3d1c9a;

      .left {
        margin-right: 0px;
      }
    }
  }
}

.list-border-bottom {
  border-bottom: 1px solid #f6f6f6;
}

.deviceList {
  // 保修设备
  .camera {
    padding: 0px 15px;

    .li {
      padding: 0px 15px;
      background: #ffffff;
      box-shadow: 0px 0px 27px 0px rgba(232, 232, 232, 0.54);
      border-radius: 10px;
      margin-bottom: 10px;

      .top:extend(.flexCenterBetween) {
        padding: 10px 0px;
        border-bottom: 1px solid #e9e9e9;
      }

      .bottom:extend(.flexCenterBetween) {
        padding: 10px 0px;

        .right {
          .btn {
            padding: 2px 8px;
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

  .device {
    border-bottom: 10px solid #f6f6f6;
  }

  .device:last-child {
    border-bottom: none;
  }
}
</style>
