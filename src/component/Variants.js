//fade in

export const fadeIn = (direction, delay, scale) => {
  return {
    hidden: {
      opacity: 0,
      scale: scale,
      y: direction === "up" ? 40 : direction === "down" ? -90 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      scale: 1,
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
