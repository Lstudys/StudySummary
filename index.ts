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
})()