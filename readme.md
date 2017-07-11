# ETWS



进程:
原adapter分析 7月2日
adapter 注入函数  7月3日

待解决问题:
1. token验证
2. 封装: namespace And room
3. redis 逻辑实现



解决思路

* 授权token 带token 建立WS 带参



##使用方法及socketIo文档
* 客户端配置说明:
![socketio](./picture/socketio.png)

注入 adapter下任意方法扩展业务逻辑
```
//适配器
const adapter =require('./index.js').adapter;
const inject = adapter.inject()
inject.broadcast=function(...arg){
    console.log(arg)
    //写入业务逻辑
}
```
arg为广播内容

引入适配器后可以使用任意 socket.io-redis 规定的方法 :

https://github.com/socketio/socket.io-redis


