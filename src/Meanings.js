import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index)
     
     {
        return (
            <div key={index}>
                <p>
                    <strong>definition:</strong>{definition.definition}
                    <br />
                    <strong>Example:</strong><em>{definition.example}</em>
                    <br />
                   <Synonyms synonyms={definition.synonyms} />
                </p>
                </div>
        );
        })}
    
    </div>
  );
}