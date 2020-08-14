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

##### BFC合并
	* Block
		* Block Container : 里面有BFC的
			* 能容纳正常流的盒，里面就有BFC，
	* Block-level Box:外面有BFC的
	* Block Box = Block Container + Block-level Box: 里外都有BFC的

	Block Container
		* block
		* inline-block
		* tableo-cell
		* flex item
		* grid cell
		* table-caption

	Block-level Box

	Block level              
		* display : block 
		* display : flex 
		* display : table 
		* display : grid 

	Inline level
	  * display : inline-block
	  * display : inline-flex
	  * display : inline-table
	  * display : inline-grid

##### 设立BFC  
	* overflow:hidden

##### BFC合并
	* block box && overflow:visible
		* BFC合并与float
		* BFC合并与边距折叠

##### Flex排版
	* 收集盒进行
	* 计算盒在主轴方向的布局
	* 计算盒在交叉轴方向的排布

	分行 
		* 根据主轴尺寸，把元素分进行
		* 若设置了no-wrap, 则强行分配进第一行 
	
	计算主轴方向
		* 找出所有Flex元素
		* 把主轴方向的剩余尺寸按比例分配给这些元素
		* 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

	计算交叉轴方向
		* 根据每一行中最大元素尺寸计算行高
		* 根据行高flex-align和item-align，确定元素具体位置

##### 动画与绘制
	* Animation
		1. @keyframes 定义
		2. animation：使用

		@keyframes mykf
		{
			from {background:red;}
			to{background:yellow;}
		}

		div
		{
			animation:mykf 5s infinite;
		}

	* animation-name :动画名称
	* animation-duration ：动画的时长
	* animation-timing-function :动画的时间曲线
	* animation-delay：动画开始前的延迟
	* animation-iteration-count：动画的播放次数
	* animation-direction：动画的方向

	@keyframes mykf{
		0%{
			top:0; 
			transition:top ease;
		}
		50%{
			top:30px;
			transition:top ease-in;
		}
		75%{
			top:10px;
			transition:top:10;
			transition:top ease-out;
		}
		100%{
			top:0;
			transition:top linear;
		}
	}

	* Transition
		1. transition-property：要变换的属性
		2. transition-duration：变换的时长
		3. transition-timing-function：时间曲线
		4. transition-delay：延迟

##### 颜色
	* 人眼可见范围400纳米到760纳米；
	* 印刷行业使用 CMYK，生物识别颜色RGB；
	* HSL 与 HSV , H:Hue表示色相，S:Saturation 表示纯度，L:lightness 便是亮度，V：Value；
	* W3C 选择HSL

##### 绘制
	* 几何图形
		* border
		* box-shadow
		* border-raduis
	* 文字
		* font
		* text-decoration
	* 位图
		* background-image