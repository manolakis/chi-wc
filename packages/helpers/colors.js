const luminance = (r, g, b) => {
  const a = [r, g, b].map(v => {
    const value = v / 255;

    return value <= 0.03928
      ? value / 12.92
      : // eslint-disable-next-line no-restricted-properties
        Math.pow((value + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const getContrast = (rgb1, rgb2) => {
  const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

export const convertToRGB = hex => {
  const aRgbHex = hex.substring(1).match(/.{1,2}/g);

  return [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
};
