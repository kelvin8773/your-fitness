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
export const makeActivityID = () => `A${randomString(11, 'n')}`;

export const formatDate = (timestamp, format = 'S') => {
  const LONG_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const x = new Date(timestamp);
  const dd = x.getDate();
  const mm = format === 'L' ? LONG_MONTHS[x.getMonth()] : SHORT_MONTHS[x.getMonth()];
  const yyyy = x.getFullYear();

  return `${mm} ${dd} ${yyyy}`;
};

export const formatTime = timestamp => {
  const x = new Date(timestamp);
  const hh = x.getHours();
  const mm = x.getMinutes();
  return `${hh}:${mm}`;
};

export const showMessage = msg => msg + 1;
