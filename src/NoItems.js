import React from 'react';

const NoItems = (props) => {
    const noItems = [];
    return(
        <div id="no-items">
            <button onClick={props.addItem}>
                {noItems}
            </button>
        </div>
    )
}

export default NoItems