karma-backbone-maven
====================

A minimal setup for running JavaScript tests on a [Backbone] [1] application  (using Require.js) with Testacular (now Karma). Includes maven integration (using maven-exec-plugin) and a minimal Jetty/Jersey backend. 

*Coded on Barbera*.

[1]: http://backbonejs.org/ "Backbone"

Assumptions
===========

* The guys at Google are smart and know what they're doing (experience has it that they do/are). Thus; testacular (or, ironically, Karma; is my writing this now (saturday night) karma?)
* Having the build break as a result of JavaScript test-failure is good. You get someone to blame.
* (I know we don't _really_ write JavaScript tests, but let's assume we do. At least we can tell the client that we have some sort of setup that facilitates us doing it. We'll do that anyway but now we don't have to lie (down) doing it.)
* Your client has the same setup as mine.
* Running JavaScript tests in different browsers is better than only running them headless (hodeløs?). Meaning, this setup is better than an exclusive PhantomJS setup (or jasmine-maven-plugin).
* You write your backend in Java and use Maven as your build system. If you write/run(?) your backend in Node and/or use Gradle you're way too cool to be reading this page.
* I couldn't find an example for this technology stack online. And I was bored.
* You like documentation with _a lot_ of parenthesis (side notes, tidbits, whatever).
* You do not expect this to be complete.

Background
==========
* A slow saturday night with Barbera
* Client project with the same technology stack (save the testing):
* Banking
* Emdedded Jetty
* Jersey-fueled REST(ful) (we try!) back-end
* Guice (I couldn't be bothered to use it for this example)
* Single-page Backbone application using Require.js for AMD
* For a below-average-smart-guy like me Require.js _does_ complicate matters
* I realize now that the assumptions somewhat mix with the background. What luck.

Prerequisites (installation, or.. whatever)
===========================================

* Node v0.8.22
* Karma has some known issues with the latest version of Node, see the issues on the Karma/Testacular github pages (I refrain from linking and/or explaining because a) I'm lazy, and b) I have wine, why should I?).
* Testacular (now Karma) v0.8
* Jave and Maven are given (not to you, but your machine)

Inspiration
===========
* Obviously, Karma and their info on how to integrate it (Karma) with a require.js app (written by some other guy, I think he's Russian?).

Interesting (so you ask)
===========

* Nothing is really intereting about this, but you may want to check out:
* 'StartWebServer.java'
* 'karma.conf.js'
* 'test-main.js'
* 'helloWorldView.test.js'

Barbera
=======

(Stolen from Wikipedia): 
> Barbera is a red Italian wine grape variety that, as of 2000, was the third most-planted red grape variety in Italy (after Sangiovese and Montepulciano). 
> It produces good yields and is known for deep color, low tannins and high levels of acid.