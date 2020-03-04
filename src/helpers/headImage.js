const getHeadImage = (name, sex) => {
  let url;
  switch (name) {
    case 'Gregoire Vella':
      url = './assets/images/gregoire_vella.jpg';
      break;
    case 'Kelvin Liang':
      url = './assets/images/kelvin.jpg';
      break;
    default:
      switch (sex) {
        case 'male':
          url = './assets/images/male.jpg';
          break;
        case 'female':
          url = './assets/images/female.jpg';
          break;
        default:
          url = './assets/images/secret.png';
      }
  }
  return url;
};

export default getHeadImage;
