export const hospitalSettingsQuery = `*[_type=="hospitalSettings"][0]{
  hospitalName,
  logo,
  phone,
  emergencyNumber,
  ambulanceNumber
}`;