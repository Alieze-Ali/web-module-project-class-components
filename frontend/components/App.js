import React from 'react'
// Step 1: pull in other forms: Form & TodoList
import Form from './Form'
import TodoList from './TodoList'

// Step 6: create ID utilities that will assign integers (1,2,3) to your id's below
let id = 0
let getId = () => ++id

// Step 5: populate slice of state with array of to do objects & assign 
const initialTodos = [
  { id:getId(), name: 'Take Out Trash', completed: false },
  { id:getId(), name: 'Fold Laundry', completed: true },
  { id:getId(), name: 'Learn React', completed: false },
]

export default class App extends React.Component {
  // Step 3: Add State as an obj, always should be a single state
  // Step 4: add slices of state and init, there can be many slices
  state = {
       todos: initialTodos
  }

  // Step 15: Add toggle method, pass the id,  call setState to change state & give it a fresh obj, destructure the state with ...this.state,
  // Step 16: reset your todos state, we will use the todos array through props but change 1, so we need to map() it.
  // Step 17: for each todo represented with td, set it up to do something with arrow function
  // Step 18: add conditional logic inside: for each todo if  the id matches td.id, return a new obj with a copy of the old td, and then the completed must be the opposite of what it is, else return td

  // Step 23: to create another to do: Add a to do Method, pass in name,call setState, pass in an obj copy of current state, override the todo's state
  // Step 24: for the todos, pas the state, concat - We are concatenating a obj with an id, a completed of false & a name
  addTodo = (name) => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.concat({ id: getId(), completed: false, name })
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state, /* note: this overrides the original state*/
      todos: this.state.todos.map(td => {
        if (id == td.id) return { ...td, completed: !td.completed }
        return td
      })
    })
  }

  render() {
    return (
      <div>
        {/* Todo App */}
        {/* Step 2: Render TodoList & Form */}
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} /> {/* Step 7: Pass todos state in TodoList Component */} {/*Step 19: Pass the toggleCpmpletion state into the render, -> TodoList.js */}
        {/* Step 25: pass addTodo to the Form -> Form.js*/}
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}

// Top Level Component
// Responsible for holding state and rendering other components