import React from 'react';

const Header = (props) => (
  <div>
    <h1>header tag {props.id} and {props.name}</h1>
  </div>
);

Header.defaultProps={
id:345,
name:'sajeewa',

}

export default Header;
