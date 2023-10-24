const miPromesa = new Promise((res, rej) => {
  setTimeout(() => {
    //rej("hubo un erro, no me devolvio la plata.")
    res("Me devolvio la plata.")
  }, 200)
})

// asdasd
miPromesa
  .then((info) => {
    console.log("then")
    console.log(info )
  })
  .catch((error) => {
    console.log("catch")
    console.log(error)
  })
  .finally(() => {
    console.log("si o si")
  })