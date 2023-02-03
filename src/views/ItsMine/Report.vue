<template>
  <div class="page padding15">
    <div class="btn weight700 yellowColor1 issued">下达</div>
    <div class="btn weight700 blueColor1 report">上报</div>
    <div class="title fontSize14 weight700 blackColor">发起备案</div>
    <div class="btn danger weight700 yellowColor1">紧急</div>
    <div class="btn info weight700 blueColor1">普通</div>
    <div class="form">
      <div class="block block-line">
        <div class="left fontSize14 weight700">任务名称</div>
        <div class="right hasColor1 marginLeft15">
          <div class="block-line" @click="showPicker = true">
            <div class="left blackColor" v-if="type.name">{{ type.name }}</div>
            <div class="left" v-else>请选择任务类别</div>
            <van-icon name="arrow-down" />
          </div>
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              value-key="name"
              @cancel="showPicker = false"
            />
          </van-popup>
        </div>
      </div>
      <div class="block block-line">
        <div class="left fontSize14 weight700">截止时间</div>
        <div class="right hasColor1 marginLeft15">
          <div class="block-line" @click="showTimePicker = true">
            <div class="left blackColor" v-if="date">{{ date }}</div>
            <div class="left" v-else>请选择任务时间</div>
            <van-icon name="arrow-down" />
          </div>
          <van-popup v-model="showTimePicker" position="bottom">
            <van-datetime-picker
              type="date"
              title="选择年月日"
              @confirm="onTimeConfirm"
              @cancel="showTimePicker = false"
            />
          </van-popup>
        </div>
      </div>
      <div class="block block-line">
        <div class="left fontSize14 weight700">场所地点</div>
        <div class="right blueColor1 marginLeft15">
          <input class="input" type="text" placeholder="请填写准确场所地点" />
        </div>
      </div>
      <div class="block">
        <div class="block-title fontSize14 weight700">任务内容</div>
        <textarea
          class="textarea"
          name=""
          placeholder="请详细描述发生事件并上传照片..."
        ></textarea>
        <div class="images">
          <van-uploader v-model="fileList" :after-read="afterRead" />
          <van-uploader
            class="uploader"
            v-model="fileList"
            :after-read="afterRead"
          />
        </div>
        <!-- 视频 -->
      </div>
      <!-- <div class="block block-line">
				<div class="left fontSize14 weight700">
					谁来执行
				</div>
				<van-icon class="blueColor1" name="add-o" size="18" />
			</div> -->
      <!-- <div class="block block-line" @click="peopleOpen()">
        <div class="left fontSize14 weight700">抄送给</div>
        <van-icon class="blueColor1" name="add-o" size="18" />
      </div> -->
      <view class="btns">
        <image
          class="submit"
          src="/static/images/icon007.png"
          mode="widthFix"
          @tap="navigationTo('activity/add')"
        ></image>
      </view>
      <div class="submit fontSize14 whiteColor weight700">提交</div>
    </div>
    <PopupPeople
      ref="people"
      :show="show"
      @confirm="peopleConfirm"
    ></PopupPeople>
  </div>
</template>

<script>
import PopupPeople from "@/components/Popup/PopupPeople.vue";
import { parseTime } from "@/utils/util";
export default {
  props: {
    tableIndex: {
      type: Number,
      default: 1,
    },
  },
  components: {
    PopupPeople,
  },
  data() {
    return {
      type: { id: 0, name: "" },
      date: "",
      showPicker: false,
      showTimePicker: false,
      fileList: [],
      columns: [
        { id: 1, name: "杭州" },
        { id: 2, name: "宁波" },
        { id: 3, name: "温州" },
      ],
      show: false,
    };
  },
  methods: {
    peopleConfirm(e) {
      console.log("peopleConfirm", e);
    },
    /**
     * 选择任务类型
     * @param {Object} e
     */
    onConfirm(e) {
      console.log("选择任务类型", e);
      this.type = e;
      this.showPicker = false;
    },
    /**
     * 选择发起时间
     * @param {Object} e
     */
    onTimeConfirm(e) {
      this.date = parseTime(e, "{y}-{m}-{d}");
      this.showTimePicker = false;
    },
    /**
     * 图片上传
     * @param {Object} file
     */
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log("图片上传", file);
      file.status = "uploading";
      file.message = "上传中...";

      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
        console.log("图片上传1", file);
      }, 1000);
    },
    peopleOpen() {
      this.$refs.people.open();
    },
  },
};
</script>

<style scoped lang="less">
.title {
  position: relative;
  padding-left: 10px;
}
.danger {
  display: inline-block;
  border: 1px solid #9b2e25;
  background-color: #fcefee;
  padding: 2px 10px;
  border-radius: 20px;
  margin-left: 230px;
  border-color: #9a7a19;
  background-color: #faf1ed;
}
.info {
  display: inline-block;
  border: 1px solid #9b2e25;
  background-color: #fcefee;
  padding: 2px 10px;
  border-radius: 20px;
  margin-left: 18px;
  border-color: #135097;
  background-color: #e9f2f8;
}
.title::before {
  width: 2px;
  height: 13px;
  content: "";
  background-color: #9b2e25;
  position: absolute;
  left: 0px;
  top: 5px;
}

.form {
  .block {
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px 25px;

    .block-title {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 10px;
    }

    .textarea {
      border: none;
      width: 100%;
      height: 100px;
      padding: 10px 0px;
    }

    .right {
      flex: 1;

      .input {
        width: 100%;
        border: none;
      }
    }
  }

  .block-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .submit {
    width: 80vw;
    height: 40px;
    line-height: 40px;
    margin: 10px auto 60px;
    background: #9b2e25;
    border-radius: 10px;
    text-align: center;
  }
}
// 下达
.issued {
  display: inline-block;
}
// 上报
.report {
  display: inline-block;
}
.uploader {
  margin-left: 105px;
}
</style>