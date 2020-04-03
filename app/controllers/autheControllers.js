const serviceAuthe = require("../services/userServices");

//function register(req, res) {
//    serviceAuthe
//        .create(req.body)
//        .then(() => res.json({}))
//        .catch(err => next(err));
//}

//exports.singUp = async (req, res) => {
//    const user = await serviceAuthe.signUp(req.body);
//    return res.status(201).send(user);
//};
//exports.signUp = async (req, res) => {
//	try {
//		const user = await serviceAuthe.createUser(req.body);
//		if (!user) {
//			return res
//				.status(500)
//				.send({ error: "El usuario no ha podido ser creado" });
//		}
//		return res.status(201).send(user);
//	} catch (err) {
//		console.log(err);
//		res.status(500).send({ error: err.message });
//	}
//};

exports.signUp = async (req, res) => {
	const user = await (await serviceAuthe.createUser(req.body)).toObject();
	serviceAuthe
		.createUser(req.body)
		.then(resul => {
			delete user.password;
			res.status(201).send(user);
		})
		.catch(err => {
			res.status(500).send({ error: "El usuario no ha podido ser creado" });
		});
};
