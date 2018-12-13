---
title: Why I chose Gatsby and Netlify
slug: '/why-chose-gatstby-and-netlify'
date: '2018-12-12'
---

As I wrote in my [last post](/blog/welcome-to-3-point-oh), I rebuilt this site using [Gatsby](https://www.gatsbyjs.org) and hosting on [Netlify](https://netlify.com). Today I'd like to tell you a little bit about how I came to that decision.

## Background

This website used to exist as a WordPress site, where I built a custom theme and used some basic plugins for contact forms and SEO, etc. I first built it shortly after I graduated from [BCIT](https://www.bcit.ca/study/programs/6490cert) as a replacement for the original, which was essentially a portfolio site for my course project work. I began to documenting my school learnings on a Wordpress.com site, and migrated the content over to my self-hosted site.

It was deployed to a cheap shared-hosting server over FTP (gasp!) before I knew the fundamentals of git/version control - pain point number one. This is an outdated, clunky, and frankly dangerous way to go about business these days, particularly for a developer wanting hands-on access and the ability to make us of modern deployment pipelines.

Also relevant here is the actual hosting bit. Since there is no shortage of free hosting for static sites, why was I still paying for shared hosting?  Especially since it didn't offer SSL, which is now a factor for SEO and is generally a requirement for any modern website. Further, server response times were slow by nature.  I had already moved my email over to Google Apps so that I could both take advantage of their services, and not have my email hosting tied to a particular hosting platform.

## Goals

Being a (mostly) front-end developer, I wanted to focus my time and energy on mostly front-end things for the purposes of my website. While figuring out a little bit of dev-ops or deployment tools might be necessary, they don't constitute infrastructure overhead that I didn't want to be dealing with.

First, I asked myself whether a site with a database was really necessary - afterall, if most of my content was text in blog posts, why even have a database? If I could use text files (like markdown) for a simpler authoring solution, and for storing the content, then this was something that I could eliminate. So, my conclusion was that no, I didn't need the overhead of a database, or a server-side language with which to generate html pages. If I could manage that all with front-end tools, all the better.

This leads into my second goal, learning and using new tools. There have been static site generators out there for some time, such as Jekyll or Kirby, but many require some knowledge of a server-side language, like Ruby or PHP in these cases. While this isn't an issue for me, having used both to varying degrees over the course of my career so far, I wanted to maintain focus on the front-end. There have been a lot of new tools coming out lately, so there were many options to choose from.

Third, I wanted a site optimized for speed. While this can certainly be achieved on sites with a back-end layer with a fast server and caching mechanisms, and smart use of assets and build tools on the front end, I again wanted to focus on what I could do with a static site. With no database calls and as few calls to the server as possible.

## Choosing a solution

With all these things in mind - wanting a fast, true static site using new tools, my search began. With the kicker being something focused on front-end tech, the preferred solution was clearly a JavaScript-based solution.

I've had more experience using Vue than with other frameworks, so I initally thought to stay in the Vue lane and keep building on that knowledge and experience. However, earlier this year I had the opportunity to work on some large e-commerce React applications with a Node back-end, and it got me thinking. My working days also have me using Vue for the most part; so in the interest of broadening my skills and building on my React experience, this gave me some focus.

### Enter React

Without giving an exhaustive pros and cons review, here's a brief overview of the tools I considered. Being built with React, all were very extensible using whatever React components or plugins you want to bring, and all offered a similar feature set.

[Next.js](https://nextjs.org/) is a full framework for achieving exactly what I was looking for - but seemed perhaps a little large for what I was looking for. It certainly had all the things - server side rendering, dynamic page routing - but perhaps a little too much. It is a very DIY framework, but I decided I wanted something that had a little more configuration for you out of the box.

[React Static](https://react-static.js.org/) was another that seemed really promising, and still does. It is a streamlined React static site generator, and is very easy to use and theme. It has a straighforward mechanism to fetch content and isn't doesn't layer in other tools or add other complexity and coginitive load.

Ultimately, [Gatsby](https://www.gatsbyjs.org/) was the one I opted for. It is designed for speed, optimizing everything in its build process, and comes with the similar features that both Next and React Static have for SSR and dynamic routing. It has a good number of starter themes, and also brings in things like Helmet out of the box, and it _does_ layer in other things - namely GraphQL - for an opinionated way to retrieve data.

While this has the potential to add more overhead, it's not overly complicated in the end, and makes for a new learning opportunity. Further, GraphQL seems to be making its way into a lot of new projects these days, and I would be remiss to pass up an opportunity to learn it if I'm not already making use of it in my daily work.

As a bonus, it has a great development experience with browser-sync and hot reloading. I'm still learning the ins and outs of the framework, but I learned enough while building it to be able to throw togther a Gatsby version of [my wife's website](https://katrinadawn.ca/) in just a couple of hours. I even managed to hook up GraphQL with Instagram to grab the latest posts from her feed and display them on her website.

I also looked at making this a true JAM stack by using Contentful for managing content. Gatsby has a plugin that makes it easy to connect to Contentful and grab the content you want. In the end, I decided to opt for querying markdown files in the repo to keep things even simpler. However, I wouldn't hesitate to use this setup for a client site.

## Hosting

For a hosting solution, I decided to deploy the new site to Netlify. It provides a free tier that is more than enough, as well as free form handling out of the box. While there's not much to it, you can configure it to send an email to yourself whenever there's a new submission.

To continue making this a great experience for development, all I had to do was follow the instructions from the account dashboard to connect my Github repo. It's smart enough to identify the project as a Gatsby project, and automatically recognized the build command from it's package.json file. Once it's connected, a new deployment gets triggered whenever code gets pushed to the branch you want it to watch. There's even a screen where you can watch the build process as it happens, as if it were your own terminal running locally.

I initially solved the above no-SSL issue by using CloudFlare to manage the DNS for my website. I did this in anticipation of building a new site eventually. However, Netlify also provides SSL for free, which was great for my wife's website.

## Making the switch

This was probably the most painless website deployment I've ever done. It took only a few minutes to set up.

Even before the new site went live, I was able to see it on Netlify since it assigns a random url when you first set up the project. Configuring it to use my own domain was a breeze - again, all I had to do was update a setting in the dashboad, and then update my DNS at CloudFlare. Instantly, the site was live.

Developing the site in React is a treat, making use of its component and state features. Gatsby takes it to the next level with its great build tools and developer experience, and GraphQl to top it all off.

Gatsby, Netlify, Github - piece of cake. Now all I need to do to make updates to production is `git push`.