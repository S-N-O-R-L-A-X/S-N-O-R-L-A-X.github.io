import "./index.css";
import sentences from "./sentences.json";

export default function Quote() {
  const n = sentences.length, idx = Math.floor(Math.random() * n);
  const content = sentences[idx].content, source = sentences[idx].source;
  return (
    <div className="blockquote-wrapper">
      <div className="blockquote">
        <h1 dangerouslySetInnerHTML={{ __html: content }} />
        <h4>&mdash;{source}<br /></h4>
      </div>
    </div>
  )
}