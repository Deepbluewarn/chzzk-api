import {logger} from "./winston.js";
import morgan from "morgan";

const combined = ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
const common = ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length]'

const format = () => {
    return process.env.NODE_ENV === 'prd' ? combined : common
}

const stream = { write: (message: any) => logger.http(message) }

const morganMiddleware = morgan(format(), { stream })

export {morganMiddleware};

