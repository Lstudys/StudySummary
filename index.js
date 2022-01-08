/**
 * 平时练习写js代码的文件
 */


// 防抖
function refresh(){
    let refresh = null;
    return function(){
        if(refresh === null){
            // 具体操作
            refresh = setTimeout(() => {
                console.log(1);
            }, 1000);
        }
        else{
            clearTimeout(refresh);
            // 具体操作
            refresh = setTimeout(() => {
                console.log(1);
            }, 1000);
        }
    }
}

// 节流
function getNums(){
    let time = 0;
    let limitTime = 3000;
    return function(){

    }
}

// 感想：要充分利用闭包


// 使用Map
(function(){
    const arr = [
        ['name','李永晖'],
        ['age','20']
    ];
    const myMap = new Map(arr);

    // 传入arr时，执行的算法是：
    /* arr.forEach(([key,value])=>{
        myMap.set(key,value);
    }); 
    */
})()
// 熟练使用Map的set和向构造函数中传入二维数组初始化



// 观察者模式
function publisher(){
    this.subscribes = {

    }

    this.addSubscribe = function(fn,type){
        if(type != ''){
            if(this.subscribes[type] == ''){
                this.subscribes[type] = [];
                this.subscribes[type].push(fn);
            }
            else{
                this.subscribes[type].push(fn);
            }
        }
    }

    this.remove = function(fn,type){
        if(type != ''){
            let len = this.subscribes[type].length;
            for(var i = 0; i < len; i ++){
                if(this.subscribes[type][i] === fn)
            }
        }
    }

    this.publish = function(type){
        if(type != ''){
            let len = this.subscribes[type].length;
            for(let i = 0; i < len; i ++){
                this.subscribes[type][i]();
            }
        }
    }
}

// 实例化
const pub = new publisher();

// 订阅对象
const subscribe = {
    increse: function(){
        console.log(1);
    },
    add:function(){
        pub.addSubscribe(this.increse,'increse');
    }
}