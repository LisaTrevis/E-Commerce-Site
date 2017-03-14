function addItem (description, image, type, color, size) {
	this.description = description
	this.image = image
	this.type = type
	this.color = color
	this.size = size
}

var greyPlaidSkirt = new addItem("Grey Plaid Skirt","img/greyskirt.jpg", "Skirt", "Grey", "28")
var burgundySkirt = new addItem("Burgundy Twill Skirt", "img/burgundyskirt.jpg", "Skirt", "Burgundy", "22")
var tealDress = new addItem("Satin Teal Dress", "img/tealdress.jpg", "Dress", "Teal", "18")
var blackDress = new addItem("Black Twist Dress", "img/blackdress.jpg", "Dress", "Black", "1X")
var blackWedge = new addItem("Black Canvas Wedges", "img/blackwedge.jpg", "Shoes", "Black", "10")
var blackMesh = new addItem("Black Mesh Heels", "img/blackmesh.jpg", "Shoes", "Black", "10")
var silverWatch = new addItem("Silver Rhineston Watch", "img/silverwatch.jpg", "Jewelry", "Silver", "One Size")
var bangleMulti = new addItem("Multicolor Bangles", "img/banglemulti.jpg", "Jewelry", "Multi", "One Size")

var itemArray = [];

itemArray.push(greyPlaidSkirt, burgundySkirt, tealDress, blackDress, blackWedge, blackMesh, silverWatch, bangleMulti)

for(i = 0; i < itemArray.length; i++) {

	var newProductDiv = document.createElement("div")
	newProductDiv.className = "col-md-4 border"

	var newDescription = document.createElement("h2")
	var descriptionText = document.createTextNode(itemArray[i].description)
	newDescription.appendChild(descriptionText)
	newProductDiv.appendChild(newDescription)

	var newImage = document.createElement("img")
	newImage.src = itemArray[i].image
	newProductDiv.appendChild(newImage)

	var newType = document.createElement("h3")
	var typeText = document.createTextNode("Category: " + itemArray[i].type)
	newType.appendChild(typeText)
	newProductDiv.appendChild(newType)

	var newColor = document.createElement("h3")
	var colorText = document.createTextNode("Color: " + itemArray[i].color)
	newColor.appendChild(colorText)
	newProductDiv.appendChild(newColor)

	var newSize = document.createElement("h3")
	var sizeText = document.createTextNode("Size: " + itemArray[i].size)
	newSize.appendChild(sizeText)
	newProductDiv.appendChild(newSize)

	var newButton = document.createElement("button")
	var buttonText = document.createTextNode("Buy Now")
	newButton.appendChild(buttonText)
	newProductDiv.appendChild(newButton)

	document.getElementById("allItems").appendChild(newProductDiv)
}
