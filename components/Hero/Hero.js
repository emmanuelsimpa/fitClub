import styles from '../../styles/Hero.module.css'
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import Image from 'next/image';
import { motion } from "framer-motion"
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    let mobile = global.innerWidth <= 769 ? true : false;

    return (
        <div className={styles.hero} id='home'>
            <div className={`blur ${styles.hero_blur}`}></div>
            <div className={styles.left_h}>
                <Header/>
                {/* The Best AD */}
                <div className={styles.the_best_ad}>
                    <motion.div initial={{left: mobile ? '178px':'238px'}} whileInView={{left: '8px'}} 
                    transition={{...transition, type: 'tween'}}></motion.div>
                    <span>The best fitness club in the town</span>
                </div>
                {/* The Hero Heading */}
                <div className={styles.hero_text}>
                    <div>
                        <span className='stroke_text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* Text Hero Figures */}
                <div className={styles.figures}>
                    <div>
                        <span><NumberCounter end={140} start={100} delay={3} preFix='+'/></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={900} delay={3} preFix='+'/></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay={3} preFix='+'/></span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* Hero Buttons */}
                <div className={styles.hero_buttons}>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className={styles.right_h}>
                <button className='btn'>Join Now</button>

                <motion.div className={styles.heart_rate} transition={transition}
                initial={{right: '-1rem'}} whileInView={{right: '4rem'}}>
                    <div><Image src={Heart} alt='heart' width={32}/></div>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* Hero Images */}
                <div className={styles.hero_image}><Image src={hero_image} alt='hero image'/></div>
                <div className={styles.hero_image_back} transition={transition}
                initial={{right: '11rem'}} whileInView={{right: '20rem'}} key={hero_image_back}
                src={hero_image_back}>
                    <Image src={hero_image_back} alt='hero image back'/>
                </div>
                {/* Calories */}
                <motion.div className={styles.calories} transition={transition}
                initial={{right: '37rem'}} whileInView={{right: '28rem'}}>
                    <div className={styles.calories_image}><Image src={calories} alt='calories image'/></div>
                    <div>
                        <span>Calories Burned</span>
                        <span>220kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default Hero;