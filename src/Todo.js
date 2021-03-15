import React from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';
import NoItems from './NoItems';

class Todo extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            Items : [],
            addItem : false
        }
        this.addToList = this.addToList.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    addToList(item){
        if (item.length > 0)
        {
            this.setState({
                Items : this.state.Items.concat([item])
            })
        }
    }
    removeItem(index){
        (this.state.Items).splice(index,1)
        this.setState({
            Items : this.state.Items
        })
    }
    handleClick(){
        this.setState({
            addItem : true
        })
    }
    render(){
        return(
            <div id="container" align='center' style={{backgroundColor:'silver'}}>
                <h1 style={{color:'green'}}>TODO List App</h1>
                <div>
                    <AddItem addItem = {this.state.addItem} addToList={this.addToList} />
                    { (this.state.Items).length  === 0 ? <NoItems addItem = {this.handleClick} /> :  
                    <ul>
                        {
                            this.state.Items.map((item,index) => <TodoList removeItem={this.removeItem} index={index} key={index} item={item} />)
                        }
                    </ul>}
                </div>
            </div>
        )
    }
}

export default Todo;