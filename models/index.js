// importing models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongs to category,
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
})

// Products belongsToMany Tags --> Through ProductTag

Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
})

// Tags belongsToMany Products (though ProductTag)

Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    }
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
