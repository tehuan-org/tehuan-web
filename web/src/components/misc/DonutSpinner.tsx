import React from "react";
import tw, { css } from "twin.macro";

const DonutSpinner = () => {
  return (
    <div
      tw=" rounded-full aspect-square w-[20rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      css={css`
        clip-path: url(#my-clip-path);
      `}
    >
      <svg className="svg">
        <defs>
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.500003 0.950003C0.748531 0.950003 0.950003 0.748531 0.950003 0.500003C0.950003 0.251475 0.748531 0.0500031 0.500003 0.0500031C0.251475 0.0500031 0.0500031 0.251475 0.0500031 0.500003C0.0500031 0.748531 0.251475 0.950003 0.500003 0.950003ZM0.5 0.75C0.638071 0.75 0.75 0.638071 0.75 0.5C0.75 0.361929 0.638071 0.25 0.5 0.25C0.361929 0.25 0.25 0.361929 0.25 0.5C0.25 0.638071 0.361929 0.75 0.5 0.75Z"
            ></path>
          </clipPath>
        </defs>
      </svg>

      <div
        tw=" -z-10 scale-150 w-[100%] absolute -top-1/2 left-1/2 aspect-square"
        css={css`
          transform-origin: 0% 100%;
          animation: spin 10s linear infinite;

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      >
        {Array(8)
          .fill(0)
          .map((color, index, array) => (
            <div
              key={index}
              css={[
                tw`aspect-square w-full opacity-100 absolute`,
                css`
                  background-color: rgba(
                    255,
                    255,
                    255,
                    ${(1 / array.length) * index}
                  );
                  transform-origin: 0% 100%;
                  transform: rotate(${(360 / array.length) * index}deg)
                    skewY(${-360 / array.length}deg);
                `,
              ]}
            />
          ))}
      </div>
    </div>
  );
};

export default DonutSpinner;
