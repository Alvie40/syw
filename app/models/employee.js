module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define("Employee", {
        employeeID:        { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        employeeFirstName: { type: DataTypes.STRING },
        employeeLastName:  { type: DataTypes.STRING },        
        employeeEmail:     { type: DataTypes.STRING }        
    });

    return Employee;
};
