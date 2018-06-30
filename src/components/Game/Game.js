import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export const Game = props => { 

    // console.log(props)
       
    return (        
        <div>
        {/* {console.log(props)}                      */}
              <Col size="xs-4 sm-3">
                <div id={props.id}  onClick={() => {props.handleClick(props.id)}}>
                  <Thumbnail  src={props.image} />
                </div>
              </Col>          
        </div>    
    );
}