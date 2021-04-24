---
title: Getting Setup
sidebar_label: Getting Setup
slug: /installation/getting-setup
---

## Prerequisites

[Node v12 or later](https://nodejs.org/en/)

## 1. Template/Download/Clone

**Template**  
[Generate from Template](https://github.com/AngelNull/expandable-djs-bot/generate)  
*You must be logged into GitHub to generate from the template*

**Download**  
[Click To Download](https://github.com/AngelNull/expandable-djs-bot/archive/main.zip)

**Clone the Repository**  
`git clone https://github.com/AngelNull/expandable-djs-bot.git`

## 2. Install Dependancies

Open up the terminal of your choice and navigate to the directory of the project.

### Users

```text
npm i --prod
```

### Developers/Contributers

```text
npm i
```

## 3. Create Discord Developer Application


:::warning
**Never share your discord token with anyone, it can and most likely will me used maliciously**
:::

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application

![](../../static/img/BotAppPage.png)

Enter a name for your application, and then click on the "bot" tab on the sidebar.

![](../../static/img/BotBotPage.png)

Click the **Add Bot** button, and then confirm the pop-up on your screen.

![](../../static/img/BotSuccessPage.png)

Configure the bot to your liking.

## 4. Invite To Your Server

Invite the bot to the server of your choice, you can do this with the bots OAuth2 link.

## 5. Configuration

Open up your terminal and navigate to the install directory and run the following

```text
npm run config
```

You will then be guided through configuring the bot, if you need to change a value at any time, you can run the same command again

## 6. Launching

You should now be ready to launch the bot and get it online.

To do this, simply run the following

```text
node .
```

You will see the following all of the bots commands being loaded. If everything goes successfully, the console should output

```text
✅ Authenticated: BotName#0000 @ DATE
```

## Common Issues & Fixes

### "The bot isn't responding to the prefix I gave it"

The most common cause of this is empty spacing before or after the prefix in the `.env` file; if this is not the cause and you have tried multiple prefixes, please open an issue [here](https://github.com/AngelNull/expandable-djs-bot/issues/new/choose).

### "The bot won't respond to developer commands"

In order for the bot to respond to your developer commands; you must give it your discord ID, this is not the same as your discord username. For more information about discord IDs, [check here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).

### "The bots custom presence isn't changing from online"

If the bots Status \(the indicator on its profile\) isn't updating, this is most likely because it hasn't been given enough time to update, please allow 5 minutes after restarting the bot for it to take effect.

### "The bots activity/status isn't changing"

You have either entered a status that is too long for discord, given it an invalid activity type or not enabled custom activity in the config.
