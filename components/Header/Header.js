import Image from 'next/image';
import styles from '../../styles/Header.module.css';
import Logo from '../../assets/logo.png'
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <div className={styles.header}>
            <Image src={Logo} alt='logo' className={styles.logo} height={24} width={160}/>
            <ul className={styles.header_menu}>
                <li><Link to='home' spy={true} smooth={true} activeClass='active'>Home</Link></li>
                <li><Link to='programs' spy={true} smooth={true}>Programs</Link></li>
                <li><Link to='reasons' spy={true} smooth={true}>Why us</Link></li>
                <li><Link to='plans' spy={true} smooth={true}>Plans</Link></li>
                <li><Link to='testimonials' spy={true} smooth={true}>Testimonials</Link></li>
            </ul>
        </div>
    );
}
 
export default Header;