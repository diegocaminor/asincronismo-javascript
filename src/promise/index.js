const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey! todo va estar bien!');
    } else {
      reject('Ooops!');
    }
  })
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Super True')
      }, 2000)
    } else {
      const error = newError('It super failed')
      reject(error)
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err));

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((responses) => {
    console.log('Array of responses', responses)
    responses.forEach((result) => console.log('Resulting in', result))
  })
  .catch(error => console.error(error))