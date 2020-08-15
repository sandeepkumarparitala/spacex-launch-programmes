import * as React from "react";

function Loader(props) {
  return (
    <svg width={64} height={64} viewBox="0 0 128 128" {...props}>
      <rect width="100%" height="100%" fill="#FFF" />
      <g>
        <path d="M109.25 55.5h-36l12-12a29.54 29.54 0 00-49.53 12H18.75A46.04 46.04 0 0196.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0049.53-12h16.97A46.04 46.04 0 0131.1 96.16L18.74 108.5v-36z" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="720ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}

export default Loader;
