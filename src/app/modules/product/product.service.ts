import { IProduct } from "./product.interface";
import Product from "./product.model";

const getProductService = async (id: string): Promise<IProduct | null> => {
    const result = await Product.findById(id).exec();
    return result;
};

const createProductService = async (
    payload: IProduct
): Promise<IProduct | null> => {
    const result = await Product.create(payload);
    return result;
};

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomProductService = async (): Promise<IProduct[] | null> => {
    const totalCount = await Product.countDocuments().exec();
    const randomProducts: IProduct[] = [];

    while (randomProducts.length < 6) {
        const randomSkip = getRandomNumber(0, totalCount - 1);
        const randomDocument = await Product.findOne().skip(randomSkip).exec();

        if (randomDocument && !randomProducts.includes(randomDocument)) {
            randomProducts.push(randomDocument);
        }
        console.log(randomDocument);
    }

    return randomProducts;
};

const getProductByCategoryService = async (
    category: string
): Promise<IProduct[] | null> => {
    const result = await Product.find({ category: category }).exec();
    return result;
};

export default {
    getProductService,
    createProductService,
    getRandomProductService,
    getProductByCategoryService,
};
