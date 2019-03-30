module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    devId: DataTypes.INTEGER,
    company: DataTypes.STRING,
    interested: DataTypes.BOOLEAN,
    message: DataTypes.STRING,
  });
  return Contact;
};
