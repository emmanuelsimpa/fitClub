import styles from '../../styles/Plans.module.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'
import Image from 'next/image';

const Plans = () => {
    return (
        <div className={styles.plans_container} id='plans'>
            <div className={`blur ${styles.plan_blur_l}`}></div>
            <div className={`blur ${styles.plan_blur_r}`}></div>
            <div className={styles.plans_header}>
                <span className='stroke_text'>READY TO START</span>
                <span> YOUR JOURNEY </span>
                <span className='stroke_text'>NOW WITH US</span>
            </div>
            {/* PLANS CARD */}
            <div className={styles.plans}>
                {plansData.map((item, i) => (
                    <div className={styles.plan} key={i}>
                        {item.icon}
                        <span className={styles.plan_title}>{item.name}</span>
                        <span className={styles.plan_price}>$ {item.price}</span>
                        <div className={styles.features}>
                            {item.features.map((item, i) => (
                                <div className={styles.feature} key={i}>
                                    <div className={styles.tick}><Image src={whiteTick} alt=''/></div>
                                    <span key={i}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className={styles.see_more}>See More Benefit &#10143;</span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Plans;