import React from 'react'
// Step 10: Import Todo form component
import Todo from './Todo'

// Step 45: Initialize state in this component, pass showAll key & set to true

export default class TodoList extends React.Component {
  state = {
    showAll: true
  }
  // Step 46: Add the means to toggle with a toggle method, that takes an evt object, calls state, copies state & overrides showAll key that returns the opposite showAll state (now take it to your render)
  toggleShowAll = evt => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll,
    })
  }
  render() {
    // Step 8: Pass todo props destructured as a variable
    // Step 20: Destructure & pass toggleCompletion prop
    // Step 48: Declare a var to filter the todos, if the td is not completed or showAll of the state
    const { todos, toggleCompletion } = this.props
    const filtered = todos.filter(td => !td.completed || this.state.showAll)
    return (
      <div>
        {/* TodoList */}
        {/* Step 9: return the todos obj, map over it, return a Todo Component */}
        {/* Step 49: add filtered to this return & remove todos */}
        {
          filtered.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />)) /* Step 11 pass a key into Todo's App Form and a todo data prop. Check DOM & jump to Todo.js*/
          // Step 21: pass the toggleCompletion prop in the map() -> Todo.js
        }
        {/* Step 47: add a Show All button, add an onClick meth that takes in toggleShowAll - test in DOM by clicking the button to see if the state changes from T to F */}
        {/* Step 48: change 'Show All' to a dynamic expression that makes sense: remove 'Show All' and add showAll state that 'Hide Completed Todos' els 'Show All' - test in DOM*/}
        <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed Todos' : 'Show All' }</button>
      </div>
    )
  }
}
