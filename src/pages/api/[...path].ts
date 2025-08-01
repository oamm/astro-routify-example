import {RouterBuilder} from "astro-routify";
import type {APIRoute} from "astro";
import routesGroup from "../../routes/CatalogsRoutes.ts";

const router = new RouterBuilder();
router.addGroup(routesGroup)

export const ALL: APIRoute = router.build();

