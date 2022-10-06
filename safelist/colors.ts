export const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export const colorsSafelist = [
  ...colors.map((v) => `un-bg-${v}-500`),
  ...colors.map((v) => `un-hover:bg-${v}-700`),
];
