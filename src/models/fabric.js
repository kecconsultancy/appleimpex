module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "fabric", {
            name: {
                type: DataTypes.STRING,
            },
            quality: {
                type: DataTypes.STRING,
            },

            material: {
                type: DataTypes.STRING,
            },
            GSM: {
                type: DataTypes.INTEGER,
            },
        }, {
            timestamps: false,
        }
    );
};