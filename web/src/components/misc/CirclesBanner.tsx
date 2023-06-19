import tw, { css } from "twin.macro";
import { Button, Logo } from "~/components";
import { api } from "~/utils/api";
import { useHydrateAtoms } from "jotai/utils";
import { seoAtom, useSeo } from "~/hooks/seo";
import { TwStyle } from "twin.macro";
import { useEffect, useState } from "react";

import React from "react";
import TehuanLogo from "./TehuanLogo";

const colorsSource = ["#f55", "#5f5", "#f5f", "#55f", "#5ff", "#ff5"];
function get_random<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)] as never;
}

interface CircleProps {
  color: string;
  id: string;
  visible: boolean;
}

const getColor = (
  color: string | undefined = get_random(colorsSource)
): CircleProps => ({
  color,
  id: String(Math.random()),
  visible: true,
});

const Circle: React.FC<{
  color: string;
  rotation: string;
  visible: boolean;
  distance: number;
}> = ({ color, rotation, visible, distance }) => {
  const [opacity, setOpacity] = useState(0);
  const [first, setFirst] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
      setTimeout(() => {
        setFirst(true);
      }, 3000);
    }, 1000);
  }, []);
  useEffect(() => {
    if (!visible) setOpacity(0);
  }, [visible]);
  return (
    <div
      style={{
        opacity,
        transform: `rotate(${rotation}) translate(0%, ${
          110 * distance * (opacity == 1 ? 1 : first ? 1.2 : 0.5)
        }%)`,
        backgroundColor: color,
        filter: `blur(${(16 * distance) / 3}px)`,
      }}
      css={[
        tw`w-[50%] aspect-square rounded-full absolute top-1/2 left-1/2`,
        css`
          transition: transform 2s ease-in-out, opacity 3s ease-out;
          transform-origin: 0% 0%;
        `,
      ]}
    ></div>
  );
};

const Layer: React.FC<{ distance: number }> = ({ distance }) => {
  const [colors, setColors] = useState<CircleProps[]>(
    Array(Math.floor(6 * distance * 0.8))
      .fill(0)
      .map(() => getColor())
  );
  const add = () => {
    setColors((colors) => {
      if (colors.length >= 7 * distance) return colors;
      return [...colors, getColor()];
    });
  };
  const remove = () => {
    if (colors.length <= 4 * distance) return colors;
    const index = Math.floor(Math.random() * colors.length);
    const id = colors[index]?.id;
    if (!id) return;
    setColors((colors) =>
      colors.map((circle) => ({
        ...circle,
        visible: circle.id !== id,
      }))
    );
    setTimeout(() => {
      setColors((colors) => colors.filter((color) => color.id !== id));
    }, 3000);
  };

  useEffect(() => {
    const i = setInterval(() => {
      const func = get_random([add, remove]);
      func();
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <div tw=" w-full h-screen max-w-[100vw] absolute">
      <div tw=" absolute w-[10rem] left-1/2 top-1/2 -translate-x-1/2 aspect-square -translate-y-[100%]">
        <div
          css={[
            tw`absolute w-[100%] aspect-square top-1/2 `,
            css`
              opacity: ${1 / (distance / 5)};
              transform-origin: 50% 50%;
              animation: spin ${15 * distance}s linear infinite;

              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `,
          ]}
        >
          {colors.map((color, index, list) => (
            <Circle
              key={color.id}
              color={color.color}
              visible={color.visible}
              distance={distance}
              rotation={(360 / list.length) * index + "deg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CirclesBanner = () => {
  return (
    <div tw="filter absolute w-full max-w-[100vw] h-[200%] top-0 overflow-hidden">
      <div tw="absolute -z-40 h-screen w-full flex items-center justify-center p-20 opacity-50">
        <TehuanLogo />
      </div>
      <div tw=" -z-30 blur-md w-full h-full ">
        <Layer distance={1} />
        <Layer distance={3} />
        <Layer distance={5} />
        <Layer distance={7} />
      </div>
    </div>
  );
};

export default CirclesBanner;
