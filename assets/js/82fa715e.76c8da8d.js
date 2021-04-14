(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(7),i=(n(0),n(91)),o={title:"Creating Translations",sidebar_label:"Creating Translations",slug:"/contributing/creating-translations"},r={unversionedId:"contributing/creating-translations",id:"contributing/creating-translations",isDocsHomePage:!1,title:"Creating Translations",description:"This bot supports translations! Here you will learn how to create a new translation file.",source:"@site/docs/contributing/creating-translations.md",slug:"/contributing/creating-translations",permalink:"/docs/contributing/creating-translations",editUrl:"https://github.com/AngelNull/expandable-djs-bot/tree/main/website/docs/contributing/creating-translations.md",version:"current",sidebar_label:"Creating Translations",sidebar:"docs",previous:{title:"Creating Commands",permalink:"/docs/contributing/creating-commands"}},s=[{value:"Adding A Language",id:"adding-a-language",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1.",id:"step-1",children:[]},{value:"Step 2.",id:"step-2",children:[]},{value:"Step 3.",id:"step-3",children:[]},{value:"Step 4.",id:"step-4",children:[]},{value:"Congratulations",id:"congratulations",children:[]},{value:"After You&#39;ve Translated",id:"after-youve-translated",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This bot supports translations! Here you will learn how to create a new translation file."),Object(i.b)("h2",{id:"adding-a-language"},"Adding A Language"),Object(i.b)("p",null,"If you have fluency in the language you would like to translate to, and would like to contribute it to the project, it will be happily merged."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Please note that language files translated by an online translator will likely not be merged.")),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"In order to make a new language, fork this project and make sure you've got:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"An up-to-date version of ",Object(i.b)("inlineCode",{parentName:"li"},"translations/templates/translation-template.txt")),Object(i.b)("li",{parentName:"ol"},"A fresh and up-to-date version of the project"),Object(i.b)("li",{parentName:"ol"},"An IDE that allows for linting with eslint and prettier, as well as highlighting ","(","Recommended: VSCode",")")),Object(i.b)("p",null,"Once you have these things, we're ready to begin adding the new language to the bot!"),Object(i.b)("h2",{id:"step-1"},"Step 1."),Object(i.b)("p",null,"In order to register a new language pack, you'll need to create a new file with the 2 letter language code ","(","eg. ",Object(i.b)("inlineCode",{parentName:"p"},"en.js")," for English",")"," inside of the ",Object(i.b)("inlineCode",{parentName:"p"},"translations/languages")," directory."),Object(i.b)("h2",{id:"step-2"},"Step 2."),Object(i.b)("p",null,"Once you have done this, copy and paste the ",Object(i.b)("inlineCode",{parentName:"p"},"translations-template.txt")," into your new language. From here, you'll need to change the following parts of the file to the two letter country code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const translateLANGHERE = {\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    translateLANGHERE,\n};\n")),Object(i.b)("h2",{id:"step-3"},"Step 3."),Object(i.b)("p",null,"After modifying the aforementioned parts of the file, you will now need to open up ",Object(i.b)("inlineCode",{parentName:"p"},"translations/translator.js")," and add the following, adjusting ",Object(i.b)("inlineCode",{parentName:"p"},"translateLANGHERE")," and ",Object(i.b)("inlineCode",{parentName:"p"},"./langcode"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const { translateLANGHERE } = require('./langcode');\n")),Object(i.b)("p",null,"Once you have done this, you will need to add the language pack to the translations list here, again adjusting ",Object(i.b)("inlineCode",{parentName:"p"},"langcode")," and ",Object(i.b)("inlineCode",{parentName:"p"},"translateLANGHERE"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const translations = {\n    en: translateEN,\n    fr: translateFR,\n    langcode: translateLANGHERE,\n    default: translateEN,\n};\n")),Object(i.b)("h2",{id:"step-4"},"Step 4."),Object(i.b)("p",null,"Adding the language to the automated setup handler. To do this, go to ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/setup.js")," and navigate to this part of the file"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"    {\n        type: 'select',\n        name: 'language',\n        message: 'Bot Language?',\n        choices: [\n            { title: 'English (Source)', value: 'en' },\n            { title: 'French (Translation)', value: 'fr' },\n            // { title: 'LANG (Translation)', value: 'LANG' },\n        ],\n        initial: 0,\n    },\n")),Object(i.b)("p",null,"Add your new language in to the choices list, and set the value to be the same as the language code."),Object(i.b)("p",null,"Run through the setup handler by doing ",Object(i.b)("inlineCode",{parentName:"p"},"npm run config")," and ensure that the new option works successfully."),Object(i.b)("h2",{id:"congratulations"},"Congratulations"),Object(i.b)("p",null,"You should now successfully have your language pack recognised by the bot, now it's time to start modifying the language file itself."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," When adding a new language file, you only need to change things that are inside of the backticks, comments, translation codes and variables ",Object(i.b)("strong",{parentName:"p"},"DO NOT")," need to be translated."),Object(i.b)("p",null,"The translation-template will have provided all values pre-filled in English with all variables used, it is important when translating to keep the formatting as similar as possible, making sure ",Object(i.b)("strong",{parentName:"p"},"all")," variables are used when needed."),Object(i.b)("h2",{id:"after-youve-translated"},"After You've Translated"),Object(i.b)("p",null,"Once you have managed to translate everything accurately, open up a pull-request and it'll be reviewed. All of your translations will be reviewed and the translation pack will be ensured it has been setup properly."),Object(i.b)("p",null,"If everything has gone smoothly, your translation pack will be merged into the project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Thank you! :",")")))}d.isMDXComponent=!0}}]);