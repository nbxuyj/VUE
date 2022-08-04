const getters = {
  doneTodos: state => state.app.todos.filter(todo => todo.done),
  doneTodosCount: (state, getters) => getters.doneTodos.length,


  getTodoById: (state) => (id) => {
      var res = state.app.todos.find(todo => todo.id == id)
    //var res = state.app.todos.filter(todo => todo.id == id)[0];
    return res;
  }
}
export default getters
