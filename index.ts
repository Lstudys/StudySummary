/**
 * 练习TypeScript代码的文件
 */

(function(){
    class father{
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
        name: string;
        age: number;
    }

    class person extends father{
        constructor(name: string, age: number, sex: string){
            super(name, age);
            this.age = age;
            this.name = name;
            this.sex = sex;
        }

        name: string;
        age: number;
        sex: string;
    }

})();

// 抽象类
(function(){
    abstract class father{
        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }

        abstract fn(name:string, num: number): number;
    }
})();

// 接口
(function(){
    interface inter{
        name: string;
        age: number;
        num: number;
        fn(num: number): number;
    }
})();

// 属性封装
(function(){
    class father{
        public name: string;
        private age: number;
        protected num: number;

        get age(){
            return this.age;
        }

        set age(value: number){
            this.age = value;
        }

        getAge(): number{
            return this.age;
        }

        setAge(value: number): void{
            this.age = value;
        }
    }
})();

// 泛型
(function(){
    function fn<T>(num: T): T{
        return num;
    }

    fn<number>(2);

    function fun<T, K>(num: T, str: K): T | K{
        return num ? num : str;
    }

    fun(2, 'ts');
})();