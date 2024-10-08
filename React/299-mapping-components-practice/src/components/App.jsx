import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(em) 
{
  return (<Entry
  key={em.id}
  emoji={em.emoji} 
  name={em.name}
  description={em.meaning}
  /> );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
