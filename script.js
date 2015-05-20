var userNumber = prompt("Pick a number, any number...");

while (userNumber !==computerNumber)
{
var computerNumber = Math.floor((Math.random() *50) + 1);
if (userNumber < computerNumber){
	prompt("your number was too low"); 
} 
else {prompt("your number is too high");
}
}


 	







