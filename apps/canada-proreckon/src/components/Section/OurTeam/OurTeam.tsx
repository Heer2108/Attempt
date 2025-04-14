import Link from "next/link";
import Image from "next/image";

const OurTeam = () => {
    return (
        <div className="our-team-block pt-10 bg-white">
            <div className="container">
                <div className="heading-block text-center">
                    <h2 className="heading3">Meet The Team</h2>
                </div>
                <div className="list-member grid xl:grid-cols-4 sm:grid-cols-2 gap-8 mt-6">
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
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

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
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
                            <div className="caption1 text-secondary">Head Of Operations</div>
                            <div className="caption1 text-secondary">
                                Manages accounting processes for accuracy, compliance, and efficiency.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/vrutik.png" 
                                alt="Vrutik Rupareliya"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/vrutik-rupareliya-02582a213/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Vrutik Rupareliya</div>
                            <div className="caption1 text-secondary">Team Leader</div>
                            <div className="caption1 text-secondary">
                                Supervises financial activities, ensuring compliance and reporting.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/jignasha.png" 
                                alt="Jignasha Suchak"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/jignasha-suchak-b1b89a21b/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Jignasha Suchak</div>
                            <div className="caption1 text-secondary">Senior Accountant</div>
                            <div className="caption1 text-secondary">
                                Manages transactions, maintains records, and assists with reports.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/tapan.png" 
                                alt="Tapan Patel"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/tapan-patel-149997247/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Tapan Patel</div>
                            <div className="caption1 text-secondary">Senior Accountant</div>
                            <div className="caption1 text-secondary">
                                Guides the accounting team, ensuring compliance and goals are met.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/sonal.png" 
                                alt="Sonal Soni"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/sonal-soni-600474228/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Sonal Soni</div>
                            <div className="caption1 text-secondary">Junior Accountant</div>
                            <div className="caption1 text-secondary">
                                Collaborates with seniors to ensure compliance and assist in closing.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/dev.png" 
                                alt="Dev Thakkar"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/dev-thakkar-a4a6b6325/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Dev Thakkar</div>
                            <div className="caption1 text-secondary">Junior Accountant</div>
                            <div className="caption1 text-secondary">
                                Handles reconciliations and supports the preparation of reports.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full">
                            <Image 
                                width={500} 
                                height={500} 
                                className="w-full h-full" 
                                src="/images/member/dishant.png" 
                                alt="Dishant Parmar"
                                priority
                            />
                            <div className="list-social bg-white">
                                <Link href="https://www.linkedin.com/in/dishant-parmar-6920032a7/" target="_blank">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Dishant Parmar</div>
                            <div className="caption1 text-secondary">Junior Accountant</div>
                            <div className="caption1 text-secondary">
                                Handles reconciliations and supports the preparation of reports.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
