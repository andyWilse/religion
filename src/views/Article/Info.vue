<template>
	<div class="page">
		<div class="title fontSize18 blackColor weight700 textAlignCenter">
			习近平：坚持我国宗教中国化方向
		</div>
		<div class="msg fontSize12 hasColor1 textAlignCenter">
			时间：2022-12-28 来源：《人民日报》
		</div>
		<van-image class="thumb" width="100%" height="200" fit="cover" src="/images/img001.jpg" />
		<div class="content" v-html="content"></div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				content: '<p>坚持我国宗教的中国化方向,是我国宗教发展的必由之路。在全国宗教工作会议上,习近平总书记强调“必须坚持我国宗教中国化方向”,提岀“深入推进我国宗教中国化”的明确要求,对于做好新时代党的宗教工作,更好组织和引导信教群众同广大人民群众一道为全面建成社会主义现代化强国、实现中华民族伟大复兴的中国梦而团结奋斗,具有十分重要的意义。</p><p>我国各宗教在发展过程中历来有与中国优秀传统文化相融合、与社会发展现实需求相适应的特点。各宗教继承和发扬长期以来中国化、本土化的传统,主动适应社会,发扬爱国爱教、团结进步、服务社会、和谐包容的优良传统,自觉维护国家利益、社会公共利益和公序良俗,履行社会责任。党的十八大以来,以习近平同志为核心的党中央坚持党的宗教工作基本方针,坚持我国宗教的中国化方向,积极引导宗教与社会主义社会相适应,宗教中国化逐步深入。实践证明,只有坚持中国化方向的宗教,只有实现了中国化的宗教,才能更好与我国社会主义社会相适应,在我国社会发展进步中发挥积极作用。</p><p>宗教与所处社会相适应,是世界各宗教生存发展的客观规律,</p><p><br></p>'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	.page{
		padding: 10px;
	}
	
	.thumb{
		margin: 10px 0px;
		border-radius: 10px;
		overflow: hidden;
	}
	
	.content{
		text-indent: 2em;
		line-height: 20px;
	}
</style>