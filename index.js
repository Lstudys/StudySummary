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