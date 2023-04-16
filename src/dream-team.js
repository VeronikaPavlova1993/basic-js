const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false;

  const teamArr = [];
  members.forEach(item => {
    if (typeof item === 'string') {
      teamArr.push(item.trim().charAt(0).toUpperCase());
    };
  });
  const nameTeamSort = teamArr.sort();
  return nameTeamSort.join('');
};

/*function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const teamArr = [];
  members.forEach(member => {
    if (typeof member === 'string') {
      teamArr.push(member.trim().charAt(0).sort());
    };
    });
    return teamArr.toUpperCase().join('');
  }
  
*/
module.exports = {
  createDreamTeam
};
