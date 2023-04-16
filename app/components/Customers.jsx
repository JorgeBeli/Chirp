import CustomerIndividual from "./CustomersIndividual";
import styles from './Customers.module.css'

export default function Customers () {
    return(
        <section className={styles.customersWraper}>
            <h2 className={styles.customersTitle}>What our customers say</h2>
            <section className={styles.customersContainer}>
                <CustomerIndividual name='Sara May' nickname='@sara_may' text="I just tried out @chrip and it's amazing, love all the analytics I can see." likes='2' date='March 2, 2021'></CustomerIndividual>
                <CustomerIndividual name='Jack Scott' nickname='@jackscott_' text='I initially started using Chrip to support the co-founder as I personally knew him, but after tried it out a few weeks, I genuinely say this changed my Twitter game.' likes='32' date='March 2, 2021'></CustomerIndividual>
                <CustomerIndividual name='Jessica May' nickname='@jmay98' text='Absolutely love everything about Chrip, from the desing to how everything work smoothly.' likes='221' date='March 2, 2021'></CustomerIndividual>
            </section>
        </section>
    )
}