import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);

  const insertTextInDocument = () => {
    const newDoc = `<span class="paragraph-highlight-class">${text}</span>`;
    setDocument((prevDoc) => prevDoc + newDoc);
    removeHighlight();
  };

  const removeHighlight = () => {
    setTimeout(() => {
      setDocument((doc) => {
        const cleanedDoc = doc.replace(
          /class="paragraph-highlight-class"/g,
          ""
        );
        return cleanedDoc;
      });
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      insertTextInDocument();
      setText("");
    }
  };

  return (
    <>
      <div className="body-container">
        <form onSubmit={handleSubmit}>
          <textarea
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            className="textarea"
            value={text}
            placeholder="Enter the text"
            rows={7}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </form>
        <div className="document-container">
          <div>Document</div>
          {document ? (
            <div
              className="document-body"
              dangerouslySetInnerHTML={{ __html: document }}
            ></div>
          ) : (
            <div
              className="document-body"
              style={{ textAlign: "center", color: "#52525240" }}
            >
              Added Content will show here
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
