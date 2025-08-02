// routes/ticks.ts
import { streamJsonND } from 'astro-routify';

export default streamJsonND('/ticks', async ({ response, request }) => {
    const timer = setInterval(() => {
        response.send({ now: new Date().toISOString() });
    }, 1000);

    request.signal.addEventListener('abort', () => {
        clearInterval(timer);
        response.close();
    });
});
