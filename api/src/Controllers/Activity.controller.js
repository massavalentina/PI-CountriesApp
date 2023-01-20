const { Activity, Country } = require('../db.js');



const postActivity = async (req, res) => {
	try{
		const { name, difficulty, duration, season, countries } = req.body;
		const newActivity = await Activity.create({
			name,
			difficulty,
			duration,
			season,
			countries,
		});
		await newActivity.addCountry(countries);
		
		res.status(200).send(newActivity, "The activity was succesfully created");
	} catch (error){
		res.status(404).send( {msg: error.message});
	}
}



const getActivities = async (req, res) => {
	try {
		const activities = await Activity.findAll();
		res.status(200).json(activities);
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

const deleteActivity = async (req, res) => {
	const { name } = req.params;
	try {
		await Activity.destroy({
			where: {
				name: name,
			},
		});
		res.status(200).send("The activity was successfully deleted");
	} catch (error) {
		res.status(404).json({ msg: error.message });
	};
};

const editActivity = async (req, res) => {
	try{
        const {id} = req.params;
        const {name,difficulty,duration,season,countries} = req.body;
        const editedAct = await Tours.findOne({ where:{id}});
		editedAct.set({
            name,difficulty,duration,season
        });
        await  editedAct.save();
        const countriesAct = await Country.findAll({
            where: {
                    name: countries,
              },
        });
		editedAct.addCountry(countriesAct);
        res.status(201).send("La actividad fue actualizada correctamente");
    }catch(error){
        res.status(404).send("La actividad no pudo ser actualizada");
    }
}

module.exports = {
	postActivity,
	getActivities,
	deleteActivity,
	editActivity
}