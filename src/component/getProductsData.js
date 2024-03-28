export const getProducts = async () => {
  // let url = 'https://my-json-server.typicode.com/shanghanrun/hm_shopping/products';
  let url = 'http://localhost:5000/products';
  let response = await fetch(url);
  let data = await response.json();
  return [...data];
};




  