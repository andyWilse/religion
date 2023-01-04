<template>
  <div class="container">
    <!-- 首页图片 -->
    <div class="home_container">
      <img src="@/assets/imagee.jpg" alt="" />
      <div class="home_text">
        <span class="home_text_span">学习贯彻</span>
        <span class="home_text_span">全省宗教工作会议精神</span>
      </div>
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
      <div class="home_writing" @click="$router.push('/homewiting')">
        <h1 class="home_writing_h3">习近平:坚持我国宗教中国化方向</h1>
        <span class="home_writing_span">部分详情内容显示...</span>
      </div>
    </div>
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
      <div class="home_writing" @click="$router.push('/homewiting')">
        <h1 class="home_writing_h3">习近平:坚持我国宗教中国化方向</h1>
        <span class="home_writing_span">部分详情内容显示...</span>
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
.home_container {
  height: 7.375rem;
  position: relative;
  .home_text {
    position: absolute;
    width: 190px;
    height: 45px;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    margin-left: 25%;
  }
  .home_text_span {
    display: block;
    font-size: 19px;
    color: #fffefe;
  }
}
.home_container img {
  width: 100%;
  height: 100%;
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
    border: 1px dashed #ccc;
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
