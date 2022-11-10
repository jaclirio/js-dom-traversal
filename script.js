//const grandparent = document.getElementById("grandparent-id")
//grandparent.style.backgroundColor = '#333' //Sets background color to Grey

//changeColor(grandparent) //Overwrites 333
function changeColor(element) {
    element.style.backgroundColor='#999'
}

let newColor = (element) => {
    element.style.backgroundColor="Blue"
}

//const parents = Array.from(document.getElementsByClassName('parent'))  //Returns to the collection of elements
//parents.forEach(changeColor)

const grandparent = document.querySelector('#grandparent-id') //Gets 999 color for outer box
changeColor(grandparent)

//const parents = document.querySelector('.parent') //gets first element and apply only to that, even there are multiple class elements
//newColor(parents)

//const parents = document.querySelectorAll('.parent') //applies to all elements
//parents.forEach(newColor)

const parents = Array.from(grandparent.children) //Selects class under grandparents (parent)
parents.forEach(newColor)

//const parentOne = parents[0]
//const children = parentOne.children
//changeColor(children[0])

const children = grandparent.querySelector('.child') //Descendants - selects class lowest from parent (last nth child)
changeColor(children)

//const childOne = document.getElementById('child-one') //Parents - selects parent of child class
//const parent1=childOne.parentElement
//changeColor(parent1)

const childOne = document.getElementById('child-one') 
const grandparent1 = childOne.closest('.grandparent') //Ancestors - Checks the closest element above this child for the same grandparent character
newColor(grandparent)

const childTwo = childOne.nextElementSibling //Selects next element within same parent
changeColor(childTwo)

changeColor(childTwo.previousElementSibling) //Selects previous element childOne