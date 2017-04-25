export default function getCharitiesList() {
    return new Promise((resolve, reject) => {
       fetch('http://localhost:5000/charity')
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson) {
            resolve(responseJson && responseJson._items);
          } else {
            reject({
              error: true,
              message: 'Something crashed.'
            });
          }
        })
        .catch(err => console.log("catch login" + err))
    })
  }
