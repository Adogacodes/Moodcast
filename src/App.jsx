import { useState } from "react";
import Header from "./components/Header";
import MoodInput from "./components/MoodInput";
import MoodTags from "./components/MoodTags";
import TrackCard from "./components/TrackCard";
import NowPlaying from "./components/NowPlaying";
import { detectMoods } from "./utils/moodEngine";
import { fetchTracksByMood } from './utils/lastfm'




const App = () => {
  const [moodText, setMoodText] = useState('');
  const [detectedMoods, setDetectedMoods] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null)

   const handleSubmit = async() => {
    if (!moodText.trim()) return

    setLoading(true)
    setError(null)
    setTracks([])
    setNowPlaying(null)

    const moods = detectMoods(moodText)
    setDetectedMoods(moods)

    try {
      const results = await fetchTracksByMood(moods)
      setTracks(results)
    } catch (err) {
      setError('Could not load tracks. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <Header />
      <MoodInput 
        value={moodText}
        onChange={setMoodText}
        onSubmit={handleSubmit}
        loading={loading}
      />
      <MoodTags moods={detectedMoods} />
       {/* Loading state */}
      {loading && (
        <div className="loading-wrap">
          <div className="loading-orb" />
          <p className="loading-text">Reading your frequency...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="message-box">{error}</div>
      )}

      {/* Tracks */}
      {!loading && tracks.length > 0 && (
        <div className="tracks-grid">
          {tracks.map((track, i) => (
            <TrackCard
              key={track.id}
              track={track}
              index={i}
              onPlay={setNowPlaying}
            />
          ))}
        </div>
      )}
      <NowPlaying track={nowPlaying} />
    </div>
     
      
  )}


export default App