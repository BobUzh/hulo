"use client";
import { useState } from "react";
import {
    DiagonalArrow,
    DiagonalArrowWithBorderUp,
    DiagonalArrowWithBorderDown,
    Quotes,
} from "../(svg)/Quotes";

const feedbacks = [
    {
        firstText:
            "My team and I love working with hulo! We’ve had the privilege of working  together",
        secondText:
            "on  both small and big projects and each time it is a great experience! Strong communication, top-quality work, and just a great team to work hand-in-hand with. You’ll be making a mistake if you DON’T reach out to hulo about your next Squarespace or Shopify project.",
        clientImg: "292504750_10166208867500307_9049691559420820927_n.jpg",
        clientName: "Cody Juhnke",
        clientSubtitle: "Founder of The Ghost Company",
    },
    {
        firstText:
            "In an industry where developers tend to disappear mid-project... hulo.dev has been",
        secondText:
            "our reliable  development team to get the job done. They are prompt, easy to work with, and have a great depth of knowledge over general development, as well as those specific to Squarespace, Shopify, and DevOps. We have been really happy with their work product.",
        clientImg: "image2.png",
        clientName: "Kate Bosse",
        clientSubtitle: "Owner/Creative Director at Mor Creative",
    },
    {
        firstText:
            "Working with hulo.dev has been to a crucial part of building my design practice",
        secondText:
            "and allowing me to offer my clients agency level websites.  Their custom coding skills for Squarespace are the best in the industry.",
        clientImg: "image.png",
        clientName: "Joel Blair",
        clientSubtitle: "director at Detraform",
    },
    {
        firstText:
            "I can’t recommend hulo enough. They are so wonderful to work with. Pavlo is never",
        secondText:
            "overwhelmed by my crazy requests and gives helpful guidance on improving the UX experience for our clients. Their communication is outstanding, and they consistently overdeliver. I am so grateful to have found hulo!",
        clientImg: "i.png",
        clientName: "Suzie Consoli",
        clientSubtitle: "Founder of Lawson House",
    },
];

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const prev = () => {
        setIndex((prev) => (prev == 0 ? 3 : prev - 1));
    };

    const next = () => {
        setIndex((prev) => (prev == 3 ? 0 : prev + 1));
    };
    return (
        <section className="section feedbacks">
            <div className="container">
                <div className="section__wrap feedbacks__wrap">
                    <div className="feedbacks__title">
                        <h2>Feedback</h2>
                    </div>
                    <div className="feedbacks__slider-container">
                        <div className="feedbacks__btn">
                            <a className="btn" href="#">
                                Become a client
                                <span className="span-svg-wrap">
                                    <DiagonalArrow />
                                    <DiagonalArrow />
                                </span>
                            </a>
                        </div>
                        <div className="swiper feedbacks__slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="swiper__slide-wrap">
                                        <div className="feedbacks__text">
                                            <Quotes />
                                            <p className="first-p">
                                                {feedbacks[index].firstText}
                                            </p>
                                            <p className="second-p">
                                                {feedbacks[index].secondText}
                                            </p>
                                        </div>
                                        <div className="feedbacks__client">
                                            <div className="feedbacks__client-wrap">
                                                <div className="feedbacks__client-img">
                                                    <img
                                                        src={
                                                            feedbacks[index]
                                                                .clientImg
                                                        }
                                                        alt="#"
                                                    />
                                                </div>
                                                <div className="client__info">
                                                    <div className="client__name">
                                                        <h3>
                                                            {
                                                                feedbacks[index]
                                                                    .clientName
                                                            }
                                                        </h3>
                                                    </div>
                                                    <div className="client__subtitle">
                                                        <p>
                                                            {
                                                                feedbacks[index]
                                                                    .clientSubtitle
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- If we need navigation buttons --> */}
                        <div className="swiper-button-prev" onClick={prev}>
                            <DiagonalArrowWithBorderUp />
                        </div>
                        <div className="swiper-button-next" onClick={next}>
                            <DiagonalArrowWithBorderDown />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
