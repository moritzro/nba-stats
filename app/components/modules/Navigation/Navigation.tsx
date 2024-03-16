"use client";

import { FC, useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.scss";

type linkObject = {
  label: string;
  link: string;
  icon: string;
};

type NavigationProps = {
  links: linkObject[];
};

const Navigation: FC<NavigationProps> = ({ links }) => {
  const [state, setState] = useState({ color: "transparent" });
  const [color, setColor] = useState({ color: "#000" });
  const ref: any = useRef(null);
  const navigatioHeight = ref?.current?.clientHeight;

  const listenScrollEvent = () => {
    if (window.scrollY > navigatioHeight) {
      setState({ color: "#0f0f0f" });
      setColor({ color: "#fff" });
    } else {
      setState({ color: "transparent" });
      setColor({ color: "#000" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div
      className={styles.navWrapper}
      ref={ref}
      style={{ backgroundColor: state.color, color: color.color }}
    >
      <Link className={styles.navLogo} href="../">
        NBA Stats
      </Link>
      <nav className={styles.navMain}>
        <ul className={styles.navList}>
          {links.length > 0 &&
            links.map((link: linkObject, index: number) => (
              <li className={styles.navListItem} key={index}>
                <Link href={link.link} className={styles.link}>
                  {link.label}
                  <Image
                    className={styles.navIcon}
                    src={link.icon}
                    alt="Logo of website"
                    height={100}
                    width={100}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
