module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
        customerID:          { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        customerEmail:       { type: DataTypes.STRING },
        docNotes:            { type: DataTypes.STRING },
        createdDate:         { type: DataTypes.STRING },
        customerUser:        { type: DataTypes.STRING },
        customerPassword:    { type: DataTypes.STRING },
        customerAddress:     { type: DataTypes.STRING },
        customerZip:         { type: DataTypes.STRING },
        customerState:       { type: DataTypes.STRING },
        customerFirstName:   { type: DataTypes.STRING },
        customerLastName:    { type: DataTypes.STRING },
        customerPhoneNumber: { type: DataTypes.STRING },
        customerOrder: { type: DataTypes.STRING },
        customerOrderDate: { type: DataTypes.STRING },
    });

    return Customer;
};
