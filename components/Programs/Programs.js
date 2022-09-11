import styles from '../../styles/Programs.module.css'
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
import Image from 'next/image';

const Programs = () => {
    return (
        <div className={styles.programs} id="programs">
            {/* Header */}
            <div className={styles.programs_header}>
                <span className='stroke_text'>Explore Our</span>
                <span>Programs</span>
                <span className='stroke_text'>To shape you</span>
            </div>
            {/* Programs Card */}
            <div className={styles.programs_categories}>
                {programsData.map((items) => (
                    <div className={styles.categories} key={items.heading}>
                        {items.image}
                        <span>{items.heading}</span>
                        <span>{items.details}</span>
                        <div className={styles.join_now}>
                            <span>Join Now</span>
                            <div className={styles.rightArrow}><Image src={RightArrow}/></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Programs;
