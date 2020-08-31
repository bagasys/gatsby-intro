import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const about = () => {
  return (
    <Fragment>
      <h1>About Me</h1>
      <p>This is my personal website.</p>
      <Link to="/">&larr; back to home</Link>
    </Fragment>
  );
};

export default about;
