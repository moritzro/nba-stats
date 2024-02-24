import { FC } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

interface linkObject {
  label: string;
  link: string;
  icon: string;
}

interface NavigationProps {
  links: linkObject[];
}

const Navigation: FC<NavigationProps> = ({ links }) => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navLogo}>NBA Stats</div>
      <nav className={styles.navMain}>
        <ul className={styles.navList}>
          {links.length > 0 &&
            links.map((link: linkObject, index: number) => (
              <li className={styles.navListItem} key={index}>
                <Link href={link.link}>
                  {link.label} <img className={styles.navIcon} src={link.icon} />
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;