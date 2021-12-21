
# SignMeet Recognition Tool

SignMeet is a tool that converts sign language gestures into text. It is still work in progress since the ultimate goal is to have this tool on online meeting platforms, so that sign language users can also be part of virtual meetings.
When the pandemic struck, the use of online meeting platforms was on the rise in all organizations and learning institutions, but what happened to the hearing impaired individuals and those who use sign language?


## Authors

- [Nicholas Renotte](https://github.com/nicknochnack)

- [Evans Njogu](https://github.com/EvansNjogu)



## Ideation and Concept

This idea came about while going about my learning. The real ideation in concept and design was well brought out as I went about my classes in [Pluralsight](https://app.pluralsight.com/id) while learning about [Google Cloud Platform](https://cloud.google.com/), specifically when handling the architect design and process workbook.

![App Screenshot](https://njoguevans.me/google_workbook.png)
## Roadmap

- Collect images ✔

- Label images ✔

- Update labelmap ✔

- Train ✔

- Update checkpoint ✔

- Detect ✔

- Export and convert python model to TFJS format ✔

- Store model in Google Cloud Object Storage ✔

- Install and update dependencies ✔

- Load graph model from url ✔

- Make detections and cleanup ✔


## Future

- Additional browser support

- Add more integrations

- Develop its Application Programming Interface.
## Demo

https://signmeet.uc.r.appspot.com/


## Tech Stack

**FrontEnd:** React

**Machine Learning:** Python, TensorFlow, TensorFlowJS

**Deployment** Google Cloud Platform (GCP)





## Challenges

- The tool is still inaccurate as it needs more data to train the model.

- The tool suffers from bias, something I look forward to fixing in the near future.




## Screenshots

![App Screenshot](https://njoguevans.me/Good.png)

![App Screenshot](https://njoguevans.me/Thank%20you.png)

![App Screenshot](https://njoguevans.me/app_engine.png)

![App Screenshot](https://njoguevans.me/version.png)




## FAQ

#### Does the tool recognize and translate alphabet sign language gestures?

No. The tool recognizes sign language gestures of phrases as alphabet gestures would bring about the time limitation. In future, the tool will even recognize movement based gestures.
#### Why this on online meeting, can't those users type on the chat?

Picture for example, a deaf teacher who teaches using sign language. If they attend an online class, is it practical for them to teach the whole lesson by typing? I guess not. That's what this tool is here for.
