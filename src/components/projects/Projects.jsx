import React from 'react'
import { Download, Features, SectionWrapper } from "..";
import assets from "../../assets";
import styles from "../../styles/Global";
const Projects = () => {
  return (
    <div>
    <SectionWrapper
    title=" Coding enthusiast turned Full Stack Developer passionately"
    description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
    showBtn
    mockupImg={assets.Admin_Panel}
    banner="banner"
  />
  <SectionWrapper
    title="Smart User Interface Marketplace"
    description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
    mockupImg={assets.Hoobank}
    banner="banner"
  />
  <SectionWrapper
    title="Deployment"
    description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
    mockupImg={assets.Commercil_Web}
    banner="banner"
  />

  <SectionWrapper
    title="Creative way to showcase the store"
    description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
    mockupImg={assets.youtube_web}
    banner="banner02"
  />
    </div>
  )
}

export default Projects