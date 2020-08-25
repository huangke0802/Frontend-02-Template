### 语言按照语法分类：
	非形式语言：语法没有严格定义；
	形式语言（乔姆斯基谱系）：形式化定义；
		0型 无限制文法
		1型 上下文相关文法
		2型 上下文无关文法
		3型 正则文法

### 产生式（BNF）
	用尖括号括起来的名称来表示语法结构名
	语法结构分成基础结构和需要用其他语法结构定义的复合机构
		基础结构称终结符
		复合结构称非终结符
	引号和中间的字符表示终结符
	可以有括号
	\* 表示重复多次
	|表示或
	+表示至少一次
	
	BNF 四则运算
	<MultiplicativeExpression>::=<Number>|
		<MultiplicativeExpression>"*"<Number>|
		<MultiplicativeExpression>"/"<Number>|
	<AddtiveExpression>::=<MultiplicativeExpression>|
		<AddtiveExpression>"+"<MultiplicativeExpression>|
		<AddtiveExpression>"-"<MultiplicativeExpression>|
		
		
### 现代语言的分类
	形式语言--用途
		数据描述语言（JSON）
		编程语言（Java，JavaScript）
	 
	形式语言--表达方式
		声明式语言
		命令型语言
		
### 图灵完备性 
	命令式--图灵机
		goto
		if 和 while
	声明式--lambda
		递归
		
	动态
		在用户的设备/在线服务器上
		产品实际运行时
		Runtime
	静态
		在程序员的设备上
		产品开发时
		Compiletime

    类型系统
		动态类型系统与静态类型系统
		强类型与弱类型
		符合类型
		子类型
		泛型

### 一般命令式编程语言
	Atom、Expression、Statement、Structure、Program；

### JS类型
	Number,Null,Undefined,Boolean,String,Symbol,BigInt,Object
	
#### Number
	IEEE 754 Double FLoat
	0.1 + 0.2 == 0.3 false
	1. toString()
		
#### String
	Character
	Code Point
	Encoding
	
	ASCII
	Unicode
	UCS
	GB
	ISO-8859
	BIG5
	
#### Boolean
	值：true/false
	
#### Null
	表示有值但是为空

#### Undefined
	根本没有人设过这个值，没有定义；
	Null是关键字；Undefined不是关键字，
	
#### 对象
	类是一种常见的描述对象的方式
	原型方法
	在JavaScript运行时，原生对象的藐视非常简单，我们只需要关心原型和属性两个部分；
	
 


  
 
