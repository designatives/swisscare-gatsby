import * as React from "react";
import {Link} from 'gatsby';
import {Heading} from "../components/heading";
import {Button} from "../components/button";

export default function ContactSection() {
    return (
        <section className={`contact-section flex items-center inView`}>
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
                    <Heading depth={3} text={`Don't hesitate to reach out - contact our customer service team now!`}/>

                    <Link to={'/contact'}>
                        <Button text={'Contact us'} customClass={'mt-40'}/>
                    </Link>
                </div>

            </div>
        </section>
    );
}
