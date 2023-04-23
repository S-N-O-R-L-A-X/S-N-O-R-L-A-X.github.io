import "./index.css"
export default function Quote() {
  const source = "弱智吧";
  const content = "人工智能能治工人。";
  return (
    <div className="blockquote-wrapper">
      <div className="blockquote">
        <h1>
          {content}
        </h1>
        <h4>&mdash;{source}<br /></h4>
      </div>
    </div>
  )
}