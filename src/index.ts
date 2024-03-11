import Person from "@/models/person"
import appEnv from "@/config/env"

console.log("hello from nodejs and typescript project boilerplate")

console.log(`Person name: ${new Person().sayMyName()}`)

// Env vars exposed for demonstration purposes only. Consider uncommenting ".env*" in the .gitignore file
console.log(`app start in "${appEnv.NODE_ENV}" mode`)
