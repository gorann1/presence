import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <main className={styles.main}>
        <h3>ContactPage</h3>
        <h1>
          <Balancer>My Awesome Title</Balancer>
        </h1>

        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
        />
      </main>
    </>
  );
}
