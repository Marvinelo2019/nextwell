// Renders a price like "Q650" with each digit on a rolling strip.
// The strip rests on the real digit; the entrance in globals.css rolls it from 0.
export default function Odometer({ value }: { value: string }) {
  return (
    <span className="odo" role="img" aria-label={value}>
      {value.split("").map((ch, i) =>
        /\d/.test(ch) ? (
          <span className="odo-d" key={i} aria-hidden="true" style={{ ["--n" as string]: 10 + Number(ch), ["--k" as string]: i }}>
            <span className="odo-s">
              {Array.from({ length: 11 + Number(ch) }, (_, j) => <span key={j}>{j % 10}</span>)}
            </span>
          </span>
        ) : (
          <span key={i} aria-hidden="true">{ch}</span>
        ),
      )}
    </span>
  );
}
