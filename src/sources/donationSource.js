export default function addDonation(payload) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/pay",
      {
          method: "POST",
          body: JSON.stringify( payload )
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          resolve(responseJson);
        } else {
          reject({
            error: true,
            message: 'Something crashed.'
          });
        }
      })
      .catch(err => console.log("catch login" + err))
    });
}
