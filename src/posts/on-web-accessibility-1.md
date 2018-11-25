---
title: 'On Web Accessibility: Part 1'
slug: '/on-web-accessibility-part-1'
date: '2013-08-24'
---

Making your website accessible can be a tall order. There are many things to consider even before you begin designing. This series will attempt to address many of these considerations, and will hopefully include suggestions and solutions to making your site accessible, and thus is aimed at web developers and user experience designers.

The WCAG 2.0 document says, “Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.”  Originally published in 1999, WCAG 1.0 set out to establish standards and practices for making the internet “accessible” to users with disabilities, and was revised in 2008 with version 2.0. It also establishes three levels of compliance, each one building on the previous one. In order to meet AAA standards, for example, an entire page (not just a part of a page) must first meet AA requirements fully, and so on.

WCAG 2.0, from which much of this post is taken, is a very large and detailed document, with a guide to understand the standards, along with examples of techniques for success. The overarching principles that follow inform all of the guidelines, criteria and techniques that are detailed there. Here in brief are their four principles for accessibility:

## 1. Perceivable.

The goal here is to be able to present non-text content in a way that all users can understand.  Examples include: images that have text alternatives (using the “alt” attribute); time-based media like audio and video have captions or transcriptions; presenting content in straightforward layouts; making text legible by separating background from foreground elements, using sufficient colour-contrast, and avoiding images of text; offering a means of controlling playback for audio and video elements, including volume control.

## 2. Operable.

This principle is about being able to navigate and access content no matter how you interact with it. For example, if you are using only a keyboard, you should be able to easily tab between links in a logical order, and be able to tell that you have brought focus to a particular element. The page should be identifiable immediately, and the purpose of links should be clear. Also, being able to manage things like time limits, or renewing a timed session without losing any data or progress.

## 3. Understandable.

This is one of the more complex principles – understanding the content of a page might be a challenge for some users depending on their reading level or cognitive abilities. Providing the default language is the first step, and depending on which level of conformance you are trying to reach, you might need to offer tools to aid in defining or pronouncing words. Further, having navigation be consistent across pages, and focusing on an element does not change the context of the page unexpectedly.  One of the more challenging parts is in displaying error messages. For example, what happens if you miss a form field or fill it out incorrectly? There should be a proper mechanism for identifying the error, navigating to it quickly, and understanding how to correct your mistake.

## 4. Robust.

The robustness of your content is aimed at as many user agents as possible , such as assistive technologies, being able to interpret it. A great deal of the work here is ensuring proper markup practice (using unique id attributes, for examples), so that any technology attempting to interpret your page does not get confused. However, using standard web controls according to specification will already meet this success criterion.

As you can see, even in the principles of accessibility there is a a great deal to consider in designing for the web. In later posts, I will be looking at some specific ways of achieving accessibility.

*Note: my techniques are not endorsed by WCAG 2.0, unless I refer to them specifically. I will attempt to offer solutions that are in line with the spirit of WCAG, but are drawn from my own experience. Opinions and interpretations of the standards are my own.