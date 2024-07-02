import * as React from "react"
import { SVGProps } from "react"

const BoxingGloveSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="red"
      d="M19.32 3.36c-2.4-2.4-6.24-2.4-8.64 0-1.92 1.92-2.4 5.12-1.2 7.68-1.68.96-3.12 2.88-3.12 5.28 0 3.36 2.64 6 6 6s6-2.64 6-6c0-2.4-1.44-4.32-3.12-5.28 1.2-2.56.72-5.76-1.2-7.68zM8 14.4c0-1.92 1.68-3.6 3.6-3.6s3.6 1.68 3.6 3.6-1.68 3.6-3.6 3.6S8 16.32 8 14.4z"
    />
  </svg>
)
export default BoxingGloveSvg
