import styles from "./style";
import { Pagos, Negocios, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonios, Principal } from "./components";
///Import de componentes realizado desde index.js 
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div class={`${styles.boxWidth}`}>
        <Principal />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div class={`${styles.boxWidth}`}>
        <Stats />
        <Negocios />
        <Pagos />
        <CardDeal />
        <Testimonios />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)
export default App