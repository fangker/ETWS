function  Point() {
    return function ZO() {

    }
}


class  Zz extends  Point{
    constructor(){
        super()
    }
    aaa(){
        console.log(6666)
    }

}
var point = new Zz(2, 3);
console.log(point.prototype)
console.log(Point)
