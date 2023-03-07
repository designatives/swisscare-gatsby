import * as React from "react";
import {Link} from 'gatsby';
import {Heading} from "../components/heading";
import {Button} from "../components/button";

import img from "../images/DEL/box-image.svg";
import {Box} from "../components/box";

export default function BoxSection() {
    return (
        <section className={`box-section flex items-center inView`}>
            <div className={'container'}>
                <div className={'pattern-container'}>
                    <ul className={`pattern running`}>
                        {[...Array(200)].map((x, i) =>
                            <li key={i}>
                                <span/>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={'text-container'}>
                    <Heading depth={3} text={`Safe travels start with travel insurance. Get yours now!`}/>

                    <div className={'grid gap-20 grid-cols-2 mt-14'}>
                        <Box img={img} text={'Make it easy for your loved ones to visit you - get a Schengen visa instantly in your mailbox with us!'} button={{url:'/',text:'Apply Now'}} />
                        <Box img={img} text={'Make it easy for your loved ones to visit you - get a Schengen visa instantly in your mailbox with us!'} button={{url:'/',text:'Apply Now'}} />
                    </div>

                </div>

            </div>
        </section>
    );
}
