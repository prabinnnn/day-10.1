const bcrypt = require("bcryptjs");
const router = require("express").Router();
encriptw = (userrole) => {
  return (req, res, next) => {
    userrole = req.body.string || req.header.string;
    const hasedpw = encriptw("password");
    if (!hasedpw) throw new Error("something msissing");
    next();
  };
};
checkrole = (sysrole) => {
  return (req, res, next) => {
    const sysrole = req.body.role || req.header.role;
    if (!userrole) throw new Error("missing role");
    const newrole = userrole.some((role) => sysrole.include(role));
    if (!newrole) throw new Error("permission denied");
    next();
  };
};
router.post("/user", checkrole(["user"]), encriptw, (req, res, next) => {
  try {
    const hasedpassword = bcrypt.hashSync(req.body.password, 10);
    res.json({ msg: hasedpassword });
    res.json({ msg: "access denied" });
  } catch (e) {
    next();
  }
});
router.get("/sys", checkrole(["sys"]), (req, res, next) => {
  try {
    res.json({ msg: "access " });
  } catch (e) {
    next();
  }
});
module.exports = router;
