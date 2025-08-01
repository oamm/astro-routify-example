import {defineHandler, defineRoute, HttpMethod, type Route, ok, defineGroup} from "astro-routify";

const routesGroup = defineGroup('/');

routesGroup.addGet('/', (ctx) => {
    return ok({"message": "This is the API :D"});
})

routesGroup.addGet('/:param', async ({params}) => {
    return ok({"the param is": params.param});
});
routesGroup.addGet('/catalogs/genders', (ctx) => {
    return ok([
        {value: 'Male', label: 'Male'},
        {value: 'Female', label: 'Female'},
    ]);
});

routesGroup.addGet('/catalogs/legal-persons', async (ctx) => {
    return ok([
        {value: 'Physical', label: 'Individual'},
        {value: 'Legal', label: 'Legal Entity'},
    ]);
});
routesGroup.addGet('/catalogs/months', async (ctx) => {
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
});
export default routesGroup;
