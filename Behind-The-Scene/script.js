'use strict';

function calcAge(birthYeah) {
    const age = 2037 - birthYeah;

    function printAge() {
        const output = `${firstName},You are ${age},born in ${birthYeah}`;
        console.log(output);

        if (birthYeah >= 1981 && birthYeah <= 1996) {
            var millenial = true;

            //Creating  NEW variable with same name as outer scope's varible
            const firstName = 'Steven';

            const str = `Oh,and you're a millenial,${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            const output = 'New Output';

        }
        // console.log(str);
        console.log(millenial);
        // add(2, 3);           //we get output of we remove the strict mode
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);

// printAge();