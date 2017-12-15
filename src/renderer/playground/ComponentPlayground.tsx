import * as React from 'react';

import { Button } from '../components/Button';

const ComponentPlayground: React.SFC<{}> = () => (
  <React.Fragment>
    <h2>Button</h2>
    <Button kind="primary">Push Me</Button>
  </React.Fragment>
);

export default ComponentPlayground;
