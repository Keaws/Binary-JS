function Man(name, age) {
	this.name = name;
	this.age = age;
};

Man.prototype.live = function () {
	console.log(this.name + ' is living!');
};

Man.prototype.walkIntoMordor = function () {
	throw new Error('One cannot simply walk into Mordor');
};

Student.prototype = new Man();

function Student(name, age){
	Man.call(this, name, age);
	this.study = function() {
		console.log(this.name + ' is studying');
	};
};

function duckType() {
	var object = this;
	if (this.hasOwnProperty('study')) return 'student';
	else return 'man';
};

Professor.prototype = new Man();

function Professor(name, age){
	Man.call(this, name, age);
};

Professor.prototype.issueGrade = function (student, grade) {
	student.grade = grade;
};

Professor.prototype.setDiscipline = function (discipline) {
	this.discipline = discipline;
};