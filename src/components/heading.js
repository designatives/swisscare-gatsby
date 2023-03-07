import * as React from "react"
import {useState} from "react";

function checkFirstLetterSpecial(_string) {
    let spCharsRegExp = /^[-]+/;
    return spCharsRegExp.test( _string);
}

export const SplitText = ({text}) => {
    var italic = false;

    return(
        <>
            {text.split(" ").map(function(word, index){
                if(checkFirstLetterSpecial(word)){
                    italic = true;
                }
              return <span
                  aria-hidden="true"
                  className={`${italic ? 'italic' : 'not-italic'}`}
                  key={index}>
              {word}
            </span>;
          })}
        </>
    )
}

export const Heading = ({text, depth = 1}) => {

    function renderHeading(depth,text){
        switch (depth) {
            case 1:
            default:
                return <h1>
                    <SplitText text={text} role="heading"/>
                </h1>

            case 3:
                return <h3>
                    <SplitText text={text} role="heading"/>
                </h3>
        }



    }

    return (
        <div className={'heading'}>
            {renderHeading(depth,text)}
        </div>
    )
}
