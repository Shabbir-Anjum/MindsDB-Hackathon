"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getResponse_1 = __importDefault(require("../utils/getResponse"));
var userModel_1 = __importDefault(require("../models/userModel"));
var healthReportRouter = (0, express_1.Router)();
healthReportRouter.post('/get-report', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, age, sex, occupation, symptoms, timeOfYear, places, result, user, error_1, typedError;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, age = _a.age, sex = _a.sex, occupation = _a.occupation, symptoms = _a.symptoms, timeOfYear = _a.timeOfYear, places = _a.places;
                // Input validation
                if (!name || !email || !age || !sex || !symptoms || !timeOfYear || !places) {
                    return [2 /*return*/, res.status(400).json({ error: 'Missing required fields' })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, getResponse_1.default)({
                        name: name,
                        age: age,
                        sex: sex,
                        symptoms: symptoms,
                        location: places.join(", "),
                        timeOfYear: timeOfYear,
                        occupation: occupation,
                    })];
            case 2:
                result = _b.sent();
                user = new userModel_1.default({
                    name: name,
                    email: email,
                    age: age,
                    sex: sex,
                    occupation: occupation,
                    symptoms: symptoms,
                    timeOfYear: timeOfYear,
                    places: places,
                    healthReports: [result],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
                // Save user to the database
                return [4 /*yield*/, user.save()];
            case 3:
                // Save user to the database
                _b.sent();
                // Send the health report response
                if (!res.headersSent) {
                    res.json(result);
                }
                console.log('Added the user and sent the health report');
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                // Handle errors and send an error response
                if (!res.headersSent) {
                    typedError = error_1;
                    res.status(500).json({ error: typedError.message });
                }
                console.error('Error Creating User and Saving the response:', error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
healthReportRouter.get('/get-report', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, error_2, typedError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.query.email;
                // Validate email
                if (typeof email !== 'string') {
                    return [2 /*return*/, res.status(400).json({ error: 'Invalid or missing email query parameter' })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, userModel_1.default.findOne({ email: email }).exec()];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ error: "User not found" })];
                }
                res.json(user);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                if (!res.headersSent) {
                    typedError = error_2;
                    res.status(500).json({ error: typedError.message });
                }
                console.error('Error retrieving User Data', error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = healthReportRouter;
