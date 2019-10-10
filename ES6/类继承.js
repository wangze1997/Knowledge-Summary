class Parent{
    constructor(){
        this.son()
        this.father()
        console.log(this.arr)
    }
    arr = [4,3,2,1]
}
class Father extends Parent{
    // 在父类的构造方法中。。。。
    constructor() {
        super();
        this.son();
    }
    father() {
        console.log('father')
    }
    arr = [1,2,3,4]
}
// 属性和方法加到this上的时间不一致。一个是父类构造之前，一个是父类构造之后。
// 并且属性是直接加入到构造出的对象上的，不会出现在原型上
class Son extends Father{
    constructor(){ 
       super(); // super不写不行。
    }
    son() {
        console.log('son')
    }
    name = "caiwenji"
}

let son = new Son();
console.log(son)