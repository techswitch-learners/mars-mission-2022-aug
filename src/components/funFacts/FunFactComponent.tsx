import React from "react"
import { funFacts, FunFact } from "./funfacts"
import { useState } from "react"

interface FunFactsProps {
    funFacts: FunFact[];
}

export const FunFactComponent: React.FunctionComponent<FunFactsProps> = ({ funFacts }) => {

  const [selectedFact, setSelectedFact] = useState<number>(0);

  function toggleFactDetail(funFactId:number){
    if (selectedFact===funFactId){
      setSelectedFact(0);
    }
    else {
      setSelectedFact(funFactId);
    }
  }

  return(
    <div>
      {funFacts.map( funFact => (
        <div>

          <h2>{ funFact.prompt }</h2>

          <button onClick={ () => toggleFactDetail(funFact.id)}>^</button>

          {funFact.id===selectedFact? <p>{ funFact.detail }</p> : null }

        </div>
        )
        )
      }
    </div>
  )
}