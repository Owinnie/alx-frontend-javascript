export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Intro to promises');
      reject('I have no use at this time');
    }, 300);
  });
}
