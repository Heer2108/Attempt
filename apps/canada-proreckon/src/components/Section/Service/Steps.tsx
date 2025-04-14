import React from 'react';
import ServiceItem from '../../Service/ServiceItem';
import { ServiceType } from '@/type/ServiceType';
import TextHeadingItem from '@/components/TextHeading/TextHeadingItem';

interface Props {
    data: Array<ServiceType>;
    title?: string;
    desc?: string | null;
}

const ServiceAboutOne: React.FC<Props> = ({ data, title, desc }) => {
    return (
        <div className="service-block bg-white lg:pt-[100px] py-10">
            <div className="container">
                <TextHeadingItem
                    style=''
                    title={title ?? 'Steps To A Smooth Workflow'}
                    desc={desc === null ? null : 'We’ve streamlined our process for simplicity and efficiency.'}
                />
                <div className="list-service grid xl:grid-cols-5 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10">
                    {data.slice(0, 6).map((item, index) => (
                        <ServiceItem
                            data={item}
                            style='style-about-three'
                            number={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceAboutOne;
