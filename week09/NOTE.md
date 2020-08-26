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
