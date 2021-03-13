const Another = (props) => {
  const blocks = [1, 2, 3, 4];
  const blockStyle = {
    width: '200px',
    height: '200px',
    margin: '10px auto',
    border: '2px solid gray',
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <h1>Another</h1>
      {blocks.map(block => {
        return (
          <div
            key={block}
            style={blockStyle}
            onClick={() => props.history.push('/another/' + block)}
          >
            <span>{block} block</span>
          </div>
        );
      })}
    </>
  );
};

export default Another;
