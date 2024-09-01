/* eslint-disable react/prop-types */
export default function Button({ className, text, on_Click }) {
  return (
    <>
      <button className={className} onClick={on_Click}>
        {text}
      </button>
    </>
  );
}
