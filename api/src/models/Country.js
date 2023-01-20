const { DataTypes } = require('sequelize'); 

module.exports = (sequelize) => {
  
  sequelize.define('country', {
   
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag: { // anteriormente img
      type: DataTypes.STRING,
      allowNull: false
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    population: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },

    {
      timestamps: false,
    }

  );
};