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


// 行星碰撞
(function(){
    function crash(arr){
        var ifAll = true;
        while (ifAll){
            ifAll = false;
            for (var i = 0; i < arr.length - 1; i ++){
                if (arr[i] > 0 && arr[i + 1] < 0){
                    if (arr[i] > - arr[i + 1]){
                        arr.splice(i + 1, 1);
                        ifAll = true;
                        break;
                    } else if (arr[i] < - arr[i + 1]){
                        arr.splice(i, 1);
                        ifAll = true;
                        break;
                    } else if (arr[i] == -arr[i + 1]){
                        arr.splice(i, 2);
                        ifAll = true;
                        break;
                    }
                }
            }
        }
        return arr;
    }
})()

(function(){
    function crash(arr){
        var ifAll = true;
        while (ifAll){
            ifAll = false;
            for (var i = 0; i < arr.length - 1; i ++){
                if (arr[i] > 0 && arr[i + 1] < 0){
                    if (arr[i] > - arr[i + 1]){
                        arr.splice(i + 1, 1);
                        ifAll = true;
                        break;
                    } else if (arr[i] < - arr[i + 1]){
                        arr.splice(i, 1);
                        ifAll = true;
                        break;
                    } else if (arr[i] == -arr[i + 1]){
                        arr.splice(i, 2);
                        ifAll = true;
                        break;
                    }
                }
            }
        }
        return arr;
    }
})()


// 最长公共前缀
(function(){
    function getStr(arr){
        var minStr = arr[0];
        arr.forEach((item) =>{
            if (item.length < minStr.length){
                minStr = item;
            }
        });

        for (var i = minStr.length; i > 0; i --){
            var publicStr = minStr.substr(0, i);
            var ans = arr.every((item) =>{
                return item.indexOf(publicStr) == 0;
            });
            if (ans){
                return publicStr;
            }
        }
        return '';
    }
})()

(function(){
    function getStr(arr){
        var minStr = arr[0];
        arr.forEach((item) =>{
            if (item.length < minStr.length){
                minStr = item;
            }
        });

        var longStr = '';
        for (var i = minStr.length; i > 0; i --){
            longStr = minStr.substr(0, i);
            let ans = arr.every((item) =>{
                return item.indexOf(longStr) == 0;
            });
            if (ans){
                return longStr;
            }
        }
        return '';
    }
})()

(function(){
    function getPublicStr(arr){
        if (arr.length == 0){
            return ;
        }
        var minStr = arr[0];
        arr.forEach((item) =>{
            if (item.length < minStr.length){
                minStr = item;
            }
        });

        var publicStr = '';
        for (var i = minStr.length; i > 0; i --){
            publicStr = minStr.substr(0, i);
            var ifHas = arr.every((item) =>{
                return item.indexOf(publicStr) == 0;
            });
            if (ifHas){
                return publicStr;
            }
        }
        return '';
    }
})()


// 无重复字符的最大子串
(function(){
    function getChildStr(str){
        var lens = [];
        var len = 1;
        var child = str[0];
        for (var index = 1; index < str.length; index ++){
            if (child.indexOf(str[index]) == - 1){
                child += str[index];
                len ++;
                if (index == str.length - 1){
                    lens.push(len);
                }
            } else{
                child = child.substr(child.indexOf(str[index]) + 1, child.length - 1) + str[index];
                lens.push(len);
                len = child.length;
            }
        }
        lens.sort();
        return lens[lens.length - 1];
    }
})()


// 返回整数的逆序字符串
(function(){
    function reverse(num){
        if (num < 10){
            return `${num}`;
        }
        var str = `${num % 10}`;
        num /= 10;
        num = Math.trunc(num);
        return `${str + reverse(num)}`
    }
})()


// 斐波那契数列第n项
(function(){
    function getNthNumber(n){
        var num1 = 1;
        var ans = 2;
        var x = ans;
        for (var i = 2; i <= n; i ++){
            x = ans;
            ans = ans + num1;
            num1 = ans;
        }
        return ans;
    }
})()

// 归并排序
(function(){
    function mergeSort(arr){
        var len = arr.length;
        if (len < 2){
            return arr;
        }

        var middle = Math.floor(len / 2);
        var left = arr.slice(0, middle);
        var right = arr.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right){
        var newArr = [];

        while (left.length && right.length){
            if (left[0] < right[0]){
                newArr.push(left.shift());
            } else {
                newArr.push(right.shift());
            }
        }

        while (left.length){
            newArr.push(left.shift());
        }

        while (right.length){
            newArr.push(right.shift());
        }

        return newArr;
    }
})()

// 快排
(function(){
    while (left < right){
        while (left < right && arr[right] >= flag){
            right --;
        }
        while (left < right && arr[left] <= flag){
            left ++;
        }

        if (left < right){
            var num = arr[right];
            arr[right] = arr[left];
            arr[left] = num;
        }
    }
})()


// 快排
(function (){
    function fastSort(arr){
        if (arr.length == 1){
            return;
        }

        let left = 1;
        let right = arr.length - 1;
        let num = arr[0];
        while (left < right){
            while (left < right && arr[right] >= num){
                right --;
            }
            while (left < right && arr[left] <=num){
                left ++;
            }

            if (left < right){
                let n = arr[left];
                arr[left] = arr[right];
                arr[right] = n;
            }
        }
        arr[0] = arr[left];
        arr[left] = num;
        fastSort()
    }
})();

// 插入排序
(function(){
    function sort(arr){
        for (let i = 1; i < arr.length; i ++){
            let j = i - 1;
            let num = arr[i];
            while (arr[j] > arr[i] && j >= 0){
                arr[j + 1] = arr[j];
                j --;
            }
            arr[j + 1] = num;
        }
        return arr;
    }
})();

// 快排
(function(){
    function fastSort(arr){
        if (arr.length == 1){
            return;
        }
        let num = arr[0];
        let left = 1;
        let right = arr.length - 1;
        while (left < right){
            while (left < right && arr[right] >= num){
                right --;
            }
            while (left < right && arr[left] <= num){
                left ++;
            }

            if (left < right){
                let n = arr[left];
                arr[left] = arr[right];
                arr[right] = n;
            }
        }
        arr[0] = arr[left];
        arr[left] = num;

        fastSort(); // 左右两边
    }
})();

// 插入排序
(function(){
    function sort(arr){
        for (var i = 1; i < arr.length; i ++){
            let num = arr[i];
            let j = i - 1;
            while (arr[j] > num && j >= 0){
                arr[j + 1] = arr[j];
                j --;
            }
            arr[j + 1] = num;
        }
        return arr;
    }
})();

// 面试题
function(arr, n){
    let a = [];
    let newArr = [];
    arr.forEach((item, index) =>{
        a.push(item);
        if ((index + 1) / n === 0){
            newArr.push(a);
            a.length = 0;
        }
    });
    newArr.forEach((item) =>{
        
    })
}

// 快排
(function(){
    function fastSort(arr){
        let num = arr[0];
        let left = 1;
        let right = arr.length - 1;
        while (left < right){
            while (left < right && arr[right] >= num){
                right --;
            }
            while (left < right && arr[left] <= num){
                left ++;
            }
            if (left < right){
                let n = arr[left];
                arr[left] = arr[right];
                arr[right] = n;
            }
        }

        var leftArr = fastSort(arr.slice(0, left + 1));
        var rightArr = fastSort(arr.slice(left + 1));
        return [...leftArr, ...rightArr];
    }
})();

// 插入排序
(function(){
    function sort(arr){
        for (var i = 1; i < arr.length; i ++){
            var j = i - 1;
            var num = arr[i];
            while (j > 0 && arr[j] > arr[i]){
                arr[j + 1] = arr[j];
                j --;
            }
            arr[j +  1] = num;
        }

        return arr;
    }
})();