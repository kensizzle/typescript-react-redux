/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';

const readme = require('../../README.md');

const ReadmeContent = styled.div`
  a {
    display: none;
  }
`;

const AboutPage = () => (
  <div>
    <ReadmeContent dangerouslySetInnerHTML={{ __html: readme }} />
    <p>
      <a
        href="https://github.com/drewschrauf/typescript-react-redux"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </p>
  </div>
);
export default AboutPage;