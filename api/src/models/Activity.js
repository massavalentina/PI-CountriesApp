const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     isAName(value) {
            //         const name = isAlphaNumeric(value)
            //         if (name[0] === false) { throw new Error(name[1]) }
            //     }
            // }
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: { max: 5, min: 1, },
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
            allowNull: false,
            // type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     isIn: [['Verano', 'Otoño', 'Invierno', 'Primavera']]
            // }
        },
        createdInDb:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }
    },
        {
            timestamps: false,
        }
    );
};