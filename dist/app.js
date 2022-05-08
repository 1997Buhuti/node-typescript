"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json);
app.get("/", (req, res) => {
    res.send("hello");
});
app.post("/api/data", (req, res) => {
    return res.send(200);
});
app.listen(5000, () => {
    console.log("Application listening at port 5000");
});
