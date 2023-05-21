import Image from "next/image";
import Amazing from "./(components)/Amazing";
import About from "./(components)/About";
import Featured from "./(components)/Featured";
import More from "./(components)/More";
import Service from "./(components)/Service";
import OurPartners from "./(components)/OurPartners";
import Feedback from "./(components)/Feedback";
import Creating from "./(components)/Creating";

export default function Home() {
    return (
        <main>
            <Amazing />
            <About />
            <Featured />
            <More />
            <Service />
            <OurPartners />
            <Feedback />
            <Creating />
        </main>
    );
}
