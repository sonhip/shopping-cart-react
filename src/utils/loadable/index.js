import "../style.scss";
const Loading = () => (
  <div className="loadable">
    <div className="scaling-squares-spinner">
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
    </div>
  </div>
);

export default Loading;
