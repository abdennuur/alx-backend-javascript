import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let rslt = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    rslt = { photo, user };
  } catch (err) {
    rslt = { photo: null, user: null };
  }
  return rslt;
}
