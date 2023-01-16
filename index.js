let fruits = ["Strawberries", "Apples", "Grapes", "Cherries", "Peaches", "Pears", "Papaya"]

fruits[1] = "Nectarines";
fruits[3] = "Melon";
fruits[4] = "Watermelon";

let last_element = fruits.length - 1
fruits[6] = "Lemon"


for (let i = 0; i < fruits.length; i++) {
    console.log('fruits', i)
}