export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Intro to promises');
      reject(new Error('I have no use at this time'));
    }, 300);
  });
}
