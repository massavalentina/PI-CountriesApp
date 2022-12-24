const { DataTypes } = require('sequelize'); /* por medio de un destructuring traemos de sequelize el DataTypes
                                                para que nos lea el tipo de datos de los modelos*/
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define ('country', { //llamamos a sequelize y le pasammos el metodo define que es el que nos va a servir para definir el modelo, le pasamos 2 parametros, el primero es el nombre del modelo y el segundo las propiedades que va a tener el mismo por medio de un objeto, y la exportamos inmediatamente. 
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }, 

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },

    continents: {
      type: DataTypes.ENUM('South America', 'North America','Europe','Africa', 'Asia','Oceania','Antarctica'),
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },    

    subregion: {
      type:DataTypes.STRING,
      allowNull: true,
    },

    area: {
      type:DataTypes.FLOAT,
      allowNull: false,
    },

    population: {
      type:DataTypes.FLOAT,
      allowNull: false,
    }

  },
  {
     timestamps: false,
      }
  );
};