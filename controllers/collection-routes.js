const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Inventory } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Inventory.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'user_id',
        'card_name',
        'created_at',
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
        const cards = dbPostData.map(cards => cards.get({ plain: true }));
        res.render('inventory', { cards, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});







module.exports = router;