import { Profile, ValidateProfileError, ValidateProfileErrorType } from '../../types/profile';


export function validateProfileData(profile?: Profile)
{
  if (!profile) return [ValidateProfileError.NO_DATA];

  const {
    firstname,
    lastname,
    age,
  } = profile;

  const errors: ValidateProfileErrorType[] = [];

  if (!firstname || firstname.trim() === '' || !lastname || lastname.trim() === '')
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);

  if (!age || !Number.isInteger(age))
    errors.push(ValidateProfileError.INCORRECT_AGE);

  return errors;
}