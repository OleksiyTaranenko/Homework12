class Character {
    constructor(params) {
        this.name = params.name;
        this.age = params.age;    
        this.isHuman = params.isHuman;
        this.isCharacter = true;
        this.canSpeak = true;
    }
    say(phrase) {        
        console.log(`${this.name} says: ` + phrase);                
    } 
};

//Animals

class Animal extends Character {
    constructor(params) {
        super(params);
        this.color = params.color;
    }
};

class Rabbit extends Animal {
    constructor(params) {
        super(params);
        this.earLength = params.earLength;
    }
    say(phrase) {        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, 2000);
        });                
    }
    lostOrientation() {
        console.log(`${this.name} lost orientation`);
    }
};

class Wolf extends Animal {
    constructor(params) {
        super(params);
        this.speed = params.speed;
    }
    say(phrase) {        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, 3000);
        });                
    }
    lostMind() {
        console.log(`${this.name} lost his mind for a while`);
    }
};

class Bear extends Animal {
    constructor(params) {
        super(params);
        this.weight = params.weight;
    }
    say(phrase) {        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, 4000);
        });                
    }
    shocked() {
        console.log(`${this.name} was shocked`);
    }
};

class Fox extends Animal {
    constructor(params) {
        super(params);
        this.feature = params.feature;
    }
    say(phrase) {        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, 1500);
        });                
    }
    swallowKolobok(name) {
        console.log(`${this.name} swallows ${name} at the moment he starts to sing his song for the second time`);
    }   
};

//Humans

class Human extends Character {
    constructor(params) {
        super(params);
        this.characteristic = params.characteristic;
    }
};

class MaleCharacter extends Human {
    constructor(params) {
        super(params);
        this.height = params.height;
    }
    say(phrase) {        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, 6000);
        });                
    }
};

class FemaleCharacter extends Human {
    constructor(params) {
        super(params);
        this.hairColor = params.hairColor;
    }
    goToSuseki() {
        console.log('Grandma goes to suseki');
    }
    findFlour() {
        console.log('Grandma finds two glasses of flour');
    }
    bake() {
        console.log('Grandma bakes kolobok');
    }
    putKolobok() {
        console.log('Grandma puts kolobok on windowsill');
    }
    say(phrase) {        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, 5000);
        });                
    }
};

//KOLOBOK

class Creature extends Character {
    constructor(params) {
        super(params);
        this.timeToSpeak = params.timeToSpeak; 
    }
    say(phrase) {        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${this.name} says: ` + phrase);
                resolve();
            }, this.timeToSpeak);
        });                
    }
};

class Kolobok extends Creature {
    constructor(params) {
        super(params);
        this.canRoll = true; 
    }
    becameAlive() {
        console.log(`${this.name} became alive`);
    }    
    tiredOfRoutine() {
        console.log(`${this.name} tired of routine and decided to explore the world`);
    }
    leftHome() {
        console.log(`${this.name} left home`);
    }
    roll() {
        console.log(`${this.name} is rolling down the road`);
    }
    meetRabbit(name) {
        console.log(`${this.name} meets ${name} on the road`);
    }
    leftRabbit(name) {
        console.log(`${this.name} left ${name} and continue his journey`);
    }
    sing(song) {    
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${this.name} sings: "I\'m ${this.name}, ${this.name},\nI was made in suseki,\nI was made from selected dough,\nA glass of sour cream in me,\nA spoon of sunflower oil in me,\nI was lying on the windowsill,\nThen I left Grandfather,\nAnd I left Grandmother,` + song + '\nSo I can easily to leave you too!"');
                resolve();
            }, 5000);
        }); 
    }
    meetWolf(name) {
        console.log(`${this.name} meets ${name} on the road`);
    }        
    leftWolf(name) {
        console.log(`${this.name} left ${name} and continue his journey`);
    }
    meetBear(name) {
        console.log(`${this.name} meets ${name} on the road`);
    }      
    leftBear(name) {
        console.log(`${this.name} left ${name} and continue his journey`);
    }
    meetFox(name) {
        console.log(`${this.name} meets ${name} on the road`);
    }
    sitOnFoxNose(name) {
        console.log(`${this.name} sits on ${name} nose`);
    }
    died() {
        console.log(`${this.name} goes to Valhalla because he was so young and naive...`);
    } 
};

// Story

async function story() {
    let rabbit = new Rabbit({name: 'Bunny', age: 3, isHuman: false, color: 'white', earLength: '10 cm'});
    let wolf = new Wolf({name: 'Lonely Wolf', age: 7, isHuman: false, color: 'grey', speed: '40 km/h'});
    let bear = new Bear({name: 'Big Bear', age: 13, isHuman: false, color: 'brown', weight: '300 kg'});
    let fox = new Fox({name: 'Sly Fox', age: 10, isHuman: false, color: 'red', feature: 'omnivore'});    
    let grandFa = new MaleCharacter({name: 'Ded Varfolomei', age: 89, isHuman: true, characteristic: 'hungry', height: '177 cm'});
    let grandMa = new FemaleCharacter({name: 'Babka Marfusha', age: 85, isHuman: true, characteristic: 'enterprising', hairColor: 'white'});
    let kolobok = new Kolobok({name: 'Kolobok', age: 0.003, isHuman: false, timeToSpeak: 3000});

    await chapter1(kolobok, grandFa, grandMa);  
    await chapter2(kolobok, rabbit);  
    await chapter3(kolobok, wolf);  
    await chapter4(kolobok, bear);  
    await chapter5(kolobok, fox);  
};

async function chapter1(kolobok, grandFa, grandMa) {
    console.log('C H A P T E R : 1');   
    await grandFa.say(`"Hi my lovely, ${grandMa.name}, can you bake very delicious ${kolobok.name}? I\'m very very ${grandFa.characteristic}."`);
    await grandMa.say(`"Oh, ${grandFa.name}, how can I bake ${kolobok.name} if we have no flour?!"`);
    await grandFa.say(`"Please, ${grandMa.name}, I\'m ${grandFa.height} in height and I\'m very weak at the moment so better you go to suseki and find something there.\nYou are very ${grandMa.characteristic}, I believe in you."`);
    await grandMa.say(`"Okay, ${grandFa.name}, I go to bake!!"`);
    grandMa.goToSuseki();
    grandMa.findFlour();
    grandMa.bake();
    kolobok.becameAlive();
    await grandMa.say(`"Oh, ${kolobok.name}, welcome to our world!"`);    
    await kolobok.say(`"Hello, ${grandMa.name}!"`);
    grandMa.putKolobok();
    await grandMa.say(`"I'm ${grandMa.age} years old and my hair is ${grandMa.hairColor} but first time in my life I see such miracle!!"`);    
    await kolobok.say(`"Zdoroven'ki buly, ${grandFa.name}!"`);
    await grandFa.say(`"${kolobok.name}, I'm ${grandFa.age} years old but I'm really in shock to see you alive!!"`);
    await kolobok.say('"Okay predki, let me walk a little and explore nature around))"');
    kolobok.tiredOfRoutine();
    kolobok.leftHome();
    kolobok.roll();       
    console.log('TO BE CONTINUED...');  
};

async function chapter2(kolobok, rabbit) {
    console.log('C H A P T E R : 2');  
    kolobok.meetRabbit(rabbit.name);
    await rabbit.say(`"Hey, ${kolobok.name}, ${kolobok.name}, I am going to eat you!"`);
    await kolobok.say(`"Please don\'t eat me, dear ${rabbit.color} ${rabbit.name}, oh how many cm are your long ears? I wanna sing a song for you!"`);
    await rabbit.say(`"Okay, ${kolobok.name}, my ears are ${rabbit.earLength} and yes, sing your song!!"`);
    await kolobok.sing('');
    await rabbit.say(`"Wow, ${kolobok.name}, it is very good song!!!"`);
    await kolobok.say(`"Hey, ${rabbit.color} ${rabbit.name}, look at that tree, what kind of bird is sitting there?!!"`);
    rabbit.lostOrientation();       
    kolobok.leftRabbit(rabbit.name);       
    kolobok.roll();
    console.log('TO BE CONTINUED...');       
}

async function chapter3(kolobok, wolf) {
    console.log('C H A P T E R : 3');  
    kolobok.meetWolf(wolf.name);
    await wolf.say(`"Hrrr, ${kolobok.name}, ${kolobok.name}, I want to eat you now!"`);
    await kolobok.say(`"Please don\'t eat me, ${wolf.color} ${wolf.name}, better listen my song!"`);
    await wolf.say(`"Hrrr, ${kolobok.name}, I\'m very fast animal, my speed is ${wolf.speed}, so don\'t even try to run away from me!"`);
    await kolobok.say(`"Okay, ${wolf.color} ${wolf.name}, let me start to sing!!"`);
    await kolobok.sing(`\nAnd I left silly Rabbit before,`);
    await wolf.say(`"Hrrrrrrr, ${kolobok.name}, I have a very bad headache because of your terrible song hhrrrr..."`);
    wolf.lostMind();   
    kolobok.leftWolf(wolf.name);       
    kolobok.roll();
    console.log('TO BE CONTINUED...');          
}

async function chapter4(kolobok, bear) {
    console.log('C H A P T E R : 4');  
    kolobok.meetBear(bear.name);
    await bear.say(`"${kolobok.name}, ${kolobok.name}, let\'s talk about my dinner today, sit on my lap and I will eat you!"`);
    await kolobok.say(`"Oh don\'t eat me, ${bear.color} ${bear.name}, I prepared a beautiful song for you, please listen!"`);
    await bear.say(`"Okay, ${kolobok.name}, let\'s sing for me and then I will sit on you, my weight is ${bear.weight}, so I can easily turn you into a tortilla or taco hehe"`);
    await kolobok.say(`"Oh, ${bear.color} ${bear.name}, let me start"`);
    await kolobok.sing('\nAnd I left silly Rabbit,\nAlso I left angry Wolf before,');
    await kolobok.say(`"Heey, ${bear.color} ${bear.name}, can you hear these sounds not far in the forest? I saw hunters there, they want to find you and I helped them with it hahaha"`);
    bear.shocked();  
    kolobok.leftBear(bear.name);       
    kolobok.roll();
    console.log('TO BE CONTINUED...');         
}

async function chapter5(kolobok, fox) {
    console.log('C H A P T E R : 5');  
    kolobok.meetFox(fox.name);
    await fox.say(`"Wow ${kolobok.name}, ${kolobok.name}, you are so cute and appetizing. Can I taste just a little piece of you? I\'m ${fox.feature} fox"`);
    await kolobok.say(`"No, please don\'t taste me, ${fox.color} ${fox.name}, better listen my cute and long song!"`);
    await fox.say(`"Okay ${kolobok.name}, start your song!!"`);
    await kolobok.sing('\nAnd I left silly Rabbit,\nAlso I left angry Wolf before,\nAnd I left big Bear just an hour ago,');
    await fox.say(`"It is so wonderful song, ${kolobok.name}, but I should tell you that I have hearing problems,\nso can you please sit on my nose and sing it again?"`);
    await kolobok.say(`"No problems, ${fox.color} ${fox.name}, I can do it."`);
    kolobok.sitOnFoxNose(fox.name);
    fox.swallowKolobok(kolobok.name);
    await fox.say('"Bye bye Kolobochek, you are so tasty ololo"'); 
    kolobok.died();
    console.log('T H E  E N D');     
};

story();