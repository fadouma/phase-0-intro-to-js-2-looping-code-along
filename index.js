const gifts = ["teddy bear", "drone", "doll"];
function writeCards(name){
 const arraymessages = []
 for (let i = 0; i < name.length; i++)
    {arraymessages .push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)}
 return arraymessages
}
function countDown(number){
while (number > -1) {
    console.log(number--)
}
}  
