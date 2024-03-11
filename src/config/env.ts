import { cleanEnv, str } from "envalid"

// https://www.npmjs.com/package/envalid
const appEnv = cleanEnv(process.env, {
    NODE_ENV: str({
        choices: ["development", "test", "production", "staging"],
    }),
})

export default appEnv
