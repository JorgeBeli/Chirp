import styles from './Footer.module.css'

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <div className={styles.logo}>Chirp.</div>
            <div className={styles.sections}>
                <svg className={styles.footerTwitter} width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 2.309C24.117 2.701 23.168 2.965 22.172 3.084C23.189 2.475 23.97 1.51 24.337 0.36C23.386 0.924 22.332 1.334 21.21 1.555C20.313 0.598 19.032 0 17.616 0C14.437 0 12.101 2.966 12.819 6.045C8.728 5.84 5.1 3.88 2.671 0.901C1.381 3.114 2.002 6.009 4.194 7.475C3.388 7.449 2.628 7.228 1.965 6.859C1.911 9.14 3.546 11.274 5.914 11.749C5.221 11.937 4.462 11.981 3.69 11.833C4.316 13.789 6.134 15.212 8.29 15.252C6.22 16.875 3.612 17.6 1 17.292C3.179 18.689 5.768 19.504 8.548 19.504C17.69 19.504 22.855 11.783 22.543 4.858C23.505 4.163 24.34 3.296 25 2.309Z" fill="black"/>
                </svg>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
        </footer>
    )
}