import * as React from 'react';

import { Button } from '../components/Button';

const ComponentPlayground: React.SFC<{}> = () => (
  <React.Fragment>
    <div><h1>Component Playground</h1></div>
    <div>
      <h2>Button</h2>
      <Button kind="primary">Push Me</Button>
    </div>
  </React.Fragment>
);

export default ComponentPlayground;
