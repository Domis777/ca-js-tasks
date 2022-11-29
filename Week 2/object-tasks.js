console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    // function sortDrinkByPrice(drinks) {
    //     drinks.sort(function (a, b){
    //         return a.price - b.price;
    //     })
    //     return drinks.sort();
    // }

    function sortDrinkByPrice(drinks) {
        drinks.sort((a, b) => (a.price > b.price) ? 1 : -1)

        return drinks.sort();
    };

    const drinks1 = [
        {name: 'lemonade', price: 90}, 
        {name: 'lime', price: 432}, 
        {name: 'peach', price: 23}
    ];

    const drinks2 = [
        {name: 'water', price: 120}, 
        {name: 'lime', price: 80}, 
        {name: 'peach', price: 90}
    ];

    const result1 = sortDrinkByPrice(drinks1)
    const result2 = sortDrinkByPrice(drinks2)

    console.log(
        result1,
        result2,
        );
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value
        return obj
    };

    const result1 = addName({}, "Brutus", 300)
    const result2 = addName({ piano: 500 }, "Brutus", 400)
    const result3 = addName({ piano: 500, stereo: 300 }, "Caligula", 440)

    console.log(
    result1,
    result2,
    result3,
    );
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();


