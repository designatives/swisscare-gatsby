import * as React from "react"
import {Link} from "gatsby";

import logo from "../images/swisscare-logo.svg";

export const Header = () => {
    return (
        <header>
            <div className={'container'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'basis-auto'}>
                        <Link to={'/'}>
                            <img src={logo} alt="Swisscare"/>
                        </Link>
                    </div>
                    <div className={'basis-auto'}>
                        <nav>
                            <div className={'flex'}>
                                <div className={'basis-auto pl-12'}>
                                    <Link to={'/'}>
                                        All insurance plans
                                    </Link>
                                </div>
                                <div className={'basis-auto pl-12'}>
                                    <Link to={'/'}>
                                        Contact us
                                    </Link>
                                </div>
                                <div className={'basis-auto pl-12'}>
                                    <Link to={'/'}>
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
