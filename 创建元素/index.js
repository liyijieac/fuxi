var d = document.querySelector('div')
console.log( d.dataset )

// 定义一个数组
var z = []

// 在页面中随机循环十个僵尸
for(let i=0;i<10;i++) {

    z[i] = document.createElement('img')

    z[i].dataset.speed = 10
    z[i].dataset.health = 100
    z[i].dataset.attack = 5

    // 设置创建图片的路径
    z[i].setAttribute('src' ,'z.gif')
    z[i].setAttribute('width' , '100')

    document.body.appendChild(z[i])

}

// 移动第三个僵尸的位置
z[2].style.position = 'absolute'
z[2].style.top = '400px'

setTimeout(function() {

    z[2].parentNode.removeChild(z[2])

    z.splice(2 , 1)

    console.log( z.length )

},3000)