import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import ShoppingImage from "images/groceries-shopping-2.jpeg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({textOnLeft = false}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const statistics = [
    {
      key: "Countries",
      value: "2",
    },
    {
      key: "Stores",
      value: "10",
    },
    {
      key: "Workers",
      value: "---",
    }
  ]

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={ShoppingImage} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>We have the best service.</Heading>
            <Description>Your premier destination for top-tier export and distribution of select fruits and vegetables, with a special emphasis on lemons. Experience unparalleled quality and freshness with every purchase. At Fresh Place, we pride ourselves on delivering excellence in every aspect, from carefully cultivated produce to seamless, reliable service. Elevate your culinary journey with our premium offerings and join us in promoting a sustainable and flavorful lifestyle. Choose Fresh Place for a vibrant, fresh, and delightful experience.</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
