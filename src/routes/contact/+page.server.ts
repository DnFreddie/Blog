import { z } from 'zod';
import { wrtieSpreadsheet } from '$lib';
const newsletterSchema = z.object({
	name: z
		.string({ required_error: 'Imię jest wymagane' })
		.min(1, { message: 'Imię jest wymagane' })
		.max(64, { message: 'Imię musi być krótsze niż 64 znaki' })
		.trim(),
	email: z
		.string({ required_error: 'Email jest wymagany' })
		.min(1, { message: 'Email jest wymagany' })
		.max(64, { message: 'Email musi być krótszy 64 znaki' })
		.email({ message: 'Email musi być prawidłowy' }),
	message: z
		.string({ required_error: 'Wiadomość jest wymagana' })
		.min(1, { message: 'Wiadomość jest wymagana' })
		.max(200, { message: 'Wiadomość musi być krótsza niż 200 znaków' })
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
