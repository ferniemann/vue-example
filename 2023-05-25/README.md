# Props und Custom Events

## Props

- Werden vom Elternelement an das Child-Element runtergegeben
- Es wird die `props`-Option benötigt:

  ```js
  // Child-Komponente:
  export default {
    props: {
      example: String
    }
  }

  // Eltern-Komponente:
  <Komponente example="Hello World" />
  ```

## Custom Events

- Wird benutzt, um Daten per Child-Element zum Eltern-Element zu reichen
- Child-Element:
  - Wir setzen `this.$emit` ein, um ein Custom Event zu erstellen und anzugeben, welche Daten wir darüber übermitteln wollen:
  ```js
  exampleFunction() {
    this.$emit("customEventName", data); // erster Parameter: Name des Custom Events, zweiter Parameter: Daten, die übermittelt werden sollen
  }
  ```
- Eltern-Element:

  ```js
  <Komponente @customEventName="parentFunction" />

  ...

  export default {
    methods: {
      parentFunction(data) { // Über den Parameter data empfangen wir die Daten vom Child-Element
        console.log(data)
      }
    }
  }
  ```
