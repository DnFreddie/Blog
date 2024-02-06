import { z } from 'zod';
import { wrtieSpreadsheet } from '$lib';

const newsletterSchema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .min(1, { message: 'Name is required' })
        .max(64, { message: 'Name must be shorter than 64 characters' })
        .trim(),
    email: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' })
        .max(64, { message: 'Email must be shorter than 64 characters' })
        .email({ message: 'Email must be valid' }),
    message: z
        .string({ required_error: 'Message is required' })
        .min(1, { message: 'Message is required' })
        .max(200, { message: 'Message must be shorter than 200 characters' })
});

export const actions = {
	startNewssletter: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			newsletterSchema.parse(formData);
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
			return {
				data: formData,
				errors
			};
		}
		await wrtieSpreadsheet(formData, 'Arkusz1');
		return { success: true };
	}
};
