//
export default function Page({ params: { lang } }) {
  const text = `Hello Lang page! ${lang}`;
  return <div>{text}</div>;
}
