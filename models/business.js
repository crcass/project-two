module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Businesses', {
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    photo: DataTypes.STRING,
    bio: DataTypes.STRING,
    skillOne: DataTypes.STRING,
    skillTwo: DataTypes.STRING,
    skillThree: DataTypes.STRING,
    jobDescription: DataTypes.STRING,
    jobPosting: DataTypes.STRING,
  });
  return Business;
};
