function compareArrays(arr1, arr2) {
  
}

function getUsersNamesInAgeRange(users, gender) {
  

  const filteredUsers = users.filter(user => user.gender === gender);
  
  if (filteredUsers.length === 0) {
    return 0;
  }

  const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
  return totalAge / filteredUsers.length;
}







  
