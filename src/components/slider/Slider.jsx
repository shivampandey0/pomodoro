export const Slider = ({ min, max, title, value, onChange }) => {
  const options = [...Array(6)].map((_, i) => min * (i + 1));
  return (
    <div className="slider-container my-8">
      <label className="h3">
        {title}
        <input
          type="range"
          min={min}
          value={value}
          max={max}
          step={min}
          onChange={onChange}
          aria-label="input-range-slider"
          list={`tickmarks-${min}`}
          className="slider"
        />
      </label>
      <datalist
        id={`tickmarks-${min}`}
        className="datalist flex-row justify-sb txt-sm"
      >
        {options.map((num) => (
          <option
            className="txt-sm"
            key={num}
            value={num}
            label={`${num} min`}
          />
        ))}
      </datalist>
    </div>
  );
};
