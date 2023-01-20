const { Activity} = require('../db.js');



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


const updateActivity = async (req, res) => {
	const { id } = req.params;
	const { name, difficulty, duration, season } = req.body;
	
	try {
	  await Activity.update(
		{
		name,
		difficulty,
		duration,
		season
		},
		{ where: 
			{ id: id } }
	  );
	  res.status(201).json({ msg: 'Updated information' });
	} catch (error) {
	  res.status(500).json({ msg: error.message });
	}
  };


module.exports = {
	postActivity,
	getActivities,
	deleteActivity,
	
}