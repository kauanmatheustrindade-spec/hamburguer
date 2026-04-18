'use strict';

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pedidos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Restrição no nível do banco: nota entre 1 e 5
    await queryInterface.addConstraint('avaliacoes', {
      fields: ['nota'],
      type: 'check',
      name: 'chk_nota_1_a_5',
      where: {
        nota: { [Sequelize.Op.between]: [1, 5] }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliacoes');
  }
};
