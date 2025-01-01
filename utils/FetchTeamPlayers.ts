export async function getTeamPlayers(id: number): Promise<any> {
  const response = await fetch(
    `https://api-nba-v1.p.rapidapi.com/players/statistics?team=${id}&season=${process.env.season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": process.env.host as string,
        "x-rapidapi-key": process.env.key as string,
      },
    },
  );

  const data = await response.json();
  return data;
}
