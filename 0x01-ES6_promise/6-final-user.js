// eslint-disable-next-line
import signUpUser from './4-user-promise.js';
// eslint-disable-next-line
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((res) => {
      const resArray = [];
      for (const r of res) {
        if (r.status === 'fulfilled') {
          resArray.push({ status: r.status, value: r.value });
	} else {
          resArray.push({ status: r.status, value: `Error: ${r.reason.message}` });
	}
      }
      return resArray
    });
}
