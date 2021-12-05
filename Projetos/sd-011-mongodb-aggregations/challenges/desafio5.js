db.movies.aggregate([{
  $match: {
    $and: [
      { countries: "USA" },
      { "tomatoes.viewer.rating": { $gte: 3 } },
      { cast: { $exists: true } },
    ],
  },
}, {
  $addFields: {
    list_favorites: [
      "Sandra Bullock",
      "Tom Hanks",
      "Julia Roberts",
      "Kevin Spacey",
      "George Clooney",
    ],
  },
}, {
  $addFields: {
    intersction_list: {
      $setIntersection: ["$list_favorites", "$cast"],
    },
  },
}, {
  $addFields: {
    num_favs: {
      $size: "$intersction_list",
    },
  },
}, {
  $sort: {
    num_favs: -1,
    "tomatoes.viewer.rating": -1,
    title: -1,
  },
}, {
  $skip: 24,
}, {
  $limit: 1,
}, {
  $project: {
    _id: 0,
    title: 1,
  },
}]);