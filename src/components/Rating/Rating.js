import React from 'react';

function Rating({stars}) {
    return (
      <React.Fragment>
        {"*".repeat(stars)}
      </React.Fragment>
    );
  }
  
  export default Rating;
  