/*
Написать запрос для поиска всех студентов, у которых score > 93% и меньше 95% 
по любому из типов выполненных заданий.
*/
db.yourCollectionName.find({
	scores: {
		$elemMatch: {
			score: {$gt: 93, $lt: 95}
		}
	}
})

/*
Написать запрос-аггрегацию для выборки всех студентов, 
у которых результат по экзамену более 90% (использоdание unwind)
*/
db.yourCollectionName.aggregate([
		{
			$unwind: "$scores"
		},
		{
			$match: {
				"scores.score": { $gt: 90 },
				"scores.type": "exam"
			} 
		}
])

/*
Студенту с именем Vinnie Auerbach добавить поле “accepted” со значением true.
*/

//добавлаяет первому студенту с именем Vinnie Auerbach
db.yourCollectionName.update({
	name: "Vinnie Auerbach"
}, {$set: { "accepted": true }})

//добавлаяет всем студентам с именем Vinnie Auerbach
db.yourCollectionName.update({
	name: "Vinnie Auerbach"
}, {$set: { "accepted": true }},false, true)