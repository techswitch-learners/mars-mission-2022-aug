import React from "react"
import { funfacts, FunFacts } from "./funfacts"

interface FunFactsProps {
    funfacts: FunFacts[];
}

export const FunFactComponent: React.FunctionComponent<FunFactsProps> = ({ funfacts }) => {

    return(
        <div>
            {funfacts.map(funfact => (
                    <div>
                        <h2>{ funfact.prompt }</h2>
                        <p>{ funfact.detail }</p>
                    </div>
                    )
                )
            }
        </div>
    )
}