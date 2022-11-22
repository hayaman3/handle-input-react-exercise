// App.js

import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
        editable: false,
      },
      tasks: [],
      editText: '',

      
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid(),
      },
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task=>{
        return task.id !== id
      })
    });
  };

  // editButton = (id,vars) => {
  //   this.setState({
  //     tasks: this.state.tasks.filter(task=>{
  //       if(task.id === id ){
  //         task.editable = true;
  //         tasks: this.state.tasks.concat(this.state.task)
  //       }
  //       return task 
  //     })
      
  //   });
  // };

  editButton = (id) => {
    this.state.tasks.filter(task=>{
      
      if(task.id === id ){
        task.editable = true;
        // this.setState({
        //   editText: task.state,
        // });
        this.setState((editText) => ({ 
          editText: task.text,
       }))
      }
      console.log(this.editText)
      console.log(task.text )

        return task 
      })
  };

  saveEditInput = (newtext) => {

        this.setState({
          editText: this.editText + newtext,
        });
  
  };

  saveEdit  = (e) => {
    e.preventDefault();

    // this.setState({
      
    //     task.text:  e.target.value,
    // });
    console.log(e)
  };


  render() {
    const { task, tasks,} = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} editText={this.editText} deleteTask = {this.deleteTask} editButton = {this.editButton} saveEditInput={this.saveEditInput} saveEdit = {this.saveEdit}/>
      </div>
    );
  }
}

export default App;