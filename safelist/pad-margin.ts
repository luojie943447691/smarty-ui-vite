export const range: number = 100;

export const pySafelist: string[] = [];
export const pxSafelist: string[] = [];

for (let i = 0; i <= range; i += 0.5) {
  pySafelist.push(`un-py-${i}`);
  pxSafelist.push(`un-px-${i}`);
}
