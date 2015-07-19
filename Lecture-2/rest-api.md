| Описание функции        | Метод запроса           | Пример запроса  |
| :-------------: 			|:-------------:		| :-----		|
| Получить список стран      | GET 					|GET<br> /restapi/countries<br> HTTP 1.1<br> Host: my.site.com<br> User-Agent: Internet-Explorer 9.0 		|
| Получить список отелей в стране | GET | GET<br> /restapi/countries/42/hotels<br> HTTP 1.1<br> Host: my.site.com<br> User-Agent: Internet-Explorer 9.0 |
| Добавить страну 			| POST | POST<br> /restapi/countries<br> HTTP 1.1<br> Content-Type: application/json<br> Host: my.site.com<br> User-Agent: Internet-Explorer 9.0<br> -d '{"name":"Argentina" }' |
| Добавить отель в страну | POST | POST<br> /restapi/countries/42/hotels<br> HTTP 1.1<br> Content-Type: application/json<br> Host: my.site.com<br> User-Agent: Internet-Explorer 9.0<br> -d '{"name": "Top Hotel", "stars": 4 }' |
| Удалить определенный отель | DELETE | DELETE<br> /restapi/countries/42/hotels/24<br> HTTP 1.1<br> Host: my.site.com<br> User-Agent: Internet-Explorer 9.0 |
| Получить информацию об определенном отеле | GET | GET<br> /restapi/countries/42/hotels/24<br> HTTP 1.1<br> Host: my.site.com<br> User-Agent: Internet-Explorer 9.0 |
| Обновить информацию об определенном отеле | PUT | PUT<br> /restapi/countries/42/hotel/24<br> HTTP 1.1<br> Content-Type: application/json<br> Host: my.site.com<br> User-Agent: Internet-Explorer 9.0<br> -d '{"name": "Top Hotel", "stars": 5 }' |
