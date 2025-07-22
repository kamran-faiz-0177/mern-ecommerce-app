const ProductModel = require("../Models/ProductModel");

const CreateProduct = async (req, res) => {
    try {
        const { productName, productDescription, productCategory, productPrice, productImg } = req.body;

        const newProduct = new ProductModel({ productName, productDescription, productCategory, productPrice, productImg });
        await newProduct.save();

        res.status(200).json({
            message: "successfully create product",
            success: true,
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to create product",
            error: error.message,
        })
    }
};

const FetchProduct = async (req, res) => {
    try {
        const productList = await ProductModel.find();

        res.status(200).json({
            message: "successfully create product",
            success: true,
            productList,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to fetch product",
            error: error.message,
        })
    }
};

const FetchProductByCategory = async (req, res) => {
    try {
        const { productCategory } = req.params;
        const productList = await ProductModel.find({productCategory});

        res.status(200).json({
            message: "successfully fetch product by category",
            success: true,
            productList,
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to fetch product",
            error: error.message,
        })
    }
};

const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error. Failed to delete product.",
            error: error.message,
        });
    }
};


const UpdateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, productDescription, productCategory, productPrice, productImg } = req.body;

        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            {  productName, productDescription, productCategory, productPrice, productImg },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }

        const productList = await ProductModel.find();

        res.status(200).json({
            message: "Product updated successfully",
            success: true,
            productList,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error. Failed to update product.",
            error: error.message,
        });
    }
};


module.exports = { CreateProduct, FetchProduct, DeleteProduct, UpdateProduct, FetchProductByCategory  };