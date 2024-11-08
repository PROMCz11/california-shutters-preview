import { json } from '@sveltejs/kit';
import { quoteSchema } from '../../../../lib/backend/schemas';

export const POST = async ({ request, platform }) => {
	try {
		const data = await request.json();
		const { error, value } = quoteSchema.validate(data);
		if (error) {
			throw new Error(error.details[0].message);
		}
		const date=Date.now();
		await platform.env.DB.prepare(
			`INSERT INTO quotes(shutterType,averageEstimateSquareFootage,numberOfWindows,email,name,phoneNumber,specificWindowDimensions,avgCostPerWindow,date) VALUES ( ?,?,?,?,?,?,?,?,? )`
		)
			.bind(
				value.shutterType,
				value.averageEstimateSquareFootage,
				value.numberOfWindows,
				value.email,
				value.name,
				value.phoneNumber,
				value.specificWindowDimensions,
				value.avgCostPerWindow,
				date
			)
			.run();
		return json({ status: true, data: null });
	} catch (error) {
		return json({ status: false, message: error.message });
	}
};
