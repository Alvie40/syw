module.exports = function (sequelize, DataTypes) {
    const Partner = sequelize.define("Partner", {
        partnerID:      { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        partnerSite:    { type: DataTypes.STRING },
        partnerContact: { type: DataTypes.STRING },
        partnerPhone:   { type: DataTypes.STRING },
        partnerEmail:   { type: DataTypes.STRING }
    });

    /*
    Partner.associate = (models) => {
        Partner.belongsTo(models.Customer, {as: 'buyer'})
    };
    */
    return Partner;
};
