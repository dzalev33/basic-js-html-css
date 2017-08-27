//Use this file to implement Part One of your project


//OBJECTS

var animal = {};


animal.username = " pes";

animal['tagline'] = 'mnogu grcam';

console.log(animal);

var count = 0;
for (var key in animal){
    count++;
    if(key === 'username'){
        console.log('zdravo jas sum' + ' ' + animal[key]);
    }else if (key === 'tagline'){
        console.log('i like to say' +' ' + animal[key]);
    }

}


//ARRAYS

var noiseArray = ['weee'];

noiseArray.unshift('brrr');
noiseArray.push('mjau');

noiseArray[3] = 'woooow';
console.log(noiseArray.length);

console.log(noiseArray);


animal.noises = noiseArray;
console.log(animal);


var animals =[];

animals.push(animal);

var quackers = {username: 'DaffyDuck', tagline: 'yeppee',noises:['quack', 'honk','sneeze', 'growl']};

animals[animal.length] = quackers;

console.log(animals);

var dog = {
    username: 'kabosu',
    tagline: 'Such Profile',
    noises: ['bark','wolf','growl']
};


var honeyBadger = {};

honeyBadger.username = 'Randall';
honeyBadger.tagline = 'Honey Badger dont care';
honeyBadger.noises = ['screech','growl'];
animals.push(dog, honeyBadger);

console.log(animals.length);





// FUNCTIONS



function AnimalTestUser(username) {

    var argsLenght = arguments.length;
    var otherArgs =[];

    if(argsLenght >1) {
        for (var i = 1; i < argsLenght; i++) {
            otherArgs.push(i);
        }
    }
    return{
        username: username,
        otherArgs: otherArgs
    };

}

var AnimalTest = function (username) {
    return {
        'username': username
    };

}

var myCow = AnimalTest('Bessy');

console.log(myCow.username); //ke ispecati bessy

var testSheep = AnimalTestUser('cottonBall', {'loves danceing':true}, [1,2,3]);
console.log(testSheep);


////////

function AnimalCreator(username, species, tagline, noices) {
    var animal = {
        username: username,
        species: species,
        tagline: tagline,
        noises: noices,
        friends: []
    };

    return animal;
} //end function

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count me!', ['ofca', 'maweeee', 'sasdasdasda']);
console.log(sheep);

////

function addFriend(animal, friend) {
    animal.friends.push(friend.username);
}
var cow = AnimalCreator('mow', 'cow', 'got milk?', ['moo', 'mooooooooeeww']);
console.log(cow);

var llama = AnimalCreator('zeny', 'lama', 'llllll', ['kurac', 'kurac']);
console.log(llama);
addFriend(sheep,cow);
console.log(sheep);
addFriend(sheep,llama);
console.log(sheep);

/////

var myFarm = [sheep, cow, llama];
addFriend(cow, llama);
addFriend(llama,cow);
console.log(myFarm);



function addMatchesArray(farm) {
    for (var animal in farm){
        farm[animal].matches = [];
    }
}
addMatchesArray(myFarm);
console.log(myFarm);

function addMatchesArray(farm) {
    for (var animal in farm){
        farm[animal].matches = [];
    }

}

addMatchesArray(myFarm);
console.log(myFarm[0]);


function giveMatches(farm) {
    for (var animal in farm){
        farm[animal].matches.push(farm[animal].friends[0]);
    }

}
giveMatches(myFarm);
console.log(myFarm[0]);


//nested data



var friends = [];

friends.push(animals[0].username, animals[1].username);
console.log(friends);


var relationships = {};

relationships.friends = friends;
console.log(relationships);

console.log(Object.keys(relationships).length);


var matches = [];
relationships.matches = matches;
relationships.matches.push('pig');
console.log(relationships);


for (var i=0; i<animals.length; i++){
    animals[i].relationships = relationships;
}
console.log(animals);



//  SCOPE













