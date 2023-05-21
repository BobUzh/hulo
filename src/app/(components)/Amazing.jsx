import Image from "next/image";
import Partners from "./Partners";

const Amazing = () => {
    return (
        <section className="section section__amazing">
            <div className="container">
                <div className="section__wrap section__amazing-wrap">
                    <div className="amazing__content">
                        <div className="amazing__content-title title  amazing__content-title-mobile">
                            <h2>
                                AMAZING CUSTOM{" "}
                                <span>SQUARESPACE & SHOPIFY DESIGN </span>
                            </h2>
                        </div>
                        <div className="amazing__content-wrap">
                            <div className="amazing__content-button">
                                <a className="btn" href="contact.html">
                                    GET
                                    <span className="span-svg-wrap">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 1H15M15 1V16M15 1L0 16"
                                                stroke="white"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 1H15M15 1V16M15 1L0 16"
                                                stroke="white"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="amazing__content-title title amazing__content-title-desk">
                                <h2>AMAZING CUSTOM</h2>
                            </div>
                            <div className="amazing__content-subtitle subtitle ">
                                <p>
                                    Innovative design studio that strives to
                                    make substantive changes in web & e-commerce
                                    design
                                </p>
                            </div>
                        </div>
                        <div className="amazing__content-title title title-italic amazing__content-title-desk">
                            <h2>SQUARESPACE & SHOPIFY DESIGN</h2>
                        </div>
                    </div>
                    <div className="amazing__slider-container">
                        {/* <!-- Slider main container --> */}
                        <div className="swiper amazing__slider">
                            {/* <!-- Additional required wrapper --> */}
                            <div className="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <div className="swiper-slide">
                                    <Image
                                        className="slide-desc"
                                        width={1141}
                                        height={347}
                                        src="s1.png"
                                        alt=""
                                    />
                                    <Image
                                        className="slide-m"
                                        width={288}
                                        height={192}
                                        src="sm-1.png"
                                        alt=""
                                    />
                                    <div className="project">
                                        <div className="project__subtitle">
                                            <p>project name:</p>
                                        </div>
                                        <div className="project__name">
                                            <h5>Florentine Kitchen Knives</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <Image
                                        className="slide-desc"
                                        width={1141}
                                        height={347}
                                        src="s2.png"
                                        alt=""
                                    />
                                    <Image
                                        className="slide-m"
                                        width={288}
                                        height={192}
                                        src="sm-2.png"
                                        alt=""
                                    />
                                    <div className="project">
                                        <div className="project__subtitle">
                                            <p>project name:</p>
                                        </div>
                                        <div className="project__name">
                                            <h5>Yes Decor (coming soon)</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <Image
                                        className="slide-desc"
                                        width={1141}
                                        height={347}
                                        src="s3.png"
                                        alt=""
                                    />
                                    <Image
                                        className="slide-m"
                                        width={288}
                                        height={192}
                                        src="sm-3.png"
                                        alt=""
                                    />
                                    <div className="project">
                                        <div className="project__subtitle">
                                            <p>project name:</p>
                                        </div>
                                        <div className="project__name">
                                            <h5>Sunday Sounds</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <Image
                                        className="slide-desc"
                                        width={1141}
                                        height={347}
                                        src="n2.png"
                                        alt=""
                                    />
                                    <Image
                                        className="slide-m"
                                        width={288}
                                        height={192}
                                        src="sm-4.png"
                                        alt=""
                                    />
                                    <div className="project">
                                        <div className="project__subtitle">
                                            <p>project name:</p>
                                        </div>
                                        <div className="project__name">
                                            <h5>Travulous</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <Image
                                        className="slide-desc"
                                        width={1141}
                                        height={347}
                                        src="n1.png"
                                        alt=""
                                    />
                                    <Image
                                        className="slide-m"
                                        width={288}
                                        height={192}
                                        src="sm-4.png"
                                        alt=""
                                    />
                                    <div className="project">
                                        <div className="project__subtitle">
                                            <p>project name:</p>
                                        </div>
                                        <div className="project__name">
                                            <h5>Heads Of State</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Partners class_name="amazing__img__block" />
                    </div>
                    <div className="amazing__main-banner">
                        <div className="amazing__banner-wrapper">
                            <Image
                                className="slide-m"
                                width={288}
                                height={192}
                                src="sm-3.png"
                                alt=""
                            />
                            <div className="project">
                                <div className="project__subtitle">
                                    <p>project name:</p>
                                </div>
                                <div className="project__name">
                                    <h5>Sunday Sounds</h5>
                                </div>
                            </div>
                        </div>
                        <Partners class_name="amazing__img__block" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amazing;
