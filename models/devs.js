module.exports = (sequelize, DataTypes) => {
  const Devs = sequelize.define('Devs', {
    name: {
      type: DataTypes.STRING,
      is: /^[a-z]+$/i,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      is: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      allowNull: false,
    },
    yearsExp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING,
      is: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      allowNull: false,
    },
    linkedin: {
      type: DataTypes.STRING,
      is: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      allowNull: false,
    },
    portfolio: {
      type: DataTypes.STRING,
      is: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skillOne: DataTypes.STRING,
    skillTwo: DataTypes.STRING,
    skillThree: DataTypes.STRING,
    businessOne: DataTypes.STRING,
    businessTwo: DataTypes.STRING,
    businessThree: DataTypes.STRING,
  });
  return Devs;
};
