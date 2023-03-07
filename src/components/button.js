import * as React from "react"

export const Button = ({text, customClass}) => {
    return (
        <button className={customClass}>
            {text}
        </button>
    )
}
