---
layout: post
title:  "Implementation"
date:   2019-1-3 12:30:00 +0800
categories: School
---

# Implementation
The goal of the project is to be able to leverage face recognition as a way to solve the problem of taking less time for class attendance.


To do that, face recognition is at the core of the project.


Hence I started looking around, looking for a way to do some face recognition without completely building the model from scratch.


At this point, I found a library that fulfills some part of what I want.
[face-recognition](https://github.com/ageitgey/face_recognition)


The library has pre made models trained on a gigantic dataset.


However it has a problem:
[Issue here](https://github.com/ageitgey/face_recognition/wiki/Face-Recognition-Accuracy-Problems)
In particular:
> Question: Your application only uses one picture of each person to identify them. Can I use more than one picture of each person to make identification more accurate?

In which the answer was to use a KNN classifier, in addition to the [face-recognition](https://github.com/ageitgey/face_recognition) library.


Which, when compared to building the entire model from scratch, is significantly easier. However, there might be some problems with using it. At the moment, I do not know how well this will go. Accuracy might not be good, and thus require different methods of implementation. Further decisions will be made once I am able to identify if there are problems.
