const euroCities = [`Paris`, `London`, `Valletta`, `Prague`, `Rome`];
console.log(euroCities);

const secondCity = euroCities[1];
console.log(secondCity);


/* Change the first item in the array to "Berlin". */

euroCities.splice(0, 1, `Berlin`);
console.log(euroCities);

/* 
Print the length of the array euroCities. */

console.log(euroCities.length);

/* Remove the last item of the array euroCities. */

euroCities.pop();

console.log(euroCities);

/* Use an array method to add "Budapest" to the end of the euroCities array. */

euroCities.push(`Budapest`);
console.log(euroCities);

/* Create another variable named asianCities and assign an array of at least 5 cities to the variable. */

const asianCities = [`Tokie`, `Pekin`, `Bankog`, `Delhi`, `Bombaj`];
console.log(asianCities);

/* Use a method to combine euroCities and asianCities into one array. Store the result in a variable worldCities.
 */
console.log('-----------------------------------------');

const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

/* const merged = [...euroCities, ...asianCities] */




/* Reverse the order of worldCities. */

const reversing = worldCities.reverse();
console.log(reversing);

/* Bonus: Remove the third item from the euroCities array. */
console.log(euroCities);

euroCities.splice(2, 1);

console.log(euroCities);

/* Bonus: Use an array method to select items 2 to 4 from the array of asianCities and store this in another variable. */
console.log('------------');

const selectElements = asianCities.slice(1,4);
console.log(selectElements);

/* Bonus: Replace the 3rd item in the array of worldCities with "Toronto". */

worldCities.splice(2, 1, `Toronto`);
console.log(`11`, worldCities);


/* Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position. */

worldCities[1] = `Washington`
console.log(worldCities);

/* Bonus Write a program to join all elements of the result (`worldCities) into a string. */

console.log(worldCities);
const join = worldCities.join(`+`)
console.log(`13.`, join);

/* Write a program to reverse the string: "Hello World". */
const bonus =  `Hello World`;
const bonusrev = bonus.split(``);
console.log(bonusrev);
const revBonus = bonusrev.reverse();
console.log(revBonus);


const joinRev = bonusrev.join(``);
console.log(joinRev);
 
console.log('--------------------');


/* Extra Practice
Make an array of your siblings' names or your favorite movie characters' names. */

const favouritesTvCharacters = [`Gerald`, `Ciri`, `Arya`, `BoJack`, `MichaelScott`];
const myParentsNames = [`Dwight`, `Angela`];

const combine = favouritesTvCharacters.concat(myParentsNames);
console.log(combine);


const myPets = [`Fifka`, `Bella`, `Effi`, `Klara`, `Mania`];
const finalArray = myPets.concat(combine);
console.log(`The final array looks like:`, finalArray);


/* Reverse the order of the array. */
const finalArrayReverse = finalArray.reverse();
console.log(finalArrayReverse);

/* Access one of your parents' names. */

let myParentName = finalArrayReverse[0];
console.log(myParentName);

/* Update the name of one of your parents. */

finalArrayReverse.splice(1,1, `Jim`);
console.log(finalArrayReverse);
