<template>
  <div class="HomeWiting_container">
    <div class="witing_head">
      <div class="witing_head_conter">
        <h1 class="witing_head_conter_h3">习近平:坚持我国宗教中国化方向</h1>
        <span class="witing_head_conter_span"
          >时间：2022-11-20 来源：《人民日报》</span
        >
      </div>
    </div>
    <!-- 图片 -->
    <div class="witing_log">
      <img src="@/assets/imagee.jpg" alt="" />
    </div>
    <div class="witing_wenzhang">
      <span class="witing_wenzhang_span">
        坚持我国宗教的中国化方向，是我国宗教发展的必由之路。在全国宗教工作会议上，习近平总书记强调“必须坚持我国宗教中国化方向”，提出“深入推进我国宗教中国化”的明确要求，对于做好新时代党的宗教工作，更好组织和引导信教群众同广大人民群众一道为全面建成社会主义现代化强国、实现中华民族伟大复兴的中国梦而团结奋斗，具有十分重要的意义。</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeWiting",
};
</script>
<style scoped lang="less">
.witing_head {
  height: 4rem;
  text-align: center;
  margin-top: 17px;
  // background-color: aqua;
  .witing_head_conter {
    width: 220px;
    height: 48px;
    margin: 0 auto;
  }
  .witing_head_conter_h3 {
    font-weight: 900;
    font-size: 15px;
  }
  .witing_head_conter_span {
    display: block;
    margin-top: 7px;
    color: #9f9e9e;
    margin-left: 10px;
  }
}
// 图片
.witing_log {
  height: 175px;
  margin: 10px 10px 18px 10px;
  border-radius: 8px;
}
.witing_log img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.witing_wenzhang {
  height: 100px;
  margin: 0 27px 0 21px;
}
.witing_wenzhang_span {
  color: #000000;
}
</style>
