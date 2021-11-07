import { Rect, Svg } from "@react-pdf/renderer";

export const StickerSvg = ({
  width = 50,
  height = 50,
  bgColour = "red",
  bleed = 10,
}) => {
  const stickerSize = width - bleed * 2;

  return (
    <Svg width={width} height={height}>
      <Rect x={0} y={0} width={width} height={height} fill={bgColour} />
      <Rect
        x={bleed}
        y={bleed}
        width={stickerSize}
        height={stickerSize}
        fill={"green"}
      />
    </Svg>
  );
};
