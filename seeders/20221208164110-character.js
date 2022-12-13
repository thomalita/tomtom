'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'characters',
      [
        {
          animeId: 1,
          name: 'Tanjiro Kamado',
          image: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Tanjirou_manga.png',
          details: 'He is a Demon Slayer in the Demon Slayer Corps, who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons and later swore to defeat Muzan Kibutsuji, the King of Demons, in order to prevent others from suffering the same fate as him.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          animeId: 1,
          name: 'Nezuko Kamado',
          image: 'https://asia.sega.com/kimetsu_hinokami/en/assets/img/sub/character/chara2_thumb.png',
          details: 'She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          animeId: 2,
          name: 'Levi Ackerman',
          image: 'https://elcomercio.pe/resizer/PEZM-C8-FbzlKbUE11QgDnV4pl4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TKVN4FQRUZCLXNVG4CM2KET6W4.jpg',
          details: "Often formally referred to as Captain Levi, is the squad captain ('leader of the soldiers') of the Special Operations Squad within the Survey Corps and is widely known as humanity's strongest soldier.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          animeId: 2,
          name: 'Eren Yeager',
          image: 'https://cdnb.artstation.com/p/assets/images/images/035/523/627/large/zu-yuan-cesar-tatakae-compress.jpg?1615203151',
          details: "He was the main protagonist of Attack on Titan. He lived in Shiganshina District with his parents until the fall of Wall Maria, where he impotently witnessed his mother being eaten by a Titan. This event would lead to Eren's intense hatred towards the Titans as he swore to wipe all of them off the face of the Earth.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          animeId: 3,
          name: 'Goku',
          image: 'https://w7.pngwing.com/pngs/542/4/png-transparent-son-goku-illustration-goku-dragon-ball-fighterz-vegeta-super-dragon-ball-z-gohan-dragon-ball-super-fictional-character-cartoon-dragon-ball-z-resurrection-f.png',
          details: "Is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. Originally sent to Earth as an infant, Kakarot would be adopted by Grandpa Gohan who named him Son Goku. A head injury at an early age alters Goku's memory, ridding him of his initial destructive nature and allowing him to grow up to become one of Earth's greatest defenders. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          animeId: 3,
          name: 'Vegeta',
          image: 'https://w7.pngwing.com/pngs/943/919/png-transparent-dragon-ball-z-vegeta-illustration-vegeta-goku-trunks-majin-buu-nappa-vegeta-hd-fictional-characters-superhero-manga.png',
          details: "Is the prince of the fallen Saiyan race and the husband of Bulma, the father of Trunks and Bulla, the eldest son of King Vegeta, as well as one of the main characters of the Dragon Ball series. Vegeta was once a ruthless, cold-blooded warrior and outright killer but later abandons his role in the Frieza Force, instead opting to remain and live on Earth. He would later repeatedly fight alongside Universe 7's most powerful warriors in order to protect Earth and his family, as well as to surpass Goku in power.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          animeId: 4,
          name: 'Itachi Uchiha',
          image: 'https://w0.peakpx.com/wallpaper/759/390/HD-wallpaper-itachi-uchiha-kakashi-madara-mangekyo-sharingan-minato-sharingan.jpg',
          details: "He was a shinobi of Konohagakure's Uchiha clan who served as an Anbu Captain. He later became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organization known as Akatsuki, whose activity brought him into frequent conflict with Konoha and its ninja — including Sasuke who sought to avenge their clan by killing Itachi. Following his death, Itachi's motives were revealed to be more complicated than they seemed and that his actions were only ever in the interest of his brother and village, making him remain a loyal shinobi of Konohagakure to the very end.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          animeId: 4,
          name: 'Naruto Uzumaki',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetQtyjaIntXpSG7SrSZfGHreKyRhRlj7oRQ&usqp=CAU',
          details: "Is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('characters', null, {})
  }
};
