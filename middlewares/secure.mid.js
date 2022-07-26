module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.user.admin) {
    next();
  } else {
    res.redirect("/main");
  }
};
// module.exports.isCurrentUser = (req, res, next) => {
//   if (req.user.admin) {
//     next();
//   } else {
//     res.redirect("/main");
//   }
// };
