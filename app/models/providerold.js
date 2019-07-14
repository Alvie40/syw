module.exports = function (sequelize, DataTypes) {
    const Provider = sequelize.define("Provider", {
        providerID:      { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        providerSite:    { type: DataTypes.STRING },
        providerContact: { type: DataTypes.STRING },
        providerPhone:   { type: DataTypes.STRING },
        providerEmail:   { type: DataTypes.STRING }        
    });

    return Provider;
};
