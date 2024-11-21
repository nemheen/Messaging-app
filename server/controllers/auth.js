//API - application programming interface
const {connect} = require('../database');

const bcrypt = require('bcrypt');
const Streamchat = require('stream-chat').StreamChat;
const crypto = require('crypto');


require('dotenv').config();

// yarn add stream-chat
import { StreamChat } from 'stream-chat';

// instantiate your stream client using the API key and secret
// the secret is only used server side and gives you full access to the API
// find your API keys here https://getstream.io/dashboard/
const serverClient = StreamChat.getInstance('8nsjvjr5k5m8', 'hmkpgqtn7k7ph3vxnjeumc3gmwrh7qrjc23uu9nfj5cfsk7pv4cuwmxv795ugkbg');
// you can still use new StreamChat('api_key', 'api_secret');

// generate a token for the user with id 'john'
const token = serverClient.createToken('john');
// next, hand this token to the client in your in your login or registration response

