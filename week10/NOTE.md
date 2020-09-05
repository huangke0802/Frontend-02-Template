##### 使用LL算法构建AST|四则运算
	AST：抽象语法树
	LL：算法从左到右扫描，从左到右规约；Left Left
	LR

###### 四则运算
	* TokenNumber：
		* 1 2 3 4 5 6 7 8 9 0 的组合
	* Operator：+、-、*、 / 之一
	* Whitespace：<SP>
	* LineTerminator：<LF> <CR>

	* 语法定义

	<Expression>::=
		<AdditiveExpression><EOF>

	<AdditiveExpression>::=
		<MultiplicativeExpression>
		|<AdditiveExpression><+><MultiplicativeExpression>
		|<AdditiveExpression><-><MultiplicativeExpression>

	<MultiplicativeExpression>::=
	<Number>
	|<MultiplicativeExpression><*><Number>
	|<MultiplicativeExpression></><Number>

	EOF:不是一个真实可见的字符，只是一个终结的结构，表示所有源代码的结束的符号；是End of File的缩写；

###### LL语法分析
	<AdditiveExpression> ::=
		<Number>
		|<MultiplicativeExpression><*><Number>
		|<MultiplicativeExpression></><Number>
		|<AdditiveExpression><+><MultiplicativeExpression>
		|<AdditiveExpression><-><MultiplicativeExpression>

###### 字符串分析算法
	* 字典树
		* 大量高重复字符串的存储与分析 （两个字符串完全匹配）
	
	* KMP
		* 在长字符串里找模式 （两个字符串部分匹配）

	* Wildcard
		* 带通配符的字符串模式 （在KMP上加了通配符）
	
	* 正则
		* 字符串通用模式匹配
	
	* 状态机
		* 通用的字符串分析

	* LL LR
		* 字符串多层级结构分析

##### wildcard
	wildcard: ab*c?d*abc*a?d
		只有*：ab*cd*abc*a?d
		只有?: c?d, a?d