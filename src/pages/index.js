import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt='Dog running on water at the beach'
        src='../images/oscar-sutton-yihlaRCCvd4-unsplash.jpg'
      />
    </Layout>
  );
};

export default IndexPage;
