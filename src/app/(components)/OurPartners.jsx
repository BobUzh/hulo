import Image from "next/image";

const OurPartners = () => {
    return (
        <section className="section partners">
            <div className="container">
                <div className="section__wrap partners__wrap">
                    <div className="partners__name">
                        <span>our partners</span>
                    </div>
                    <div className="partners__list">
                        <div className="partners__item">
                            <Image
                                className="img-dark"
                                width={574}
                                height={97}
                                src="/gost-dark.png"
                                alt="#"
                            />
                            <Image
                                className="img-light"
                                width={574}
                                height={97}
                                src="/gost-light.png"
                                alt="#"
                            />
                            <div className="partners__numeric">
                                <span>01</span>
                            </div>
                            <div className="partners__item-wrap">
                                <div className="partners__layer">
                                    <h3>Ghost Plugins</h3>
                                </div>
                                <div className="partners__year">
                                    <span>2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="partners__item">
                            <Image
                                className="img-dark"
                                width={200}
                                height={100}
                                src="/post-dark.png"
                                alt="#"
                            />
                            <Image
                                className="img-light"
                                width={200}
                                height={100}
                                src="/post-light.png"
                                alt="#"
                            />
                            <div className="partners__numeric">
                                <span>02</span>
                            </div>
                            <div className="partners__item-wrap">
                                <div className="partners__layer">
                                    <h3>Posture Media</h3>
                                </div>
                                <div className="partners__year">
                                    <span>2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="partners__item">
                            <Image
                                className="img-dark"
                                width={200}
                                height={100}
                                src="/sun-dark.png"
                                alt="#"
                            />
                            <Image
                                className="img-light"
                                width={200}
                                height={100}
                                src="/sun-light.png"
                                alt="#"
                            />
                            <div className="partners__numeric">
                                <span>03</span>
                            </div>
                            <div className="partners__item-wrap">
                                <div className="partners__layer">
                                    <h3>Sunday Sounds</h3>
                                </div>
                                <div className="partners__year">
                                    <span>2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="partners__item">
                            <Image
                                className="img-dark"
                                width={200}
                                height={100}
                                src="/mor-dark.png"
                                alt="#"
                            />
                            <Image
                                className="img-light"
                                width={200}
                                height={100}
                                src="/mor-light.png"
                                alt="#"
                            />
                            <div className="partners__numeric">
                                <span>04</span>
                            </div>
                            <div className="partners__item-wrap">
                                <div className="partners__layer">
                                    <h3>Mor Creative</h3>
                                </div>
                                <div className="partners__year">
                                    <span>2019</span>
                                </div>
                            </div>
                        </div>
                        <div className="partners__item">
                            <Image
                                className="img-dark"
                                width={200}
                                height={100}
                                src="/altt-dark.png"
                                alt="#"
                            />
                            <Image
                                className="img-light"
                                width={200}
                                height={100}
                                src="/altt-light.png"
                                alt="#"
                            />
                            <div className="partners__numeric">
                                <span>05</span>
                            </div>
                            <div className="partners__item-wrap">
                                <div className="partners__layer">
                                    <h3>Design by Altitude</h3>
                                </div>
                                <div className="partners__year">
                                    <span>2019</span>
                                </div>
                            </div>
                        </div>
                        <div className="partners__item">
                            <Image
                                className="img-dark"
                                width={200}
                                height={100}
                                src="/lawson-dark.png"
                                alt="#"
                            />
                            <Image
                                className="img-light"
                                width={200}
                                height={100}
                                src="/lawson-light.png"
                                alt="#"
                            />
                            <div className="partners__numeric">
                                <span>06</span>
                            </div>
                            <div className="partners__item-wrap">
                                <div className="partners__layer">
                                    <h3>Lawson House</h3>
                                </div>
                                <div className="partners__year">
                                    <span>2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="partners__last-text">
                            <h3>and 84 more</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
