// Create new object via object constructor function
function addItem (description, image, type, color, size) {
	// Add description
	this.description = description
	// Add image
	this.image = image
	// Add type
	this.type = type
	// Add color
	this.color = color
	// Add size
	this.size = size
}

// Add objects as variables
var greyPlaidSkirt = new addItem("Grey Plaid Skirt","img/greyskirt.jpg", "Skirt", "Grey", "28")
var burgundySkirt = new addItem("Burgundy Twill Skirt", "img/burgundyskirt.jpg", "Skirt", "Burgundy", "22")
var tealDress = new addItem("Satin Teal Dress", "img/tealdress.jpg", "Dress", "Teal", "18")
var blackDress = new addItem("Black Twist Dress", "img/blackdress.jpg", "Dress", "Black", "1X")
var blackWedge = new addItem("Black Canvas Wedges", "img/blackwedge.jpg", "Shoes", "Black", "10")
var blackMesh = new addItem("Black Mesh Heels", "img/blackmesh.jpg", "Shoes", "Black", "10")
var silverWatch = new addItem("Silver Rhineston Watch", "img/silverwatch.jpg", "Jewelry", "Silver", "One Size")
var bangleMulti = new addItem("Multicolor Bangles", "img/banglemulti.jpg", "Jewelry", "Multi", "One Size")

// Create empty array for object variables
var itemArray = [];

// Push object variables into empty array
itemArray.push(greyPlaidSkirt, burgundySkirt, tealDress, blackDress, blackWedge, blackMesh, silverWatch, bangleMulti)

// Loop through array of objects and create divs
for(i = 0; i < itemArray.length; i++) {

	// Create new div element as a variable
	var newProductDiv = document.createElement("div")
	// Add class name to created div
	newProductDiv.className = "col-md-4 border"

	// Create new h2 element as variable
	var newDescription = document.createElement("h2")
	// Create text node using description value
	var descriptionText = document.createTextNode(itemArray[i].description)
	// Append text node to h2
	newDescription.appendChild(descriptionText)
	// Append h2 to div element
	newProductDiv.appendChild(newDescription)

	// Create new img element as variable
	var newImage = document.createElement("img")
	// Add src attribute to img element
	newImage.src = itemArray[i].image
	// Append img element to div element
	newProductDiv.appendChild(newImage)

	// Create new h3 element as variable
	var newType = document.createElement("h3")
	// Create text node using type value
	var typeText = document.createTextNode("Category: " + itemArray[i].type)
	// Append text node to h3 element
	newType.appendChild(typeText)
	// Append h3 element to div element
	newProductDiv.appendChild(newType)

	// Create new h3 element as variable
	var newColor = document.createElement("h3")
	// Create text node using color value
	var colorText = document.createTextNode("Color: " + itemArray[i].color)
	// Append text node to h3 element
	newColor.appendChild(colorText)
	// Append h3 element to div element
	newProductDiv.appendChild(newColor)

	// Create new h3 element as variable
	var newSize = document.createElement("h3")
	// Create text node using size value
	var sizeText = document.createTextNode("Size: " + itemArray[i].size)
	// Append text node to h3 element
	newSize.appendChild(sizeText)
	// Append h3 element to div element
	newProductDiv.appendChild(newSize)

	// Create new button element as variable
	var newButton = document.createElement("button")
	// Create text node with "Buy Now" value
	var buttonText = document.createTextNode("Buy Now")
	// Append text node to button element
	newButton.appendChild(buttonText)
	// Append button element to div element
	newProductDiv.appendChild(newButton)

	// Append div containing new elements to div with id "allItems"
	document.getElementById("allItems").appendChild(newProductDiv)
}
