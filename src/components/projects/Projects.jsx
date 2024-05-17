import React from "react";
import { SectionWrapper } from "..";
import assets from "../../assets";
import styles from "../../styles/Global";
const Projects = () => {
  return (
    <div>
      <SectionWrapper
        title=" A Best responsive UIX React Admin Panel"
        description="Control you front-end and back-end components using a full Glory used Admin Panel and Track Business Movements as well as your system Administration."
        showBtn
        mockupImg={assets.Admin_Panel}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Bank Controller Web"
        description="Banking Web Generally Made for you Guys, available now made with smooth UI design."
        showBtn
        mockupImg={assets.Hoobank}
        banner="banner"
      />
      <SectionWrapper
        title="A Best Front-end E-Commerce Website that is fully-Stack Made."
        description="With a good MUI and MUIX framework that gives a bunch of reusable Components for your website."
        showBtn
        mockupImg={assets.Commercil_Web}
        banner="banner"
      />

      <SectionWrapper
        title="An -Youtube- Web Guide for Junior Developers "
        description="The app contains HTML and CSS that can be used by thousands of junior developers to increase and Boost to their Imaginations."
        showBtn
        mockupImg={assets.youtube_web}
        banner="banner02"
      />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          For More Projects Visit Us on{" "}
          <span className="font-bold">
            <a
              href="https://github.com/Uwihanganyeobed"
              className="text-green-500"
            >
              GitHub
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Projects;
