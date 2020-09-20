import { Component, createElement } from './framework'

class Carousel extends Component {
	constructor() {
		super();
		this.attributes = Object.create(null);
	}

	setAttribute(name, value) {
		this.attributes[name] = value;
	}

	render() {
		this.root = document.createElement('div');
		this.root.classList.add('carousel')
		for (let record of this.attributes.src) {
			let child = document.createElement('div');
			child.style.backgroundImage = `url(${record})`;
			this.root.appendChild(child);
		}

		//自动滚动
		/* let currentIndex = 0;
		setInterval(() => {
			let children = this.root.children;

			let nextIndex = (currentIndex + 1) % children.length;

			let current = children[currentIndex];
			let next = children[nextIndex];

			next.style.transition = "none";
			next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

			setTimeout(() => {
				next.style.transition = "";
				current.style.transform = `translateX(${ -100 - nextIndex * 100 }%)`
				next.style.transform = `translateX(${ - nextIndex * 100}%)`;

				currentIndex = nextIndex
			}, 16)
			
		}, 3000) */

		//鼠标事件
		let position = 0;
		this.root.addEventListener('mousedown', event => {
			let children = this.root.children;
			let startX = event.clientX;

			let move = e => {
				let x = e.clientX - startX;

				let current = position - ((x - x % 500) / 500);

				for (let offset of [-1, 0, 1]) {
					let pos = current + offset;
					pos = (pos + children.length) % children.length;

					children[pos].style.transition = 'none';
					children[pos].style.transform = `translateX(${- pos * 500 + offset * 500 + x % 500}px)`;
				}

			}

			let up = e => {
				let x = e.clientX - startX;
				position = position - Math.round(x / 500);

				for (let offset of [0, - Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
					let pos = position + offset;
					pos = (pos + children.length) % children.length;

					children[pos].style.transition = '';
					children[pos].style.transform = `translateX(${- pos * 500 + offset * 500}px)`;
				}

				document.removeEventListener('mousemove', move);
				document.removeEventListener('mouseup', up);
			}

			document.addEventListener('mousemove', move)
			document.addEventListener('mouseup', up)

		})



		return this.root;
	}

	mountTo(parent) {
		parent.appendChild(this.render());
	}
}

let d = [
	'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951966&di=2362c568bf1a3381d0680cef86fea819&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F5d%2Fi0%2FQJ8166844632.jpg',
	'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951967&di=d426c6f293e8f7d658eaa35c38d3d131&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fpi%2Fr1%2FQJ6624335187.jpg',
	'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951966&di=1c1a6c5c2bbdcbf0782ce8f8142b9200&imgtype=0&src=http%3A%2F%2Fstatic.ettoday.net%2Fimages%2F929%2F929384.jpg',
	'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951965&di=2c4686b8365f9f420f7a703bbb9b1e55&imgtype=0&src=http%3A%2F%2Fwww.lanmaofangzi.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fxiaorubai2.jpg'
]

let a = <Carousel src={ d } />

// document.body.appendChild(a)
a.mountTo(document.body)