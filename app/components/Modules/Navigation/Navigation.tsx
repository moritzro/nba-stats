import { FC } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { link } from "fs";

interface NavigationProps {
  navLinkName: Array<string>;
  navLink: Array<string>;
}

const Navigation: FC<NavigationProps> = ({ navLinkName, navLink }) => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navLogo}>NBA Stats</div>
      <nav>
        <ul>
          {navLink.length > 0 &&
            navLink.map((link, index) => (
              <li>
                <Link href={link}>{navLinkName[index]}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
