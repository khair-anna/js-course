// 1. Принять от пользователя имена людей для набора в команду.Имена принять и сохранить в новом массиве.Количество имён должно соответсвовать количеству должностей.Массив с должностями - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'].

var workerPosition = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

var workerName = [];

function getNames(position, name) {
    for (var i = 0; i < position.length; i++) {
        name[i] = prompt("Worker name: ");
    }
    return name;
}

// 2. Создать объект team в котором будут храниться новые объекты - сотрудники с параметрами name и position, данные для этих свойств добавляем из массивов.

var team = new Object();

function createTeam(position, name, team) {
    team.workers = new Array(position.length);

    for (var i = 0; i < position.length; i++) {
        team.workers[i] = {
            name: name[i],
            position: position[i] 
        }
    }

    return team;
}

// 3. Добавить сотрудникам зарплаты(свойство salary) при помощи метода Math.random(), который будет выдавать произвольное число в промежутке между N1 и N2 исходя из принципа:
// если в должности есть слово "junior" сумма будет от 500 до 1000;
// если в должности есть слово "middle" сумма будет от 1500 до 2000;
// если в должности есть слово "senior" сумма будет от 2500 до 3000;
// для всех остальных - от 4000 до 4500; Для определения того есть ли слово в имени должности используйте метод str.indexOf('часть строки для поиска').Например:
// var name = 'Junior developer';
// name.indexOf('Junior');
//в данном случае вернет 0, если такая строка отсутсвует вернет -1.
//Регистр имеет значение, по этому строка "junior" вернет -1

function getRandomSalary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setSalary() {

    for (var i = 0; i < team.workers.length; i++) {
        if (team.workers[i].position.indexOf('Junior') == 0) {
            team.workers[i].salary = getRandomSalary(500, 1000);
        } else if (team.workers[i].position.indexOf('Middle') == 0) {
            team.workers[i].salary = getRandomSalary(1500, 2000);
        } else if (team.workers[i].position.indexOf('Senior') == 0) {
            team.workers[i].salary = getRandomSalary(2500, 3000);
        } else team.workers[i].salary = getRandomSalary(4000, 4500);
    } 

    return team;
}


// 4. Добавить каждому сотруднику метод tellAboutYourSelf(), который будет сообщать информацию о пользователе(например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").

function createWorkerMethod() {
    for (var i = 0; i < team.workers.length; i++) {
        team.workers[i].tellAboutYourSelf = function () {
            console.log(`My name is ${team.workers[i].name} and I'm ${team.workers[i].position}. My salary - ${team.workers[i].salary}$.`)
        }
        // console.log(team.workers[i].tellAboutYourSelf());
    }

    return team;
}

// 5. Добавить объекту team метод showTeam(), который будет выводить информацию о всех сотрудниках в консоль в формате: "John - Project manager. Зарплата - 4863$." 

function createTeamMethod() { 
    team.showTeam = function () {
        for (var i = 0; i < team.workers.length; i++) {
            console.log(`${team.workers[i].name} - ${team.workers[i].position}. Salary - ${team.workers[i].salary}`)
        }
    }

    return team;
}

// Для удобства создайте по порядку все необходимые функции и в конце сделать вызов этих функций в логическом порядке.Например:

// getNames();
// createTeam();
// setSalary();
// создание цикла для установки метода tellAboutYourSelf();
// создание team.showTeam = function () {... };
// вызов метода showTeam();

getNames(workerPosition, workerName);
createTeam(workerPosition, workerName, team);
setSalary();
createWorkerMethod();
createTeamMethod();
team.showTeam();