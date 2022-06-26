// Создаем экземпляр DOMParser.

const parset = new DOMParser();

// Расписываем xml документ, который будем парсить.
const xmlString = `
 <list>
  <student>
    <name1 lang="en">
      <first1>Ivan</first1>
      <second1>Ivanov</second1>
    </name1>
    <age1>35</age1>
    <prof1>teacher</prof1>
  </student>
  <student>
    <name2 lang="ru">
      <first2>Петр</first2>
      <second2>Петров</second2>
    </name2>
    <age2>58</age2>
    <prof2>driver</prof2>
  </student>
</list>
`;

// Присваиваем все теги xml документа к ListNode.
const xmlDOM = parset.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const name1Node = listNode.querySelector("name1");
const first1Node = listNode.querySelector("first1");
const second1Node = listNode.querySelector("second1");
const age1Node = listNode.querySelector("age1");
const prof1Node = listNode.querySelector("prof1");
const name2Node = listNode.querySelector("name2");
const first2tNode = listNode.querySelector("first2");
const second2Node = listNode.querySelector("second2");
const age2Node = listNode.querySelector("age2");
const prof2Node = listNode.querySelector("prof2");

const lang1Attr = name1Node.getAttribute('lang');
const lang2Attr = name2Node.getAttribute('lang');


//Записываем все переменные в результат.
const result1 = {
  Name: first1Node.textContent,
  Surename: second1Node.textContent,
  Lang: lang1Attr,
  Age: Number(age1Node.textContent),
  Prof: prof1Node.textContent,
};

const result2 = {
  Name: first2tNode.textContent,
  Surename: second2Node.textContent,
  Lang: lang2Attr,
  Age: Number(age2Node.textContent),
  Prof: prof2Node.textContent,
};

//Выводим результат в консоль.
console.log('result1', result1);
console.log('result2', result2);