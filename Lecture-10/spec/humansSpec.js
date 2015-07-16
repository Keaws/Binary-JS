describe('Human', function () {
	var man,
		student,
		professor;
	
	beforeEach( function () {
		man = new Man('Peter', 20);
		student = new Student('Mike', 18);
		professor = new Professor('Viktor', 42);
	});

	it('man\'s name should equal to Peter', function () {
		expect(man.name).toEqual('Peter');
	});

	it('man\'s age should equal 20', function () {
		expect(man.age).toEqual(20);
	});

	it('man\'s ducktyping should return man', function () {
		expect(duckType.call(man)).toEqual('man');
	});

	it('student\'s name should equal to Mike', function () {
		expect(student.name).toEqual('Mike');
	});

	it('student\'s age should equal 18', function () {
		expect(student.age).toEqual(18);
	});

	it('student\'s ducktyping should return student', function () {
		expect(duckType.call(student)).toEqual('student');
	});

	it('student\'s grade should be undefined by default', function () {
		expect(student.grade).toBeUndefined();
	});

	it('professor should issue grade to a student', function () {
		professor.issueGrade(student, 'A+')
		expect(student.grade).toEqual('A+');
	});

	it('professor\'s discipline should be undefined by default', function () {
		expect(professor.discipline).toBeUndefined();
	});

	it('professor should set his discipline', function () {
		professor.setDiscipline('math');
		expect(professor.discipline).toEqual('math');
	});

	it('cannot simply walk into Mordor', function () {
		expect(function() {
    		student.walkIntoMordor()
		}).toThrowError();
	});
});