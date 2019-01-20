---
layout: post
title:  "P1 : Model Creation"
date:   2019-1-21 16:00:00 +0800
categories: School
---


# Model Creation
This week I've been cleaning the data, preparing the data to be used by the model.
It took me quite a while, as the cleaning images is a tedious process.


I came across a problem where, when I identified the faces and gray-ed the image out.
It identified as no faces, which was a problem for a while.


It came to my mind that it could be possible that:
Face Identified -> Gray Scale -> Face cannot be identified


Hence, I built in another mechanism in place to double check.
Afterwards as fitting the data to the model.
With a few thousand photos of people and celebrities, encoding the images and training the images on 
a pitiful CPU on my laptop, took roughly about 15 minutes.


However, I was able to train, and save the model.

![Photo with colour](https://raw.githubusercontent.com/lczm/lczm.github.io/master/_posts/photos/progress.png)

Picture shows it successfully predicted a face.

Quite abit of progress was made this week.
