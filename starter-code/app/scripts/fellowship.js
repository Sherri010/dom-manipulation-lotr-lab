console.log("Linked.");

// Dramatis Personae
var hobbit = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var section= document.createElement('section');
  section.setAttribute("id","middle-earth");
  lands.forEach(function(land){
       var l= document.createElement('article');
       var header=document.createElement('h1');
       header.textContent=land;
       l.appendChild(header);
       section.appendChild(l);

  });

body.appendChild(section);

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var shire=document.getElementsByTagName('article')[0];
  var ul=document.createElement('ul');
  for(var i=0;i<hobbit.length;i++){
    var li=document.createElement('li');
    li.setAttribute('class','hobbit');
    li.textContent=hobbit[i];
    ul.appendChild(li);
  }
  shire.appendChild(ul);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var div=document.createElement('div');
  div.setAttribute('id','the-rign');
  div.setAttribute('class','magic-imbued-jewelry');
 div.addEventListener("click",nazgulScreech);
 document.getElementsByTagName('li')[0].appendChild(div);
 
}


keepItSecretKeepItSafe() ;
// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside=document.createElement('tag');
  var ul=document.createElement('ul');
  var li;
  for(var i=0;i<buddies.length;i++){
    li=document.createElement('li');
    li.setAttribute('class','hobbit');
    li.textContent=buddies[i];
    ul.appendChild(li);
  }

 document.getElementsByTagName('article')[1].appendChild(ul);

}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementsByTagName('li')[7].textContent="Aragorn";
}
beautifulStranger();
// Part 6



function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
