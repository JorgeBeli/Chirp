import Customers from "./components/Customers";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import styles from './Page.module.css'

export default function Home () {
    return(
        <section>
            <div className={styles.firstPart}>
                <Navbar></Navbar>
                <Hero></Hero>
            </div>
            <Features></Features>
            <section className={styles.customersPart}>
                <Customers></Customers>
            </section>
            <Plan></Plan>
            <Footer></Footer>
        </section>
    )
}