import { DiagonalArrow } from "../(svg)/Quotes";

const Creating = () => {
    return (
        <section className="section creating">
            <div className="container">
                <div className="section__wrap creating__wrap">
                    <div className="creating__blocks">
                        <div className="creating__items">
                            <div className="creating__items-wrap">
                                <div className="creating__items-title">
                                    <h3>Start Creating With Us</h3>
                                </div>
                                <div className="creating__items-subtitle">
                                    <p>
                                        When working with us, you get an amazing
                                        website design with a simple to use yet
                                        engaging interface on time and on
                                        budget.
                                    </p>
                                </div>
                                <div className="creating__items-btn">
                                    <a className="btn" href="contact.html">
                                        Start a Project
                                        <span className="span-svg-wrap mobile-none">
                                            <DiagonalArrow />
                                            <DiagonalArrow />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="creating__items form__item">
                            <div className="creating__items-wrap">
                                <div className="creating__items-title">
                                    <h3>Want to stay updated</h3>
                                </div>
                                <form action="#" className="creating-form">
                                    <label
                                        htmlFor="mail"
                                        className="creating__form-label"
                                    >
                                        Sign up for our newsletter to receive
                                        updates
                                    </label>
                                    <div className="creating__items-input">
                                        <input
                                            type="email"
                                            name="mail"
                                            id=""
                                            placeholder="Bruse@wayne.com"
                                        />
                                    </div>
                                    <div className="creating__form-btn">
                                        <a className="btn">
                                            subscribe
                                            <span className="span-svg-wrap mobile-none">
                                                <DiagonalArrow />
                                                <DiagonalArrow />
                                            </span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="creating__items">
                            <div className="creating__items-wrap">
                                <div className="location-info">
                                    <p>
                                        <a
                                            href="https://time.is/EET"
                                            id="time_is_link"
                                            rel="nofollow"
                                            style={{
                                                fontSize: "inherit",
                                                color: "#FFFFFF",
                                                pointerEvents: "none",
                                            }}
                                        >
                                            LOCAL TIME:
                                        </a>
                                        <span
                                            id="EET_z70e"
                                            style={{ fontSize: "inherit" }}
                                        ></span>
                                        GMT (+3:00) Lviv, UA
                                    </p>
                                </div>
                                <div className="location__btn">
                                    <a
                                        href="https://www.koloua.com/en"
                                        target="_blank"
                                    >
                                        <span className="span-icon-wrap">
                                            <svg
                                                width="21"
                                                height="16"
                                                viewBox="0 0 21 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_4471_125)">
                                                    <path
                                                        d="M20.3077 0.753557V8.00102C18.6159 7.34833 16.9241 7.18568 15.2302 7.26803C13.5385 7.34833 11.8467 7.6757 10.1549 8.00102C8.46101 8.32633 6.76923 8.6537 5.07745 8.734C3.38567 8.81635 1.69178 8.6537 0 8.00102V0.753557C1.69178 1.40624 3.38567 1.5689 5.07745 1.4886C6.76923 1.40624 8.46101 1.08093 10.1549 0.753557C11.8467 0.428245 13.5385 0.102933 15.2302 0.0205757C16.9241 -0.0617818 18.6159 0.102933 20.3077 0.753557Z"
                                                        fill="#005EB8"
                                                    />
                                                    <path
                                                        d="M20.3077 8.00075V15.2482C18.6159 14.5955 16.9241 14.4329 15.2302 14.5132C13.5385 14.5955 11.8467 14.9208 10.1549 15.2482C8.46101 15.5735 6.76923 15.8988 5.07745 15.9812C3.38567 16.0615 1.69178 15.8988 0 15.2482V8.00075C1.69178 8.65344 3.38567 8.81609 5.07745 8.73374C6.76923 8.65344 8.46101 8.32607 10.1549 8.00075C11.8467 7.67544 13.5385 7.34807 15.2302 7.26777C16.9241 7.18541 18.6159 7.34807 20.3077 8.00075Z"
                                                        fill="#FFD101"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4471_125">
                                                        <rect
                                                            width="20.3077"
                                                            height="16"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1H17M17 1V17M17 1L1 17"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </span>
                                        <span className="span-text">
                                            Support Ukraine
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creating;
