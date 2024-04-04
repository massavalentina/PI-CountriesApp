const { Country, Activity } = require("../db.js");
const axios = require("axios");

const getCountries = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      let BD = await Country.findAll({
        attributes: ["id", "name", "flag", "continent", "population"],
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: {
            attributes: [],
          },
        },
      });
      if (BD.length > 0) {
        return res.status(200).send(BD);
      } else {
        const allCountries = await axios.get(
          "https://restcountries.com/v3/all"
        );
        const pais = allCountries.data.map((p) => {
          return {
            id: p.cca3,
            name: p.name.common,
            flag: p.flags[0],
            continent: p.continents[0],
            capital: p.capital != null ? p.capital[0] : "No data",
            subregion: p.subregion,
            area: p.area,
            population: p.population,
          };
        });
        await Country.bulkCreate(pais, { validate: true });
        let BD = await Country.findAll({
          attributes: ["id", "name", "flag", "continent", "population"],
          include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
              attributes: [],
            },
          },
        });
        return res.status(200).send(BD);
      }
    }
    let allCountries = await Country.findAll({ include: Activity });
    let countriesName = allCountries.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    return countriesName.length
      ? res.status(200).send(countriesName)
      : res.status(404).send("Country invalid");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    let allCountries = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });
    let countriesId = allCountries.filter((el) =>
      el.id.toLowerCase().includes(id.toLowerCase())
    );
    return countriesId.length
      ? res.status(200).send(countriesId)
      : res.status(404).send("Id invalid");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getCountries,
  getCountryById,
};
