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
						url: Joi.string().max(50000),
						caption: Joi.string().max(50000),
						withBorder: Joi.boolean(),
						withBackground: Joi.boolean(),
						stretched: Joi.boolean(),
						text: Joi.string().max(50000),
						level: Joi.number().max(6),
						style: Joi.string().max(20),
						items: Joi.array().items(Joi.string().max(400))
					}).required()
				})
			)
			.required(),
		version: Joi.string().max(20)
	}).required(),
	metaDescription: Joi.string().required().max(50000),
	blogTitle: Joi.string().required().max(50000),
	blogImgURL: Joi.string().required().max(50000),
	blogImgDesc: Joi.string().required().max(50000),
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

export const quoteSchema = Joi.object({
	shutterType:Joi.string().required(),
	averageEstimateSquareFootage:Joi.number().required(),
	numberOfWindows:Joi.number().required(),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.messages({
			'string.base': 'Email should be a type of text',
			'string.empty': 'Email cannot be empty',
			'any.required': 'Email is a required field'
		}),
	name:Joi.string().required(),
	phoneNumber:Joi.number().required(),
	specificWindowDimensions:Joi.string().required(),
	avgCostPerWindow:Joi.string().required()
});

export const deleteQuoteSchema=Joi.object({
	ids:Joi.array().items(Joi.number().max(9999))
})