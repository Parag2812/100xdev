// import { useContext, useState } from "react"
// import { CountContext } from "../src/context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelectror } from "./store/atoms/count";


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>

    </div>
  )
}

function Count() {
  console.log("Rendering Count");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    {count}
    <EvencountRerender />

  </div>

}



function EvencountRerender(){
  const isEven = useRecoilValue(evenSelectror);
  return <div>
 {isEven ? "its is even" : null}
   </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("button rerender")
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App