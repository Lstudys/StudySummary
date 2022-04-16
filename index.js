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


// 遍历DOM节点
function traverDOM(nodes){
    if(nodes.nodeType == 1){
        // 对节点的操作
        console.log(node);
    }
    var childNode = node.childNodes;
    for(let i = 0; i < childNode.length; i ++){
        if(childNode[i].nodeType == 1){
            traverDOM(childNode[i]);
        }
    }
}


// 数组扁平化
// 第一种方法
const newArr = new Set(Array.from(arr.flat(Infinity)).sort((a,b)=>{return a - b < 0}));
/**
 * flat默认扁平化一层，传入Infinity参数则扁平化所有层
 */

// 第二种方法,使用some方法和concat方法
function flaten(arr){
    while(arr.some((num)=>{return Array.isArray(num)})){
        arr = [].concat(...arr);
    }
    return arr;
    /**
     * 注意：some不是forEach遍历，而是判断是否存在有符合条件的元素
     * concat是连接后返回新数组，不更改原数组
     */
}

// react高阶组件
function connect(App){
    class newApp extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return <App></App>
        }
    }
    // 返回一个类，导出函数执行结果也是这个类
    return newApp;
}

// react render props
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }

    render(){
        return (this.props.render(this.state.title));
    }
}

function Container(){
    function render(title){
        return <h1>{title}</h1>
    }

    return (<App render = {render}></App>)
}

Object.defineProperty(o, 'num', {
    // value:2,
    // writable:true,
    // enumerable:true,
    // configurable:true,
    set(value){
        // 数据代理操作
    }
})

Object.prototype.toString.call(arr);

Infinity;

(function(){
    var o = {
        num:2
    }

    var proxy = {};

    Object.defineProperty(proxy, 'num', {
        set(value){
            o.num = value;
        },
        get(){
            return o.num;
        }
    });
})()



// 观察者模式demo练习
(function(){
    function subject(){
        
        // 数据和观察者集合
        this.state = {
            num:2,
            observers = []
        };

        // 添加观察者的方法
        this.append = function(observer){
            this.state.observers.push(observer);
        };

        // 通知观察者的方法
        this.noticeObserver = function(){
            this.state.observers.forEach((item) =>{
                item.getNum();
            })
        };

        // 删除观察者方法
        this.removeObserver = function(observer){
            let index = '';
            this.state.observers.forEach((item, indexs) =>{
                if (item == observer){
                    let index = indexs;
                }
            });
            this.state.observers.splice(index, 1);
        }
    }

    function initObserver(subject){
        subject.append(this);

        this.getNum = function(){
            console.log(subject.state.num);
        }
    }

    function setNum(subject, newNum){
        subject.state.num = newNum;
        subject.noticeObserver();
    }

    var subjects = new subject();
    var observers = new initObserver()
    
    setNum(subjects, 1);

})()



// 判断数组方法
 Array.isArray();
 arr instanceof Array;
 Object.prototype.toString.call();

 // es6proxy练习
 (function(){
     var offer = {
         name:'阿里巴巴',
         type:'实习'
     }

     var proxyOffer = new Proxy(offer, {
         get:function(target, prop, reciver){
             if (prop == 'name'){
                 return '大淘宝';
             }else if (prop == 'type'){
                 return '暑期实习';
             }
         },

         set:function(target, prop, value, reciver){
             if (prop == 'type'){
                 if (value != '正式员工'){
                     value = '正式员工';
                 }
             }
         }
     })
 })()

// new
 (function(){
     function newObj(fun, ...arr){
         var newObject = {};
         newObject._proto_ = fun.prototype;
         var newObject2 = fun.apply(newObject, arr);
         if ((typeof newObject2 === 'object' || typeof newObject2 === 'function') && newObject2 != null){
             return newObject2;
         }
         return newObject;
     }
 })()

 // Promise.all
 (function(){
     var p1 = new Promise(function(resolve, reject){
         resolve('promise1');
     });
     var p2 = new Promise(function(resolve, reject){
         resolve('promise');
     })

     var p3 = new Promise(function(resolve, reject){
         reject('reject1');
     })

     var p4 = new Promise(function(resolve, reject){
         reject('reject2');
     })

     Promise.all([p1, p2]).then((res) =>{
         console.log(res); // ['promise1', 'promise2']
     }).catch((eror) =>{
         console.log(error);
     });

     Promise.all([p1, p2, p3, p4]).then((res) =>{
         console.log(res);
     }).catch((error) =>{
         console.log(error); // ['reject1']
     })
 })()



 (function(){
     class App extends Component{
         constructor(props){
             super(props);
             this.state = {
                 title: 'title'
             }
         }

         render(){
             return (this.props.render(this.state.title));
         }
     }

     function Container(){
         function render(title){
             return <p>{title}</p>
         }

         return <App render = {render}></App>
     }
 })()

 // 实现Iterator
 (function(){
     function mkIterator(arr){
         var index = 0;
         return {
             next: function(){
                 return index < arr.length ? {value: arr[index ++], done: false} : {value: undefined, done:true};
             }
         }
     }
 })()

(function(){
    function makeCahce(){
        var map = new Map();
        return function(num1, num2){
            if ()
        }
    }

    var fn = makeCahce();
    fn(1);
})()


// 节流
(function(){
    function fn(time){
        var startTime = Date.now();
        var delayTime = time;
        return function(){
            if (Date.now() - startTime >= delayTime){
                console.log('执行');
                startTime = Date.now();
            }
        }
    }
})()

// 防抖
(function(){
    function fn(time){
        var delayTime = time;
        var timeout;
        return function(){
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.log('执行');
            }, delayTime);
        }
    }
})()

// 防抖
(function(){
    function fn(time){
        var timeout;
        var delayTime = time;
        return function(){
            clearTimeout(timeout);
            timeout = setTimeout(() => {
               console.log('执行'); 
            }, delayTime);
        }
    }
})()

(function(){
    function fn(time){
        var delayTime = time;
        var timeout;
        return function(){
            clearTimeout(timeout);
            setTimeout(() => {
                console.log('防抖');
            }, delayTime);
        }
    }
})()

// 节流
(function(){
    function fn(time){
        var delayTime = time;
        var nowTime = Date.now();
        return function(){
            if (Date.now() - nowTime > delayTime){
                console,log('执行');
                nowTime = Date.now();
            }
        }
    }
})()

(function(){
    function fn(time){
        var nowTime = Date.now();
        var times = time;
        return function(){
            if (Date.now() - nowTime > times){
                console.log('节流');
                nowTime = Date.now();
            }
        }
    }
})()

// 深拷贝
(function(){
    function deepCopy(obj){
        var o = {};
        if (!(obj instanceof Object)){
            return obj;
        }

        for (var item in obj){

            o[item] = deepCopy(obj[item]);
        }
        return o;
    }
})()


// new
(function(){
    function news(fn, ...prop){
        var newObj = {};
        newObj._proto_ = fn.prototype;
        var o2 = fn.call(newObj, ...prop);
        return o2 instanceof Object ? o2 : newObj;
    }
})()

(function(){
    function news(fn, ...arr){
        var newObj = {};
        newObj._proto_ = fn.prototype;
        var o = fn.apply(newObj, arr); // 如果构造函数fn有return值，则o为return的对象，没有return则o为undefined，newObj为执行后的对象
        return o instanceof Object ? o : newObj;
    }
})()

(function(){
    function news(fn, ...arr){
        var newObj = {};
        newObj._proto_ = fn.prototype;

        var o = fn.call(newObj, ...arr);
        return o instanceof Object ? o : newObj;
    }
})()

// 深拷贝
(function(){
    function deepCopy(obj){
        if (!(obj instanceof Object)){
            return obj;
        }
        var newObj = {};
        for (var item in obj){
            newObj[item] = deepCopy(obj[item]);
        }
        return newObj;
    }
})()

(function(){
    function deepCopy(obj){
        if (! (obj instanceof Object)){
            return obj;
        }

        var newObj = {};
        for (var item in obj){
            newObj[item] = deepCopy(obj[item]);
        }

        return newObj;
    }
})()

// 函数缓存
(function(){
    function mkChche(){
        var data = {};
        return function(){
            // do something
        }
    }
})()

// 实现Promise.all
(function(){
    function promiseAll(arr){
        if (!arr.length){
            // do something
        }

        return new Promise((resolve, reject) =>{
            var ans;
            for (var item of arr){
                item.then(data =>{
                    ans.push(data);
                })
            }
            resolve(ans);
        })
    }
})()

// promise.race
(function(){
    function promiseRace(arr){
        if (!arr.length){
            return;
        }
        
        return new Promise((resolve, reject) =>{
            for (var item of arr){
                item.then(data =>{
                    resolve(data);
                    return;
                })
            }
        })
    }
})()

// promise.all
(function(){
    function promiseAll(arr){
        if (!arr.length){
            return new Promise((resolve, reject) =>{
                resolve([]);
            })
        }

        var datas = [];
        return new Promise((resolve, reject) =>{
            for (var item of arr){
                item.then(data =>{
                    datas.push(data);
                });
            }
        })
    }
})()

(function(){
    function all(arr){
        var ans = [];
        arr.forEach(item =>{
            item.then(data =>{ans.push(item)});
        })
    }
})()

// promise.race
(function(){
    function promiseRace(arr){
        if (!arr.length){
            return;
        }

        return new Promise((resolve, reject) =>{
            for (var item of arr){
                item.then(data =>{
                    resolve(data);
                    return;
                })
            }
        })
    }
})()

(function(){
    function race(arr){
        return new Promise((resolve, reject) =>{
            arr.forEach((item) =>{
                item.then(data =>{
                    resolve(data);
                    return;
                })
            })
        })
    }
})()

// 实现bind
(function(){
    Function.prototype.mybind = function(){
        var context = arguments[0];
        var self = this; // this指向当前函数，因为是Function原型上的方法，this指向当前实例，即当前函数
        // var arr = arguments.splice(1, - 1); // arguments不是数组不能使用slice方法
        var arr = Array.from(arguments).slice(1, - 1);
        return function(){
            selt.call(context, ...arr);
        }
    }
})()

(function(){
    Function.prototype.mybind = function(){
        var self = this;
        var context = arguments[0];
        var arr = Array.from(arguments).slice(1, - 1);
        return function(){
            self.call(context, ...arr);
        }
    }
})()

// 回顾实现bind方法
(function(){
    Function.prototype.mybind = function(){
        var self = this;
        var context = arguments[0];
        var arr = Array.from(arguments).slice(1, - 1);
        return function(){
            self.apply(context, arr);
        }
    }

    Function.prototype.newBind = function(context, ...arr){
        var fn = this;
        return function(){
            fn.apply(context, arr);
        }
    }
})()

(function(){
    var obj = {
        num:1,
        fn:function(){
            console.log(this.num);
        }
    }

    obj['fn'](); // 调用fn方法

    var name = 'window'
    var obj2 = {
        name:'object',
        fn:function(){
            console.log(this.name); // name
            var f = () =>{console.log(this.name);}
            f(); // object
        }
    }

    var obj3 = {
        name:'object',
        fn:() =>{
            console.log(this.name); // window
            var f = () =>{console.log(this.name);}
            f(); // window
        }
    }

    // 结论：对象方法中定义的箭头函数的this指向和该对象方法的this有关，此箭头函数是在指向对象方法时创建的，this指向
    // 当前最高对象


    for (var i in obj){
        console.log(obj[i]);
    }

    Object.assign(obj, obj2);
})()

(function(){
    function news(fn, ...arr){
        var newObj = {};
        newObj._proto_ = fn.prototype;
        var ans = fn.apply(newObj, arr);
        return ans instanceof Object ? ans : newObj;
    }
})()

// 把对象array转为树型
(function(){
    var list = [
        {id:1,name:'部门 A',parentId:0},
        {id:2,name:'部门 B',parentId:0},
        {id:3,name:'部门 C',parentId:1},
        {id:4,name:'部门 D',parentId:1},
        {id:5,name:'部门 E',parentId:2},
        {id:6,name:'部门 F',parentId:3},
        {id:7,name:'部门 G',parentId:2},
        {id:8,name:'部门 H',parentId:4}
    ];

    function convert(list){
        var res = [];
        var map = list.reducer((ans, item) =>(ans[item.id] = item, ans), {});

        for (var i in list){
            if (i.parentId == 0){
                res.push(i);
                continue;
            }

            if (i.parentId in map){

            }
        }
    }
})()

// 对Map对象排序
(function(){
    var map = new Map([['a',1],['b', 3],['c', 2], ['d', 5]]);
    function sort(map){
        var arr = Array.from(map);
        arr.sort((a, b) =>{b[1] - a[1]});
        map = new Map(arr);
        return map;
    }
})()

// 手写reduce方法
(function(){
    Array.prototype.newReduce = function(fn, initData){
        if (this.length == 0 || !(fn instanceof Function) || !Array.isArray(this)){
            return;
        }
        let sum = initData ? initData : this[0];

        for (var index = initData ? 0 : 1; index < this.length; index ++){
            sum = fn(sum, this[index], index, this);
        }

        return sum;
    }
})()

// 回顾手写reduce
(function(){
    Array.prototype.newReduce = function(fn, initData){
        if (this.length == 0 || !(fn instanceof Function) || ! Array.isArray(this)){
            return 0;
        }

        let sum = initData ? initData : this[0];

        for (var index = initData ? 0 : 1; index < this.length; index ++){
            sum = fn(sum, this[index], index, this);
        }

        return sum;
    }
})()