export async function GET(url: string) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": process.env.host as string,
      "x-rapidapi-key": process.env.key as string,
    },
  });
  const data = await res.json();

  return data;
}
