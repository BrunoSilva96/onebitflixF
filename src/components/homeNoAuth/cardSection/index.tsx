import { Container } from 'reactstrap';
import styles from './styles.module.scss';

const CardsSecton = function () {
   return (
      <>
         <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
         <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
            <div className={styles.card1}>
               <p className={styles.cardTitle}>FRONT-END</p>
               <p className={styles.cardDescription}>
                  Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
                  Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, 
                  espiritis santis. Cevadis im ampola pa arma uma pindureta.
               </p>
            </div>
            <div className={styles.card2}>
               <p className={styles.cardTitle}>BACK-END</p>
               <p className={styles.cardDescription}>
                  Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
                  Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, 
                  espiritis santis. Cevadis im ampola pa arma uma pindureta.
               </p>
            </div>
            <div className={styles.card3}>
               <p className={styles.cardTitle}>MOBILE</p>
               <p className={styles.cardDescription}>
                  Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
                  Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, 
                  espiritis santis. Cevadis im ampola pa arma uma pindureta.
               </p>
            </div>
            <div className={styles.card4}>
               <p className={styles.cardTitle}>GIT E GITHUB</p>
               <p className={styles.cardDescription}>
                  Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
                  Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, 
                  espiritis santis. Cevadis im ampola pa arma uma pindureta.
               </p>
            </div>
            <div className={styles.card5}>
               <p className={styles.cardTitle}>PROJETOS</p>
               <p className={styles.cardDescription}>
                  Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
                  Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, 
                  espiritis santis. Cevadis im ampola pa arma uma pindureta.
               </p>
            </div>
            <div className={styles.card6}>
               <p className={styles.cardTitle}>CARREIRA</p>
               <p className={styles.cardDescription}>
                  Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
                  Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, 
                  espiritis santis. Cevadis im ampola pa arma uma pindureta.
               </p>
            </div>
         </Container>
      </>
   );
}

export default CardsSecton;