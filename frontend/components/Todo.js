import React from 'react'

export default class Todo extends React.Component {
  render() {
    // Step 12: destructure the keys from the todos and assign to props
    // Step 22: add toggleCompletion prop in a different var as it's coming from a different component? -> App.js to add a todo method
    const { id, name, completed } = this.props.todo
    const { toggleCompletion } = this.props
    return (
      // Step 23: add onClick that calls back the toggleCompletion method
      <div onClick={() => toggleCompletion(id)}>
        {/* Todo */}
        {/* Step 13: Render the name of the todo  - your todo obj list should now render */}
        {/* Step 14: Render a checkmark if the todo is completed, => App.js to handle some dynamic state */}
        { name } { completed && ' ✔'}
      </div>
    )
  }
}
