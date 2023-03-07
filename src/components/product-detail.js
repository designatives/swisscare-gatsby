import * as React from "react"
import {Link} from "gatsby";
import {Button} from "./button";
import {Heading} from "./heading";

export const ProductDetail = ({title, description, price, billing, applyUrl, planInfoUrl}) => {
    return (
        <div className={'product-detail'}>
            <Heading depth={3} text={title}/>

            <div className={'description'}>
                {description}
            </div>
            <div className={'price'}>
                <span className={'block'}>From</span>
                {price} <span>/ {billing}</span>
            </div>
            <div className={'actions'}>
                <div className={'flex items-center'}>
                    <div className={'basis-full sm:basis-auto'}>
                        <Link to={applyUrl}>
                            <Button
                                text={'Apply Now'}
                            />
                        </Link>
                    </div>
                    <div className={'basis-full sm:basis-auto pl-6'}>
                        <Link to={planInfoUrl}>
                            <Button
                                text={'Plan info'}
                                customClass={'button-secondary'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
