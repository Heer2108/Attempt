import React from 'react';
import ServiceItem from '../../Service/ServiceItem';
import { ServiceType } from '@/type/ServiceType';
import TextHeadingItem from '@/components/TextHeading/TextHeadingItem';

interface Props {
    data: Array<ServiceType>;
}

const ServiceAboutOne: React.FC<Props> = ({ data }) => {
    return (
        <div className="service-block bg-surface lg:py-[100px] sm:py-16 py-10">
            <div className="container">
                <TextHeadingItem 
                    style='' 
                    title='Why Choose Us' 
                    desc='Our services are top-notch and at competitive prices.' 
                />
                <div className="list-service grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-6">
                    {data.slice(0, 6).map((item, index) => (
                        <ServiceItem 
                            data={item} 
                            style='style-about' 
                            number={index} 
                            key={index} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceAboutOne;
