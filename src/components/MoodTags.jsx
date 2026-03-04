const MoodTags = ({ moods }) => {
  if (!moods.length) return null

  return (
    <div className="mood-tags">
      <span className="mood-tags-label">Detected vibes —</span>
      {moods.map((mood) => (
        <span
          key={mood.tag}
          className="mood-tag"
          style={{
            color: mood.color,
            borderColor: mood.color,
            backgroundColor: `${mood.color}15`,
          }}
        >
          {mood.label}
        </span>
      ))}
    </div>
  )
}

export default MoodTags