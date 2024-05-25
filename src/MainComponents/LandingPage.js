import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import SimpleContactUs from "components/forms/SimpleContactUs";
import WhatsappContact from "components/floating-buttons/WhatsappContact";

export default () => (
  <AnimationRevealPage>
    <WhatsappContact />
    <Hero />
    <Features />
    <SliderCard />
    <MainFeature />
    <Testimonial textOnLeft={true}/>
    <FAQ />
    <SimpleContactUs />
    <SubscribeNewsLetterForm />
    <Footer />
  </AnimationRevealPage>
);
