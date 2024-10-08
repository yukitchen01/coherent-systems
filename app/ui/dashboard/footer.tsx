import styles from './footer.module.css'; // Import your CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} 株式会社コヒーレントシステムズ. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        {/* <p>お問い合わせ: info@biit.co.jp</p> */}
      </div>
    </footer>
  );
};

export default Footer;