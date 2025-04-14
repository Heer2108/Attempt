'use client'

import React from 'react'
import CaseStudyItem from './CaseStudyItem'
import { CaseStudyType } from '@/type/CaseStudyType'


interface Props {
    data: Array<CaseStudyType>
}

const CaseStudyOne: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="service-block lg:py-[100px] sm:py-16 py-10">
                <div className="container flex flex-col items-center">
                    <div className={`list-service grid xl:grid-cols-3 lg:grid-cols-3  sm:grid-cols-2 gap-8 gap-y-10 md:mt-10 mt-6`}>
                        {data.map((item, index) => (
                            <CaseStudyItem data={item} style='style-one' key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default CaseStudyOne