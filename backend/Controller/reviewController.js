const axios = require("axios");

exports.getReviews = async (req, res) => {
  try {
    const url = `https://places.googleapis.com/v1/places/${process.env.GOOGLE_PLACE_ID}`;

    const response = await axios.get(url, {
      headers: {
        "X-Goog-Api-Key": process.env.GOOGLE_API_KEY,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "Unable to fetch reviews",
    });
  }
};