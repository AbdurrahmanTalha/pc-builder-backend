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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("./product.model"));
const getProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id).exec();
    return result;
});
const createProductService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payload);
    return result;
});
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomProductService = () => __awaiter(void 0, void 0, void 0, function* () {
    const totalCount = yield product_model_1.default.countDocuments().exec();
    const randomProducts = [];
    while (randomProducts.length < 6) {
        const randomSkip = getRandomNumber(0, totalCount - 1);
        const randomDocument = yield product_model_1.default.findOne().skip(randomSkip).exec();
        if (randomDocument && !randomProducts.includes(randomDocument)) {
            randomProducts.push(randomDocument);
        }
        console.log(randomDocument);
    }
    return randomProducts;
});
const getProductByCategoryService = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find({ category: category }).exec();
    return result;
});
exports.default = {
    getProductService,
    createProductService,
    getRandomProductService,
    getProductByCategoryService,
};
