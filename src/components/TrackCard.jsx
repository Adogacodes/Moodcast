const TrackCard = ({ track, index, onPlay }) => {

  return (
    <div
      className="track-card"
      style={{ '--i': index }}
      onClick={() => onPlay(track)}
      role="button"
      tabIndex={0}
    >

      {/* Track number */}
      <span className="track-num">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Song info */}
      <div className="track-info">
        <div className="track-name">{track.name}</div>
        <div className="track-artist">{track.artist}</div>
      </div>

      {/* Mood orb — color reflects the detected emotion */}
      <div
        className="mood-orb"
        style={{
          '--i': index,
          background: `radial-gradient(circle at 35% 35%, ${track.moodColor}cc, ${track.moodColor}33)`,
          boxShadow: `0 0 16px ${track.moodColor}44`,
        }}
      />

    </div>
  )
}

export default TrackCard;