import PropTypes from 'prop-types';
import Button from './Button';

// const onClick=()=>{
//     console.log('clicked');
//     }

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <Button onClick={onClick} color='green' text='Add'/> */}
      <Button
        onClick={onAdd}
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task tracker',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

//CSS in JS
{
  /* <h1 style={{ color: 'black', backgroundColor: 'green' }}>{title}</h1>
<p style={pStyle}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eaque
  dolores magnam, rerum, vitae sint, ea eius minima corrupti recusandae
  temporibus fugiat nobis possimus doloremque adipisci et natus illo
  officiis?
</p>
const pStyle = { color: 'brown' }; */
}
