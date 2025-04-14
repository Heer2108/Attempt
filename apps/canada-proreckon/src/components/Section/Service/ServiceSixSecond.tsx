import React from 'react'

const ServiceSixSecond = () => {
  return (
      <>
          <div className="service-block style-six style-second">
              <div className="container">
                  <div className="list-service grid xl:grid-cols-4 sm:grid-cols-2 gap-8 gap-y-20 mt-20">
                      <div className="service-item rounded-2xl border border-line box-shadow"> {/* Removed hover-box-shadow and applied static box-shadow */}
                          <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                              <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                  <span className="heading4 text-white">01</span>
                              </div>
                              <div className="heading7 text-[#2868D8] mt-6">Consultation</div>
                              <div className="text-secondary mt-3">We begin by scheduling a consultation to understand your business needs, financial situation, and goals. We'll address any questions and outline our services and approach.</div>
                          </div>
                      </div>
                      <div className="service-item rounded-2xl border border-line box-shadow"> {/* Removed hover-box-shadow and applied static box-shadow */}
                          <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                              <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                  <span className="heading4 text-white">02</span>
                              </div>
                              <div className="heading7 text-[#2868D8] mt-6">Planning</div>
                              <div className="text-secondary mt-3">Based on our discussion, we'll develop a customised plan detailing recommended services, timelines, and a clear breakdown of costs.</div>
                          </div>
                      </div>
                      <div className="service-item rounded-2xl border border-line box-shadow"> {/* Removed hover-box-shadow and applied static box-shadow */}
                          <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                              <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                  <span className="heading4 text-white">03</span>
                              </div>
                              <div className="heading7 text-[#2868D8] mt-6">Execution</div>
                              <div className="text-secondary mt-3">With your approval, we’ll execute the plan, handling tasks such as accounting setup, tax preparation, or payroll management, while keeping you updated throughout.</div>
                          </div>
                      </div>
                      <div className="service-item rounded-2xl border border-line box-shadow"> {/* Removed hover-box-shadow and applied static box-shadow */}
                          <div className="service-item-main block h-full px-8 pb-7 md:pt-12 pt-8">
                              <div className="icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl">
                                  <span className="heading4 text-white">04</span>
                              </div>
                              <div className="heading7 text-[#2868D8] mt-6">Ongoing Support</div>
                              <div className="text-secondary mt-3">After implementation, we provide ongoing support, including financial reviews, updates on tax laws, and recommendations to ensure your continued success.</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}


export default ServiceSixSecond