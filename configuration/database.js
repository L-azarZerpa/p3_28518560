
const db = require('./configDB.js');
const {
  selectImagesAndProducts,
  selectImagesAndProducts2,
<<<<<<< HEAD
  selectImagesAndProducts3,
  selectImagesAndProductsRating } = require("./consultas/selectImagesAndProduct")
=======
  selectImagesAndProducts3 } = require("./consultas/selectImagesAndProduct")
>>>>>>> 09b87dd2cd1815dc56f7c38c7b46fb722040e31c

const {
  insert,
  insertCategoria,
<<<<<<< HEAD
  insertImagen,
  insertRating,
 } = require("./consultas/insert")
=======
  insertImagen } = require("./consultas/insert")
>>>>>>> 09b87dd2cd1815dc56f7c38c7b46fb722040e31c

const {
  select,
  selectCategoria,
  selectCategoria2,
  select2,
  selectImagen,
<<<<<<< HEAD
  selectImagen2,
  selectratings,
  selectratings2,
  selectratings3
=======
  selectImagen2
>>>>>>> 09b87dd2cd1815dc56f7c38c7b46fb722040e31c
} = require("./consultas/select")

const {
  updateImg,
  updateCategoria,
  update
} = require("./consultas/update")

const {
  deletex,
  delete2,
  delete4,
  delete3
} = require("./consultas/delete")

module.exports = {
  insert,
  insertCategoria,
  insertImagen,
<<<<<<< HEAD
  insertRating,
=======
>>>>>>> 09b87dd2cd1815dc56f7c38c7b46fb722040e31c

  select,
  selectCategoria,
  selectCategoria2,
  select2,
  selectImagen,
  selectImagen2,
<<<<<<< HEAD
  selectratings,
  selectratings2,
  selectratings3,
=======
>>>>>>> 09b87dd2cd1815dc56f7c38c7b46fb722040e31c

  selectImagesAndProducts,
  selectImagesAndProducts2,
  selectImagesAndProducts3,
<<<<<<< HEAD
  selectImagesAndProductsRating,
=======
>>>>>>> 09b87dd2cd1815dc56f7c38c7b46fb722040e31c

  updateImg,
  updateCategoria,
  update,
  delete: deletex,
  delete2,
  delete4,
  delete3
}
























