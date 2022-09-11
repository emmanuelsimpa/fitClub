import styles from '../../styles/Reasons.module.css';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import Image from 'next/image';


const Reasons = () => {
    return (
        <div className={styles.reason} id='reasons'>
            <div className={styles.left_r}>
                <div className={styles.image1}><Image src={image1} alt='image'/></div>
                <div className={styles.image2}><Image src={image2} alt='image'/></div>
                <div className={styles.image3}><Image src={image3} alt='image'/></div>
                <div className={styles.image4}><Image src={image4} alt='image'/></div>
            </div>
            <div className={styles.right_r}>
                <span>some reasons</span>
                <div>
                    <span className='stroke_text'>why </span>
                    <span>choose us?</span>
                </div>
                <div className={styles.details_r}>
                    <div>
                        <div className={styles.tick}><Image src={tick} alt=''/></div>
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                    <div className={styles.tick}><Image src={tick} alt=''/></div>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                    <div className={styles.tick}><Image src={tick} alt=''/></div>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                    <div className={styles.tick}><Image src={tick} alt=''/></div>
                        <span>RELIABLE PARTNERS </span>
                    </div>
                </div>
                <span className={styles.partner}>OUR PARTNERS</span>
                <div className={styles.partner_image}>
                    <div className={styles.partner_logo}><Image src={nb} alt=''/></div>
                    <div className={styles.partner_logo}><Image src={adidas} alt=''/></div>
                    <div className={styles.partner_logo}><Image src={nike} alt=''/></div>
                </div>
            </div>
        </div>
    );
}
 
export default Reasons;