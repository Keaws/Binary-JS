/*
    Создать сущность Student, которая является наследником сущности Man.
    Man содержит свойства name, age и метод live.
    Student не содержит явно данных свойств, но наследует их у Man.
    В свою очередь он содержит метод study. 

       Задание должно быть реализовано каждым из следующих способов:
    1 - прототипное наследование через функции-конструкторы
    2 - наследование через конструкцию Object.create()

    Реализовать функции duckType(), которая принимает объект Student или Man 
    и возвращает его тип не используя оператор instanceof, а проверяя наличие свойств/методов объектов.

    Модифицировать функцию так, что она не принимает объект, а оперирует с объектом this.
    Функция объявляется вне контекста, но вызывается на определенном объекте при помощи call/apply/bind.
*/

//1 - прототипное наследование через функции-конструкторы
function Man(name, age) {
	this.name = name;
	this.age = age;
	this.live = function() {
		console.log(this.name + ' is living!');
	};
}

Student.prototype = new Man();

function Student(name, age){
	Man.call(this, name, age);
}

Student.prototype.study = function(){
	console.log(this.name + ' is studying');
};

var man = new Man('Joe', 30);
console.log(man.name);	//Joe
console.log(man.age);	//30
man.live();	//Joe is living!
//man.study();	//undefined is not a function

var stud = new Student('Mark', 19);
console.log(stud.name);	//Mark
console.log(stud.age);	//19
stud.live();	//Mark is living!
stud.study();	//Mark is studying



//2 - наследование через конструкцию Object.create()
var ManObject = {
	constructor: function(name, age) {
		this.name = name;
		this.age = age;
		this.live = function() {
			console.log(this.name + ' is living!');
		}
		return this;
	}
};

var StudentObject = Object.create(ManObject);

StudentObject.constructor = function(name, age) {
	ManObject.constructor.apply(this, arguments);
	this.study = function(){
		console.log(this.name + ' is studying');
	};
	return this;
};

var mann = Object.create(ManObject).constructor('Kevin', 23);
console.log(mann.name);	//Kevin
console.log(mann.age);	//23
mann.live();	//Kevin is living!
//mann.study();	//undefined is not a function

var student = Object.create(StudentObject).constructor('Mary', 20);
console.log(student.name);	//Mary
console.log(student.age);	//20
student.live();	//Mary is living!
student.study();	//Mary is studying