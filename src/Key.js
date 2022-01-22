import './Key.css';

function Key(props) {
  return (
    <button className='Key' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Key;
