// console.log("123")
//onmessage 事件是监听其他事件传输数据 如果一旦有传递则触发事件
//this 代表当前线程
this.onmessage = function (e) {
    //event事件对象中有一个data属性,保存的时候触发事件的数据
    // console.log(e);
    var sum = 0;
    for (var i = 0; i < e.data; i++) {

        sum += Math.sqrt(i)
    }
    //当执行完成,可能需要给主线程发送消息 直接使用postMessage
    postMessage(sum);
    //在分线程关闭自生
    close();

}