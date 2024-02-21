export async function getNbaGames(date: string, season: string): Promise<any> {
  const response = await fetch(
    `https://api-nba-v1.p.rapidapi.com/games?date=${date}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": process.env.host as string,
        "x-rapidapi-key": process.env.key as string,
      },
    }
  );

  const data = await response.json();

  if (data.response.length === 0) {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    return getNbaGames(nextDate.toISOString().slice(0, 10), season);
  } else {
    return data;
  }
}
