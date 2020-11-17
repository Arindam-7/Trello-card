import './Board.css';
import Column from './Components/Column';
import React from 'react';


const Board = () => {
  const tasks = [
    {
      id: 1,
      name: 'Learn about API',
      type: 'todo'
    },
    {
      id: 2,
      name: 'Create a roadmap for learning Java',
      type: 'todo'
    },
    {
      id: 3,
      name: 'Watch Peaky Blinders',
      type: 'todo'
    },
    {
      id: 4,
      name: 'Trello Card Project',
      type: 'doing'
    },
    {
      id: 5,
      name: 'Listen to music',
      type: 'doing'
    },
    {
      id: 6,
      name: 'Practice Touch Typing',
      type: 'done'
    },
    {
      id: 7,
      name: 'Complete Freelance work',
      type: 'done'
    },
    {
      id: 8,
      name: "Transfer money to bank account",
      type: 'done'
    }
  ]

  return (
    <div className="Board">
      <div className="column">
        <h1 className="title"> To Do </h1>
        <div class="item">
          <h2 className="item-title">Do Something</h2>
        </div>
        <div class="item">
          <h2 className="item-title">Do Something(2)</h2>
        </div>
        <div class="item">
          <h2 className="item-title">Do Something(3)</h2>
        </div>
      </div>

      <div className="column">
        <h1 className="title"> Doing </h1>
        <div class="item">
          <h2 className="item-title">Do Something</h2>
        </div>
        <div class="item">
          <h2 className="item-title">Do Something(2)</h2>
        </div>
        <div class="item">
          <h2 className="item-title">Do Something(3)</h2>
        </div>
      </div>

      <div className="column">
        <h1 className="title"> Done </h1>
        <div class="item">
          <h2 className="item-title">Do Something</h2>
        </div>
        <div class="item">
          <h2 className="item-title">Do Something(2)</h2>
        </div>
        <div class="item">
          <h2 className="item-title">Do Something(3)</h2>
        </div>
      </div>
    </div>
  );
}

export default Board;
