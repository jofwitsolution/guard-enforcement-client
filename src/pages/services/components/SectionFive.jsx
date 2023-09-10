import React, { useContext, useEffect, useRef } from "react";
import { images } from "../../../constants/images";
import styles from "../../../styles/tailwind";
import { BiChevronRight } from "react-icons/bi";
import { GlobalContext } from "../../../providers/ContextProvider";

const SectionFive = () => {
  const { setGetStarted } = useContext(GlobalContext);

  const surveilanceRef = useRef(null);
  const crowdControlRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;

    switch (hash) {
      case "#surveilance-and-alarm":
        if (surveilanceRef.current) {
          surveilanceRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "#crowd-control":
        if (crowdControlRef.current) {
          crowdControlRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      // Handle more cases for additional sections if needed
      default:
        break;
    }
  }, []);

  return (
    <section className="mt-16 sm:mt-24 lg:mt-32">
      <div className={`${styles.maxWidth}`}>
        <div
          ref={surveilanceRef}
          id="surveilance-and-alarm"
          className="mb-[80px] flex flex-col md:flex-row justify-between items-center md:items-start gap-[25px]"
        >
          <div className="md:w-[45%]">
            <h2 className="font-[700] text-[30px] leading-[40px] mb-6">
              Surveillance and Alarm System Installation
            </h2>
            <p>
              At our company, we take pride in offering a comprehensive array of
              cutting-edge surveillance and alarm systems meticulously crafted
              to safeguard your property and valuable assets. Our unwavering
              commitment to security is reflected in our state-of-the-art
              solutions, meticulously designed with your convenience in mind.
              With a focus on user-friendliness and seamless operation, we
              provide you with the peace of mind you deserve when it comes to
              protecting what matters most. Choose our expertise, and elevate
              your security to the next level.
            </p>
            <div className="mt-4">
              <button
                onClick={() => setGetStarted(true)}
                className={`${styles.buttonOne} text-white`}
              >
                Book Service
                <BiChevronRight fontSize={20} className="xxs:text-[18px]" />
              </button>
            </div>
          </div>
          <div className="md:w-[50%]">
            <img
              src={images.geComputers}
              alt="Surveilance room"
              className="w-full rounded-md"
            />
          </div>
        </div>
        <div
          ref={crowdControlRef}
          id="crowd-control"
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-[25px]"
        >
          <div className="md:w-[50%]">
            <img
              src={images.crowdControl}
              alt="Surveilance room"
              className="w-full rounded-md"
            />
          </div>
          <div className="md:w-[45%]">
            <h2 className="font-[700] text-[30px] leading-[40px] mb-6">
              Crowd Control and Event Management
            </h2>
            <p>
              Our experienced team specializes in the meticulous management of
              crowds, guaranteeing the safety and security of event attendees,
              regardless of the event's scale. With a broad array of resources
              at our disposal, we offer services ranging from highly-trained
              security personnel to strategically placed crowd control barriers
              and top-of-the-line equipment, all meticulously orchestrated to
              ensure the seamless flow and utmost safety of your event. Trust us
              to deliver an exceptional event management experience, where every
              detail is handled with precision and professionalism.
            </p>
            <div className="mt-4">
              <button
                onClick={() => setGetStarted(true)}
                className={`${styles.buttonOne} text-white`}
              >
                Book Service
                <BiChevronRight fontSize={20} className="xxs:text-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
