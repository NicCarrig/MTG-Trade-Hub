const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Inventory } = require('../../models');
const withAuth = require('../../utils/auth');





router.get('/:id', (req, res) => {
    Inventory.findAll({
      where: {
        user_id: req.params.id
      },
      attributes: [
        'id',
        'user_id',
        'card_name'
      ],
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No cards found for this user' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  






module.exports = router;