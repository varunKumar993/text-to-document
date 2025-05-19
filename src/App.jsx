import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [document, setDocumenet] = useState("");
  const [loading, setLoading] = useState(false)
  const handlesubmit =(e)=>{
    if(!loading){
      setLoading(true)
      e.preventDefault()
      insertTextInDocument();
      setText('')
    }
  }
    <>
      <div className="body-container">
        <form onSubmit={handlesubmit}>
          <textarea
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handlesubmit(e);
              }
            }}
            className="textarea"
            value={text}
            placeholder="enter the text"
            rows={7}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </form>
        <div className="document-container">
          <div>Document</div>
          {document?(
            <div className="document-body" dangerouslySetInnerHTML={{__html:document}}>
              
            </div>:(<div className="document-body">Added Content will show here</div>)
          )}
        </div>
        
      </div>
    </>
  );
}
export default App;
