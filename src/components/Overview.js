// Overview.js

import React from "react";

const Overview = (props) => {
  const { tasks , deleteTask } = props;

  return (
    <div>
      {tasks.map((task) => {
        return (
        <div key={task.id}>{tasks.indexOf(task) + 1} {task.text} 
          <button type="button" onClick={() => deleteTask(tasks.indexOf(task))}>
            Delete
          </button>
        </div>
        );
      })}
    </div>
  );
};

export default Overview;