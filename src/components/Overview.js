// Overview.js

import React from "react";

// const Overview = (props) => {
//   const { tasks , deleteTask } = props;

//   // const test = () => {
//   //   {tasks.forEach((task) => {
//   //   if(!task.editable){
//   // }

//   return (
//     <div>
//       {tasks.map((task) => {
//         return (
//         <div key={task.id}>{tasks.indexOf(task) + 1} {task.text} 
//           <button type="button" onClick={() => deleteTask(task.id)}>
//             Delete
//           </button>
//           <button type="button" onClick={() => deleteTask(task.id)}>
//             Edit
//           </button>
//         </div>
//         );
//       })}
//     </div>
//   );
// };

const Overview = (props) => {
  const { tasks , deleteTask , editText, editButton , saveEditInput, saveEdit} = props;

  // const test = () => {
  //   {tasks.forEach((task) => {
  //   if(!task.editable){
  // }

//   <form onSubmit={this.onSubmitTask}>
//   <label htmlFor="taskInput">Enter task</label>
//   <input
//     onChange={this.handleChange}
//     value={task.text}
//     type="text"
//     id="taskInput"
//   />
//   <button type="submit">
//     Add Task
//   </button>
// </form>



  // const editTrial = (addedValue,oldValue) =>{
  //   console.log(addedValue + oldValue)
  //   return oldValue+addedValue
  // }

  return (
    <div>
      {tasks.map((task) => {
        if(task.editable){
          return (       
            <div key={task.id}>
              <form onSubmit={(e , ) => saveEdit(e)}>
                <input
                  // onChange={e => saveEditInput(e.target.value)}
                  value={editText}
                  type="text"
                  id={task.id}
                />
                <button type="submit" >
                  Save
                </button>
              </form>  
              <button type="button" onClick={() => deleteTask(task.id,task.text)}>
                Delete
              </button>
            </div>
          )
        }else{
          return (
            <div key={task.id}>
              {tasks.indexOf(task) + 1} {task.text} 
              <button type="button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
              <button type="button" onClick={() => editButton(task.id)}>
                Edit
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};


export default Overview;