const miPromesa = new Promise((res, rej) => {
  setTimeout(() => {
    //rej("hubo un error, no me devolvio la plata.")
    res("Me devolvio la plata.")
  }, 1000)
})


async function getInfo () {
  try {
    const info = await miPromesa
    console.log(info)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("si o si")
  }
}

getInfo()
getInfo()
getInfo()
getInfo()