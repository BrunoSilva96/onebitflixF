import Head from 'next/head'
import CardsSecton from '../src/components/homeNoAuth/cardSection';
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
            <div className={styles.sectionBackground}>
               <HeaderNoAuth/>
               <PresentationSection/>
            </div>
            <CardsSecton/>
         </main>
      </>
   );
};

export default HomeNoAuth;