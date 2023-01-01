import React from 'react';

function GridContainerWrapper(props) {
  return (
    <>
      <div className="newsContainer">
        <div className="newsGrid">
            {props.children}
        </div>
      </div>
    </>
  )
}

export default GridContainerWrapper