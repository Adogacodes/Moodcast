const MoodInput = ({ value, onChange, onSubmit, loading }) => {

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <section className="input-section">

      <label className="input-label" htmlFor="mood-input">
        How are you feeling right now?
      </label>

      <div className="input-wrap">
        <textarea
          id="mood-input"
          className="mood-input"
          placeholder="e.g. I feel nostalgic and a little melancholic tonight..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
        />
        <button
          className="submit-btn"
          onClick={onSubmit}
          disabled={loading || !value.trim()}
        >
          {loading ? 'Tuning...' : 'Find Music'}
        </button>
      </div>

    </section>
  )
}

export default MoodInput;