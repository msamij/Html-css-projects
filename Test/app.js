// <==============================EDMAM API=============================>
// const getData = async (app_id, app_key, recipe) => {
//   const response = await fetch(
//     `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipe}&app_id=${app_id}&app_key=${app_key}`
//   );
//   const data = await response.json();
//   console.log(data.hits);
// };
// getData("d1196952", "20643d17eccb692cb37bae4301bd8f2a", "pizza");

// <==============================SPOONCULAR API===================================>

// <===================GET DATA USING QUERY======================>
// const getDataBySearch = async (api_key, recipe) => {
//   const response = await fetch(
//     `https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?apiKey=${api_key}&query=${recipe}`
//   );
//   const data = await response.json();
//   console.log(data.results);
// };
// getDataBySearch("566c523054244b38a477795508ded7be", "pizza");

// <===================GET DATA USING ID======================>
// const getSpooncularData = async (api_key, id) => {
//   const response = await fetch(
//     `https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}`
//   );
//   const data = await response.json();
//   console.log(data);
// };
// getSpooncularData("566c523054244b38a477795508ded7be", 246009);

// API-KEY "566c523054244b38a477795508ded7be"
// For retrieving image.
// https://spoonacular.com/recipeImages/209785-636x393.jpg |where this is recipe ID (219957)|.

// <===================================================================================>
// const string = `5:2 Diet- Savoury Cauliflower Rice = 137 calories`;

// const signs = [
//   `:`,
//   `-`,
//   `=`,
//   `,`,
//   `$`,
//   `!`,
//   `@`,
//   `#`,
//   `^`,
//   `&`,
//   `/`,
//   `%`,
//   `(`,
//   `)`,
//   `?`,
//   `~`,
//   `;`,
//   `<`,
//   `>`,
// ];

// // WORKING
// const parseRecipeTitle = (title, limit = 13) => {
//   const strArr = title.split(" ");

//   strArr.forEach((el, index) => {
//     signs.forEach((sign) => {
//       if (el.includes(sign)) {
//         strArr[index] = el.replace(sign, "");
//       }
//     });
//   });

//   strArr.forEach((el, index) => {
//     if (el === "") strArr.splice(index, 1);
//   });

//   if (title.length > limit) {
//     let curValue = strArr[0];
//     for (let index = 0; index < strArr.length - 1; index++) {
//       if (curValue.length + strArr[index + 1].length <= limit) {
//         title = curValue += " " + strArr[index + 1];
//       } else {
//         title = curValue + "...";
//         break;
//       }
//     }
//     return title;
//   } else return (title = string);
// };

// console.log(parseRecipeTitle(string));

// STRING REVERSE ALGORITHM.
// const reverse = (str) => {
//   const notReversed = str.split("");
//   let reversed = [];
//   console.log(notReversed);
//   let i = 0;
//   let index = notReversed.length - 1;
//   let flag = true;
//   while (flag) {
//     if (index <= notReversed.length - 1 && i <= notReversed.length - 1) {
//       reversed[i] = notReversed[index];
//       i++;
//       index--;
//       flag = true;
//     } else flag = false;
//   }
//   console.log(reversed.join(""));
// };
// reverse("Hello World");

// Preheat oven to 425°F and lightly grease two 12" round pizza pans, or a couple of large baking sheets.
// Mix the flour, oil, and water together - the mixture will be shaggy. Use your hands to gather it together and form into a ball. Divide it in two and form each half into a disk the rounder the better.
// Cover with saran wrap and allow to rest 10 minutes to make for easier rolling - skip this step if you're in a hurry.
// Grease a piece of parchment or wax paper about 12" square and set a circle of dough in the middle. Cover with another lightly greased piece. Use a rolling pin to roll the dough very thin - ⅛ inch or less.
// Place the dough on the prepared pans. Top each pizza with ⅓ cup of the sauce.
// Mix the cheeses together and sprinkle ½ over top of each then season with Italian herbs or pizza seasoning.
// Bake the pizzas for 9 to 12 minutes or until the cheese is melted with a few golden brown spots and the edges/bottom of the crust are golden brown.
// Remove the pizzas from the oven and let set 5 minutes. Transfer to a cutting board, cut into squares and serve immediately.

//  "2 cups unbleached self-rising flour*"
//  "2 tablespoons olive oil"
//  "6 tablespoons water"
//  "*Substitute 2 cups all-purpose flour + 1 teaspoon baking powder + ½ teaspoon salt and increase the water to ½ cup"
//  "⅔ cup pizza sauce"
//  "1 cup shredded sharp white cheddar cheese"
//  "½ cup shredded smoked provolone or mozzarella cheese"
//  "½ cup shredded Swiss cheese"
//  "dried Italian or pizza seasoning"

// "1 cup beef broth (or water)"
// "1 tablespoon butter"
// "1 teaspoon cumin"
// "1 (10-oz) can Ro-Tel Diced Tomatoes and Green Chiles"
// "3-4 cloves garlic, minced"
// "¼ cup heavy cream"
// "½ lb lean ground beef"
// "1 teaspoon mustard powder (optional)"
// "2 cups diced onion (about 1 whole onion)"
// "1 teaspoon pepper"
//  "1 (16 oz) package potato gnocchi"
//  "1 teaspoon salt"
//  "1/3 cup thinly sliced scallions"
//  "1 cup shredded sharp cheddar cheese"
//  "½ teaspoon smoked paprika

// const ingredients = [
//   `2 cups unbleached self-rising flour*`,
//   `2 tablespoons olive oil`,
//   `6 tablespoons water`,
//   `*Substitute 2 cups all-purpose flour + 1 teaspoon baking powder + ½ teaspoon salt and increase the water to ½ cup`,
//   `⅔ cup pizza sauce`,
//   `1 cup shredded sharp white cheddar cheese`,
//   `½ cup shredded smoked provolone or mozzarella cheese`,
//   `½ cup shredded Swiss cheese`,
//   `dried Italian or pizza seasoning`,
// ];
// const ingredients = [
//   `1 cup beef = broth (or water)`,
//   `1 tablespoon & butter`,
//   `1 teaspoon cumin`,
//   `1 (10-oz) can Ro-Tel Diced Tomatoes and Green Chiles`,
//   `3-4 %cloves garlic, minced`,
//   `¼ cup heavy cream`,
//   `½ lb lean ground beef`,
//   `1 teaspoon mustard powder (optional)`,
//   `2 cups diced onion (about 1 whole onion)`,
//   `1 teaspoon pepper`,
//   `1 (16 oz) package potato gnocchi`,
//   `1 teaspoon salt`,
//   `1/3 cup thinly sliced scallions`,
//   `1 cup shredded sharp cheddar cheese`,
//   `½ teaspoon smoked paprika`,
//   `1 cup canned apricot halves, sliced`,
// ];

// console.log(ingredients);

// const parseRecipeIngredient = (ingredients) => {
//   // *- Split ingredients into multiple arrays --> like this ing1 = [["1"], ["cup"], ["canned"], ["apricot"]].
//   // *- So that each of them can be parsed.
//   let newIng = [];
//   ingredients.forEach((ing, index) => {
//     newIng[index] = ing.split(" ");
//   });

//   const qty = [
//     `tablespoon`,
//     `tablespoons`,
//     `teaspoon`,
//     `teaspoons`,
//     `ounce`,
//     `ounces`,
//   ];

//   const parsedQty = [`tbsp`, `tbsp`, `tsp`, `tsp`, `oz`, `oz's`];

//   const signs = [
//     `:`,
//     `=`,
//     `,`,
//     `-`,
//     `$`,
//     `!`,
//     `@`,
//     `#`,
//     `^`,
//     `*`,
//     `&`,
//     `%`,
//     `?`,
//     `~`,
//     `;`,
//     `<`,
//     `>`,
//   ];

//   // *- Loop through every element in the array.
//   // *- And if there's and qty replace it with parsedQty.
//   newIng.forEach((ingArr) => {
//     ingArr.forEach((ing, indexx) => {
//       qty.forEach((qty, index) => {
//         if (ing.includes(qty)) {
//           ingArr[indexx] = ing.replace(qty, parsedQty[index]);
//         }
//       });
//     });
//   });

//   // *- Loop through every element.
//   // *- If first element in array can be parsed to number, something like this, (1/3) then skip this element and don't remove any sign.
//   //*- Check other elements in array and remove signs (if any).
//   newIng.forEach((ingArr) => {
//     if (parseInt(ingArr[0])) {
//       ingArr.slice(1).forEach((ing, index) => {
//         signs.forEach((sign) => {
//           if (ing.includes(sign)) {
//             // *- Here we set index + 1 that's because we skip the first element.
//             // *- So let's element 2 have the sign and index is at 0 so that's why we have to add + 1.
//             // *- Because index always starts at 0 even if we skip the first element.
//             ingArr[index + 1] = ing.replace(sign, "");
//           }
//         });
//       });
//     } else {
//       ingArr.forEach((ing, index) => {
//         signs.forEach((sign) => {
//           if (ing.includes(sign)) {
//             ingArr[index] = ing.replace(sign, "");
//           }
//         });
//       });
//     }
//   });

//   // *- Since we remove the sign and added "".
//   // *- Now we need to remove "".
//   newIng.forEach((ingArr) => {
//     ingArr.forEach((ing, index) => {
//       if (ing === "") ingArr.splice(index, 1);
//     });
//   });

//   // *- Converting it back to normal array.
//   // *- Since we split it into multiple arrays in an array --> like this [[], [], [], [], []]
//   // *- Now we only have one array and in there we have ingredient strings --> like this ["", "", "", "", "", ""].
//   // *- We do this so that we can loop easily and render ingredients on the UI.
//   newIng.forEach((ingArr, index) => {
//     newIng[index] = ingArr.join(" ");
//   });

//   return newIng;
// };
// console.log(parseRecipeIngredient(ingredients));

// const str = `Directions                                                                                Flatten chicken slightly; rub with oil. Combine the salt, pepper flakes, cumin and cinnamon. Sprinkle over chicken.                                                                                           In a large skillet, brown chicken on both sides. Add the apricots, tropical fruit, water and honey; bring to a boil. Reduce heat; cover and simmer for 5-6 minutes or until a meat thermometer reads 170°. Garnish with parsley.                                        Yield: 4 servings.                                                                                                                         Originally published as Desert Oasis Chicken in  Simple & DeliciousFebruary/March 2012, p28                                                                                                                                                                                                        Nutritional Facts                                                                             1 chicken breast with 1/4 cup apricot mixture equals 288 calories, 7 g fat (2 g saturated fat), 78 mg cholesterol, 230 mg sodium, 27 g carbohydrate, 2 g fiber, 29 g protein.                                                                                                                                                                    Print                                                                                    Add to Recipe Box                            Email a Friend`;
// console.log(str);
// const strArr = str.split(" ");
// console.log(strArr);
// let newArr = [];
// strArr.forEach((el, index) => {
//   signs.forEach((sign) => {
//     if (el.search(sign) > -1) {
//       strArr[index] = el.replace(sign, "");
//     }
//   });
// });

// strArr.forEach((el, index) => {
//   if (el === "") {
//     strArr.splice(index, 1);
//   } else newArr[index] = el;
// });

// newArr.forEach((el, index) => {
//   console.log(n);
// });
// console.log(strArr);
// console.log(newArr.join(""));

// const apiKey = `566c523054244b38a477795508ded7be`;

// const getSearchRecipes = new Promise((resolve, reject) => {
//   fetch(
//     `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2211096/`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       resolve(data);
//     });
// });

// const getSearchRecipes = (query) => {
//   return new Promise((resolve, reject) => {
//     fetch(
//       `https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}`
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       });
//   });
// };

// getSearchRecipes(`pizza`)
//   .then((data) => {
//     console.log(data.results);
//   })
//   .catch((err) => console.log(err));

// const firstName = `Muhammad`;
// const lastName = `Sami`;

// firstName.split(``)[0], lastName.split(``)[0];

// let name = [];
// name.push(firstName.split(``)[0]);
// name.push(lastName.split(``)[0]);

// name.join(``);

// let searchTitle = `Pizza`;

// let recipeTitle = `with Pizza cherries`;

// recipeTitle.split(` `).forEach((title) => {
//   title = title.toLowerCase();
//   searchTitle = searchTitle.toLowerCase();
//   if (title === searchTitle) console.log("String matches");
// });
// let a = `Deserts`;

// if (
//   a
//     .split(``)
//     .slice(a.length - 1)
//     .join(``)
//     .includes(`s`)
// ) {
//   a = a
//     .split(``)
//     .splice(0, a.length - 1)
//     .join(``);
//   console.log(a);
// }

// let array = [1, 5, 3, 4, 2, 10, 33];

// for (let index = 0; index < array.length - 1; index++) {
//   if (array[index] < array[index + 1]) {
//     let temp = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = temp;
//   }
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] < array[i + 1]) {
//       let temp = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = temp;
//     }
//   }
// }
// const data = {
//   authors: [],
// };

// data.authors.push(56);

// localStorage.setItem(`data`, JSON.stringify(data));

// const x = JSON.parse(localStorage.getItem(`data`));

// console.log(x);

// data.authors.push(566);

// localStorage.removeItem(`data`);

// localStorage.setItem(`data`, JSON.stringify(data));

// const x1 = JSON.parse(localStorage.getItem(`data`));

// console.log(x1);

// INTERSECTION
// function FindIntersection(strArr) {
//   const arr1 = strArr[0].split(`, `);
//   const arr2 = strArr[1].split(`, `);

//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let x = 0; x < arr2.length; x++) {
//       if (parseInt(arr1[i]) === parseInt(arr2[x])) {
//         result.push(parseInt(arr1[i]));
//       }
//     }
//   }
//   return result.join(`,`);
// }

// FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']);

// let array = [56, 45, 25, 100, 80, 120];

// console.log(array);

// for (let i = 0; i < array.length - 1; i++) {
//   for (let index = 0; index < array.length - 1; index++) {
//     if (array[index] < array[index + 1]) {
//       let temp = array[index];
//       array[index] = array[index + 1];
//       array[index + 1] = temp;
//     }
//   }
// }

// console.log(array);
console.log('String');

setTimeout(function () {
  console.log('Timer 0 seconds');
}, 0);

requestAnimationFrame(function () {
  console.log('RequestAnimationFrame');
});

const promise = new Promise((resolve, reject) => {
  console.log('s');
  setTimeout(function () {
    resolve('Promise resolved');
  }, 0);
});

promise.then(function (value) {
  console.log(value);
});
