const Discord = require("discord.js");
const Database = require("@replit/database");
const client = new Discord.Client();
const db = new Database();

const prefix = "cyy_";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  else if (command === "echo") {
  const string = args.join(" ");
  message.channel.send(string);
}
 else if (command === "oi") {
  const string = args.join(" ");
  message.reply(`oi lan`);
}
else if (command === "hello") {
 let hellos = ["hello", "bonjour", "gutentag"];
hellos.forEach(hello => {
    message.channel.send(hello);
});

}
 else if (command === "yell"){
   const string = args.join(" ");
   const upperCase = string.toUpperCase();
   message.channel.send(upperCase);
 }
else if (command === "story") {
  const string = args.join(" ");
  message.reply(`donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget`);
}
else if (command === "name") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.channel.send(`My name is Chan You Yiun, please dont spell wrong please!`);
  }
else if (command === "set") {
db.set("key", "value").then(() => {});
}
});

client.login(process.env.BOT_TOKEN);