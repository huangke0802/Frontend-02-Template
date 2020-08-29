##### TicTacToe
	* 策略
		* 第一层策略：我要赢
		* 第二层策略：别输
		* 第三层策略：最好的选择

##### 知识点记录
	* 复制对象的方法：
		* JSON.parse(JSON.stringify()) :深复制对象上的值，没办法复制方法；
		* Object.create(a) 浅拷贝，复制一个以a对象为原型的对象，完美复制；

##### 实现无限循环代码
	* while(true)
	
	function sleep(sec){
		return new Promise((resolve)=>{
			setTimeout(resolve, sec)
		})
	}

	async function* counter(){
		let i = 0;
		while(true){
			await sleep(1000);
			yield i++;
		}
	}

	(async function(){
		for await(let v of counter()){
			console.log(v)
		}
	})()

##### 寻路问题
	从起点走到终点，并不知道路线，可以从一个点能走的四周的点开始计算，在从周边的点找各自周边的点，以此进行下去；不适用用递归，递归是深度优先法；

	queue 数据结构，
	先进先出，一边进一边出：队列
	javascript数组是天然的队列，也是天然的栈；
	使用push() - shift()，或者 pop() - unshift() 是队列的操作
	使用 push() - pop() 是栈操作；

	数组删除使用splice() 时间复杂度是O(N)放入列表尾部使用pop()是效率高一些；
	