//Declaring variables
var player_1 = localStorage.getItem("Player_1math");
var player_2 = localStorage.getItem("Player_2math")

var score1 = 0;
var score2 = 0;

var answer = 0;

var lives1 = 3;
var lives2 = 3

question_turn = "player1";
answer_turn = "player2";

var mode="multiply";
//Giving text in html 
document.getElementById("plr1_name").innerHTML = player_1 + ":";
document.getElementById("plr2_name").innerHTML = player_2 + ":";

document.getElementById("plr1_score").innerHTML = score1;
document.getElementById("plr2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Question turn : " + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player_2;
function multiply(){
    mode = "multiply";
    console.log("Curent mode = " + mode);
}
function add(){
    mode = "add";
    console.log("Curent mode = " + mode);
}
function subtract(){
    mode = "subtract";
    console.log("Curent mode = " + mode);
}
function divide(){
    mode = "divide";
    console.log("Curent mode = " + mode);
}
//Function send(complicated)
function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    //The question and space for answer
    if(mode == "multiply"){
        answer = number1 * number2;
        Question_Word = number1 + ' X ' + number2;
        Input_Box = '<br>Answer:<input type="text" id="input_CheckBox">';
        Check_Button = '<br> <br> <button class="btn btn-info" onclick="check()">Check</button>';
        row = Question_Word + Input_Box + Check_Button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
        console.log(number1 + "x" + number2 + "=" + answer);
    }else if(mode == "add"){
        answer = parseInt(number1)+parseInt(number2);
        Question_Word = number1 + ' + ' + number2;
        Input_Box = '<br>Answer:<input type="text" id="input_CheckBox">';
        Check_Button = '<br> <br> <button class="btn btn-info" onclick="check()">Check</button>';
        row = Question_Word + Input_Box + Check_Button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
        console.log(number1 + "+" + number2 + "=" + answer);
    }else if(mode == "subtract"){
        answer = number1 - number2;
        Question_Word = number1 + ' - ' + number2;
        Input_Box = '<br>Answer:<input type="text" id="input_CheckBox">';
        Check_Button = '<br> <br> <button class="btn btn-info" onclick="check()">Check</button>';
        row = Question_Word + Input_Box + Check_Button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
        console.log(number1 + "-" + number2 + "=" + answer);
    }else if(mode == "divide"){
        answer = number1 / number2;
        Question_Word = number1 + ' ÷ ' + number2;
        Input_Box = '<br>Answer:<input type="text" id="input_CheckBox">';
        Check_Button = '<br> <br> <button class="btn btn-info" onclick="check()">Check</button>';
        row = Question_Word + Input_Box + Check_Button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
        console.log(number1 + "÷" + number2 + "=" + answer);
    }
}

function check(){
    var user_answer = document.getElementById("input_CheckBox").value;
    if(user_answer == answer){
        if(answer_turn == "player1"){
            score1 = score1 + 1;
            document.getElementById("plr1_score").innerHTML = score1;
        }else{
            score2 = score2 + 1;
            document.getElementById("plr2_score").innerHTML = score2;
        }
    }else{
        if(answer_turn == "player1"){
            lives1 = lives1 - 1;
            document.getElementById("if_wrong").innerHTML = "The answer is not correct," + player_1 + ". You have " + lives1 + " chances left"; 
            if(lives1 == 0){
                document.getElementById("if_wrong").innerHTML = "Your chances are now 0,"+player_1+". You will lose a point and the turns will switch."
                score1 = score1 - 1;
                score2 = score2 + 1;
                document.getElementById("plr2_score").innerHTML = score2;
                document.getElementById("plr1_score").innerHTML = score1;
                lives1 = 3;
            }
        }
        if(answer_turn == "player2"){
            lives2 = lives2 - 1;
            document.getElementById("if_wrong").innerHTML = "The answer is not correct," + player_2 + ". You have " + lives2 + " chances left"; 
            if(lives1 == 0){
                document.getElementById("if_wrong").innerHTML = "Your chances are now 0,"+player_2+". You will lose a point and the turns will switch."
                score2 = score2 - 1;
                score1 = score1 + 1;
                document.getElementById("plr1_score").innerHTML = score1;
                document.getElementById("plr2_score").innerHTML = score2;
                lives2 = 3;
            }
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn:"+player_2;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn:"+player_1;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn:"+player_2;
    }else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn:"+player_1;
    }
    document.getElementById("output").innerHTML = "";
}

