import fetch from 'node-fetch';

const token = ''
const chatid = ''
const boturl = `https://api.telegram.org/bot${6905209192:AAH8ySizMwosX40erWTQyFJYR2F_Ixy20bE}/sendMessage`;

const SendTelegram = async (id, hash) => {
  var message = {
    chat_id: chatid,
    link_preview_options: {is_disabled: true},
    text: `${id} Claimed HOT with hash \nhttps://nearblocks.io/txns/${hash}`
  };
  const response = await fetch(boturl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  const data = await response.json();
};