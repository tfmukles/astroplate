import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getPageData = (filePath: string) => {
  const pageData = fs.readFileSync(path.join(filePath), "utf-8");
  const pageDataParsed = matter(pageData as any);

  let data = pageDataParsed.data;

  return {
    data,
  };
};
