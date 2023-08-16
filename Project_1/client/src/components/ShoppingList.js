import React, {Component} from "react";
import { Container,ListGroup,ListGroupItem, Button } from "reactstrap";
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import {v4 as uuid} from 'uuid'

class ShoppingList extends Component{
    state={
        items:[
            {id:uuid(),name:"Eggs"},
            {id:uuid(),name:"Milk"},
            {id:uuid(),name:"Steak"},
            {id:uuid(),name:"Water"},
        ]
    }

    render(){
        const {items}=this.state;
        return(
            <Container>
                <Button 
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={()=>{
                    const name=prompt("Enter Item: ");
                    if(name){
                        // state => ({}): This is an arrow function that 
                        // takes the current state as its parameter and 
                        // returns a new state object.
                        // items: [...state.items, { id: uuid(), name }]: 
                        // This updates the items property of the state. 
                        // It spreads the existing 
                        // items array (state.items) and adds a new item
                        // at the end. The new item is an object with 
                        // two properties: id and name.
                        this.setState(state=>({
                            items:[...state.items,{id:uuid(),name}]
                        }))
                    }
                }}
                >

                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                      {items.map(({id,name})=>(
                        <CSSTransition key={id} timeout={500} className="fade">
                            <ListGroupItem>
                                <Button  
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={()=>this.setState(state=>({
                                    items:state.items.filter(item=>item.id !== id) 
                                }))}>
                                &times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList