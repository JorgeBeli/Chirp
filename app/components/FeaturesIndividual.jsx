import styles from './FeaturesIndividual.module.css'

export default function FeaturesIndividual ( {emoji, title, text} ) {
    return(
        <section className={styles.featureContainer}>
            <p className={styles.emoji}>{emoji}</p>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    )
}