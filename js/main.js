// Create new object via object constructor function
function AddItem (description, image, type, color, size) {
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
var greyPlaidSkirt = new AddItem("Grey Plaid Skirt","img/greyskirt.jpg", "Skirt", "Grey", "24")
var burgundySkirt = new AddItem("Burgundy Twill Skirt", "img/burgundyskirt.jpg", "Skirt", "Burgundy", "22")
var tealDress = new AddItem("Satin Teal Dress", "img/tealdress.jpg", "Dress", "Teal", "18")
var blackDress = new AddItem("Black Twist Dress", "img/blackdress.jpg", "Dress", "Black", "1X")
var blackWedge = new AddItem("Black Canvas Wedges", "img/blackwedge.jpg", "Shoes", "Black", "10")
var blackMesh = new AddItem("Black Mesh Heels", "img/blackmesh.jpg", "Shoes", "Black", "10")
var silverWatch = new AddItem("Silver Rhineston Watch", "img/silverwatch.jpg", "Jewelry", "Silver", "One Size")
var bangleMulti = new AddItem("Multicolor Bangles", "img/banglemulti.jpg", "Jewelry", "Multi", "One Size")

// Create empty array for object variables
var itemArray = []

// Push object variables into empty array
itemArray.push(greyPlaidSkirt, burgundySkirt, tealDress, blackDress, blackWedge, blackMesh, silverWatch, bangleMulti)

// Loop through array of objects and create divs
for(i = 0; i < itemArray.length; i++) {

	// Create container div element
	var newProductDiv = document.createElement("div")
	// Add class name to container div
	newProductDiv.className = "col-md-4 border animated slideInUp"

	// Create elements to put into container div element
	var newDescription = document.createElement("h2")
	var newImage = document.createElement("img")
	var newType = document.createElement("h3")
	var newColor = document.createElement("h3")
	var newSize = document.createElement("h3")
	var newButton = document.createElement("button")

	// Create text nodes for each element
	var descriptionText = document.createTextNode(itemArray[i].description)
	var typeText = document.createTextNode("Category: " + itemArray[i].type)
	var colorText = document.createTextNode("Color: " + itemArray[i].color)
	var sizeText = document.createTextNode("Size: " + itemArray[i].size)
	var buttonText = document.createTextNode("Buy Now")

	// Add src attribute to img element
	newImage.src = itemArray[i].image

	// Append text nodes to elements
	newDescription.appendChild(descriptionText)
	newType.appendChild(typeText)
	newColor.appendChild(colorText)
	newSize.appendChild(sizeText)
	newButton.appendChild(buttonText)

	// Append created elements to container div
	newProductDiv.appendChild(newDescription)
	newProductDiv.appendChild(newImage)
	newProductDiv.appendChild(newType)
	newProductDiv.appendChild(newColor)
	newProductDiv.appendChild(newSize)
	newProductDiv.appendChild(newButton)

	// Append div containing new elements to parent div with id "allItems"
	document.getElementById("allItems").appendChild(newProductDiv)
}
