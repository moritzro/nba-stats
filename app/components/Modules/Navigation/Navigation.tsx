import { FC } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

interface linkObject {
  label: string;
  link: any;
}

interface NavigationProps {
  links: linkObject[];
}

const Navigation: FC<NavigationProps> = ({ links }) => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navLogo}>NBA Stats</div>
      <nav>
        <ul>
          {links.length > 0 &&
            links.map((link: linkObject, index: number) => (
              <li key={index}>
                <Link href={link.link}>{link.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
