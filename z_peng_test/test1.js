function hello() {
  console.log('hello');
}

class Person{
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  sayHello() {
    console.log('hello' + this.name);
  }
}

var p1 = new Person('jack', 29, 'male');
p1.sayHello();

var p2 = new Person('linna', 26, 'female');
p2.sayHello();
