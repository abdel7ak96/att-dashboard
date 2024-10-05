import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color || "#657582"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 16.5H3a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v4m-6 6 2 2 4-4"
    />
  </svg>
);
export default SvgComponent;
