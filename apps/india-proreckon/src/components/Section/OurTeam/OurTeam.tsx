import Link from "next/link";
import Image from "next/image";

const OurTeam = () => {
    return (
        <div className="our-team-block pt-10 bg-white">
            <div className="container">
                <div className="heading-block text-center">
                    <h2 className="heading3">Meet The Team</h2>
                </div>
                <div className="list-member grid xl:grid-cols-2 sm:grid-cols-2 gap-8 mt-6">
                  

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 mx-[25%]">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/gem.png" 
                                alt="Gem Gadhecha"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/gem-gadhecha-885140323/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Gem Gadhecha</div>
                            <div className="caption1 text-secondary">Head of financial consulting</div>
                            <div className="caption1 text-secondary">
                            Oversees financial strategy and ensuring optimal management of resources.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 mx-[25%]">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/heer.png" 
                                alt="Heer Gadhecha"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/heergadhecha/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Heer Gadhecha</div>
                            <div className="caption1 text-secondary">Managing Partner</div>
                            <div className="caption1 text-secondary">
                                Oversees strategic direction and operations, ensuring alignment with goals.
                            </div>
                        </div>
                    </div>

                

                 
                

                 


                </div>
            </div>
        </div>
    );
}

export default OurTeam;
