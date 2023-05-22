# Live Session 22.05.2023

## Vue CLI

- Erstelle ein neues Projekt mit `vue create <project-name>`
- Für User von Git Bash, bei denen die Pfeiltasten in dem Auswahlmenü nicht funktionieren:
  - Statt `vue create` bitte `winpty vue.cmd` schreiben
  - Oder folgenden Workaround, damit es mit `vue create` funktioniert:
    - Befehl eingeben: `echo 'alias vue="winpty vue.cmd"' >> ~/.bashrc`, um einen Alias in der `.bashrc` anzulegen
    - Danach die `.bashrc` neu einlesen lassen mit dem Befehl `source ~/.bashrc`
    - Jetzt sollten die Pfeiltasten auch bei `vue create` funktionieren

### Components

Components ermöglichen es uns, gewisse Teile unserer App auszugliedern in einzelne Dateien (z.B. Elemente, die wir an mehreren Stellen wiederverwenden oder Bereiche wie Header oder Footer).

Dazu beachten wir folgenden Workflow:

- Die Komponente wird an ihrem Zielort...

  - ...importiert:

  ```js
  import ComponentFile from "./components/ComponentFile.vue";
  ```

  -...registriert (in einem Object):

  ```js
  export default {
    data() {
      return {
        // your properties
      };
    },

    components: {
      ComponentFile, // Hier den selben Namen verwenden wie beim Import
    },
  };
  ```

  -...verwendet (im Template):

  ```html
  <template>
    <ComponentFile />
  </template>
  ```

## Import/Export

Variablen und Funktionen können exportiert und so in einer anderen Script-Datei importiert werden.

- In Vanilla JS ist dafür im Script-Tag im HTML das Attribut "type" mit dem Wert "module" nötig: `<script src="script.js" type="module">`
- In Frameworks wie Vue benötigt es nichts weiter, da funktionieren Export/Import nativ
- Die zu exportierende Funktion/Variable bekommt das Keyword `export` vorangestellt
- Der Import erfolgt über das `import` Keyword am Anfang der Script-Datei gefolgt von dem Namen der zu importierenden Module sowie dem Keyword `from` und dem Pfad zur exportierenden Datei

```js
/* 
EXPORT:
*/
// Named Export:
export const example = "This is an example";

// Default Export:
export default function () {
  return "Exportierte Funktion";
}

/*
IMPORT:
*/
import { example } from "./export.js"; // Wichtig: Der Name von named exports muss identisch sein mit dem Variablen-Namen in der exportierenden Datei

import exportedFunction from "./export.js"; // Der Name eines Default Exports kann beliebig gewählt werden (da ein default export in der exportierenden Datei ja keinen Variablen-Namen besitzt)

console.log(example); // "This is an example"
console.log(exportedFunction()); // "Exportierte Funktion"
```

## Soll für den 23.05.:

- Bis zur Live Session: **05-06-practical-example**
- Für den gesamten Tag: **05-07-coding-task**
