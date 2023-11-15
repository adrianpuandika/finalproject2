"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comments.belongsTo(models.Users, { foreignKey: "UserId" });
      Comments.belongsTo(models.Photos, { foreignKey: "PhotoId" });
    }
  }
  Comments.init(
    {
      UserId: DataTypes.INTEGER,
      PhotoId: DataTypes.INTEGER,
      comment: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
