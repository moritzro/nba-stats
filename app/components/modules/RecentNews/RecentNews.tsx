import { use } from "react";
import { GETNews } from "@/utils/FetchNews";
import { news } from "@/types/news";
import NewsCard from "../../custom/NewsCard/NewsCard";
import styles from "./RecentNews.module.scss";

const RecentNews = () => {
  const data = use(
    GETNews(
      "https://tank01-fantasy-stats.p.rapidapi.com/getNBANews?recentNews=true&maxItems=30"
    )
  );
  console.log(data);
  return (
    <section className={styles.recentNews}>
      <h2 className={styles.headline}>Recent player news</h2>
      <div className={styles.recentNewsCardWrapper}>
        {data.body.map((item: news, index: number) => (
          <NewsCard
            link={item.link}
            title={item.title}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentNews;
