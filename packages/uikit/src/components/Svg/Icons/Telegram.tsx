import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 260 260" {...props}>
<defs>
      <linearGradient
        id="a"
        x1={46.136}
        x2={28.836}
        y1={11.536}
        y2={51.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#37aee2" />
        <stop offset={1} stopColor="#1e96c8" />
      </linearGradient>
    </defs>
    <g transform="scale(3.4682)">
      <circle cx={34.6} cy={34.6} r={34.6} fill="url(#a)" />
      <path
        fill="#fff"
        d="m14.4 34.3 23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7c-1.7.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1c-3-.9-6.5-2.1-6.5-2.1s-2.4-1.5 1.7-3.1z"
      />
    </g>    </Svg>
  );
};

export default Icon;
