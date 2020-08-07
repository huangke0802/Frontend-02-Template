##### CSS总体结构
	1. @charset
	2. @import
	3. rules
		* @media
		* @page
		* rule

##### CSS @规则的研究
	At-rules
		* @charset
		* @import
		* @media:重要
		* @page
		* @counter-style
	  *	@keyframes:重要
		* @fontface:重要
		* @supports:兼容性有问题
		* @namespace

##### CSS规则
	1. 选择器:Selector
	2. 声明:Declaration
		* Key
		* Value 

		div{
			background-color:blue;
		}
	
	这部分的学习需要参考标准来学习；产生式；

##### 收集标准试验
	Array.prototype.slice.call(document.querySelector('#container').children).filter(e => e.getAttribute('data-tag').match(/css/)).map(e => ({name:e.children[1].innerText, url:e.children[1].children[0].href}))

##### 总结
	* CSS语法
	* at-rule
	* selector
	* variables
	* value
	* 实验

##### 伪类
	1. 链接/行为
		* :any-link  任何的超链接，还没有访问过的超链接
		* :link:visited 访问过的超链接
		* :hover   鼠标在上面移过
		* :active  激活状态
		* :focus   焦点
		* :target  链接到当前的目标

	2. 树结构
		* :empty
		* :nth-child()
		* :nth-last-child()
		* :first-child :last-child :only-child

	3. 逻辑型
		* :not 伪类
		* :where :has

##### 伪元素(通过选择器向页面添加不存在的元素)
	* ::before
	* ::after
	* ::first-line
	* ::first-letter

##### first-line 与 first-letter 不通的可用属性
	* first-line:
		* font系列
		* color系列
		* background 系列
		* word-spacing
		* letter-spacing
		* text-decoration
		* text-transform
		* line-height
	
	* first-letter
		* font系列
		* color系列
		* background 系列
		* word-spacing
		* letter-spacing
		* text-decoration
		* text-transform
		* line-height
		* float
		* vertical-align
		* 盒子模型系列：margin, padding, border

##### 思考题：
	为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
	
	答：first-letter是在布局完成之后，确定了一段文字中的第一个文字，可以对其操作布局时性能开销小；
	而first-line选中的是第一行文字，不同的宽度选中的文字内容不一样，要对其重新布局排版消耗性能大,所以first-letter 可以设置 float 之类的，而 first-line 不行。




	
