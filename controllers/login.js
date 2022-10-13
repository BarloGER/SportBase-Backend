// const bcrypt = require("bcrypt");
// const User = require("../models/Login");

// const getSingleUser = async (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body);
//   const user = await User.findOne(email).select("+password");
//   try {
//     // bcrypt.compare ist sicherer, verhindert timing Attacks
//     if (await bcrypt.compare(req.body.password, password)) {
//       res.send(Success);
//     }

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// module.exports = { getSingleUser };
