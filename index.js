// Iteration 1: Names and Input
let hacker1 = "Daniel Martel"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Mary Judi Kavitha"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name,it has ${hacker1.length} characters`)
    
}

else if(hacker2.length>hacker1.length){
       console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names with ${hacker1.length}`)
}
// Iteration 3: Loops

let spacedriver=""
for(let i=0;  i<hacker1.length; i++){
    spacedriver+=hacker1[i].toUpperCase() +" "
    
}
console.log(spacedriver)

let reversename=""
for(let i=hacker2.length-1; i>=0; i--){
    reversename+=hacker2[i]
}
console.log(reversename)

let compare1 =hacker1.localeCompare(hacker2)

if(compare1===-1){
    console.log("The driver's name goes first")
}
else if(compare1===1){
    console.log("Yo, the navigator goes first, definitely.")
}
else{
    console.log("What?! You both have the same name")
}