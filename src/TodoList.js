import React from 'react';

class TodoList extends React.Component{
    constructor(props)
    {
        super();
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem(){
        this.props.removeItem(this.props.index)
    }
    render()
    {        
        const items = this.props
        return(
            <div style={{color:'black'}}>
                <table>
                <tr>
                <td><li>{items.item}</li></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td><button style={{color:'red'}} onClick={this.removeItem} id="remove-button">
                Remove
                </button></td>
                </tr>
                </table>
            </div>
        )
    }
}

export default TodoList