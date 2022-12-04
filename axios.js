const axios = require ("axios")

axios.get("https://crudcrud.com/api/faebf16b6f4849858a1440829ce4fc2d/user")
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
console.log(error)
})