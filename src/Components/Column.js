import React from 'react';
import './Column.css';


const Column = () => {
    return (
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
    );
}

export default Column;
