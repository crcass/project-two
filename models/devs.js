module.exports = (sequelize, DataTypes) => {
  const Devs = sequelize.define('Devs', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    yearsExp: DataTypes.INTEGER,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    portfolio: DataTypes.STRING,
    bio: DataTypes.STRING,
    skillOne: DataTypes.STRING,
    skillTwo: DataTypes.STRING,
    skillThree: DataTypes.STRING,
    businessOne: DataTypes.STRING,
    businessTwo: DataTypes.STRING,
    businessThree: DataTypes.STRING,
  });
  return Devs;
};
