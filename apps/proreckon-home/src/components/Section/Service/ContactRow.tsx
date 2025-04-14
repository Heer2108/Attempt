'use client'

import React from 'react';
import ServiceItemCopy from '../../Service/ServiceItemCopy';
import { ServiceType } from '@/type/ServiceType';

interface Props {
    data: Array<ServiceType>;
    title: string;
}

const ContactRow: React.FC<Props> = ({ data, title }) => {
    return (
        <section className="service-block my-8">
            <div className="container">
                <h3 className="heading3 text-center">{title}</h3>
                <div
                    className="list-service grid lg:grid-cols-5 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10"
                >
                    {data.slice(0, 6).map((item, index) => (
                        <ServiceItemCopy data={item} style='style-one' key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContactRow;
