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

