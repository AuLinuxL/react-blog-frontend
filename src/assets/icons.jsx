import React from "react";

export function Copy({width='20',height='20'}) {
  return (
    <svg
      className="copy-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#000"
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <g>
        <path d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"></path>
        <path d="M38.603 13.206H16.254a1.015 1.015 0 100 2.032h22.35a1.015 1.015 0 100-2.032zM38.603 21.333H16.254a1.015 1.015 0 100 2.032h22.35a1.015 1.015 0 100-2.032zM38.603 29.46H16.254a1.015 1.015 0 100 2.032h22.35a1.015 1.015 0 100-2.032zM28.444 37.587h-12.19a1.015 1.015 0 100 2.032h12.19a1.015 1.015 0 100-2.032z"></path>
      </g>
    </svg>
  );
}

export function User({width='20',height='20',onClick}) {
  return (
    <svg
      className="user-icon"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 21a7 7 0 1114 0M16 7a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
    </svg>
  );
}

export function Home({width='22',height='22'}) {
  return (
    <svg
      className="home-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715M15 18H9"
      ></path>
    </svg>
  );
}

export function Tag({width='22',height='22'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13.358 21c2.227 0 3.341 0 4.27-.533.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379 0-.914-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C16.699 4 15.585 4 13.358 4h-2.637C9.683 4 8.783 4 8 4.024m-4.296 1.22C2.5 6.49 2.5 8.495 2.5 12.5c0 4.007 0 6.01 1.204 7.255.998 1.033 2.501 1.209 5.196 1.239M7.5 7.995V17"
      ></path>
    </svg>
  );
}

export function Search({width='20',height='20'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#000" transform="translate(-256 -1139)">
          <path d="M269.46 1163.45c-6.29 0-11.389-5.01-11.389-11.2 0-6.19 5.099-11.21 11.389-11.21 6.29 0 11.39 5.02 11.39 11.21 0 6.19-5.1 11.2-11.39 11.2zm18.228 5.8l-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87 0-7.32-6.026-13.25-13.46-13.25-7.434 0-13.46 5.93-13.46 13.25 0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 008.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44z"></path>
        </g>
      </g>
    </svg>
  );
}

export function About({width='23',height='23'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.857 12a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0zm0 0v1.286a2.571 2.571 0 005.143 0V12a8.978 8.978 0 00-3-6.708M12 3a9 9 0 105.143 16.387"
      ></path>
    </svg>
  );
}

export function Face({width='40',height='40'}) {
  return (
    <svg
    className="face-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 246 246"
    >
      <g clipPath="url(#clip0_397_2943)">
        <g filter="url(#filter0_iii_397_2943)">
          <path
            fill="url(#paint0_radial_397_2943)"
            d="M0 115C0 51.487 51.487 0 115 0h12c65.722 0 119 53.278 119 119v8c0 65.722-53.278 119-119 119h-4C55.069 246 0 190.931 0 123v-8z"
          ></path>
        </g>
        <g filter="url(#filter1_i_397_2943)">
          <path
            fill="#C4C4C4"
            d="M101.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.088 18.088 0 0132.29-.902c2.349 4.351 6.18 8.591 11.123 8.591z"
          ></path>
          <path
            fill="#221725"
            d="M101.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.088 18.088 0 0132.29-.902c2.349 4.351 6.18 8.591 11.123 8.591z"
          ></path>
        </g>
        <g filter="url(#filter2_i_397_2943)">
          <path
            fill="#C4C4C4"
            d="M198.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.087 18.087 0 0132.291-.902c2.348 4.351 6.178 8.591 11.122 8.591z"
          ></path>
          <path
            fill="#221725"
            d="M198.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.087 18.087 0 0132.291-.902c2.348 4.351 6.178 8.591 11.122 8.591z"
          ></path>
        </g>
        <g filter="url(#filter3_iii_397_2943)">
          <path
            fill="#C4C4C4"
            d="M176.643 145.251L135.5 166.5l32.116 21.452c.252.169.379.253.478.318 12.835 8.39 30.137 2.728 35.529-11.625l.198-.54c.113-.31.17-.466.21-.581 5.316-15.091-6.114-30.835-22.109-30.454-.123.002-.288.008-.618.02l-4.661.161z"
          ></path>
          <path
            fill="url(#paint1_radial_397_2943)"
            d="M176.643 145.251L135.5 166.5l32.116 21.452c.252.169.379.253.478.318 12.835 8.39 30.137 2.728 35.529-11.625l.198-.54c.113-.31.17-.466.21-.581 5.316-15.091-6.114-30.835-22.109-30.454-.123.002-.288.008-.618.02l-4.661.161z"
          ></path>
        </g>
        <path
          fill="#000"
          fillOpacity="0.21"
          d="M160.443 152.907c1.992-2.145 5.745-1.321 7.062 1.293 1.333 2.645 3.243 5.723 5.835 8.352 3.595 3.648 10.227 7.621 14.94 10.207 2.272 1.247 2.368 4.567.124 5.865a4.2 4.2 0 01-4.303-.032c-3.507-2.145-10.503-6.6-14.668-10.437-4.153-3.826-7.489-8.175-9.339-10.79-.974-1.377-.798-3.222.349-4.458z"
        ></path>
        <g filter="url(#filter4_ii_397_2943)">
          <mask id="path-6-inside-1_397_2943" fill="#fff">
            <path d="M178.213 126.527c4.734.342 8.341 4.507 7.245 9.125-2.089 8.797-6.256 17.082-12.24 24.226-7.881 9.409-18.56 16.414-30.686 20.13a68.578 68.578 0 01-37.439.747c-9.341-2.456-17.933-6.845-25.164-12.804-3.697-3.047-3.248-8.623.486-11.625 3.414-2.744 8.335-2.293 11.791.399 5.1 3.972 11.055 6.915 17.496 8.608a50.432 50.432 0 0027.527-.549c8.915-2.733 16.767-7.883 22.562-14.802 3.933-4.695 6.799-10.062 8.46-15.768 1.308-4.494 5.294-8.024 9.962-7.687z"></path>
          </mask>
          <path
            stroke="url(#paint2_linear_397_2943)"
            strokeLinejoin="round"
            strokeWidth="22"
            d="M178.213 126.527c4.734.342 8.341 4.507 7.245 9.125-2.089 8.797-6.256 17.082-12.24 24.226-7.881 9.409-18.56 16.414-30.686 20.13a68.578 68.578 0 01-37.439.747c-9.341-2.456-17.933-6.845-25.164-12.804-3.697-3.047-3.248-8.623.486-11.625 3.414-2.744 8.335-2.293 11.791.399 5.1 3.972 11.055 6.915 17.496 8.608a50.432 50.432 0 0027.527-.549c8.915-2.733 16.767-7.883 22.562-14.802 3.933-4.695 6.799-10.062 8.46-15.768 1.308-4.494 5.294-8.024 9.962-7.687z"
            mask="url(#path-6-inside-1_397_2943)"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_iii_397_2943"
          width="278"
          height="326"
          x="-11"
          y="-24"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="8"
            result="effect1_innerShadow_397_2943"
          ></feMorphology>
          <feOffset dx="21" dy="73"></feOffset>
          <feGaussianBlur stdDeviation="24"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.682806 0 0 0 0 0.0652778 0 0 0 0 0.783333 0 0 0 0.14 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_397_2943"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-24"></feOffset>
          <feGaussianBlur stdDeviation="15.5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.943639 0 0 0 0 0.223611 0 0 0 0 0.958333 0 0 0 0.44 0"></feColorMatrix>
          <feBlend
            in2="effect1_innerShadow_397_2943"
            result="effect2_innerShadow_397_2943"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-11" dy="30"></feOffset>
          <feGaussianBlur stdDeviation="15.5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.766722 0 0 0 0 0.693056 0 0 0 0.68 0"></feColorMatrix>
          <feBlend
            in2="effect2_innerShadow_397_2943"
            result="effect3_innerShadow_397_2943"
          ></feBlend>
        </filter>
        <filter
          id="filter1_i_397_2943"
          width="67.502"
          height="34.5"
          x="40.835"
          y="81"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="26.45"
            result="effect1_innerShadow_397_2943"
          ></feMorphology>
          <feOffset dx="9.2" dy="-7"></feOffset>
          <feGaussianBlur stdDeviation="10.35"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_397_2943"></feBlend>
        </filter>
        <filter
          id="filter2_i_397_2943"
          width="67.502"
          height="34.5"
          x="137.835"
          y="81"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="26.45"
            result="effect1_innerShadow_397_2943"
          ></feMorphology>
          <feOffset dx="9.2" dy="-9"></feOffset>
          <feGaussianBlur stdDeviation="10.35"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_397_2943"></feBlend>
        </filter>
        <filter
          id="filter3_iii_397_2943"
          width="73.117"
          height="62.364"
          x="132.234"
          y="134.175"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4.355"></feOffset>
          <feGaussianBlur stdDeviation="5.444"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_397_2943"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-3.266" dy="4.355"></feOffset>
          <feGaussianBlur stdDeviation="2.178"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.29 0"></feColorMatrix>
          <feBlend
            in2="effect1_innerShadow_397_2943"
            result="effect2_innerShadow_397_2943"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-10.888"></feOffset>
          <feGaussianBlur stdDeviation="5.444"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.828932 0 0 0 0 0.0596354 0 0 0 0 0.954167 0 0 0 0.6 0"></feColorMatrix>
          <feBlend
            in2="effect2_innerShadow_397_2943"
            result="effect3_innerShadow_397_2943"
          ></feBlend>
        </filter>
        <filter
          id="filter4_ii_397_2943"
          width="108.281"
          height="56.495"
          x="77.374"
          y="126.505"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="26.45"
            result="effect1_innerShadow_397_2943"
          ></feMorphology>
          <feOffset dy="-20"></feOffset>
          <feGaussianBlur stdDeviation="7"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.3625 0 0 0 0 0.3625 0 0 0 0 0.3625 0 0 0 0.97 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_397_2943"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="26.45"
            result="effect2_innerShadow_397_2943"
          ></feMorphology>
          <feOffset dx="9.2" dy="-9"></feOffset>
          <feGaussianBlur stdDeviation="10.35"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix>
          <feBlend
            in2="effect1_innerShadow_397_2943"
            result="effect2_innerShadow_397_2943"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_397_2943"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(86.517 45.998 65.918) scale(230.426)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.576" stopColor="#FFBB0C"></stop>
          <stop offset="1" stopColor="#FFC907"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_397_2943"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(21.30728 45.3923 -37.5538 17.62787 158.989 162.419)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC4141"></stop>
          <stop offset="1" stopColor="#FF0F0F"></stop>
        </radialGradient>
        <linearGradient
          id="paint2_linear_397_2943"
          x1="87.398"
          x2="127.504"
          y1="115.298"
          y2="179.893"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#402C41"></stop>
          <stop offset="1" stopColor="#0C0B0E"></stop>
        </linearGradient>
        <clipPath id="clip0_397_2943">
          <path fill="#fff" d="M0 0H246V246H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}


export function Bell({width='23',height='23'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 6v4M7.5 19c.655 1.748 2.422 3 4.5 3 .245 0 .485-.017.72-.05M16.5 19a4.498 4.498 0 01-1.302 1.84M9.107 2.674A6.52 6.52 0 0112 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 00.692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.775 25.775 0 01-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 005.25 9.71v-.705c0-1.074.233-2.092.65-3.002"
      ></path>
    </svg>
  );
}