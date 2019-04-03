module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contacts', {
    devId: DataTypes.INTEGER,
    company: DataTypes.STRING,
    interested: DataTypes.BOOLEAN,
    msgSubject: DataTypes.STRING,
    message: DataTypes.STRING,
    jobPosting: DataTypes.STRING,
  });
  Contact.associate = models => {
    Contact.belongsTo(models.Devs, {
      foreignKey: 'devId',
      allowNull: false,
    });
  };
  return Contact;
};
