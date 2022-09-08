import React, { useState } from "react";
import { FunFact as FunFactInterface } from "./funFacts";
import "./FunFactPage.scss";

interface FunFactProps {
  funFacts: FunFactInterface[];
}

export const FunFact: React.FunctionComponent<FunFactProps> = ({ funFacts }) => {

  const [selectedFactId, setSelectedFactId] = useState(0);

  const toggleFactDetail = (funFactId: number) => {
    if (selectedFactId === funFactId) {
      setSelectedFactId(0);
    } else {
      setSelectedFactId(funFactId);
    }
  }

  return(
    <div>
      {funFacts.map(funFact => (
        <div className="fun-fact">
          <div className="fun-fact__prompt">
            <h2 className="fun-fact__prompt-question">{funFact.prompt}</h2>
            <button className={`fun-fact__button ${funFact.id===selectedFactId ? "fun-fact__button--revealed" : ""}`} onClick={ () => toggleFactDetail(funFact.id)}>^</button>
          </div>
          {funFact.id===selectedFactId? <p className="fun-fact__detail">{funFact.detail}</p> : null }
        </div>
      ))}
    </div>
  )
}
