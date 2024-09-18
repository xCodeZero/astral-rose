import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerLink}>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/terms">Privacy Policy</Link>
          <Link href="/terms">Refund Policy</Link>
        </div>

        <div className={styles.footerCopyright}>
          <p>Copyright © 2024, Astral Rose Online.</p>
          <p>
            Astral Rose Online is a trademark owned by ASTRAL GAMES Corp, all
            rights reserved. All trademakers shown in this website belongs to
            their respective owners.
          </p>
        </div>
      </div>

      <div className={styles.footerLogos}>
        <img className={styles.footerGame} src="/images/astral-rose-logo.png" />
        <img className={styles.footerLunar} src="/images/nav_logo2.png" />
      </div>
    </footer>
  );
};

export default Footer;
