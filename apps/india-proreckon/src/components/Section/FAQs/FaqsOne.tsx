'use client'

import { useState } from 'react';
import Image from 'next/image';

const FaqsOne = () => {
  const [faq, setFaq] = useState<number | null>(5)

  const handleFaq = (id: number) => {
    setFaq(prevId => prevId === id ? null : id)
  }

  return (
    <section className="faqs-block style-one lg:mt-[100px] sm:mt-16 mt-10">
      <div className="flex max-xl:flex-wrap main">
        <div className="w-full xl:w-1/2">
          <div className="bg-img w-full">
            <Image width={500} height={500} src="/images/component/960x644.jpg" alt="img" className="w-full" />
          </div>
          <div className="desc bg-blue flex items-center justify-center">
            <div className="content flex gap-8">
              <i className="icon-hand-team text-white flex-shrink-0"></i>
              <h4 className="heading4 text-white">FREE TRIAL FOR 15rgrgrhrthththththtttjtjtjjt
</h4>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
}
export default FaqsOne