const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize');

const postActivity = async (req, res) => {
	const { name, difficulty, duration, season, countries } = req.body;
	try {
		if (name && difficulty && duration && season && countries) {
			const activity = {
				name,
				difficulty,
				season,
				duration,
			};
			const createdActivity = await Activity.create(activity);
			const infoCountriesName = await Country.findAll({
				where: {
					name: countries,
				},
				include: Activity
			})
			infoCountriesName?.map(a => a.addActivity(createdActivity));
			res.status(200).send("Se creo correctamente la Actividad");
		} else {
			res.status(404).send("Missing parameters");
		};
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error });
	};
}

const getActivities = async (req, res) => {
	try {
		const activities = await Activity.findAll();
		res.status(200).json(activities);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

const deleteActivity = async (req, res) => {
	const { id } = req.params;
	try {
		await Activity.destroy({
			where: {
				id: id,
			},
		});
		res.status(200).send("The activity was successfully deleted");
	} catch (error) {
		res.status(500).json({ msg: error.message });
	};
};

module.exports = {
	postActivity,
	getActivities,
	deleteActivity
}