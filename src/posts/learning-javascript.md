---
title: 'Learning JavaScript'
slug: '/learning-javascript'
date: '2019-01-21'
---

As an alumni of BCIT's [TWD](https://www.bcit.ca/study/programs/6490cert) program, I have had the distinct privilege of being asked to come to the school on a number of occasions to return to the classroom, and participate in a panel Q and A session with current students. The idea is to be able to answer questions on an array of topics as they relate to transitioning out of the classroom and into the workforce, starting their careers in front-end developement.

Often, questions from students centre around handling job interviews, which technologies to focus on, or things to know about working at an agency or technology company. They ask about using SASS or Bootstrap, developing in WordPress, or using Git. A lot of things that can be learned on the job in a junior position with good mentorship.

Alongside these questions are more pointed ones like, "what do you look for in a candidate," which often translates to, "what skills do I need to have to get the job." Understandably, many students feel a little underprepared in the face of entry-level positions advertising the need for a minimum of 2 years of experience, complete with knowledge of the latest JavaScript frameworks, devops tools and contiuous integration. More specifically though, experience with React.

One of my fellow panelists runs a company of her own, and indicated that when hiring, it didn't matter if you knew JavaScript, as long as you can code React.

## Framework first, or JavaScript first?

I fully understand this perspective - efficiency is desired in an employee, and if your entire product is centered around React, a capable React developer will certainly be more effective and productive in the beginning.

However, I disagree with this approach.

Well, I mostly disagree. I definitely believe that frameworks can help us to learn programming languages and concepts. For example, while I knew the basic building blocks of PHP before starting my first job as a developer, it was in applying this knowledge in the context of frameworks like Drupal and WordPress that I _really_ understood when and how to use `forEach` loops and other programming techniques.

While things like loops clearly aren't unique to any one progrgamming language, the way larger applications are built can provide us clues as to how the language can operate - it tells us about the possibilities, and best practices.

In the case of React, there are many things we can learn about JavaScript if we look closely. How classes work in JavaScript (if you want to open [that discussion...](https://www.reddit.com/r/javascript/comments/64zvll/opinions_do_you_use_es6_classes/)), or ideas around functional programming, the use of array methods, are examples of what can be learned from React. It is indeed possible (and likely) to improve your JavaScript skills in using React, if you have the disposition to be a learner.

All that being said, it helps to have a knowledge of JavaScript outside of React in order to be a better React developer. Understanding array methods and functional programming concepts will help you if (and when) you move on from that strictly React job, and have to learn the next framework used at the new one. Even if you do stick to one framework, your knowledge of the language will enhance your ability to use it and find new and better solutions to your code challenges. Sometimes you don't need React solutions, you need JavaScript solutions.

In my current context, I was tasked with implemeting analytics for new components that are being built for new version of an exisiting website. The catch was, even though our new components are built with Vue, the analytics had to also work outside of the framework. Having a solid understanding of JavaScript (and a decent understanding of Vue as well, I might add), I was able to create a system that could work on its own, and also be imported into Vue as mixins - which, at the end of the day, are just functions that you add to your components.

If all I knew was Vue, this wouldn't be possible. My analytics system would have been restricted to the Vue components, and I would have needed help making it work outside of the components built with the framwork. Ultimately, it would be useless apart from its original context.

If, however, we decided to scrap Vue altogether and adopt React (or any other JavaScript framework), my no-framework approach would be instantly portable and could be easily added to the new ecosystem. In the end, it's just JavaScript functions, and I can call them from any place.

## Focus on the JavaScript

In the end, I tell the students exactly this - the framework is a great tool to enhance your knowledge of JavaScript. But, make sure to keep learning the language, and you will be able to apply your skills elsewhere and be a better developer in the end; this is good both for yourself, and for the company you find yourself working for. I certainly recommend trying out courses like [JavaScript30](https://javascript30.com/) or anything on Udemy or Udacity if you want to start (or keep on) learning JavaScript.

