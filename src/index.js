module.exports = function check(str, bracketsConfig) {
  let array = [];
  let fig = 0;

  for (let i =0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
              
          }
      }
  }
}
