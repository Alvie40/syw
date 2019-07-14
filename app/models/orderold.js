module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define("Order", {
        orderID:        { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        orderDate:      { type: DataTypes.DATE    },
        orderStatus:    { type: DataTypes.STRING  },                
        FK_productID:   { type: DataTypes.INTEGER },
        FK_productCode: { type: DataTypes.INTEGER },
        FK_providerID:  { type: DataTypes.INTEGER },
        FK_employeeID:  { type: DataTypes.INTEGER },
    });

    return Order;
};
