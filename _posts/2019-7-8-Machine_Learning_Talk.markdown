---
layout: post
title:  "FP2 Industry Talk #2 - Machine Learning"
date:   2019-7-08 16:00:00 +0800
categories: School
---

## Prologue
An industry talk hosted by the [Singapore Artificial Intelligence](https://www.meetup.com/Singapore-Artificial-Intelligence/) at ![Google Asia](https://www.google.com/maps/search/?api=1&query=1.276233%2C103.800000). They are mainly specialised in Artificial Intelligence, Machine Learning, Deep Learning and the all sorts of new technologies. Technology stack wise, for the talk I went to, it was using Tensorflow.

![Tensorflow Logo](https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F11%2FTensorFlowLogo.svg%2F1200px-TensorFlowLogo.svg.png&f=1)

## Tensorflow?
Tensorflow is a software library that allows used for machine learning. It allows us to build neural networks for multiple different purposes. It is built by Google and is widely used.

## Why this talk out of the many?
I felt that it was an important talk to attend. I have dabbled in machine learning a little bit here and there, but was not fully understanding of it. 

For Portfolio1, I built together a (not very accurate) face recognition system, using libraries built by different people and building a model for classification. This was mainly done in Keras and Computer Vision.

![Keras](https://upload.wikimedia.org/wikipedia/commons/c/c9/Keras_Logo.jpg)

Keras is a higher-level api that is capable of using Tensorflow underneath. This means that I was using Keras without fully understanding what Tensorflow can offer. Hence, I decided to go for the talk as it implements both Tensorflow and Computer Vision. Allowing for a deeper understanding in the topic and further my interests in both Computer Vision and Machine Learning.

## The talk
There were a few people hosting different talks, but I would like to specifically focus these two talks specifically as they were more relevant to my interests for attending the talk. Hosted by Sandeep Giri and Aurélien Géron.

Sandeep Giri
* Founder of CloudxLab
* Former Amazon software engineer

Aurélien Géron
* A best selling author on "Hands-On Machine Learning with Scikit-Learn and Tensorflow"
* A former Googler which led Youtube's video classification team
* Founded Wifirst, a leading Wireless ISP in France

### Basics of Neural Networks
Sandeep Giri explained the general concepts of machine learning as well as common implementations of Neural Networks. While this were mostly stuff I was aware of, I did not have a solid understanding of some of these concepts. Specifically, how a neural network improves upon itself. I knew the general concept was through ![backpropgation](https://en.wikipedia.org/wiki/Backpropagation), however it was not a clear understanding in my mind.

An analogy he gave while explaining the fine tuning of parameters was that it was similar to adjusting knobs. With every batch of the training data given to the neural network, it would mathematically adjust the knobs accordingly. While this did not fully explain the math behind it, it was enough for me to visualize how it would work behind the scenes. Giving me a deeper understanding.

### Interesting Concepts & Technologies
Aurélien Géron talked about various very interesting technologies, such as the ![YOLO](https://pjreddie.com/darknet/yolo/), a state of the art real time object detection system with the powers of computer vision. He explained how a neural network was able to detect objects within the images through many tiny steps.

The neural network would first divide the image into many different regions and form bounding boxes. Afterwards, it would perdict the object within the image. This proves to be an extremely fast way to detect objects in images itself, as it can take into account the context of the image, allowing for a higher accuracy when predicting results

This was a very important new technology that I would not have known of if I did not attend this talk. As object detection can be immensely useful when building applications. Through object detection itself, it would be possible to quickly build up a dataset quickly. 

I can think of many different cases where I wish I had knew of this technology before. For example, during my Portfolio 1 project, Currently, how it does it is that it would return an error if there was multiple people in the photo. An extremely tedious and inefficient process of using the system. I could have used the YOLO real time object detection system to detect if the image had a face within it, and without any outside objects. It would allow for more flexibility in my system and make it a better application. 

## Epilogue
After going for this talk, I learnt many different technologies that can be applied in the future. I also learnt that the machine learning industry is improving itself at a very fast rate. Empowered with the skills and concepts that I learnt from this talk, I am confident that I will be able to use these Machine Learning skills in the future for various projects and hackathons.

#### Heres me and my friends at Google
![Google](https://raw.githubusercontent.com/lczm/lczm.github.io/master/_posts/photos/google.jpg)