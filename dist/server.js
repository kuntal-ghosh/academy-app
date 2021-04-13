"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// creating an express object
const express_1 = __importDefault(require("express"));
const init = () => {
    let app = express_1.default();
    app.use("/", (req, res) => {
        res.send("thanks for requesing on " + new Date());
    });
    return app;
};
const app = init();
app.listen(3000, () => {
    console.log("i am listening");
});
//# sourceMappingURL=server.js.map