import React from "react";

const Page = ({ props }) => {
  <>{props.children}</>;
};

export async function getStaticProps() {
  let props = { car: "bmw" };
  if (Component.getInitalProps) {
    props = await Component.getInitalProps(ctx);
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props,
  };
}

export default Page;
