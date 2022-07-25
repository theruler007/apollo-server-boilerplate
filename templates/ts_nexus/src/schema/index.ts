import { makeSchema } from "nexus";
import * as path from "path";
import * as Models from "./models";
import * as Mutations from "./mutations";
import * as Queries from "./queries";

const contextModule = path.join(process.cwd(), "src", "ctx.ts");
const buildPath = path.join(process.cwd(), "node_modules", "@types", "nexus-typegen", "index.d.ts");

const schema = makeSchema({
    types: [Models, Queries, Mutations],
    contextType: {
        export: "ctx",
        module: contextModule,
    },
    outputs: {
        typegen: buildPath,
    },
    nonNullDefaults: {
        input: true,
        output: true,
    },
});

export default schema;
