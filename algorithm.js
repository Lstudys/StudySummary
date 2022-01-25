/**
 * 练习JavaScript实现各种算法的文件
 * created by 李永晖 on 2022/01/21
 */

// 桶排序
var arrs = [5,11,2,33,42,62,41,5,82,12,95,52];
function sort(arr){
    var bucket = new Array(100);
    arr.forEach(item => {
        if (bucket[item] == undefined){
            bucket[item] = 1;
        }else{
            bucket[item]++;;
        }
    });
    var index = 0;
    bucket.forEach((item, indexs) => {
        while (item > 0){
            arr[index] = indexs;
            index ++;
            item --;
        }
    });
    return arr;
}

// 冒泡排序
(function(){
    var arrs = [5,11,2,33,42,62,41,5,82,12,95,52];
    function sort(arr){
        for (let i = 0; i < arr.length; i ++){
            let num = 1;
            for (let j = 0; j < arr.length - i - 1; j ++){
                if (arr[j] > arr[j + 1]){
                    num = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = num;
                }
            }
        }
        return arr;
    }
})()

// 去除数组中的重复元素
(function(){
    var arrs = [1,1,2,4,5,4,5,4,3,3,6,5,6];
    function remove(arr){
        var bucket = [];
        arr.forEach(item =>{
            bucket[item] = 1;
        });
        while (arr.length != 0){
            arr.pop();
        }
        bucket.forEach((item, index) =>{
            if (item == 1){
                arr.push(index);
            }
        });
        return arr;
    }
})()

// 统计字符串中出现最多的字符
(function(){
    function findMostStr(str){
        var container = new Object();
        for (let i = 0; i < str.length; i ++){
            if (container[str[i]] != undefined){
                container[str[i]] ++;
            }else{
                container[str[i]] = 1;
            }
        }
        var string = '';
        var nums = 0;
        for (let index in container){
            if (container[index] > nums){
                string = index;
                nums = container[index];
            }
        }
        return string;
    }
})()


// 快速创建从1到100的数组
var arrFrom1To100 = Array.from(new Array(100),(item, index) =>index + 1);

// 数组去重第二版,使用对象做容器，索引是字符串，一定要转化为数字
(function(){
    function removeElement(arr){
        var obj = {};
        arr.forEach((item) =>{
            obj[item] = 1;
        });

        while (arr.length != 0){
            arr.pop();
        }

        for (let index in obj){
            if (obj[index] == 1){
                arr.push(index);
            }
        }
        return arr;
    }
})()
