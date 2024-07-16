window.onload = () => {
  let prom = new Promise((resolve, reject) => {
    let data = fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );

    if (data) {
      resolve(data);
    } else {
      reject();
    }
  });

  let data = prom
    .then((data) => {
      console.log(data, "this is data inside then");
    })
    .catch(() => {
      console.log("Broken link");
    });
  console.log(data, "x");
};
