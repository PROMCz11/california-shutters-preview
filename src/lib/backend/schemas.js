import Joi from 'joi';

export const blogSchema = Joi.object({
	rawBlog: Joi.object({
		time: Joi.number().required().max(10000000000000),
		blocks: Joi.array()
			.items(
				Joi.object({
					id: Joi.string().required(),
					type: Joi.string().required(),
					data: Joi.object({
						url: Joi.string().max(200),
						caption: Joi.string().max(200),
						withBorder: Joi.boolean(),
						withBackground: Joi.boolean(),
						stretched: Joi.boolean(),
						text: Joi.string().max(20000),
						level: Joi.number().max(10),
						style: Joi.string().max(20),
						items: Joi.array().items(Joi.string().max(200))
					}).required()
				})
			)
			.required(),
		version: Joi.string().max(8).required()
	}).required(),
	metaDescription: Joi.string().required().max(300),
	blogTitle: Joi.string().required().max(300),
	blogImgURL: Joi.string().required().max(300),
	blogImgDesc: Joi.string().required().max(300),
	tags: Joi.array().items(Joi.string().max(50))
});

export const adminSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.messages({
			'string.base': 'Email should be a type of text',
			'string.empty': 'Email cannot be empty',
			'any.required': 'Email is a required field'
		}),
	password: Joi.string().required().min(6).max(50).messages({
		'string.base': 'Password should be a type of text',
		'string.empty': 'Password cannot be empty',
		'string.min': 'Password should have a minimum length of 6',
		'string.max': 'Password should have a maximum length of 50',
		'any.required': 'Password is a required field'
	})
});

export const deleteBlogSchema=Joi.object({
	ids:Joi.array().items(Joi.number().max(9999))
})