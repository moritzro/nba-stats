export async function GETNews(url: string) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": process.env.newsHost as string,
      "x-rapidapi-key": process.env.key as string,
    },
  });
  const data = await res.json();

  return data;
}
