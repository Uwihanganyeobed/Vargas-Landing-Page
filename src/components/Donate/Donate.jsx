import React from "react";
import { SectionWrapper } from "..";
import assets from "../../assets";
import styles from "../../styles/Global";
const Donate = () => {
  return (
    <div>
          <SectionWrapper
        title="Donate"
        description="Thanks for supporting the Vargas Major Obed Tech channel!"
        showBtn
        mockupImg={assets.user}
        banner="banner"
      />
    </div>
  )
}

export default Donate