// Функция startGame1() - конструктор. 
// Обрабатывает всю информацию и выводит конечный результат

function startGame1(){
    
    let monthNum =getMonth();
    let objMonth={
        1  : "Зима", 2  : "Зима", 3  : "Весна",
        4  : "Весна", 5  : "Весна", 6  : "Лето",
        7  : "Лето", 8  : "Лето", 9  : "Осень",
        10 : "Осень", 11 : "Осень", 12 : "Зима",
    };


    
    if(!isEmpty(monthNum)){
        comeBack();
    } else if(isNaN(monthNum)){
        alert("Введено не число-повторите попытку");
        startGame1();
    } else if(monthNum < 0 || monthNum > 12) {
        alert("Такого месяца не бывает! Повторите попытку");
        startGame1();
    } else {
        alert (objMonth[monthNum]);
        comeBack();
    }
}    

// Функция getMonth() - запрос числа у пользователя. Возвращает значение числа 

function getMonth(){  
    let monthNumber = prompt('Введите порядковый номер месяца');
    return monthNumber;
}

// Функция isEmpty проверяет на пустое значение и значение null
//(случай когда нажат ESC, "Отмена" или "ОК без ввода" )

function isEmpty(num){
    if(num) return true;
    return false;
}

//Функция ComeBack предлагает остаться в игре

function comeBack() {
    let question = confirm('Хoтите выйти из игры? Тогда нажмите "ОК"');

    if(question) alert("До свидания!!!");
    else startGame1();
}





