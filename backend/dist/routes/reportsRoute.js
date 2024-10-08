"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var healthReportModel_1 = __importDefault(require("../models/healthReportModel"));
var healthReportRouter = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     HealthReport:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - age
 *         - sex
 *         - occupation
 *         - symptoms
 *         - timeOfYear
 *         - places
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The user's email address
 *         age:
 *           type: number
 *           description: The age of the user
 *         sex:
 *           type: string
 *           description: The user's gender
 *         occupation:
 *           type: string
 *           description: The user's occupation
 *         symptoms:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of symptoms
 *         timeOfYear:
 *           type: string
 *           description: The season or time of year
 *         places:
 *           type: array
 *           items:
 *             type: string
 *           description: The places the user has visited
 *
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - age
 *         - sex
 *         - occupation
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The user's email
 *         age:
 *           type: number
 *           description: The age of the user
 *         sex:
 *           type: string
 *           description: The gender of the user
 *         occupation:
 *           type: string
 *           description: The user's occupation
 */
/**
 * @swagger
 * /get-report:
 *   post:
 *     summary: Generate a health report for a user
 *     description: Generates a health report for a user based on input details like name, age, symptoms, etc., and saves it to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HealthReport'
 *     responses:
 *       200:
 *         description: The generated health report
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 report: { healthStatus: 'Good', suggestions: ['Rest more', 'Stay hydrated']}
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
healthReportRouter.post('/get-report', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, age, sex, occupation, symptoms, timeOfYear, places, report, user, newReport, error_1, typedError;
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
                _b.trys.push([1, 7, , 8]);
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
                report = _b.sent();
                return [4 /*yield*/, userModel_1.default.findOne({ email: email }).exec()];
            case 3:
                user = _b.sent();
                if (!!user) return [3 /*break*/, 5];
                // Create a new user instance if not found
                user = new userModel_1.default({
                    name: name,
                    email: email,
                    age: age,
                    sex: sex,
                    occupation: occupation,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
                // Save the user to the database
                return [4 /*yield*/, user.save()];
            case 4:
                // Save the user to the database
                _b.sent();
                _b.label = 5;
            case 5:
                newReport = new healthReportModel_1.default(__assign(__assign({ user: user._id }, report), { dateAdded: new Date() }));
                return [4 /*yield*/, newReport.save()];
            case 6:
                _b.sent();
                // Send the generated health report as a response
                res.json(report);
                console.log('User and health report saved successfully');
                return [3 /*break*/, 8];
            case 7:
                error_1 = _b.sent();
                if (!res.headersSent) {
                    typedError = error_1;
                    res.status(500).json({ error: typedError.message });
                }
                console.error('Error saving user or health report:', error_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
/**
 * @swagger
 * /get-report:
 *   get:
 *     summary: Retrieve user health reports
 *     description: Retrieves all health reports for a given user based on their email.
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         description: The email of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user's health reports
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 reports:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: The health report data
 *       400:
 *         description: Invalid or missing email query parameter
 *       404:
 *         description: User or reports not found
 *       500:
 *         description: Server error
 */
healthReportRouter.get('/get-report', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, reports, error_2, typedError;
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
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, userModel_1.default.findOne({ email: email }).exec()];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ error: 'User not found' })];
                }
                return [4 /*yield*/, healthReportModel_1.default.find({ user: user._id }).sort({ createdAt: -1 }).exec()];
            case 3:
                reports = _a.sent();
                res.json({ user: user, reports: reports });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                if (!res.headersSent) {
                    typedError = error_2;
                    res.status(500).json({ error: typedError.message });
                }
                console.error('Error retrieving user or health reports:', error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = healthReportRouter;
