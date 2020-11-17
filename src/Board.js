import './Board.css';
import Column from './Components/Column';
import React from 'react';


const Board = () => {
  const todo = {
    todo1: {
      id: 1,
      name: 'Learn about API',
      type: 'To Do'
    },
    todo2: {
      id: 2,
      name: 'Create a roadmap for learning Java',
      type: 'To Do'
    },
    todo3: {
      id: 3,
      name: 'Watch Peaky Blinders',
      type: 'To Do'
    }
  }

  const doing = {
    doing1: {
      id: 4,
      name: 'Trello Card Project',
      type: 'Doing'
    },
    doing2: {
      id: 5,
      name: 'Listen to music',
      type: 'Doing'
    }
  }

  const done = {
    done1: {
      id: 6,
      name: 'Practice Touch Typing',
      type: 'Done',
    },
    done2: {
      id: 7,
      name: 'Complete Freelance work',
      type: 'Done',
    },
    done3: {
      id: 8,
      name: "Transfer money to bank account",
      type: 'Done',
    },
  }

  return (
    <div className="Board">
      <Column todo={todo} doing={doing} done={done} />
    </div>
  );
}

export default Board;
