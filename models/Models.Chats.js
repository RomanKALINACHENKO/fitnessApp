const {Schema, model, Types} = require('mongoose')

const Chats = new Schema(
        {
       chats: [{
        _id_chat: String,
        from: String,
        to: String,
        messages:[ {id_message: String,
                    Date: Date,
                    Content: String,
                    sender: String,
                    isReaded: Boolean}]
                               
        }],
       User:{type: Types.ObjectId, ref: 'User'}
})

const Chat = model('Chats', Chats)
module.exports = Chat