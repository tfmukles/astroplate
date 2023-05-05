const transition = { type: "spring", stiffness: 80, damping: 20, mass: 0.8 };

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition,
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition,
  },
};

export const fadeInTop = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      damping: 8,
      stiffness: 50,
    },
  },
};

export const fadeInBottom = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      damping: 8,
      stiffness: 50,
    },
  },
};
