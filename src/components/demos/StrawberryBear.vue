<template>
	<div class="strawberryBear">
		<canvas id="canvas">test</canvas>
	</div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
function createHDCanvas(canvas, w, h) {
	const ratio = window.devicePixelRatio || 1;
	canvas.width = w * ratio; // 实际渲染像素
	canvas.height = h * ratio; // 实际渲染像素
	canvas.style.width = `${w}px`; // 控制显示大小
	canvas.style.height = `${h}px`; // 控制显示大小
	const ctx = canvas.getContext('2d');
	ctx.scale(ratio, ratio);
	// canvas 绘制
	return canvas;
}

const init = () => {
	// var w = document.documentElement.clientWidth;
	// var h = document.documentElement.clientHeight;
	var w = 320;
	var h = 600;
	var canvas = createHDCanvas(document.getElementById('canvas'), w, h);
	var ctx = canvas.getContext('2d');

	//笛卡尔坐标系
	ctx.translate(w / 2, h / 2);
	ctx.scale(1, -1);

	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.setLineDash([]);

	//下巴
	ctx.beginPath();
	ctx.moveTo(-120, 50);
	ctx.quadraticCurveTo(0, -50, 120, 50);
	//右脸
	ctx.bezierCurveTo(170, 95, 130, 170, 80, 220);
	ctx.lineTo(40, 260);

	//头顶
	ctx.quadraticCurveTo(0, 270, -40, 260);
	ctx.lineTo(-80, 220);

	//左脸
	ctx.bezierCurveTo(-130, 170, -170, 95, -120, 50);
	ctx.closePath();
	ctx.fillStyle = '#D36894';
	ctx.fill();
	// ctx.stroke();

	//右眉毛
	ctx.beginPath();
	ctx.moveTo(40, 260);
	ctx.bezierCurveTo(50, 270, 90, 240, 80, 220);
	ctx.bezierCurveTo(65, 200, 20, 260, 40, 260);

	//左眉毛
	ctx.moveTo(-40, 260);
	ctx.bezierCurveTo(-50, 270, -90, 240, -80, 220);
	ctx.bezierCurveTo(-65, 200, -20, 260, -40, 260);
	ctx.fillStyle = '#981A38';
	ctx.fill();
	// ctx.stroke();
	ctx.closePath();

	//右耳
	ctx.beginPath();
	ctx.moveTo(70, 250);
	ctx.bezierCurveTo(120, 290, 180, 220, 120, 170);
	ctx.closePath();
	ctx.fillStyle = '#D46995';
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(80, 230);
	ctx.bezierCurveTo(120, 260, 140, 210, 110, 187);
	ctx.quadraticCurveTo(80, 220, 80, 220);
	ctx.closePath();
	ctx.fillStyle = '#EEDCC8';
	ctx.fill();
	ctx.beginPath();
	//左耳
	ctx.moveTo(-70, 250);
	ctx.bezierCurveTo(-120, 290, -180, 220, -120, 170);
	ctx.closePath();
	ctx.fillStyle = '#D46995';
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(-80, 230);
	ctx.bezierCurveTo(-120, 260, -140, 210, -110, 185);
	ctx.quadraticCurveTo(-80, 220, -80, 220);
	ctx.fillStyle = '#EAD7C5';
	ctx.fill();
	// ctx.stroke();
	ctx.closePath();

	//右眼
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(60, 185);
	ctx.ellipse(40, 200, 25, 18, -Math.PI / 4, 0, Math.PI * 2, true);
	ctx.fill();
	// ctx.stroke();
	ctx.beginPath();
	ctx.fillStyle = 'black';
	var circle = new Path2D();
	circle.moveTo(50, 200);
	circle.ellipse(40, 200, 20, 15, -Math.PI / 4, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill(circle);
	ctx.fill();
	// ctx.stroke();

	//左眼
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(-20, 215);
	ctx.ellipse(-40, 200, 25, 18, Math.PI / 4, 0, Math.PI * 2, true);
	ctx.fill();
	// ctx.stroke();
	ctx.beginPath();
	ctx.fillStyle = 'black';
	circle = new Path2D();
	circle.moveTo(-50, 200);
	// circle.arc(-40, 200, 10, 0, 2 * Math.PI, true);
	circle.ellipse(-40, 200, 20, 15, Math.PI / 4, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill(circle);
	ctx.fill();
	// ctx.stroke();

	//眼球
	ctx.beginPath();
	ctx.fillStyle = 'white';
	circle = new Path2D();
	circle.moveTo(-50, 200);
	circle.ellipse(-30, 210, 5, 5, Math.PI / 4, 0, Math.PI * 2, true);
	circle.moveTo(-50, 200);
	circle.ellipse(-40, 205, 3, 3, Math.PI / 4, 0, Math.PI * 2, true);
	ctx.fill(circle);
	circle = new Path2D();
	circle.moveTo(50, 200);
	circle.ellipse(40, 195, 3, 3, Math.PI / 4, 0, Math.PI * 2, true);
	circle.moveTo(50, 200);
	circle.ellipse(44, 205, 5, 5, Math.PI / 4, 0, Math.PI * 2, true);
	ctx.fill(circle);

	//鼻子
	var nose = new Path2D();
	nose.moveTo(100, 100);
	nose.ellipse(0, 100, 100, 70, 0, 0, Math.PI * 2, true);
	ctx.fillStyle = '#E8D0C2';
	ctx.fill(nose);
	nose = new Path2D();
	nose.moveTo(60, 140);
	nose.ellipse(0, 140, 60, 20, 0, 0, Math.PI * 2, true);
	ctx.fillStyle = '#8E193C';
	ctx.fill(nose);
	ctx.closePath();

	//嘴巴
	ctx.beginPath();
	ctx.moveTo(80, 100);
	ctx.quadraticCurveTo(0, 0, -70, 80);
	ctx.quadraticCurveTo(0, 50, 80, 100);
	ctx.closePath();
	ctx.fillStyle = '#D06698';
	ctx.fill();

	//身体
	ctx.beginPath();
	ctx.moveTo(90, 27);
	ctx.quadraticCurveTo(0, -20, -90, 27);
	// ctx.moveTo(-90, 25);
	//左脚
	ctx.quadraticCurveTo(-140, -130, -80, -200);
	ctx.bezierCurveTo(-60, -220, -20, -220, -20, -200);
	// ctx.bezierCurveTo(-20, -190, -20, -180, -60, -185);
	ctx.bezierCurveTo(-20, -190, -20, -180, -80, -140);

	//肚子下
	// ctx.moveTo(-80, -140);
	ctx.quadraticCurveTo(0, -200, 80, -140);

	//右脚
	ctx.bezierCurveTo(20, -180, 20, -190, 20, -200);
	ctx.bezierCurveTo(20, -220, 60, -220, 80, -200);
	ctx.quadraticCurveTo(140, -130, 90, 25);
	ctx.fill();
	ctx.stroke();

	//肚子上
	ctx.beginPath();
	ctx.moveTo(-50, 10);
	ctx.bezierCurveTo(-80, -60, -90, -110, -60, -130);
	ctx.quadraticCurveTo(0, -180, 60, -130);
	ctx.bezierCurveTo(90, -110, 80, -60, 50, 10);
	ctx.quadraticCurveTo(0, -10, -50, 10);
	ctx.closePath();
	ctx.fillStyle = '#E9D6C6';
	ctx.fill();
	ctx.stroke();

	//手
	ctx.beginPath();
	ctx.moveTo(-110, 40);
	ctx.quadraticCurveTo(-140, 0, -150, -40);
	ctx.bezierCurveTo(-160, -80, -120, -80, -107, -40);
	ctx.quadraticCurveTo(-140, 0, -150, -40);

	ctx.moveTo(110, 40);
	ctx.quadraticCurveTo(140, 0, 150, -40);
	ctx.bezierCurveTo(160, -80, 120, -80, 107, -40);
	ctx.quadraticCurveTo(140, 0, 150, -40);
	ctx.fill();
	ctx.stroke();
};
onMounted(() => {
	init();
});
</script>
<style lang="scss">
.strawberryBear {
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 2.5rem);
	width: 100%;
	overflow: auto;
}
// #canvas {
// 	// border: 1px solid gray;
// }
</style>
