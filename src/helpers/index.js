/**
 * Pseudo-random string generator
 * http://stackoverflow.com/a/27872144/383904
 * Default: return a random alpha-numeric string
 *
 * @param {Integer} len Desired length
 * @param {String} an Optional (alphanumeric), "a" (alpha), "n" (numeric)
 * @return {String}
 */
export const randomString = (len, an) => {
  const option = an && an.toLowerCase();
  let str = '';
  const min = option === 'a' ? 10 : 0;
  const max = option === 'n' ? 10 : 62;
  for (let i = 0; i < len; i += 1) {
    let r = Math.floor(Math.random() * (max - min) + min);
    if (r > 9 && r < 36) {
      r += 55;
    } else if (r >= 36) {
      r += 61;
    } else if (r <= 9) {
      r += 48;
    }

    str += String.fromCharCode(r);
  }
  return str;
};

export const makeUserID = () => `U${randomString(9, 'n')}`;
export const makeExerciseID = () => `E${randomString(11, 'n')}`;
