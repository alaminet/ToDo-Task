const User = require("../models/userModel");

async function ProfileImgController(req, res) {
  const { userID, userImg } = req.body;
  if (!userImg || !userID) {
    return res.status(401).json({ message: "Avater Not Update !" });
  } else {
    const updatePic = await User.findByIdAndUpdate(
      userID,
      { $set: { avater: userImg } },
      { new: true }
    );
    await updatePic.save();
    return res.status(200).json({ updatePic, message: "Avater Updated !" });
  }
}

module.exports = ProfileImgController;
