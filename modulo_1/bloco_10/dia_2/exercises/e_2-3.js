const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = async (id) => {
  try {
    return await users[id];
  } catch (error) {
    return reject({ error: 'User with ' + id + ' not found.' });
  }
};

const getUserName = async (userID) => {
  const { name } = await findUserById(userID);
  return name;
};

// getUserName(5).then(e => console.log(e));

module.exports = { getUserName };
