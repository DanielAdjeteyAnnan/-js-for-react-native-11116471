function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index]
    }));
  }
  
  const names = ['elantra', 'car', 'year', 'date', 'energy', 'MONEY'];
  const modifiedNames = ['ELANTRA', 'CAR', 'year', 'DATE', 'ENERGY', 'MONEY'];
  
  const userProfiles = createUserProfiles(names, modifiedNames);
  console.log(userProfiles);