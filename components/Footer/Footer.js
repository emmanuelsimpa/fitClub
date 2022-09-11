import styles from '../../styles/Footer.module.css';
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import Image from 'next/image';


const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <hr/>
            <div className={styles.footer}>
                <div className={styles.social_links}>
                    <div className={styles.media_link}><Image src={Github} alt=''/></div>
                    <div className={styles.media_link}><Image src={Instagram} alt=''/></div>
                    <div className={styles.media_link}><Image src={Linkedin} alt=''/></div>
                </div>
                <div className={styles.footer_logo}>
                   <div className={styles.logo_link}><Image src={Logo} alt=''/></div> 
                </div>
            </div>
            <div className={`blur ${styles.footer_blur_l}`}></div>
            <div className={`blur ${styles.footer_blur_r}`}></div>
        </div>
    );
}
 
export default Footer;