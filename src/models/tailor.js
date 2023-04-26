module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "tailor", {
            tailorName: {
                type: DataTypes.STRING,
            },
            tailorShopName: {
                type: DataTypes.STRING,
            },

            mobileNumber: {
                type: DataTypes.INTEGER,
            },
            address: {
                type: DataTypes.STRING,
            },
        }, {
            timestamps: false,
        }
    );
};