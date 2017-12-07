import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { style } from 'typestyle';

const root = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
});

const inner = style({
  display: 'block',
  maxWidth: '75%'
});

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className={root}>
        <div className={inner}>
          <h1>Welcome to RareInk!</h1>
          <p>Select a project from the dropdown at the top-left corner.</p>
        </div>
      </div>
    );
  }
}
