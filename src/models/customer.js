module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "customer", {
            customerName: {
                type: DataTypes.STRING,
            },
            shopName: {
                type: DataTypes.STRING,
            },

            customerPhoneNumber: {
                type: DataTypes.INTEGER,
            },
            address: {
                type: DataTypes.INTEGER,
            },
        }, {
            timestamps: false,
        }
    );
};