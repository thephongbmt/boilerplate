import {
	findUserByEmailAndPassWordService,
	getUserService
} from '../services/user';
export const getUserController = async (req, res, next) => {
	try {
		let user = await getUserService();
		return res.SUCCESS(user);
	} catch (err) {
		return next(res.ERROR(err));
	}
};

export const loginController = async (req, res, next) => {
	try {
		let email = req.params.email;
		let password = req.params.password;
		let user = await findUserByEmailAndPassWordService({email, password});
		if (user) {
			return res.SUCCESS({message: 'login success'});
		}
		return res.ERROR('Login fail');
	} catch (err) {
		return next(res.ERROR(err));
	}
};
