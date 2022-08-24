const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(logger(updatedUsers));
  })
}

const logger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Poly').then(logger);
toggleUserState(users, 'Lux').then(logger);