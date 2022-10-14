// MIDDLEWARE FOR TOKEN AUTH
const jwtVerify = async (req, res) => {
  try {
    const {
      headers: { authorization },
    } = req;
    if (!authorization) throw new Error("Please login");
    const { _id } = jwt.verify(authorization, process.env.JWT_SECRET);
    req.userId = _id;
    next();
  } catch (err) {
    res.send(err);
  }
};
