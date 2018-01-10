import React from 'react';

export default function Header(props) {
  return (
    <div className="jumbotron col-sm-12">
      <h3 style={{ textTransform: 'capitalize' }}>
        Hello, {props.name || 'visitor'}
      </h3>
    </div>
  );
}
