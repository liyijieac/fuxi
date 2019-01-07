// 放一个盒子
var box = document.createElement('div');
box.className = 'box';
document.body.appendChild(box);

// 在内存中创建一个 div 元素
var b1 = document.createElement('div');

// 设置这个元素的样式为ball
b1.classList.add('ball');

// 把这个元素放在盒子里面
box.appendChild(b1);

// 初始位置
var x = 0;
var y = 0;

// 控制方向
var dir_left = 1;
var dir_top = 1;
var speed = 1.5;

// 定义一个函数
function move() {

    if(x >= 200) {

        dir_left = -1

    }
    if(y >= 290) {

        dir_top = -1

    }
    if(x <= 0) {

        dir_left = 1

    }
    if(y <= 0) {

        dir_top = 1

    }

    x += 1.2 * dir_left * speed
    y += 1 * dir_top * speed
    b1.style.left =  x + 'px'
    b1.style.top = y + 'px'

    requestAnimationFrame(move)

}

requestAnimationFrame(move)