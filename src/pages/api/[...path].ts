import {RouterBuilder} from "astro-routify";
import CatalogsRoutes from "../../routes/CatalogsRoutes.ts";
import type {APIRoute} from "astro";

const router = new RouterBuilder();
router.register(CatalogsRoutes);

export const ALL: APIRoute = router.build();

