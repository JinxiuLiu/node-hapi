'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
}

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'goods',
    [
      { id: '1', shop_id: '1', name: '商品1', thumb_url: '1.png', ...timestamps },
      { id: '2', shop_id: '1', name: '商品2', thumb_url: '2.png', ...timestamps },
      { id: '3', shop_id: '2', name: '商品3', thumb_url: '3.png', ...timestamps },
      { id: '4', shop_id: '2', name: '商品4', thumb_url: '4.png', ...timestamps },
      { id: '5', shop_id: '1', name: '商品5', thumb_url: '5.png', ...timestamps },
      { id: '6', shop_id: '3', name: '商品6', thumb_url: '6.png', ...timestamps },
      { id: '7', shop_id: '1', name: '商品7', thumb_url: '7.png', ...timestamps },
      { id: '8', shop_id: '4', name: '商品8', thumb_url: '8.png', ...timestamps },
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('goods', { id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] } }, {})
};
