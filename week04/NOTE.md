#### 浏览器工作原理：
		渲染流程：
		URL -(HTTP)-> HTML  -(parse)-> DOM  -(css computing)-> DOM with CSS -(layout)->DOM with position -(render)-> Bitmap

		url 通过 http 获取HTML文档 ；
		js引擎解析HTML文档生成DOM树；
		通过计算css样式获取到DOM对应的CSSOM；
		通过DOM和CSSOM合成计算布局；
		最后render生成我们看到的图片显示在显示屏上。

1. 用户输入
地址栏会判断输入的关键字是搜索内容还是请求URL，如果是搜索内容使用默认搜索引擎合成带有搜索关键字的URL，
如果是URL，地址栏会根据规则加上协议合成完整的URL


2. URL请求过程
浏览器进程通过进程间的通讯（IPC）把URL请求发送至网络进程，网络进程接收到URL请求后，发起真正的URL请求流程：
	2.1. 网络进程查找本地缓存是否缓存了该资源，如果有缓存，直接返回资源给浏览器进程；如果没有，直接进入网络请求流程；请求第一步进行DNS解析，获取IP地址；
	2.2. 利用IP地址和服务器建立TCP连接，建立连接后，浏览器构建请求行，请求头等信息；
	2.3. 服务器接收到请求信息后，根据请求信息生成相应数据，并发给网络进程，等网络进程接收相应行和相应头，就开始解析相应头的内容；
	2.4. 网络进程解析相应头，发现状态码是301或者是302，说明浏览器需要重定向到其他URL，网络进程从相应头的Location字段里面读取重定向的地址，在发起新的HTTP或者HTTPS请求。
	如果是状态码是200，标识浏览器可以技术处理该请求；
	2.5. 相应数据类型处理；相应头中Content-Type的值告诉浏览器服务器返回的响应体数据的类型；
	Content-Type = text/html 告诉浏览器，服务返回的是HTML格式
	Content-Type = application/octet-stream 表示字节流类型，通常情况下，浏览器会按照下载类型来处理请求


3. 准备渲染进程，新打开一个页面创建一个渲染进程，如果从一个页面打开了一个新页面，新页面和当前页面属于同一站点，那么新页面会复用父页面的渲染进程；


4. 提交文档，浏览器进程将网络进程中接收到的HTML数据提交给渲染进程;
	4.1. 浏览器进程接收到网络进程的响应图数据后，想渲染进程发起‘提交文档’的消息；
	4.2. 渲染进程接收到‘提交文档’的消息后，和网络进程建立传输数据的‘管道’；
	4.3. 文档数据传输完成，渲染进程返回‘确认提交’的消息给浏览器进程；
	4.4. 浏览器进程收到‘确认提交’的消息后，更新界面状态，如：安全状态，地址栏URL、前进后退的历史状态，并更新Web页面；


5. 渲染阶段；渲染进程开始页面解析和子资源加载；


#### 有限状态机
		有限状态机处理字符串；
		每一个状态都是一个机器，所有的机器接受的输入时一致的，状态机的每一个机器本身没有状态，是纯函数没有副作用；

		两种状态：
			* Moore:每个机器都有确定的下一个状态；
			* Mealy:每个机器根据输入决定下一个状态；

#### Http协议
	属于文本型的协议，与二进制协议相对；
	文本型协议的内容都是字符串；

	POST/HTTP/1.1                                    Request line
	method/路径/版本

	Host:127.0.0.1
	Content-Type:application/x-www-form-urlencoded   headers
	headers包含多行，每一行以:分隔的key:value的键值对，开始不固定，以空行未结束

	field1=aaa&code=x%3D1														 body

#### HTTP请求总结

###### 第一步实现一个HTTP的请求
	* 设计一个HTTP请求的类 class Request{}
	* content type 是一个必要的字段，要有默认值 如：Content-Type:application/x-www-form-urlencoded   
	* body 是kv格式，如：name=lixin&age=19
	* 不同的content-type影响body的格式
	* 需要content-length，如果不对，可能会请求错误 

###### 第二步send函数实现
	* 在Requset的构造器中收集必要的信息；
	* 设计一个send函数，把请求真实发送到服务器；
	* send函数应该是异步的，所有需要返回一个Promise对象；

		response的格式

		HTTP/1.1 200 OK                      status line
		        状态码
			http状态码：500，服务器内部错误；
								 404 找不到网页
								 30X 重定向
								 200 Ok有这个网页，返回网页给你
		
		Content-Type:text/html               headers
		Date:Mon,23 Dec 2019 
		Connection:keep-alive
		Transfer-Encoding:chunked
		                                      (空行结束headers)
																					body

###### 第三步发送请求
	* 设计支持已有的connection或者自己新建connection
	* 收到数据传给parser
	* 根据parser的状态resolve Promise

###### 第四步ResponseParser
	* Response必须分段构造， 所有我们要用一个ResponseParser来‘装配’
	* ResponseParser分段处理ResponseText，我们用状态机分析文本的结构

###### 第五步BodyParser总结
	* Response 的body可能根据Content-Type有不同的结构，因此我们采用自Parser的结构来解决问题
	* 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式；	

##### parser的实现

###### 第一步总结
	* 为了方便文件管理，把parser单独拆到文件中
	* parser接受HTML文本作为参数，返回一颗DOM树

###### 第二步总结
	* 用FSM来实现HTML的分析
	* 在HTML标准中，已经规定了HTML的状态
	* Toy-Brower只挑选其中一部分状态，完成一个最简版本

###### 第三步总结
	* 解析标签
		1. 开始标签
		2. 结束标签
		3. 自封闭标签
	* 在这一步暂时忽略所有的属性

###### 第四步总结
	* 在状态机中，除了状态迁移，还要加入业务逻辑
	* 在标签结束状态提交标签token