import uploadPhoto from "./utils.js";
import createUser from "./utils.js";

export default function handleProfileSignup() {
  let fName;
  let lName;
  let body;
  
  const promise = Promise.all([photo, user]);
  promise
    .then((res) => {
      body = res[0].body;
      fName = res[1].firstName;
      lName = res[1].lastName;
      console.log('${body} ${fName} ${lName}');
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
