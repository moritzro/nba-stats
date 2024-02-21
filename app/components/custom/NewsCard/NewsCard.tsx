import { FC } from "react";
import { news } from "@/types/news";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./NewsCard.module.scss";

const NewsCard: FC<news> = ({ link, image, title }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={link} className={styles.image} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <Link href={link} className={styles.link}>
          Read more
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
