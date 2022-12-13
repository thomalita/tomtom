'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    'animes',
    [
      { 
        name: 'Demon Slayer: Kimetsu no Yaiba',
        image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/Demon-Slayer-Kimetsu-no-Yaiba-Season-2.jpg',
        details: 'A Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister, Nezuko, turned into a demon.', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        name: 'Attack On Titan',
        image: 'https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg',
        details: 'A Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three ginormous walls that protect them from gigantic man-eating humanoids referred to as Titans. The story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dragon Ball',
        image: 'https://carteblanchehobbies.files.wordpress.com/2016/06/dbz-awakening.jpg',
        details: 'Is a Japanese media franchise created by Akira Toriyama in 1984. Five anime instalments based on the franchise have been produced by Toei Animation: Dragon Ball (1986); Dragon Ball Z (1989); Dragon Ball GT (1996); and Dragon Ball Super (2015); followed by the web series Super Dragon Ball Heroes (2018)', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Naruto',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/YXGNBTGUHZHUHA76FMKEXUDKMY.png',
        details: "Is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts, the first set in Naruto's pre-teen years and the second in his teens.", 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('animes', null, {})
  }
}
