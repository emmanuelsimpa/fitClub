import styles from '../../styles/Testimonials.module.css';
import { testimonialsData } from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"


const Testimonials = () => {
    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0)
    const tlength = testimonialsData.length
    const leftClick = () => { selected === 0 ? setSelected(tlength - 1) : setSelected((prev) => prev - 1)}
    const rightClick = () => { selected === tlength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)}
    
    return (
        <div className={styles.testimonials} id='testimonials'>
            <div className={styles.left_t}>
                <span>Testimonials</span>
                <span className='stroke_text'>What they</span>
                <span>say about us</span>
                <motion.span key={selected}
                initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}}
                transition={transition}>{testimonialsData[selected].review}</motion.span>
                <span>
                    <span className={styles.selectedName}>{testimonialsData[selected].name }</span>
                    {` - ${testimonialsData[selected].status}`}
                </span>
            </div>
            <div className={styles.right_t}>
                <motion.div initial={{ opacity: 0, x: -100}}
                transition={{...transition, duration: 2}} whileInView={{ opacity: 1, x:0}}></motion.div>
                <motion.div initial={{ opacity: 0, x: 100}}
                transition={{...transition, duration: 2}} whileInView={{ opacity: 1, x:0}}></motion.div>
                <motion.div className={styles.selectedImage} key={selected}
                initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}}
                transition={transition}><Image src={testimonialsData[selected].image} alt=''/></motion.div>
                <div className={styles.arrow}>
                    <div className={styles.leftArrow}>
                        <Image src={leftArrow} onClick={leftClick} alt=''/>
                    </div>
                    <div className={styles.leftArrow}>
                        <Image src={rightArrow} onClick={rightClick} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Testimonials;