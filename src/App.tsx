import React, {FC} from "react";
import {Button} from "./stories/Button/Button";

const App: FC = () =>{
  return (
    <h1>
      <Button label="hi" size='large'/>
    </h1>
  )
}

export default App