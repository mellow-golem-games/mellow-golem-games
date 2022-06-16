---
title: Text Game Devlog 1
date: "2022-06-16T22:12:03.284Z"
description: "Devlog #1 for our upcoming text adventure game"
thumbnail: "devlog/textgame/1-cover.jpg"
lastModifed: "June 16, 2022"
---

Today we’re happy to present the first look at our upcoming game. It’s been in active development for a few months now, and we’re excited to finally have reached a point where we can start sharing it with you. The game is as of yet unnamed, but that hasn’t stopped us from making some serious progress.


## Game Overview

The game is roughly separated into two main loops, exploration and combat. Each of these plays quite different from each other, and the hope is to strike a nice balance between the two to keep things interesting.

Exploration takes place in primarily a text based format giving the players a description of the area and options to continue. Depending on the choices made, players will navigate and discover the world.


### Exploration

Each exploration step can also have various effects attached to it such as entering combat, acquiring an item, or triggering a random event, just to name a few. This variety adds some spice to exploration, and injects some interest into your choices.

  <img src="/images/devlog/textgame/exploration.jpg" width="320px" alt="Exploration view" style="padding: 16px 8px">

We also add various constraints or conditions to various options, depending on your character, equipment, quests, and other attributes exploration choices may differ. This adds some incentive to explore past locations as well as give players different options for multiple playthroughs.

The exploration system is also very similar to dialogue which uses a similar interface. Dialogue has all the same features, so it’s possible to get different options and conversations depending on where in the story you are as well as all of the factors listed above.

The core of this system is basically finished, but we’re continuing to add more features to it. This provides us a solid framework, so that as we build out new locations it’s easy to add them into the game.


### Combat

The combat system is less progressed that exploration, but we have a clear idea of what we’re hoping to accomplish. We had originally planned to go with a fairly standard turn based system, but have decided to pivot to a grid based combat system.

This is still turn-based, but gives more tactical options such as positioning and movement. This does add some additional complexity with things like enemy AI, but we think the additional work is going to be well worth the added depth it adds to the game.

At this point combat is in early development, so we don’t have any visuals to share with you just yet. The goal is to get some of the basic groundwork done and be able to share that with all of you next week.


## Art Style

For this first dev log we also wanted to touch briefly on our art direction. One of the goals with this game is to give that old school tabletop game feel, so we’ve decided to go with a retro, pixel art style.

<div style="display: flex; padding-top: 16px">
  <img src="/images/devlog/textgame/priest.jpg" width="100px" alt="Character portrait" style="padding: 0 8px">
  <img src="/images/devlog/textgame/bow.jpg" width="100px" alt="Item portrait" style="padding: 0 8px">
  <img src="/images/devlog/textgame/wizard.jpg" width="100px" alt="Character portrait" style="padding: 0 8px">
  <img src="/images/devlog/textgame/staff.jpg" width="100px" alt="Character portrait" style="padding: 0 8px">
</div>

I personally really like this style and feel it meshes well with the game we’re creating. It also strikes a nice balance between looking good and not taking an excessive amount of time to create. We’re a small team with a limited budget, so we’re always wary of work that can eat up too much of our time or budget.


## Progress and Plan

As of right now we’re making good progress and looking to create a formalized plan for launch. We’re estimating at least a couple of months still, but should hopefully have some hard numbers for you in the next few weeks.

Our current goal is to get a working version of combat working. Once that’s done, the majority of our core systems are set up, and it just becomes creating the content and plugging that into our framework. That’s by no means a quick task, but it does end up being easier than a lot of the work that came before which is encouraging. Follow us on our socials as we’ll be announcing any updates there first along with sharing details of our progress.


## Tech Stack

Lastly, we wanted to touch on our tech stack for those that are interested. This project is a bit unusual in that we’re building the whole thing with Clojurescript. This means we’re basically building a web app, and then wrapping it up for our deployment targets which is initially going to be mobile devices.

We’re planning to do a deeper dive into why we made this choice, but it comes down to the way it handles state. Since our game doesn’t have a traditional game loop targeting some FPS, nor does it have lots of complex animations, we gain a lot of benefits from deterministic state management. At the core, our game is largely based on Clojure maps that get merged together to generate the current state of your game.

Like we said, we’ll put together a more deep dive into the tech for anyone that might be interested.

That’s all for this log, keep an eye out next week as we’ll be pushing for weekly updates moving forward. Thanks to all, your continued support means a lot and keeps us moving forward.
