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



    class father2{
        constructor(name: string, age: number){
            this.name = name;
        }
        name: string;

        fn(num: number): void{
            console.log(num);
        }
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

    abstract class c1{
        name: string;
        fn(){
            console.log(1);
        }
        abstract fun(num1: number, num2: number): number{
            return num1 + num2;
        }
    }

    class c2 extends c1{
        fun(num1: number, num2: number): number{
            return num1 + num2;
        }
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

    interface inter2{
        num: number;
        fn(num: number): void;
    }

    var o1: inter2;
    class c1 implements inter2{
        num: number;
        fn(num: number): void{
            console.log(1);
        }
    }

    o1 = {
        num: 2,
        fn(num: number){
            console.log(1);
        }
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


    class c1{
        num: number;
        public str: string;
        protected sex: string;
        private name: string;

        get name(): string{
            return this.name;
        }

        set name(value: string): void{
            this.name = value;
        }

        get sex(): string{
            return this.sex;
        }

        set sex(value: string): void{
            this.sex = value;
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


    function f<T, K>(num1: T, num2: K): T | K{
        return num1 ? num1 : num2;
    }

    f(2,'a'); // 不加<>标注类型也可以用，因为TypeScript会自动识别传入的参数类型确定T和K
    f<number, string>(1, 'a');
})();