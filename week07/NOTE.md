##### 盒

	HTML代码中可以书写开始标签，结束标签 ，和自封闭标签 。

	一对起止标签 ，表示一个元素 。

	DOM树中存储的是元素和其它类型的节点（Node）。

	CSS选择器选中的是元素(或伪元素)。

	CSS选择器选中的元素，在排版时可能产生多个盒 。

	排版和渲染的基本单位是盒 。

##### 盒模型
	margin、border、padding、content

	box-sizing:
		* content-box  (width = content的宽)
		* border-box   (width = content的width + padding + border)

##### 正常流
	排版：
		* 第一代：正常流
		* 第二代：flex;
		* 第三代：grid;

	正常流：
		* 从左到右书写
		* 同一行写的文字都是对齐的；
		* 一行写满了，就换到下一行
	正常流排版
		* 收集盒进行
		* 计算盒在行中的排布
		* 计算行的排布

	行内盒： inline-level-box(inline-box)	
	块级盒： block-level-box

	块级排版：BFC  块级格式化上下文
	行内排版：IFC  行内级格式化上下文

##### 正常流的行级排布
	* Baseline 基线
	* Text 文字：字体(任何文字都是一个宽和一个高，一条基线的定义)
	* 行模型： line-top, text-top, base-line, text-bottom, line-bottom

##### 正常流的块级排布
	* float 与 clear float堆叠
	* margin折叠

