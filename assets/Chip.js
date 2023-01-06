import * as React from "react"
import Svg, {
  Defs,
  Path,
  ClipPath,
  Use,
  G,
  LinearGradient,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Chip(props) {
  return (
    <Svg
      id="katman_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      xmlSpace="preserve"
      enableBackground="new 0 0 500 500"
      {...props}
    >
      <Defs>
        <Path
          id="SVGID_1_"
          d="M356.3 340.6H127.7c-15.5 0-28-12.5-28-28V163.2c0-15.5 12.5-28 28-28h228.6c15.5 0 28 12.5 28 28v149.4c0 15.5-12.5 28-28 28z"
        />
      </Defs>
      <ClipPath id="SVGID_00000144297575341936717590000012659426120162362020_">
        <Use xlinkHref="#SVGID_1_" overflow="visible" />
      </ClipPath>
      <G
        id="OBJECTS"
        clipPath="url(#SVGID_00000144297575341936717590000012659426120162362020_)"
      >
        <LinearGradient
          id="SVGID_00000081636103889026904940000008557858141167158975_"
          gradientUnits="userSpaceOnUse"
          x1={96.96}
          y1={262.0148}
          x2={387}
          y2={262.0148}
          gradientTransform="matrix(1 0 0 -1 0 499.89)"
        >
          <Stop offset={0} stopColor="#ffffc7" />
          <Stop offset={0.578} stopColor="#ffcb68" />
          <Stop offset={1} stopColor="#f5e08f" />
        </LinearGradient>
        <Path
          d="M387 137.8V338c0 2.5-2 4.6-4.5 4.6h-281c-2.5 0-4.5-2-4.5-4.6V137.8c0-2.5 2-4.5 4.5-4.5h281c2.5-.1 4.5 1.9 4.5 4.5z"
          fill="url(#SVGID_00000081636103889026904940000008557858141167158975_)"
        />
        <Path
          d="M309.5 200.9c-18.1 0-32.8-14.7-32.8-32.8 0-18.1 14.7-32.8 32.8-32.8v-2.1h-12.3c-13.7 4.8-23.7 17.6-24.6 32.8h-61.3c-.9-15.2-10.9-27.9-24.6-32.8h-12.3v2.1c18.1 0 32.8 14.7 32.8 32.8 0 18.1-14.7 32.8-32.8 32.8H97v73.9h77.5c18.1 0 32.8 14.7 32.8 32.8 0 18.1-14.7 32.8-32.8 32.8v2.1h12.2c13.7-4.8 23.8-17.6 24.6-32.8h61.3c.9 15.2 10.9 28 24.6 32.8h12.2v-2.1c-18.1 0-32.8-14.7-32.8-32.8 0-18.1 14.7-32.8 32.8-32.8H387v-73.9h-77.5zM99 270.7v-65.6h75.4c18.1 0 32.8 14.7 32.8 32.8 0 18.1-14.7 32.8-32.8 32.8H99zm173.6 34.9h-61.3c-.9-15.2-10.9-28-24.7-32.8 14.4-5 24.8-18.7 24.8-34.9S201 208 186.6 203c13.8-4.8 23.9-17.6 24.7-32.8h61.3c.9 15.2 10.9 28 24.7 32.8-14.4 5-24.8 18.7-24.8 34.9 0 16.1 10.4 29.9 24.8 34.9-13.7 4.8-23.8 17.5-24.7 32.8zm112.3-34.9h-75.4c-18.1 0-32.8-14.7-32.8-32.8 0-18.1 14.7-32.8 32.8-32.8h75.4v65.6z"
          fill="#d8a960"
        />
        <Path
          d="M387 137.8V338c0 2.5-2 4.6-4.5 4.6h-281c-2.5 0-4.5-2-4.5-4.6V137.8c0-2.5 2-4.5 4.5-4.5h281c2.5-.1 4.5 1.9 4.5 4.5z"
          fill="none"
          stroke="#d8a960"
          strokeWidth={0.6629}
          strokeMiterlimit={10}
        />
      </G>
    </Svg>
  )
}

export default Chip
