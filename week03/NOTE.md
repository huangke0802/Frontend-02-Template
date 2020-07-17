#### JS表达式 | 运算符和表达式

   Atom

	 Expression
	 Statement
	 Structure
	 Program/Module

 Grammar: Tree vs Priority

 Expressions

	Member:
		a.b, a[b], foo `string` ,super.b,super['b'], new.target, new Foo()
	
	New:
		new Foo

		Example:
			new a()()
			new new a()

	Reference：
		Object, Key, delete, assign;
	
	Call:函数调用
		foo(), super(), foo()['b'], foo().b, foo() `abc`
		Example 
			new a()['b'];
	
	Left Handside & Right Handside
		Example:
			a.b = c, a + b = c (错误);
		
		 所有的expression如果不属于Left Handside 就一定Right Handside;
		 Left Handsie : 能不能放到等号的左边

	Update:
		a++, a--, --a, ++a;

	Unary:(单目运算)
		delete a.b, void foo(), typeof a, +a, -a, ~a, !a, await a;

	Exponental:(右结合)
		**;

		Example：
		3**2**3 等效于 3**(2**3)

	Multiplicative:
		*, /, %;

	Additive:

    - , -;

	Shift:
		<<, >>, >>>;
	
	Relationship:
		<, >, <=, >=, instanceof, in;
	
	Equality:
		==, !=, ===, !==;

	Bitwise:
		&, ^, |;

	Logical:
	 &&, ||;

	Conditional:
		condition ? expression1 : expression2

#### JS表达式 | 类型转换（Type Convertion）

	js中的 双等号 是一个大bug；不要使用双等号（==）使用 三等号（===），双等号会有类型转换；

	拆箱转换（Unboxing）

	To Premitive 
	toString vs valueOf
	Symbol.toPrimitive 

	var o = {
		toString(){return "2"},
		valueOf(){return 1},
		[Symbol.toPrimitive]() {return 3}
	}

	o + 1 会优先调用valueOf，如果没有再调用toString,最后是Symbol.toPrimitive；都没有就报错；

	当作为o的属性名时优先调用toString方法；	

	装箱转换（Boxing）

	类型         对象                      值
	Number      new Number(1)              1
	String      new String('a')           "a"
	Boolean     new Boolean(true)         true
	Symbol      new Object(Symbol("a"))   Symbol("a")

	number类型和Number类不是同一个东西；其他同理；

#### JS语句 | 运行时相关概念

	Statement

	简单语句、组合语句、声明
	运行时 runtime

	Completion Record 完成记录
	组成：
		[[type]] :normal, break, continue, return, or throw

		[[value]] : 基本类型

		[[target]] : label (标识符 + :)

#### JS语句 | 简单语句和复合语句

	简单语句：
		ExpressionStatement：表达式 + ；
		EmptyStatement: ;
		DebuggerStatement: debugger;
		ThrowStatement: throw + 表达式
		ContinueStatement: continue 结束当次循环，后面的循环继续
		BreakStatement: 穿透性结束整个循环
		ReturnStatement：一定到函数中用，返回一个值；

	复合语句：
		BlockStatement: 一对花括号中的语句块
		IfStatement: if语句流程分支控制
		SwitchStatement: switch...case 语句流程控制
		IterationStatement:迭代语句，for ;, for in , for of,  for await,while, do while, 等循环
		WithStatement:with语句，尽量不用
		LabelledStatement:
		TryStatement：try{}catch(e){}finally{}

#### JS语句 | 声明

	FucntionDeclaration:
		普通函数声明，function foo(){}

	GeneratorDeclaration:
		产生器函数声明（generate 函数）
			function* bar(){}

	AsyncFunctionDeclaration:
		async function foo(){}

	AsyncGeneratorDeclaration:
		async function* bar(){}

	VariableStatement:
		var 声明的

	ClassDeclaration:
		class 声明：在声明之前会报错
			class Person{

			}

	LexicalDeclaration:
		const, let 定义声明：在声明之前会报错

	预处理会去找var声明的变量，存在变量提升，尽量使用const,let,class声明。

#### JS结构化 | 宏任务和微任务

	宏任务：宿主（浏览器）的api执行的任务：setTimeout
	微任务 MicroTask：（js引擎）Promise
	函数调用：
	语句/声明：
	表达式：
	直接量/变量/this...

	事件循环：本身不属于js引擎的概念，是来自node

#### JS结构化 | JS函数调用

	宏任务和微任务会影响代码执行的次序；
	同一个微任务中有不同的函数调用影响代码的执行；

	栈式（stack）环境；执行上下文；Excution Context Stack;

  栈的顶层是正在执行的执行上下文：Running Excution Context; 

	Excution Context:
		code evalution state
		Function
		Script or Module
		Generator
		Realm : 保存所有的内置对象
		LexicalEnvironment：保存变量
		VariableEnvironment：var声明变量的环境

		LexicalEnvironment:保存的内容
			this, new.target, super, 变量
		
		VariableEnvironment:历史遗留的包袱，仅仅用于处理var声明；
	

		Environment Records
			 Declarative Environment Records
					Function Environment Records
					module Environment Records

			 Global Environment Records

			 Object Environment Records

			 Function - Closure （闭包）

			 var y = 2;
			 function foo2(){
				 var z = 3;
				 return () => {
					 //同时可以访问 y, z, this,这里是闭包
					 console.log(y, z);
				 }
			 }
			 var foo3 = foo2();
			 export foo3; 


			 Realm：引擎中的所有内置对象存入Realm;



		
		

		
	

	
	

	 

	 
