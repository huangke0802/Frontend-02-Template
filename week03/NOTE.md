### JS表达式

#### 运算符和表达式

   Atom
	 Expression
	 Statement
	 Structure
	 Program/Module


 Grammar: Tree vs Priority

 Expressions

	Member:
		a.b, a[b], foo`string`,super.b,super['b'], new.target, new Foo()
	
	New:
		new Foo

		Example:
			new a()()
			new new a()

	Reference：
		Object, Key, delete, assign;
	
	Call:函数调用
		foo(), super(), foo()['b'], foo().b, foo()`abc`

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
		+ , -;

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

	



		
	

	
	

	 


	 