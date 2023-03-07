import * as React from "react";
import {ProductDetail} from "../components/product-detail";

import image from "../images/products/product1.png";

export default function ProductSection({index}) {
    return (
        <section className={`product-section flex items-center inView`}>

            <div className={'pattern-container'}>
                <ul className={`pattern running`}>
                    {[...Array(200)].map((x, i) =>
                        <li key={i}>
                            <span/>
                        </li>
                    )}
                </ul>
            </div>
            <div className={'container'}>
                <div className={'flex items-end'}>
                    <div className={`basis-full text-container ${index%2 === 0 ? 'order-1 md:basis-9/12' : 'order-2 md:basis-6/12'}`}>
                        <ProductDetail
                            title={'Study abroad with confidence - get insured for your time in Europe.'}
                            description={'Enrol in Swisscare\'s international student insurance plan for Europe and get all the necessary documents for your visa or university requirements. Our plan is 100% online and trusted by thousands of students every year.'}
                            price={'€ 0.54'}
                            billing={'day'}
                            applyUrl={'/'}
                            planInfoUrl={'/'}
                        />
                    </div>
                    <div className={`basis-full  content-end ${index%2 === 0 ? 'order-2 md:basis-3/12' : 'order-1 md:basis-6/12'}`}>
                        <img src={image} className={`max-w-[1180px] w-[60vw] absolute ${index%2 === 0 ? 'right-[-60px]' : 'left-[-60px]'} bottom-0 z-[0]`} alt="Study abroad with confidence - get insured for your time in Europe."/>
                    </div>
                </div>
            </div>
        </section>
    );
}
