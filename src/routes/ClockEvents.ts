// routes/ClockEvents.ts
import { stream } from 'astro-routify';

export default stream('/clock', async ({ response }) => {
    let count = 0;
    const interval = setInterval(() => {
        response.write(`data: ${new Date().toISOString()}\n\n`);
        if (++count === 5) {
            clearInterval(interval);
            response.close();
        }
    }, 1000);
});
