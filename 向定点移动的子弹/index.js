// 定义子弹类
class Bullet {

    constructor(x = 0,y = 0,speed = 1) {

        this._o = document.createElement('div')
        this._o.classList.add('ball')
        document.body.appendChild(this._o)

        // 初始位置
        this.x = x
        this.y = y
        this._o.style.left = this.x + 'px'
        this._o.style.top = this.y + 'px'

        // 移动速度
        this.speed = speed

    }

    // 移动到某一点
    moveTo(dx,dy) {

        let cx = this.x
        let cy = this.y

        // 先计算要移动的下一个位置的新目标
        if(cx > dx) {

            this.x -= this.speed
            this.y = this.line(cx,cy,dx,dy,this.x)

        }else if(cx < dx) {

            this.x += this.speed
            this.y = this.line(cx,cy,dx,dy,this.x)

        }else {

            if(cy > dy) {

                this.y -= this.speed

            }else {

                this.y += this.speed

            }
            
        }

        this._o.style.left = this.x + 'px'
        this._o.style.top = this.y + 'px'

    }

    line(x1,y1,x2,y2,x) {

        return y1-(x-x1)*(y1-y2)/(x2-x1)

    }
 
}

// 子弹
var bullet = new Bullet(520,50,-1)

//启动一个定时器
function loop() {

    bullet.moveTo(0,600)

    requestAnimationFrame(loop)

}

requestAnimationFrame(loop)