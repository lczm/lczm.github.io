---
layout: post
title:  "P2 : Cosign"
date:   2019-11-10 13:00:00 +0800
categories: School
---


## Cosign Updates
This week had some interesting updates. I used google colab to do some preprocessing on the current dataset. It went smoothly and did not take that long. The data was then serialized through the pickle library in Python. This serialized file is currently being used for training our models.

## Recognition
I have started setting up a RESTful server on a cloud machine. This server will take in an image through a POST request. The idea is that this POST request will be sent from the mobile application into the server. The server will then process it through our model stack and return a result.

I have been exploring the [openpose](https://github.com/CMU-Perceptual-Computing-Lab/openpose/) Python API. So far, it has not been an extremely pleasant experience as there is not much documentation to go from. The only reasonable source of documentation is through the example pieces of code.

## Problem
By using the example code as a reference, I was able to build a basic left hand right hand key point detector through openpose. It currently returns the keypoints of both left and right hand as a JSON. This is good as JSON is used everywhere and is able to be parsed everywhere.

But the problem comes from the limitation that the current key point detector that lies on my server has. It is unable to detect hands, and has to use a rough estimate of where the left and right hands are. This can be a serious problem as it can drastically reduce accuracy while trying to predict hand signs. 

The current solution I am pursuing is using a hand detector model that will return bounding boxes and use that to the key point detector. A concern that I have currently, is that the process might take too long and result in a bad user experience. The team is currently aiming to have good performance, so I have to keep this in mind. Currently, predicting key points from an image, including preprocessing takes roughly 0.4s with a Tesla K80 GPU. We would ideally like to keep the entire prediction process under 1s.

Hence, I will be working on having the hand recognition model and prediction model work seamlessly with each other, so that the process will go on smoothly
