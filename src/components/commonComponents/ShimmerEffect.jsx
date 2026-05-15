import React from "react";
import { ShimmerSocialPost } from "react-shimmer-effects";

const ShimmerEffect = () => {
  return (
    <div>
      <ShimmerSocialPost type="image" />
      <ShimmerSocialPost type="both" />
      <ShimmerSocialPost type="text" />
      <ShimmerSocialPost type="text" title />
    </div>
  );
};

export default ShimmerEffect;
