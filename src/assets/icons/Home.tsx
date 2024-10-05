import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#657582"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
    />
    <path
      stroke={props.color || "#657582"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 22V12h6v10"
    />
  </svg>
);
export default SvgComponent;
