import * as React from "react";
import {useEffect, useState} from "react";
import {Link} from "gatsby";
import {Heading} from "../components/heading";
import {Button} from "../components/button";

export default function HeroSection() {
    const [run,setRun] = useState(false)

    useEffect(()=>{
        //setInterval(function(){
          //  setRun(!run);
       // },3000)
    })

    return (
        <section className={`hero-section flex items-center inView ${run && 'inView'}`}>
            <div className={'container'}>
                <div className={'pattern-container'}>
                    <ul className={`pattern running ${run && 'running'}`}>
                        {[...Array(200)].map((x, i) =>
                            <li key={i}>
                                <span/>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={'text-container'}>
                    <Heading text={"Don't let unexpected medical bills ruin your study abroad experience - get your affordable and reliable insurance from Swisscare"}/>

                    <Link to={'/'}>
                        <Button
                            text={'Start here'}
                            customClass={'mt-16'}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
