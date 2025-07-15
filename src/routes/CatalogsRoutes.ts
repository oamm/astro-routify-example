import {defineHandler, defineRoute, HttpMethod, type Route, ok} from "astro-routify";

const EntryEndpoint: Route = defineRoute(
    HttpMethod.GET,
    '/',
    defineHandler(async (ctx) => {
        return ok({"message": "This is the API :D"});
    })
);

const ParamEndpoint: Route = defineRoute(
    HttpMethod.GET,
    '/:param',
    defineHandler(async ({params}) => {
        return ok({"the param is": params.param});
    })
);

const GendersEndpoint: Route = defineRoute(
    HttpMethod.GET,
    '/catalogs/genders',
    defineHandler(async (ctx) => {
        return ok([
            {value: 'Male', label: 'Male'},
            {value: 'Female', label: 'Female'},
        ]);
    })
);

const LegalPersonsEndpoint: Route = defineRoute(
    HttpMethod.GET,
    '/catalogs/legal-persons',
    defineHandler(async (ctx) => {
        return ok([
            {value: 'Physical', label: 'Individual'},
            {value: 'Legal', label: 'Legal Entity'},
        ]);
    })
);

const MonthsEndpoint: Route = defineRoute(
    HttpMethod.GET,
    '/catalogs/months',
    defineHandler(async (ctx) => {
        return ok([
            {value: 1, label: 'January'},
            {value: 2, label: 'February'},
            {value: 3, label: 'March'},
            {value: 4, label: 'April'},
            {value: 5, label: 'May'},
            {value: 6, label: 'June'},
            {value: 7, label: 'July'},
            {value: 8, label: 'August'},
            {value: 9, label: 'September'},
            {value: 10, label: 'October'},
            {value: 11, label: 'November'},
            {value: 12, label: 'December'},
        ]);
    })
);

const CatalogsRoutes: Route[] = [EntryEndpoint, ParamEndpoint, GendersEndpoint, LegalPersonsEndpoint, MonthsEndpoint];
export default CatalogsRoutes;
