function getFirstName(fullName: string): string {
  const fullNameArr = fullName.split(" ");
  return fullNameArr[0];
}

export default getFirstName;
