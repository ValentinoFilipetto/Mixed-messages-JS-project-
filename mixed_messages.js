const list_1 = ["are great","should not give up","should bite the bullet","are amazing"]
const list_2 = ["you should keep up the good work!","you can win!","I know you are strong enough for this!","you have the strength to make it to end of this!"]

const random_int_to_3 = () => {
    min = 0;
    max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random_sentence = (list1,list2) => {
    console.log(`You ${list1[random_int_to_3()]} and ${list2[random_int_to_3()]}`)
}

random_sentence(list_1,list_2)