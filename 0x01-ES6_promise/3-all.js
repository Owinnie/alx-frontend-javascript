// eslint-disable-next-line
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((resp) => {
      let body = resp[0]['body'];
      let fName = resp[1]['firstName'];
      let lName = resp[1]['lastName'];
      console.log(`${body} ${fName} ${lName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
