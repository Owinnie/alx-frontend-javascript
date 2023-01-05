// eslint-disable-next-line
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  let fName;
  let lName;
  let body;

  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((resp) => {
      body = resp[0].body;
      fName = resp[1].firstName;
      lName = resp[1].lastName;
      console.log(`${body} ${fName} ${lName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
