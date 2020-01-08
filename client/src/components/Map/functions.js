export const getAddress = address => {
  return address.split(",")[0].trim();
};

export const getCity = address => {
  return address.split(",")[1].trim();
};

export const getState = address => {
  return address
    .split(",")[2]
    .trim()
    .slice(0, 2);
};

export const getZipcode = address => {
  return address.split(",")[2].slice(-5);
};
