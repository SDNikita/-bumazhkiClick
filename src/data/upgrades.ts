// Временные цены и характеристики. Изображения подключаются статическими путями.
export const clickUpgrades = [
  { id: 'mouse', title: 'Мышка после лузстрика', image: require('../../assets/images/upgrades/mouse.png'), price: 100, description: '+0,25 за клик' },
  { id: 'build', title: 'Сборка из комментов', image: require('../../assets/images/upgrades/build.png'), price: 250, description: 'Клик +10%' },
  { id: 'webcam', title: 'Вебка вместо мышки', image: require('../../assets/images/upgrades/webcam.png'), price: 600, description: 'Клик +15%' },
  { id: 'patch', title: 'Патч на два слова', image: require('../../assets/images/upgrades/patch.png'), price: 1000, description: 'Клик и доход +5%' },
  { id: 'vpk', title: 'Картонный VPK', image: require('../../assets/images/upgrades/vpk.png'), price: 2500, description: 'Клик +10%' },
  { id: 'cap', title: 'Счастливая кепка', image: require('../../assets/images/upgrades/cap.png'), price: 5000, description: 'Клик и доход +5%' },
];

export const incomeUpgrades = [
  { id: 'viewer', title: 'Зритель-невидимка', image: require('../../assets/images/upgrades/viewer.png'), price: 33, income: 0.1 },
  { id: 'soldier', title: 'Солдатик с линии', image: require('../../assets/images/upgrades/soldier.png'), price: 213, income: 0.5 },
  { id: 'farm', title: 'Ферма на нейтралах', image: require('../../assets/images/upgrades/farm.png'), price: 1200, income: 2 },
  { id: 'shorts', title: 'Шортс на автопилоте', image: require('../../assets/images/upgrades/shorts.png'), price: 7000, income: 8 },
  { id: 'npc', title: 'Диалоговый NPC', image: require('../../assets/images/upgrades/npc.png'), price: 40000, income: 30 },
];
