import Head from 'next/head'
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth';
import PresentationSection from '../src/components/homeNoAuth/presentationSection';
import styles from '../styles/HomeNoAuth.module.scss';

const HomeNoAuth = () => {
   return (
      <>
         <Head>   
            <title>Onebitflix</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            <meta property="og:title" content="Onebitflix" key="title"/>
            <meta name="descripton" content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"/>
         </Head>
         <main>
            <HeaderNoAuth/>
            <PresentationSection/>
         </main>
      </>
   );
};

export default HomeNoAuth;