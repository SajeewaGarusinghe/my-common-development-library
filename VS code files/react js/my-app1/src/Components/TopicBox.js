import React from 'react';

const TopicBox = (props) => {


  return (
    <div className="TopicBox">
       
        <p style={{color:"green",fontSize:"12px"}}> My favorite Food is{props.food}</p>
        {props.children}
    </div>
  )
}

export default TopicBox;