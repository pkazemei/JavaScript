const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const div3=pokemon.filter(p => p.id %3==0);
// an array of pokémon objects where the id is evenly divisible by 3

const fire=pokemon.filter(t => t.types.includes('fire'));
// an array of pokémon objects that are "fire" type

const more=pokemon.filter(m => m.types[1]);
// an array of pokémon objects that have more than one type

const names=pokemon.map(n => n.name);
// an array with just the names of the pokémon

const grt99=pokemon.filter(g => g.id > 99).map(g => g.name);
// an array with just the names of pokémon with an id greater than 99 

const poison=pokemon.filter(ps => ps.types=='poison').map(ps => ps.name);
// an array with just the names of the pokémon whose only type is poison

const fly2=pokemon.filter(f => f.types.includes('flying')).map(f => f.types[0]);
// an array containing just the first type of all the pokémon whose second type is "flying"

const countX=pokemon.filter(countX => countX.types.includes('normal'));

function count(){
    for(var i=0;i<countX.length;i++){
    }
    console.log(`There are ${i} types`)
}
// a count of the number of pokémon that are "normal" type

console.log(div3);
console.log(fire);
console.log(more);
console.log(names);
console.log(grt99);
console.log(poison);
console.log(fly2);
count();