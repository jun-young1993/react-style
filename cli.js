import { parseArgs } from "util";

(() => {

    const options = {
        path: {
            type: 'string',
            default: '.'
        },
    };
    const {values, positionals} = parseArgs({options});
    console.log(values, positionals);
    console.log('[start]');
})();