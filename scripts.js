$(document).ready(function(){

  var ourArray = [
    'Pretend the floor is lava for an hour ',
    'Make team t-shirts for Homemade Flounder (Maybe use fish to make ink prints?) ' ,
    'Obtain 10 flowers and give them to people that look like they need cheering up ',
    'Run up to a random person, give them a hug and say “Hey! I’ve been looking all over for you!” ',
    'Put on a reflective vest, find a marshalling wand and direct people crossing at the sidewalk. ',
    'Blindfold yourself and interpretive dance to your favorite song in the middle of a park or square. ',
    'Wear soundproof headphones and sing along to your favorite song in public. ',
    'Set up a stand on the street selling air guitars for $5 apiece (Maybe play some rock music and challenge them to a air guitar faceoff) ',
    'Find a random person and ask for their autograph and a picture with them. ',
    'Play Marco Polo with a friend on the subway or in a park ',
    'Take an egg to all your classes for the week ',
    'Compliment every person you interact with for a day ',
    'Take selfies with every dog you see throughout the day ',
    'Free fist bumps ',
    'As a team create an intricate secret handshake. ',
    'In a public place take a bite of a burger and scream “Oh no, I’m vegan! What have I done?!” ',
    'Celebrate an imaginary holiday ',
    'Choreograph a fight sequence ',
    'Be someones hype man or woman ',
    'Draw a large smiley face with chalk in the square at union square park.',
    'Write 3 positive motivational letters and drop it in 3 different colored lockers in the UC Building.',
    'Complete a whole day of Opposite Day. That includes wearing your clothes inside out. ',
    'Have a karaoke night and sing 3 songs you have never heard of. ',
    'Be an elevator attendant at Parsons for 15 minutes and push buttons for the people riding. Make sure to play a boppin playlist. ',
    'Go to the library and ask for a book on how to read. ',

  ];

  console.log(ourArray);
  $('body').append('<h1>Our array: ' + ourArray + '</h1>');

  var item = ourArray[2];

  console.log(item);

  var length = ourArray.length;
  console.log(length);

  console.log(Math.random());

  var rand = ourArray[Math.floor(Math.random() * ourArray.length )];
  console.log('rand: ' + rand);

  // shuffle our array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(ourArray);

console.log('shuffle: ' + ourArray);

var myList = ourArray.slice(0,1);
console.log('first two: ' + myList);
$('body').append(myList);






});
