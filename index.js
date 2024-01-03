import getArgs from "./helpers/args.js"
import { printSuccess, printHelp } from "./services/service.log.js"
const startCLI = () => {
  const args = getArgs(process.argv)
  // console.log(args)
  if (args.h) {
    printHelp()
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    // save token
  }
}

startCLI()
