'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let passwordDigest = await middleware.hashPassword('1234')
    await queryInterface.bulkInsert(
      'users',
      [
        {  
        email: 'user@anime.com',
        passwordDigest,
        createdAt: new Date(),
        updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
