import React from 'react'

export default class Form extends React.Component {
  // Step 29: add state - pass object, pass name key & empty string even though state usually goes in App.js, you can also add here if you want to confuse yourself
  state = {
    name: '',
  }
  // Step 35: add onSubmit arrow function method, it takes an event obj and does things in {}
  // Step 39: grab adTodo props out of rendered jsx & place at top of onSubmit
  // Step 40: add a evt.preventDefault at the top of onSubmit
  // Step 41: call addTodo prop and pass name with this.state
  // Step 42: forget that: put all of that in one line with this.props
  // Step 43: clear out input on submit: pass in setState obj with spread state, and an empty name key value - test in DOM
  onSubmit = evt => {
    evt.preventDefault()
    // const { addTodo } = this.props
    this.props.addTodo(this.state.name)
    this.setState({
      ...this.state,
      name: ''
    })
  }
  // Step 36: add onChange arrow function method
  // Step 37: pass state to onChange, give it fresh slice of state with name prop
  // Step 38: go back and destructure value at the top of onChange method as a const, test in DOM you can type in input and submit/clear it
  // Step 44: Also spread the state in this method -> TodoList.js to clear the completed
  onChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      name: value
    })
  }

  render() {
    // Step 26: add addTodo props 
    // const { addTodo } = this.props - taken out in step 39
    return (
      // Step 30: Change your div to a form tag
      // Step 31: add input tag for text box and pass type & value state props 
      // Step 32: add input for submit
      // Step 33: add onSubmit object to the form tag, which does not yet exist
      // Step 34: add onChange obj to your input tag, which also does not exist
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.name} onChange={this.onChange} />
        <input type='submit'/>
      </form>
      // <div>
        // Form
        /* Step 27: Create a button for your addToDo method & prop */
        /* Step 28: add onClick event to button, call back addToDo, pass in some dummy task to test in DOM, remove test button */
        /* <button onClick={ evt => addTodo('Go To BT')}>Add To Do</button> */
      // </div>
    )
  }
}
