require("dotenv").config();
console.log(`Node environment: ${process.env.NODE_ENV}`);
require("module-alias/register");

require("./server");
