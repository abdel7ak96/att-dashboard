import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke={props.color || '#657582'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.222}
      clipPath="url(#a)"
    >
      <path d="M10.49 2.155a1.667 1.667 0 0 0-1.177-.488H3.336a1.667 1.667 0 0 0-1.667 1.666V9.31c0 .442.176.866.489 1.178l7.253 7.254a2.022 2.022 0 0 0 2.85 0l5.483-5.484a2.022 2.022 0 0 0 0-2.85l-7.253-7.253Z" />
      <path
        fill={props.color || '#657582'}
        d="M6.253 6.667a.417.417 0 1 0 0-.834.417.417 0 0 0 0 .834Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
