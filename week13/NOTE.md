##### js实现动画几种方式：
	1. setInterval(() => {}, 16)
	2. setTimeout(() => {}, 16 )
  3. 现代浏览器：requestAnimationFrame  cancelAnimationFrame

	使用setInterval不容易控制，现代浏览器使用requestAnimationFrame最理想；


	在实现类时，考虑到私有变量使用Symbol实现key值；

##### 动画分类
	1、 属性动画；
	2、帧动画；（动画片，游戏中的）
