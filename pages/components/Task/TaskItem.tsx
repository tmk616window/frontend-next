import React, { Component } from "react";
import {TaskList} from '../../tasks'

interface TaskItemProps {
    taskItem: string
}


export const TaskItem: React.FC<TaskItemProps> = ({taskItem}) => {
  
    return (
            <li className="list-group-item list-group-item-primary">
                {taskItem}
            </li>
    );
  }

