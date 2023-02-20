'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories',[{
      CategoryID: 1,
      CategoryName: "Graphic and Design",
      Description: "this is Graphic and Design",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  // down version -> roll back
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
