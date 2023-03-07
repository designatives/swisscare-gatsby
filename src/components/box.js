import * as React from "react"
import img from "../images/DEL/box-image.svg";
import {Link} from "gatsby";

export const Box = ({text, img, button}) => {
    return (
        <div className={'box'}>
            <div className={'img-container'}>
                <img src={img} alt=""/>
            </div>

            <div className={'text'}>
                {text}
            </div>

            <Link to={button.url}>
                <button className={'button-yellow'}>{button.text}</button>
            </Link>
        </div>
    )
}
