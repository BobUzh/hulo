import Partners from "./Partners";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrap">
                    <ul className="footer__link-block">
                        <li className="footer__link-item">
                            <a
                                href="mailto:hello@hulo.dev"
                                className="footer__link"
                                target="_blank"
                            >
                                hello@hulo.dev
                            </a>
                        </li>
                        <li className="footer__link-item">
                            <a
                                href="https://www.linkedin.com/company/hulodev"
                                className="footer__link"
                                target="_blank"
                            >
                                linkedin
                            </a>
                        </li>
                        <li className="footer__link-item">
                            <a
                                href="https://www.facebook.com/pg/hulo.dev.agency"
                                className="footer__link"
                                target="_blank"
                            >
                                facebook
                            </a>
                        </li>
                        <li className="footer__link-item">
                            <a
                                href="https://www.instagram.com/hulodev"
                                className="footer__link"
                                target="_blank"
                            >
                                instagram
                            </a>
                        </li>
                        <li className="footer__link-item">
                            <a
                                href="https://www.squarespace.com/designer/profile/4391176"
                                className="footer__link"
                                target="_blank"
                            >
                                <svg
                                    width="36"
                                    height="28"
                                    viewBox="0 0 36 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.0936 5.58205C22.4316 4.92007 21.3581 4.92007 20.6965 5.58205L9.90871 16.3702C8.58405 17.6938 6.43787 17.6938 5.11426 16.3702C3.78924 15.0462 3.78924 12.8997 5.11426 11.575L15.6944 0.994906C14.3704 -0.32941 12.2235 -0.32941 10.8996 0.994906L2.71615 9.17798C0.068574 11.8263 0.068574 16.119 2.71615 18.7676C5.36443 21.4159 9.65713 21.4159 12.3054 18.7676L23.0936 7.97945C23.7552 7.31747 23.7552 6.24403 23.0936 5.58205ZM26.6895 1.98647C24.0412 -0.662158 19.7485 -0.662158 17.1002 1.98647L6.31243 12.7739C5.6508 13.4355 5.6508 14.5097 6.31243 15.1713C6.97442 15.8333 8.0475 15.8333 8.70948 15.1713L19.498 4.38388C20.8219 3.05956 22.9681 3.05956 24.2917 4.38388C24.9544 5.04551 26.0275 5.04551 26.6895 4.38388C27.3515 3.72119 27.3515 2.64846 26.6895 1.98647ZM30.2858 12.7739C29.6238 12.1126 28.55 12.1126 27.888 12.7739L17.1002 23.5617C15.7763 24.8857 13.6294 24.8857 12.3054 23.5617C11.6438 22.9001 10.5707 22.9001 9.90871 23.5617C9.24568 24.224 9.24568 25.2975 9.90871 25.9587C12.5559 28.607 16.8497 28.607 19.498 25.9587L30.2858 15.1713C30.9474 14.5097 30.9474 13.4355 30.2858 12.7739ZM33.882 9.17833C31.2338 6.5304 26.9404 6.5304 24.2928 9.17833L13.5043 19.9665C12.8423 20.6277 12.8423 21.7019 13.5043 22.3635C14.1666 23.0259 15.2401 23.0259 15.9017 22.3635L26.6895 11.5757C28.0131 10.2514 30.1603 10.2514 31.4839 11.5757C32.8079 12.8997 32.8079 15.0462 31.4839 16.3702L20.9038 26.9507C22.2278 28.2743 24.3736 28.2743 25.6986 26.9507L33.882 18.7676C36.5296 16.119 36.5296 11.8263 33.882 9.17833Z"
                                        fill="white"
                                    />
                                </svg>
                                designer
                            </a>
                        </li>
                    </ul>
                    <div className="footer__copy">
                        <div className="copy">
                            <p>© 2022 hulo.dev</p>
                        </div>
                        <Partners class_name="copy__img-wrap" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
