const { Cards } = require('../models');

const resolvers = {
    Query: {
      cards: async () => {
        console.log("hit!!!1")
        try{
          console.log("hit!!!2")
          return await Cards.find({})
          // .populate('Card').populate({
          //   path: 'Card',
          //   populate: 'Card'
          // });
        }catch(err){
          console.log(err)
        }
      }
    }
};

module.exports = resolvers;