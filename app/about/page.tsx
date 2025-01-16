import Head from 'next/head'

import { Metadata } from "next";
import AboutContent from '@/components/About/AboutContent';

export const metadata: Metadata = {
  title: 'Who we are',
}

const About = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Award winning Event Company in Kenya" />
        <meta name="keywords" content="Events, Kenya, Companies, Nairobi, Corporate, Event" />
      </Head>

      <AboutContent />
    </>
  );
};

export default About;
