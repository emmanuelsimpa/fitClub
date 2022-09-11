import { useRef, useState } from 'react';
import styles from '../../styles/Join.module.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JoinPage = () => {
    const form = useRef()
    const [text, setText] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pu0yqpk', 'template_xleqsts', form.current, 'TKTQOJ3i4PuR7BDZq')
          .then(() => {
            toast.success("Your Email has been sent successfully!")
            toast.success("Check your Email")
          }, () => {
              toast.error('Error sending you mail, try again!!!')
          });
    };
    
    return (
        <div className={styles.join} id='join-us'>
            <div className={styles.left_j}>
                <hr/>
                <div>
                    <span className='stroke_text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke_text'>WITH US?</span>
                </div>
            </div>
            <div className={styles.right_j}>
                <form ref={form} className={styles.email_container} onSubmit={sendEmail}>
                    <input name='user_email' placeholder='Enter your Email address' />
                    <button className={`btn ${styles.btn_j}`}>Join Now</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
 
export default JoinPage;