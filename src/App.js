import "./App.css";

import React, { useState } from "react";
import { getToken } from "./firebaseInit";

function App() {
  React.useEffect(async () => {
    const token = await getToken();
    document.querySelector("textarea").value = token
  }, [])

  return (
    <>
      <textarea type="text" style={{ width: '90vw' }} />
    </>

  );
}

export default App;
