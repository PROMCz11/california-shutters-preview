// src/routes/api/+server.js
import { json } from '@sveltejs/kit';

export async function  GET() {
    const message='hello zein shaban'
	return json({ message });
}
