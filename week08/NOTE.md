##### 重新HTML
	* HTML的定义：XML与SGML
	* 符号：
		* quot : "
		* amp : &
		* lt : <
		* gt : >
##### HTML标签语义
	* <aside> :侧边栏
	* <a> : 超链接
	* <main> : 主体内容
	* <article> : 文章主体
	* <h1> : 主标题
	* <hgroup> : 标题组
	* <hr> : 表示转化
	* <abbr> : 缩写
	* <strong> : 表示词在文章中的重要性
	* <em> : 表示词在句子中的重音,表示在句子中的词的语气的重音；
	* <img> ：图片
	* <figure> : 标签图组
	* <figcaption> : 标签定义 figure 元素的标题
	* <ol> : 具有顺序性列表
	* <ul> : 无顺序性列表
	* <nav> : 导航
	* : 专有名词或者术语
	* <dfn> : 表示词的定义
	* <pre> : 预格式化的文本
	* <samp> : 样本文本
	* <code> : 计算机代码文本。
	* <footer> : 文档中的页脚部分

##### 合法元素
	* Elment : <tagname></tagname>
	* Text
	* Comment : <!-- comments -->
	* DocumentType:<!Doctype html>
	* ProcessingInstruction: <?a 1?>  预处理语法
	* CDATA : <![CDATA[]]>

##### 字符引用
	* &#161;
	* &amp;
	* &lt;
	* &quot;

##### 浏览器API
	* 节点类API

		* 导航类操作
			* parentNode        parentElement
			* childNodes        children
			* firstChild        firstElementChild
			* lastChild         lastElementChild
			* nextSibling       nextElementSibling
			* previousSibling   previousElementSibling

		* 修改操作
			* appendChild
			* insertBefore
			* removeChild
			* replaceChild
		
		* 高级操作
			* compareDocumentPosition ： 用于比较两个节点中关系的函数
			* contains ：检查一个节点是否包含另一个节点的函数
			* isEqualNode ：检查两个节点是否完全相同
			* isSameNode : 检查两个节点是否是同一个节点，实际上在JavaScript中可以用 ===
			* cloneNode : 复制一个节点，如果传入参数true，则会连同子元素做深拷贝
	
	* 事件API

		* addEventListener(type, listener, [,capture]) : 冒泡 与 捕获
		先捕获 在冒泡 ： 第三个参数设置为true，表示捕获

	* Rang API ：DOM操作万能的API
		* var range = new Range(); //创建范围
		* range.setStart(element, 9);
		* range.setEnd(element, 4);
		* var range = document.getSlection().getRangeAt(0);

		其他方法
		* range.setStartBefore
		* range.setEndBefore
		* range.setStartAfter
		* range.setEndAfter
		* range.selectNode
		* range.selectNodeContents //选择元素的内容

	 	将元素的内容取出来
		 * var fragment = range.extractContents();
		 * range.insertNode(document.createTextNode('aaaa'))

##### CSSOM
	* CSSOM 源头 ：document.styleSheets

