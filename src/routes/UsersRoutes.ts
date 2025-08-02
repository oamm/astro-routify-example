// routes/users.ts
import { streamJsonArray } from 'astro-routify';

export default streamJsonArray('/users', async ({ response }) => {
    const fakeUsers = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        username: `user${i + 1}`,
    }));

    for (const user of fakeUsers) {
        response.send(user);
    }
    response.close();
});
