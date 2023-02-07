import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <main className={styles.main}>
        <h3>ContactPage</h3>
        <Camera color="red" size={48} />

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
