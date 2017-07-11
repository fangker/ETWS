const _adaptor =require("socket.io-redis");


class Adaptor extends _adaptor {
    constructor(nsp){
     let adapter = super(nsp)
     let bc=adapter.prototype.broadcast;
     let method = Adaptor.prototype;
     //拦截发布器
        adapter.prototype.broadcast=function (packet, opts, remote) {
            method.broadcast(packet, opts, remote);
            bc.apply(this,[packet, opts, remote])
        }
     //   修复因没有返回自身构造函数导致无法调用实例对象方法问题
        this.method = Adaptor.prototype
    }
    static inject(){
        return Adaptor.prototype
    }
    //以下定义方法 
    //拦截消息发布
    broadcast(...arg){
   
    }
}

module.exports = Adaptor;