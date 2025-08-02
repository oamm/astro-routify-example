import { streamJsonND } from 'astro-routify';

export default streamJsonND('/logs', async ({ response }) => {
    const logs = [
        { type: 'info', message: 'Starting process' },
        { type: 'progress', step: 1 },
        { type: 'progress', step: 2 },
        { type: 'done', success: true },
    ];

    for (const entry of logs) {
        response.send(entry);
        await new Promise((r) => setTimeout(r, 300)); // simulate delay
    }

    response.close();
});
