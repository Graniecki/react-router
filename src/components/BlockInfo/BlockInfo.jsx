const BlockInfo = (props) => {
  return (
    <h1>{props.match.params.name}</h1>
  );
};

export default BlockInfo;
