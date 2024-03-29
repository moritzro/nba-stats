export async function getTeamStanding(id: number): Promise<any> {
  const response = await fetch(
    `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&team=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": process.env.host as string,
        "x-rapidapi-key": process.env.key as string,
      },
    }
  );

  const data = await response.json();
  return data;
}
