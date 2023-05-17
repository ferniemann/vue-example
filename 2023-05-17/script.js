Vue.createApp({
  data() {
    return {
      baseApiUrl: "http://localhost:4730/todos",
      todos: [],
      newTodo: "",
    };
  },
  created() {
    this.loadTodos();
  },
  methods: {
    loadTodos() {
      fetch(this.baseApiUrl)
        .then((res) => res.json())
        .then((todosFromApi) => {
          console.log(todosFromApi);
          this.todos = todosFromApi;
        });
    },
    createNewTodo() {
      //this.newTodo
      const newTodo = {
        description: this.newTodo,
        done: false,
      };

      fetch(this.baseApiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })
        .then((res) => res.json())
        .then((newTodoFromApi) => {
          console.log("Neues Todo wurde im backend angelegt");
          console.log(newTodoFromApi);

          // bestätigtes neues todo in lokalen state einfügen
          this.todos.push(newTodoFromApi);

          // alles neu laden
          // this.loadTodos();
        });
    },
  },
}).mount("#app");
