import React from "react"
import { funFacts, FunFact } from "./funfacts"
import { useState } from "react"

interface FunFactsProps {
    funFacts: FunFact[];
}

export const FunFactComponent: React.FunctionComponent<FunFactsProps> = ({ funFacts }) => {

  
  const [selectedFact, setSelectedFact] = useState<number>(0);

  // setSelectedFact(2);

  return(
    <div>
      {funFacts.map( funFact => (
        <div>
          <h2>{ funFact.prompt }{selectedFact}{funFact.id}</h2>
          <button onClick={ () => setSelectedFact(funFact.id)}>^</button>
          {funFact.id===selectedFact? <p>{ funFact.detail }</p> : null }
        </div>
        )
        )
      }
    </div>
  )
}