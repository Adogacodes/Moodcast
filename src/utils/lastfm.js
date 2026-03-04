const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

export const fetchTracksByMood = async (moods) => {
  const tag = moods[0].tag;

  const url = `${BASE_URL}?method=tag.gettoptracks&tag=${tag}&api_key=${API_KEY}&format=json&limit=20`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch from Last.fm");
  }

  const data = await response.json();
  const tracks = data?.tracks?.track || [];

  return tracks.slice(0, 12).map((track, index) => ({
    id: `${track.name}-${index}`,
    name: track.name,
    artist: track.artist.name,
    url: track.url,
    moodColor: moods[index % moods.length].color,
  }));
}