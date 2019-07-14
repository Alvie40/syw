module.exports = function (sequelize, DataTypes) {
    const Request = sequelize.define("Request", {
        requestID:      { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        requestDate:    { type: DataTypes.STRING  },
        requestAproval: { type: DataTypes.STRING  },        
        approvalDate:   { type: DataTypes.INTEGER },
        FK_employee:    { type: DataTypes.STRING  },
        FK_productID:   { type: DataTypes.INTEGER },
        FK_customerID:  { type: DataTypes.INTEGER },
    });

    return Request;
};
