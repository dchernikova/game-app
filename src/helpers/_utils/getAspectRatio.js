export const getAspectRatio = (aspectRatio = [16, 9]) => {
  const [width, height] = aspectRatio;

  return (height / width) * 100;
};
