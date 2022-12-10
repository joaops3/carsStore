"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.deleteaws = exports.s3 = void 0;
const multer_1 = __importStar(require("multer"));
const path_1 = __importDefault(require("path"));
const client_s3_1 = require("@aws-sdk/client-s3");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv = require("dotenv");
const multerS3 = require("multer-s3");
dotenv.config();
exports.s3 = new client_s3_1.S3Client({ region: process.env.AWS_DEFAULT_REGION, credentials: { accessKeyId: process.env.AWS_ACESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACESS_KEY } });
exports.deleteaws = new aws_sdk_1.default.S3({ region: process.env.AWS_DEFAULT_REGION, credentials: { accessKeyId: process.env.AWS_ACESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACESS_KEY } });
const storageTypes = {
    local: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            cb(null, "./tmp");
        },
        filename: (req, file, cb) => {
            let random = `${Date.now() + Math.floor(Math.random() * 999999)}`;
            cb(null, file.fieldname + random + path_1.default.extname(file.originalname));
        },
    }),
    s3: multerS3({
        s3: exports.s3, bucket: process.env.AWS_BUCKET, contentType: multerS3.AUTO_CONTENT_TYPE, acl: "public-read",
        key: (req, file, cb) => {
            let random = `${Date.now() + Math.floor(Math.random() * 999999)}`;
            cb(null, file.fieldname + random + path_1.default.extname(file.originalname));
        }
    })
};
exports.upload = (0, multer_1.default)({
    storage: storageTypes.s3, fileFilter: (req, file, cb) => {
        let requirements = /[\/.](gif|jpg|jpeg|png|svg|webp)$/i;
        if (!file.mimetype.match(requirements)) {
            return cb(new Error("error tipo de arquivo invalido"));
        }
        cb(null, true);
    }, limits: { fileSize: 50000000 }
});
