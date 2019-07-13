module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        productID:     { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        productCode:   { type: DataTypes.STRING },
        condition:     { type: DataTypes.STRING },
        capType:       { type: DataTypes.STRING },
        color:         { type: DataTypes.STRING },
        toupeCapSize:  { type: DataTypes.STRING },
        FK_providerID: { type: DataTypes.INTEGER }
    });

    return Product;
};
