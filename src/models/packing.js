module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "packing", {
            name: {
                type: DataTypes.STRING,
            },
            packingTeamName: {
                type: DataTypes.STRING,
            },

            phoneNumber: {
                type: DataTypes.INTEGER,
            },
        }, {
            timestamps: false,
        }
    );
};