import {uniqueNamesGenerator, starWars} from "unique-names-generator"

const config = {
    dictionaries: [starWars]
}

let heroes = [], villains = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

for (let i = 0; i < 10; i++) {

    heroes.push({
        name: uniqueNamesGenerator(config),
        speed: getRandomInt(1, 6),
        health: 100,
        power: getRandomInt(1, 11)
    });
    villains.push({
        name: uniqueNamesGenerator(config),
        speed: getRandomInt(1, 6),
        health: 100,
        power: getRandomInt(1, 11)
    });
}

function villainsAttack() {
    let max = 10;
    for (let i = 0; i < villains.length; i++) {
        let int = getRandomInt(0, max);
               let  timerId =  setInterval(() => {
                   if ( heroes[int] && villains[i]) {
                    console.log(` ${villains[i].name}[${villains[i].health}] hits ${heroes[int].name}[${heroes[int].health}] with a power of ${villains[i].power}`);
                    heroes[int].health =  heroes[int].health - villains[i].power;
                    if (heroes[int].health <= 0) {
                        console.log(`${heroes[int].name} dies` );
                         heroes.splice(int, 1)
                         max--;
                         if(max == 0) {
                            console.log(`Battel Finished`);
                        }
                    }
                }
            }, ((1 / (5000 - (villains[i].speed -1) * 1000) * 5 ) * 1000), i);
       setTimeout(() => { clearInterval(timerId); }, 2000);
        
    }
}

function heroesAttack() {
    let max = 10;
    for (let i = 0; i < heroes.length; i++) {
        let int = getRandomInt(0, max);
               let  timerId =  setInterval(() => {
                   if ( villains[int] && heroes[i]) {
                    console.log(` ${heroes[i].name}[${heroes[i].health}] hits ${villains[int].name}[${villains[int].health}] with a power of ${heroes[i].power}`);
                    villains[int].health =  villains[int].health - heroes[i].power;
                    if (villains[int].health <= 0) {
                        console.log(`${villains[int].name} dies` );
                        villains.splice(int, 1)
                         max--;
                         if(max == 0) {
                            console.log(`Battel Finished`);
                        }
                    }
                }
            }, ((1 / (5000 - (heroes[i].speed -1) * 1000) * 5 ) * 1000), i);
       setTimeout(() => { clearInterval(timerId); }, 2000);
    }
}

heroesAttack()
villainsAttack()

if (heroes.length !== 0) {
    setTimeout(() => {
        let result = ``;
        console.log(`Heroes win`);
        for (const iterator of heroes) {
          result += `${iterator.name}[${iterator.health}]`
        }
        console.log(result); 
    }, 3000);
} if (villains.length !== 0) {
    setTimeout(() => {
        let result = ``;
        console.log(`Villians Win`);
        for (const iterator of villains) {
          result += `${iterator.name}[${iterator.health}] `
        }
        console.log(result); 
    }, 3000);
}
