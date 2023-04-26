module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "eyelet", {
            eyeletName: {
                type: DataTypes.STRING,
            },
            quality: {
                type: DataTypes.STRING,
            },

            size: {
                type: DataTypes.INTEGER,
            },
            material: {
                type: DataTypes.STRING,
            },
        }, {
            timestamps: false,
        }
    );
};