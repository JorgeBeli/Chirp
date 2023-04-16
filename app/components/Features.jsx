import styles from './Features.module.css'
import FeaturesIndividual from "./FeaturesIndividual";

export default function Features () {
    return(
        <section>
            <h2  className={styles.featuresTitle}>Features that help you Tweet smarter.</h2>
            <section className={styles.featuresWraper}>
                <FeaturesIndividual emoji='📈' title='Analytics' text='We constantly monitor your audience as it grows -- so you can Tweet when your followers are more likely to be online and ready to engage with your content.'></FeaturesIndividual>
                <FeaturesIndividual emoji='🤓' title='Smart Analyzer' text="Chrip automatically recognize your followers' most active times and automatically send you notifications if you're missing out on an opportunity."></FeaturesIndividual>
                <FeaturesIndividual emoji='🗞' title='Scheduled Your Tweets' text='Quality tweets drives tons of engagement. With Chrip, you can write tweets in an advance and schedule them when your audience is most likely to read.'></FeaturesIndividual>
                <FeaturesIndividual emoji='☀︎' title='Dark Mode' text='Friendly on the eyes, no matter what time you write your Tweets. All color are chosen to make sure your eyes are at ease at all time.'></FeaturesIndividual>
            </section>
        </section>
    )
}