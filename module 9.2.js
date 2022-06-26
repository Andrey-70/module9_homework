//Записываем в постоянную заготовку.
const jsonString = 
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
 ;
 //Переводим заготвку JS-объект.
 const data = JSON.parse(jsonString);
//Выводим результат.
 console.log ('data', data);
