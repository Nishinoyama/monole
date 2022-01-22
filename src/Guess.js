import './Guess.css';

function Guess(props) {
  return (
    <div className={props.answering}>
      {props.value}
    </div>
  );
}

export default Guess;
