import { Fragment } from "react";

// Splits a heading into masked words that slide up in sequence when Reveal adds .in.
// The full text stays readable to screen readers and without JS (see globals.css).
export default function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="w" style={{ ["--w" as string]: i }}><span>{w}</span></span>
        </Fragment>
      ))}
    </>
  );
}
