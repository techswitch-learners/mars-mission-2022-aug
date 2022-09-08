import React, { useState } from "react";
import { funFacts,  FunFact  as FunFactInterface } from "./funfacts";
import "./FunFactPage.scss";

interface FunFactProps {
    funFacts: FunFactInterface[];
}

export const FunFact: React.FunctionComponent<FunFactProps> = ({ funFacts }) => {

  const [selectedFactId, setSelectedFactId] = useState(0);

  const toggleFactDetail = (funFactId: number) => {
    if (selectedFactId === funFactId){
      setSelectedFactId(0);
    }
    else {
      setSelectedFactId(funFactId);
    }
  }

  return(
    <div>
      {funFacts.map(funFact => (
        <div className="funfact">
          <div className="funfact__prompt">
            <h2 className="funfact__prompt-question">{funFact.prompt}</h2>
            <button className={`funfact__button ${funFact.id===selectedFactId ? "funfact__button--revealed" : ""}`} onClick={ () => toggleFactDetail(funFact.id)}>^</button>
          </div>
          {funFact.id===selectedFactId? <p className="funfact__detail">{funFact.detail}</p> : null }
        </div>
      ))}
    </div>
  )
}
