const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    
    sequelize.define('activity', {
        
      name: {
          type: DataTypes.STRING,
          allowNull: false,
            validate: {
                isAName(value) {
                    const name = isAlphaNumeric(value)
                        if (name[0] === false)
                            { throw new Error(name[1])}
                }
            }
      },
      difficulty: {
          type: DataTypes.INTEGER,
          allowNull: false,
            validate: { max: 5, min: 1,}
      },
      duration: {
          type: DataTypes.STRING,
          allowNull: true
      },
      season: {
          type: DataTypes.STRING,
          allowNull: false,
            validate: {
                isIn: [['Verano', 'Otoño', 'Invierno','Primavera']]}
    }});
  }





