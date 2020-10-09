import {
  createElement
} from './framework'
import {
  Carousel
} from './carousel'
import {
  Timeline,
  Animation
} from './animation'

let d = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951966&di=2362c568bf1a3381d0680cef86fea819&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F5d%2Fi0%2FQJ8166844632.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951967&di=d426c6f293e8f7d658eaa35c38d3d131&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fpi%2Fr1%2FQJ6624335187.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951966&di=1c1a6c5c2bbdcbf0782ce8f8142b9200&imgtype=0&src=http%3A%2F%2Fstatic.ettoday.net%2Fimages%2F929%2F929384.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600363951965&di=2c4686b8365f9f420f7a703bbb9b1e55&imgtype=0&src=http%3A%2F%2Fwww.lanmaofangzi.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fxiaorubai2.jpg'
]

let a = < Carousel src = {
  d
}
onChange = {
  event => console.log(event.detail.position)
}
onClick = {
  event => window.location.href = event.detail.data
}
/>

a.mountTo(document.body);
