import React from 'react';
import './Column.css';


const Column = (props) => {
    return (
    <React.Fragment>
        <div className="column">
            <h1 className="title">{props.todo.todo1.type}</h1>
            <div class="item">
                <h2 className="item-title">{props.todo.todo1.name}</h2>
            </div>
            <div class="item">
                <h2 className="item-title">{props.todo.todo2.name}</h2>
            </div>
            <div class="item">
                <h2 className="item-title">{props.todo.todo3.name}</h2>
            </div>
        </div>

        <div className="column">
            <h1 className="title">{props.doing.doing1.type}</h1>
            <div class="item">
                <h2 className="item-title">{props.doing.doing1.name}</h2>
            </div>
            <div class="item">
                <h2 className="item-title">{props.doing.doing2.name}</h2>
            </div>
        </div>

        <div className="column">
            <h1 className="title">{props.done.done1.type}</h1>
            <div class="item">
                <h2 className="item-title">{props.done.done1.name}</h2>
            </div>
            <div class="item">
                <h2 className="item-title">{props.done.done2.name}</h2>
            </div>
            <div class="item">
                <h2 className="item-title">{props.done.done3.name}</h2>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Column;
