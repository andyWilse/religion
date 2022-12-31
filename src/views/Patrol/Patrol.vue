<template>
  <div class="container">
    <div class="partol_xuncha">
      <img src="@/assets/image/xunc1.jpg" alt="" />
    </div>
    <!--上传 -->
    <div class="parto_shang">
      <van-divider
        contentPosition="center"
        customStyle="color: #ffe6d0; border-color: #ffe6d0; font-size: 16px;"
      >
        泽雅镇垟坑基督教堂 墓督教
      </van-divider>
      <!-- 上传照片 -->
      <span class="shan">|</span>
      <span class="span">现场照片 （1~6张）</span>
      <div class="div">
        <van-uploader :after-read="afterRead" preview-size="60px" />
      </div>
      <span class="sp">请输入巡杳情况</span>
      <!-- 检查结果： -->
      <div class="examine">
        <div class="examine_sp">
          <span>检查结果：</span>
        </div>
        <div class="examine_span">
          <van-icon name="passed" />
          <span class="hege">合格</span>
          <van-icon name="passed" />
          <span class="hege"> 不合格</span>
        </div>
      </div>
      <!-- 图片 -->
      <div class="examine_img">
        <img src="@/assets/image/jc1.jpg" alt="" />
      </div>
      <!-- 按钮 -->
      <van-button round type="info" size="small">提交</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Patrol",
  data() {
    return {
      fileList: [],
      show: false,
    };
  },
  methods: {
    afterRead(event) {
      this.$toast({
        message: "上传成功",
        icon: "success",
      });
      const { file } = event.detail;
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      wx.uploadFile({
        url: "https://example.weixin.qq.com/upload", // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: "file",
        formData: { user: "test" },
        success(res) {
          // 上传完成需要更新 fileList
          const { fileList = [] } = this.data;
          fileList.push({ ...file, url: res.data });
          this.setData({ fileList });
        },
      });
    },
  },
};
</script>
<style scoped lang="less">

.container {
  height: 48.75rem;
}
.partol_xuncha {
  height: 18.75rem;
}
.partol_xuncha img {
  width: 100%;
  height: 100%;
}
// 上传
.parto_shang {
  height: 15rem;
  margin-top: 0.625rem;
  .shan {
    font-weight: 900;
    font-size: 1.125rem;
    color: #d46734;
    margin-left: 1.25rem;
  }
  .span {
    margin-left: 0.3125rem;
    color: #6666;
  }
  .div {
    margin-left: 1.25rem;
    margin-top: 0.625rem;
    margin-bottom: 1.25rem;
  }
  .sp {
    color: #6666;
    margin-left: 1.25rem;
  }
  .examine {
    height: 1.5625rem;
    margin-top: 1.25rem;
    display: flex;
  }
  .examine_sp {
    width: 100px;
    margin-left: 0.625rem;
    text-align: center;
  }
  .examine_span {
    width: 5rem;
    flex: 1;
    margin-left: 6.875rem;
    text-align: center;
  }
  .van-icon {
    margin-left: 0.5rem;
  }
  .hege {
    margin-left: 0.3125rem;
  }
}
// 图片
.examine_img {
  height: 5.375rem;
  margin-top: 1.25rem;
}
.examine_img img {
  width: 100%;
  height: 100%;
  margin-left: 0.625rem;
}
.van-button {
  width: 90%;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
}
</style>
