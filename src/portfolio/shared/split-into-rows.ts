export const splitIntoRows = <T>(items: T[], maxItemsPerRow: number): T[][] => {
  const rows: T[][] = [];

  for (let i = 0; i < items.length; i += maxItemsPerRow) {
    rows.push(items.slice(i, i + maxItemsPerRow));
  }

  return rows;
};
