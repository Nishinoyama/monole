import './Share.css';

function Share(props) {
  return (
    <div id="ShareBox">
      <p>
        You've beaten it!
      </p>
      <button className="Share" onClick={() => props.onClick()}>
        Share
      </button>
    </div>
  );
}

export default Share;
