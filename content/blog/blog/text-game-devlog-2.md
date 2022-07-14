---
title: Text Game Devlog 2
date: "2022-07-14T22:12:03.284Z"
description: "Devlog #2 for our upcoming text adventure game"
thumbnail: "devlog/textgame/2-cover.jpg"
lastModifed: "July 14, 2022"
---


Hey everyone, and welcome to the second dev log for our still unnamed text adventure game. Over the last week, our focus has been working on the base version of combat. While we’re not quite ready to share the screens (fingers crossed for next week) we thought we’d still talk about the process that's got us here. With that, let’s jump in.


## How Does Combat Work?

As we’ve talked about before, combat is turn based, and takes part on a grid system. This grid will contain all the players and enemies, as well as obstacles like trees that will prevent movement and limit lines of sight.

Combat works on an initiative system similar to many tabletop games. Each player/enemy takes their turn in succession, and then repeats once everyone has gone. There will certainly be things to spice that up, such as the ability to use multiple abilities in a single turn, but that’s the jist of it. The goal was to recreate a tabletop game feel, and so far we think we’ve done a decent job at doing just that.

This format gives us lots of tactical options, and lets us create interesting combat encounters by changing the board itself. Positioning terrain for example can create choke points that limit a parties ability to coordinate. The reverse is true, and we want to provide savvy players the ability to use the terrain to their advantage.

It also gives us a lot of room to experiment with things like ranged weapons and area of effect attacks. Positioning takes on a hugely important role, and having your party out of place can cost you. Part of brainstorming has been creating abilities that rely on good positioning as well as force enemies into bad positions. More to come on this later.


## Enemy AI

AI is hugely important in a game like this, and it’s a huge focus for us. Good AI needs to be able to take advantage of position, and punish players that don’t. It also needs to have some sort of understanding of threats and prioritize which player to target.

While we’re still early in developing the actual AI we do have some pretty good ideas on where we want to go. One big feature we’re working on is intelligence based AI. This is the idea that different creatures are going to behave differently based on how intelligent they should be.

Take a rat for example; this mindless beast isn’t going to be making tactical decisions in the middle of battle. In most cases they’ll simply attack whoever is closest to them, or maybe who attacked them last. Their decisions are simple, and they won’t do much in the way of strategy.

On the other hand, a powerful warrior is going to make much better tactical decisions. They’re likely to strategize with their allies to put their enemies at a disadvantage, and they’re going to put more care into who they target. That wizard flinging powerful spells, for example, is going to be a high priority to take out.

That’s all to say that we want the enemies you face to be about as smart as you’d think they should be. What that means is going to change by enemies, the terrain, and the abilities they have. There’s still a lot of work to do, but have the basic framework done and are super excited about the next steps.


## A Few Pieces Of Art

We wanted to leave off with a couple of simple pieces of art we’ve created for the combat field. There are very early drafts, and there’s only a couple, but they should hopefully give you a little peek into what’s going on. We’re hoping by the next log we’ll have a lot more to show.

<div style="display: flex; padding-top: 16px">
  <img src="/images/devlog/textgame/tree.png" width="100px" alt="A super fun tree" style="padding: 0 8px">
  <img src="/images/devlog/textgame/player.png" width="100px" alt="Character Front" style="padding: 0 8px">
  <img src="/images/devlog/textgame/player-back.png" width="100px" alt="Character Back" style="padding: 0 8px">
</div>


## What’s Next

There is still a lot of combat work to do so we’re still hard at work on that. More details to come in our next log.

We’re also starting to look at towns and how interactions work there. It will be a little different than the standard flow which should provide a nice change of pace. We’ll be sharing more details, along with the map of the first town, in the next few weeks; so be on the lookout for that.

That’s all for this log, drop us a message if you have any questions, or come visit us on Discord. Until next time!
