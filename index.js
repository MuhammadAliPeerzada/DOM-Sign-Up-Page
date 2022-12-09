var div = document.createElement("div")

var form = document.createElement("form")
form.append(div)

var h1 = document.createElement("h1")
h1.innerHTML = "Sign up"
div.append(h1)

var h3 = document.createElement("h3")
h3.innerHTML = "FirstName"
div.append(h3)

var input = document.createElement("input")
div.append(input)

var h3 = document.createElement("h3")
h3.innerHTML = "LastName"
div.append(h3)

var input = document.createElement("input")
div.append(input)

var h3 = document.createElement("h3")
h3.innerHTML = "E-mail"
div.append(h3)

var input = document.createElement("input")
div.append(input)

var br = document.createElement("br")
div.append(br)

var input = document.createElement("input")

var h3 = document.createElement("h3")
h3.innerHTML = "Male"
div.append(h3)

input.setAttribute("type", "radio")
input.setAttribute("name", "radio")
div.append(input)
document.body.append(form)

var h3 = document.createElement("h3")
h3.innerHTML = "Female"
div.append(h3)

var input = document.createElement("input")
input.setAttribute("type", "radio")
input.setAttribute("name", "radio")
div.append(input)

var br = document.createElement("br")
div.append(br)
var br = document.createElement("br")
div.append(br)

var input = document.createElement("input")
input.setAttribute("type", "checkbox")
var p = document.createElement("p")
div.append(input)
div.append(p)
p.innerHTML = "  Remember Me"
p.style.display = "inline"

var br = document.createElement("br")
div.append(br)
var br = document.createElement("br")
div.append(br)

var button = document.createElement("button")
button.innerHTML = "Submit"
div.append(button)
button.style.height = "30px"
button.style.backgroundColor = "black"
button.style.color = "white"

document.body.append(form)


