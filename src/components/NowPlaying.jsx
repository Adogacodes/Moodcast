const NowPlaying = ({ track }) => {

  // If no track is selected, render nothing
  if (!track) return null

  function handleClick() {
    window.open(track.url, '_blank', 'noopener noreferrer')
  }

  return (
    <div className="now-playing" onClick={handleClick}>

      {/* Animated green dot */}
      <div className="now-playing-dot" />

      {/* Label */}
      <span className="now-playing-label">Your Pick</span>

      {/* Mood orb */}
      <div
        className="now-playing-orb"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${track.moodColor}cc, ${track.moodColor}33)`,
          boxShadow: `0 0 12px ${track.moodColor}66`,
        }}
      />

      {/* Track details */}
      <div className="now-playing-info">
        <span className="now-playing-track">{track.name}</span>
        <span className="now-playing-artist">{track.artist}</span>
      </div>

      {/* Open hint */}
      <span className="now-playing-hint">↗ Open</span>

    </div>
  )
}

export default NowPlaying