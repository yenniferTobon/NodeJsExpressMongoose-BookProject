const serviceAuthe = require("../services/autheServices");

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

exports.signIn = async (req, res) => {
	const token = await serviceAuthe.signIn(req.body);
	if (!token) {
		res.status(401).send({ error: "Autenticación fallida" });
	}
	res.status(200).json({ token: token });
};
