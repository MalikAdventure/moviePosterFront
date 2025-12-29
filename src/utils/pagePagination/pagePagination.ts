export const getPageCount = (totalCount: number, limit: number) => {
  const pagesCount = Math.ceil(totalCount / limit);
  return pagesCount;
};

export const getPageArray = (totalPages: number) => {
  const result: number[] = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
