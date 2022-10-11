//Получаем случайное число от 0 до -1
var getRandomNumber = function (size) {
            //Округление случайного числа
            return Math.floor(Math.random() * size);
};
//Расстояние от нашего нажатия до клада
var getDistance = function (event, target) {
            //Расстояние по горизонтали
            var diffX = event.offsetX - target.x;
            //Расстояние по вертикали
            var diffY = event.offsetY - target.y;
            //Расстояние между двумя точками
            return  Math.sqrt ((diffX * diffX) + (diffY * diffY ));
};
//Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
            //Расстояние меньше 10 пикселей до клада
            if (distance < 10) {
                return "Обожжешься!";
            //Расстояние меньше 20 пикселей до клада
            } else if (distance < 20) {
                 return "Очень горячо!";
            //Расстояние меньше 40 пикселей до клада 
            } else if (distance < 40) {
                return "Горячо!";
            //Расстояние меньше 80 пикселей до клада
            } else if (distance < 80) {
                 return "Тепло!";
            //Расстояние меньше 160 пикселей до клада
            } else if (distance < 160) {
                 return "Холодно!";
            //Расстояние меньше 320 пикселей до клада   
            } else if (distance < 320) {
                 return "Очень холодно!";
            //Расстояние меньше 480 пикселей
            } else if (distance < 480) {
                return "Очень-очень холодно!";  
            //Если расстояние больше 480
            } else {
                 return "Замерзнешь!";
            }
        };
        //Делаем переменные
        var width = 800;
        var height = 800;
        var clicks = 0;
        //Создание случайной позиции клада
        var target = {
        //Создание позиции по горизонтали
        x: getRandomNumber(width),
        //Создание позиции по вертикали
        y: getRandomNumber(height)
        };
        //Делаем обработку кликов
        $("#map").click(function (event) {
            clicks++;
            //Получаем расстояние места нажатия до клада
            var distance = getDistance(event,target);
            //Получение подсказки
            var distanceHint = getDistanceHint(distance);
            //Записываем в элемент #distance новую подсказку
            $("#distance").text(distanceHint);
            //Пользователь выйграл
            if (distance < 8) {
                alert("Клад найден! Сделано кликов: " + clicks)
            }
            //Если был превышен лимит кликов, то пользователь проигрывает
            if (clicks > 100) {
        alert("Вы превысили количество допустимых кликов. КОНЕЦ ИГРЫ!!!")
    }
    //Создаем уведомление о количество оставшихся кликов до проигрыша
    if (distance < 160) {
        var proig = 100 - clicks
    alert("До проигрыша осталось " + proig + " нажатий")
    }
        });