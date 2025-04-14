import React from "react"

interface Props {
    classname: string
}

const CounterTwo: React.FC<Props> = ({ classname }) => {
    return (
        <div className="container">
            <div className={`counter-block ${classname}`}>
                <div className="grid xl:grid-cols-4 grid-cols-2 gap-y-8">
                    <div className="item">
                        <div className="flex flex-col items-center">
                            <div className="count-block flex items-center">
                                <div className="counter heading3">97</div>
                                <span className="heading3">%</span>
                            </div>
                            <div className="text-[1rem] text-secondary text-center">Client Satisfaction</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="flex flex-col items-center">
                            <div className="count-block flex items-center">
                                <div className="counter heading3">98</div>
                                <span className="heading3">%</span>
                            </div>
                            <div className="text-[1rem] text-secondary text-center">Business Processes</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="flex flex-col items-center">
                            <div className="count-block flex items-center">
                                <div className="counter heading3">95</div>
                                <span className="heading3">%</span>
                            </div>
                            <div className="text-[1rem] text-secondary text-center">Timely Delivery</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="flex flex-col items-center">
                            <div className="count-block flex items-center">
                                <div className="counter heading3">94</div>
                                <span className="heading3">%</span>
                            </div>
                            <div className="text-[1rem] text-secondary text-center">Affordable Services</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CounterTwo