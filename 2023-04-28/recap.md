# Recap 2023-04-28

## Mit welcher Funktion können neue DOM Elemente erzeugt werden?
````
document.createElement(elementName)
````

## Schreibe einen kurzen Beispiel-Code der ein neues `div` Element erzeugt und dieses in den `body` einhängt.
````
const newDiv = document.createElement("div");
const newText = document.createTextNode("Hallo Nico!");
newDiv.appendChild(newText);
document.body.appendChild(newDiv);
````

## Was bedeutet JSON?
JavaScript Object Notation

## Wofür gibt es JSON?
JSON gibt es um Daten zu speichern und auszutauschen

## Welche Funktionen werden benötigit um JSON zu verarbeiten?
````
JSON.stringify()
JSON.parse()
````
## Was ist der Local Storage?
Local Storage ist Speicher für den document origin

## Wie können Daten in den Local Storage geschrieben und wieder gelesen werden?
````
localStorage.setItem(name, data)
localStorage.getItem(name)

````
