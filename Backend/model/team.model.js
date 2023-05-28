module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      teamname: String,
      playername: String,
      score: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { _v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Team = mongoose.model("team", schema);
  return Team;
};
