import React from "react"
import { funFacts, FunFact } from "./funfacts"
import { useState } from "react"
import "./FunFactPage.scss"

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

          <div className="funfact">
            <h2 className="funfact__prompt">{ funFact.prompt }</h2>
            <button onClick={ () => toggleFactDetail(funFact.id)}>^</button>
          </div>
            {funFact.id===selectedFact? <p className="funfact__detail">{ funFact.detail }</p> : null }
        </div>
        )
        )
      }
    </div>
  )
}