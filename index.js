// Write your solution here!
//array called cats with value["Milo", "Otis", "Garfield"]

const cats = ['Milo', 'Otis', 'Garfield'];

/*destructivelyAppendCat(name)
appends a cat to the end of the cats array
        destructivelyAppendCat('Ralph')
*/
function destructivelyAppendCat(name){ 
    cats.push('Ralph') //pass 'Ralph' as argument, pushes 'Ralph to end of array
};
/*destructivelyPrependCat(name)
prepends a cat 'Bob' to the beginning of the cats array:*/
 function destructivelyPrependCat(name){
     cats.unshift('Bob') //adds 'Bob' to beginning of array
 };
 
 /*
 destructivelyRemoveLastCat() removes the last cat
    */
function destructivelyRemoveLastCat(){
    cats.pop() //pop()removes element at end of array
};

/* function that destructively removes first car from array
    */
function destructivelyRemoveFirstCat(){
    cats.shift()
};

/*
function appendCat(name)appends a new cat name to the cats array and 
returns a new array, leaving the cats array unchanged-nondestructive
*/
function appendCat(name){
    return [...cats, name] /*use spread operator with bracket notation to return original array
                           adding new name variable */
}
/*
prependCat(name) function, prepends new cat name nondestructively 
*/
function prependCat(name){
    return [name, ...cats] 
}
/* removeLastCat() function, removes last cat in array and returns 
new array nondestructively
*/

function removeLastCat(){
    return cats.slice(0, 2) //slice is nondestructive, starting at index 0, 
                            //second argument before which array should end
                            
};

/* removeFirstCat() function and returns a new array-nondestructively
    */

function removeFirstCat(){
    return cats.slice(1, 3)
};