import * as React from "react"

import linkedin from "../images/social-linkedin.svg"
import instagram from "../images/social-instagram.svg"

export const Footer = () => {
    return (
        <footer>
            <div className={'container'}>
                <div className={'flex flex-wrap'}>
                    <div className={'basis-full md:basis-1/5'}>
                        <label>Swisscare</label>
                        <label>Switzerland AG</label>
                        Morgenstrasse 129 <br/>
                        CH-3018 Bern

                        <label className={'mt-11'}>Swisscare</label>
                        <label>Europe Ltd.</label>
                        Landstrasse 20 <br/>
                        LI-9496 Balzers
                    </div>
                    <div className={'basis-full md:basis-1/5'}>
                        <label>Our brands</label>
                        <ul>
                            <li>
                                <a href="https://swisscare.ch" target={'_blank'} rel={'noreferrer'}>swisscare.ch</a>
                            </li>
                            <li>
                                <a href="https://swiss144.ch" target={'_blank'} rel={'noreferrer'}>swiss144.ch</a>
                            </li>
                            <li>
                                <a href="https://welcome.ch" target={'_blank'} rel={'noreferrer'}>welcome.ch</a>
                            </li>
                            <li>
                                <a href="https://quickcover.ch" target={'_blank'} rel={'noreferrer'}>quickcover.ch</a>
                            </li>
                        </ul>
                    </div>
                    <div className={'basis-full md:basis-1/5'}>
                        <label>Quicklinks</label>
                        <ul>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>About us</a>
                            </li>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>Contact us</a>
                            </li>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>Press - media</a>
                            </li>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>IOS / Android App</a>
                            </li>
                        </ul>
                    </div>
                    <div className={'basis-full md:basis-1/5'}>
                        <label>Legal</label>
                        <ul>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>Terms & conditions</a>
                            </li>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>Legal information</a>
                            </li>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>Terms of use</a>
                            </li>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>Data protection - dpo</a>
                            </li>
                            <li>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>App privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'flex mt-32 items-center'}>
                    <div className={'basis-auto pr-8'}>Copyright &copy;swisscare 2023</div>
                    <div className={'basis-auto'}>
                        <div className={'flex'}>
                            <div className={'basis-auto px-3'}>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>
                                    <img src={linkedin} alt={'linkedin'}/>
                                </a>
                            </div>
                            <div className={'basis-auto px-3'}>
                                <a href="#" target={'_blank'} rel={'noreferrer'}>
                                    <img src={instagram} alt={'instagram'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
