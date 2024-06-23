const validateProductInformation = (req, res, next) => {
  const {
    productThumbnail,
    productTitle,
    productDescription,
    productCost,
    onOffer,
  } = req.body;

  if (!productThumbnail) {
    return res
      .status(400)
      .json({ success: false, message: "productThumbnail required" });
  }
  if (!productTitle) {
    return res
      .status(400)
      .json({ success: false, message: "productTitle required" });
  }
  if (!productDescription) {
    return res
      .status(400)
      .json({ success: false, message: "productDescription required" });
  }
  if (productCost === null) {
    return res
      .status(400)
      .json({ success: false, message: "productCost required" });
  }
  if (onOffer === null) {
    return res
      .status(400)
      .json({ success: false, message: "onOffer required" });
  }

  next();
};

export { validateProductInformation };
