import productJson from './product.json';
import blogJson from './blog.json';
/**

*/
function generateMockProductData(count, tag) {
  const products = productJson;
  if(tag && count ) {
    const filtered = products?.filter((item) => item.tags?.includes(tag));
    return filtered?.slice(0, count);
  }
 return products;
}

function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

export { generateMockProductData, generateMockBlogData };
