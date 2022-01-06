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