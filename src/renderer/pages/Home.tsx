import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
// import { Editor, EditorState } from 'draft-js';

import { PageWrapper } from '../components/PageWrapper';

const Inner = styled.div`
  display: block;
  max-width: 75%;
`;

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <PageWrapper centered>
        <Inner>
          <h1>Welcome to RareInk!</h1>
          <p>Select a project from the dropdown at the top-left corner.</p>
        </Inner>
      </PageWrapper>
    );
  }
}
