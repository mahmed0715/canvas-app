
import { renderToStaticMarkup } from "react-dom/server";

export const iconToImage = async (iconComponent) => {
  const svgString = renderToStaticMarkup(iconComponent);
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => {
      resolve(img);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });
};
