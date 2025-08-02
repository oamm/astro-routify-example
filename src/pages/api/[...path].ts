import {RouterBuilder, streamJsonND} from "astro-routify";
import type {APIRoute} from "astro";
import routesGroup from "../../routes/CatalogsRoutes.ts";
import ClockEvents from "../../routes/ClockEvents.ts";
import LogsRoutes from "../../routes/LogsRoutes.ts";
import UsersRoutes from "../../routes/UsersRoutes.ts";

const router = new RouterBuilder();
router.addGroup(routesGroup);
router.addRoute(ClockEvents);
router.addRoute(LogsRoutes);
router.addRoute(UsersRoutes);

export const ALL: APIRoute = router.build();

