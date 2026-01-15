export type ConferenceFeedback = {
    conference: string;
    year: number;
    date: string;
    rawFeedback: string;
    outstandingQuotes?: string[];
    award?: {
        category: string;
        title: string;
        averageRating: number;
        respondents: number;
    };
};

export const conferenceFeedbackData: ConferenceFeedback[] = [
    {
        conference: "AutomationSTAR",
        year: 2024,
        date: "October 2024",
        award: {
            category: "Tutorial",
            title: "ETL Testing Framework",
            averageRating: 4.71,
            respondents: 15
        },
        outstandingQuotes: [
            "Amazing tutorial! Really great explanations and the hands-on was so well prepared and useful",
            "I think Paula really has a good energy as a speaker and that made me feel the passion she has for the topic. The material she had was prepared greatly and she was quick to think on her feet when things didn't work, so we could continue with the tutorial. She brought the topic (unknown to me) in the best possible way, by providing enough details as possible that is necessary to follow the hands-on part. Thanks Paula!",
            "The session was fantastic! The presentation was top-notch, clearly structured, and engaging. The hands-on portion was incredibly well-prepared, allowing us to apply what we learned effectively. Overall, it was a valuable learning experience.",
            "Very profesional, hands on session covering all the key points and really good guidance and content",
            "I was not familiar with the term ETL, this talk did well inform me. Also setting up the playground in github with aws was very nice. The concept was clear and nice and the voice and accent were nice to understand.",
            "The session was very interesting and the explanation of the data platform and ETL was very good, also for the not knowledgeable. I gained some valuable insights for new ways of testing."
        ],
        rawFeedback: `Hi Paula, 

Thank you for contributing to the success of AutomationSTAR 2024.  

We hope you enjoyed the experience of speaking and getting involved in all aspects of the Programme and Community – we loved having you all onsite. 

We have merged all the latest information from delegates attending.  Your feedback scores and comments on your session are included below

BEST OF AutomationSTAR 2024

Tutorial - Tut B - Mastering Web Automation with Robot Framework and Playwright – Presenters: René Rohner & Henrik Schütte

Track Session – W5 - TestOps: A Journey to Story-Based Releases – Presenter: Mazin Inaad

Deep Dive: DD3 - Automate Smarter, not Harder – Presenters: Willem Keesman & Arnoud Gorter

Best Scored Tutorial Session - Tut B - Mastering Web Automation with Robot Framework and Playwright
Scoring - Average Rating of 4.71 out of 5 – 35 Respondents

Sessions were evaluated by delegates using a 1-5 basis  
** Please note – sessions must have over 15 votes to be eligible for awards.

We categorize sessions by the following standards: 
4.00 – 5.00 Outstanding  
3.00 – 4.00 Excellent  
2.00 – 3.00 Good  
1.00 – 2.00 Below Average 
Under 1.00 – Low Scoring 

Your Score - 4.71 - Outstanding

Comparisons: Top Tutorial Score: 4.71

Please see comments below to get some insight on delegates scores. 

Session Feedback – Respondents = 15

I was not familiar with the term ETL, this talk did well inform me. Also setting up the playground in github with aws was very nice. The second part was a bit in a rush. The concept was clear and nice and the voice and accent were nice to understand. For me I would have been more interested in the slides that were not discussed due to time.

Amazing tutorial! Really great explanations and the hands-on was so well prepared and useful

"I think Paula really has a good energy as a speaker and that made me feel the passion she has for the topic. The material she had was prepared greatly and she was quick to think on her feet when things didn't work, so we could continue with the tutorial.  She brought the topic (unknown to me) in the best possible way, by providing enough details as possible that is necessary to follow the hands-on part. Thanks Paula!"

The session was fantastic! The presentation was top-notch, clearly structured, and engaging. The hands-on portion was incredibly well-prepared, allowing us to apply what we learned effectively. Overall, it was a valuable learning experience.

Very profesional, hands on session covering all the key points and really good guidance and content

I was the speaker, but still super happy about how it went. 😉

Good session

The session was very interesting and the explanation of the data platform and ETL was very good, also for the not knowledgeable. I gained some valuable insights for new ways of testing. One remark; the end of the tutorial felt very rushed, and the subjects deserved more time.

We welcome any feedback you have as a speaker – if we can do better, your insight is valuable to us.

If you have any queries on the above information, please drop me a line.  

Regards, 

Siobhán`
    },
    {
        conference: "EuroSTAR",
        year: 2025,
        date: "June 2025",
        award: {
            category: "Tutorial",
            title: "Tutorial G - Testus Patronus: No Magic, Just AI with Your Company Context",
            averageRating: 9.00,
            respondents: 36
        },
        outstandingQuotes: [
            "It was a pleasure to learn how to create a RAG. Paula did an excellent job with preparation, set and actual presentation. Fantastic documentation and step by step support was provided for everyone. It was an intensive and enlightening experience!",
            "First of all, congrats on the workshop! It's not easy to handle alone such a hands-on workshop with 50ppl, with a lot of setups needed. Even if it was not complex in terms of coding, it was impressive that you prepared so well and had several fallbacks in case something didn't work. Having most of the people keeping the pace and completing the exercises says a lot.",
            "I really enjoyed this session. It was very brave of the speaker to attempt this and despite some surprises, she made it work. Well done! I genuinely feel like I learned something valuable.",
            "This was a great tutorial. I was able to build a RAG pipeline and understand how it works, and the variables associated with it. Our tutor did an amazing job. I am quite certain months would have been spent in building it. I walked away with highly detailed useful resources that can be generally applied.",
            "Ambitious tutorial, very well documented and prepared. Teacher went out of her to ensure everyone was following along.",
            "Very nice speaker. Paula had great energy along all the tutorial. A bit difficult to follow some practical part of exercises being exposed to a totally new software. But still I found this tutorial super inspiring. Good job!",
            "Great presentation , quite quick but great. You are definitely Hermione of LLM :-)",
            "Brilliant session, but very fast-paced!",
            "The link with the wizarding world is awesome and the technical difficulties are a side effect of AI ;-)",
            "Very interesting! Amazing session!",
            "Love the energy and the practical examples.",
            "Well prepared and useful. Learned loads.",
            "Thank you for opening the world for making chatbots! Very good practice examples!"
        ],
        rawFeedback: `Hi Paula,

Thank you for contributing to the success of EuroSTAR Conference 2025  

We hope you enjoyed the experience of speaking and getting involved in all aspects of the EuroSTAR programme and community – we loved having everyone onsite. 

To finish off please see the BEST OF and presentation scores below.  

EuroSTAR Best of: -  

Best Scored Keynote: K1 - Breaking Test Stereotypes: Who Is Testing and Why It Matters – Isabel Evans

Best Scored Tutorial: Tutorial G - Do You Have a Testing Toolkit? Let's Build One - Rahul Parwal

Best Scored Track Session - F3 - Cross-Dysfunctional Teams: Where the Magic Stops – Phil Royston

We have merged all the information from attending delegates and your feedback scores on your session are included below. 

We categorize sessions by the following standards: 

9.00 and 10.00 - Outstanding

8.00 and 8.99 - Excellent

7.00 and 7.99 - Good

6.00 and 6.99 - Average

Under 6.00 - Below Expected Minimum Standard

Your Score – Outstanding

Score: 9.00 (2nd)

Respondents: 36

Comparisons:  

Top Tutorial Score: 9.26

Average Tutorial Score Rating: 8.58

Feedback Comments - below.

The link with the wizarding world is awesome and the technical difficulties are a side effect of AI ;-)

Very interesting! Amazing session!

Quite nicely presented

Love the energy and the practical examples.

Great session

You are very knowledgeable about this topic, and I love the theme and slide deck. Would transform this into a full day workshop. It's a lot to take in, limited time.

Interesting topic, some technical issues but those always happen. Good speaker. She knows here stuff.

It was a pleasure to learn how to create a RAG. Paula did an excellent job with preparation, set and actual presentation. Fantastic documentation and step by step support was provided for everyone. It was an intensive and enlightening experience!

"First of all, congrats on the workshop!  It's not easy to handle alone such a hands-on workshop with 50ppl, with a lot of setups needed.  Even if it was not complex in terms of coding, it was impressive that you prepared so well and had several fallbacks in case something didn't work.  Having most of the people keeping the pace and completing the exercises says a lot.  I personally understood that doing a quality internal chatbot is not an easy job, as maybe I was thinking. Thank you!"

A good introduction to RAGs. Paula was well prepared; the tutorial was easy to follow.

Great energy (even though the audience was not so energetic), good that you waited that everyone follows, great job.

"Lot of effort put in your session and presentation slides. Great job keep it up.  Thanks, you for ensuring the workshop instances are setup well in advance making it seamless.  May be for the next one. The setup can be more seamless to make this a 7-star workshop."

Ambitious tutorial, very well documented and prepared. Teacher went out of her to ensure everyone was following along.

"Very nice speaker. Paula had great energy along all the tutorial.  A bit difficult to follow some practical part of exercises being exposed to a totally new software. But still I found this tutorial super inspiring. Good job!"

I really enjoyed this session. It was very brave of the speaker to attempt this and despite some surprises, she made it work. Well done! I genuinely feel like I learned something valuable.

There weren't enough seats; I think it was overbooked. Power outlets for computers were inadequate. Very few participants were able to finish the project, likely because the instructor seemed unprepared and got stuck at times, only resolving issues with help from experienced students. Those struggling weren't given solutions. The session was rushed and there was only a break. Better pre-class guidance is needed.

Brave and ambitious in scope. Occasionally hard to follow, but that was understandable given the scale of what to cover.

It was excellent for the conditions and the number of people. In a future session I would cut the topic of setting up a micro service locally and move forward only with the configuration of an existing API

it was really interesting and funny to me. I had wanted to get the full pre-requisition before the workshop

Well prepared and useful. Learned loads.

Thank you for opening the world for making chatbots! Very good practice examples!

Hi Paula, thanx for your presentation and sharing of knowledge. Too bad we experienced some unforeseen circumstances which you navigated well and didn't let it get to you (too much?). Due to these waiting times, it was sometimes difficult to keep up with you. The only thing I would suggest is to don't "shhhh!" people when they're then trying to help each other by talking. It happened several times and it would've probably been better to address it. It just felt a bit out of place, I guess. Thx!

Great presentation , quite quick but great. You are definitely Hermione of LLM :-)

This was a great tutorial. I was able to build a RAG pipeline and understand how it works, and the variables associated with it. Our tutor did an amazing job. I am quite certain months would have been spent in building it. I walked away with highly detailed useful resources that can be generally applied.

"Great hands on.  Tip: it would be good to e.g. hover mouse a bit before a click. It helps to follow your example."

The presentation was really nice! And thank you so much for organizing the live session and preparing the working environment!

The hands-on approach gave really good basis to continue exploring these tools.

Brilliant session, but very fast-paced!

Thank you for all your co-operation and work during the year – we hope you enjoyed the full experience.

Some great feedback above to take on board for the next outing at AutomationSTAR.`
    },
    {
        conference: "AutomationSTAR",
        year: 2025,
        date: "November 2025",
        award: {
            category: "Best Tutorial Award",
            title: "Tut D - Testus Patronus: No Magic, Just AI with Your Company Context",
            averageRating: 4.70,
            respondents: 33
        },
        outstandingQuotes: [
            "Best tutorial ever! I had knowledge on the topic and didn't feel like it would be too interesting to attend yet another lecture on the matter, but I was completely wrong. I'm so happy I attended this talk.",
            "The presenter's energy was contagious.",
            "Great interactive session! It was nice to try the approach hands on and the teaching style is very clear and fun.",
            "I enjoyed your tutorial so much. I appreciate the simple and clear way you explained things, the practical character of lecturing resulting in much more information gained (and still knowing of much to be studied). Thank you, I enjoyed you so much and love HP too ☺️",
            "It was a creative and educational session. Pretty awesome to spin up 100 environments and have it actually work. Lots of fun and knowledgeable",
            "Wonderful speaker and a very interesting talk. Thank you!",
            "Really good tutorial. I will apply it in my company. I hope this show it is in the next year event with more details!!",
            "Well presented, loved the Harry Potter theme and the practical part worked perfectly",
            "Easy to follow and also relatable to my daily work!",
            "Great talk, accessible for everyone."
        ],
        rawFeedback: `Hi Paula,

We hope you enjoyed the AutomationSTAR conference as much as we did.  See below a synopsis of the speaker sessions and scores –

BEST OF AutomationSTAR 2025

Tutorial - Tutorial D - Testus Patronus: No Magic, Just AI with Your Company Context
– Presenters: Paula Bassagañas 

Track Session – M5 - Sustainable Execution: Which Tests Can We Skip This Time?
– Presenter: Elmar Jürgens

Deep Dive: DD2 - Lights, camera, test! Let's put the fun in non-functionals
– Presenters: Willem Keesman & Arnoud Gorter

Sessions were evaluated by delegates using a 1-5 basis  
** Please note – sessions must have over 15 votes onsite to be eligible for awards. 

We categorize sessions by the following standards: 
4.00 – 5.00 Outstanding  
3.00 – 4.00 Excellent  
2.00 – 3.00 Good  
1.00 – 2.00 Below Average 
Under 1.00 – Low Scoring 

Best Tutorial Award - Tut D - Testus Patronus: No Magic, Just AI with Your Company Context
Average Rating of 4.70 – 33 Respondents

Please see comments below to get some insight on delegates scores. 

We could use a little bit more time on it

Good start for noob in ai, at the end a little bit too fast for understanding. Good combination between classical talk and website tutorial, so you could go on your OWN

Really good tutorial. I will apply it in my company. I hope this show it is in the next year event with more details!!

I was great!

Wonderful speaker and a very interesting talk. Thank you!

Best tutorial ever! I had knowledge on the topic and didn't feel like it would be too interesting to attend yet another lecture on the matter, but I was completely wrong. I'm so happy I attended this talk.

Good explanation and hands on. Each exercise was covered.

Great talk, accessible for everyone.

Easy to follow and also relatable to my daily work!

Good hands-on session, some technical issues but I now have insights in the working of this type of AI

Easy to understand, interesting topic.

Easy to follow, very good explained.

The presenter's energy was contagious.

"Great interactive session!  It was nice to try the approach hands on and the teaching style is very clear and fun. One tip is to include also the more technical side of it, although with provided github links it is possible to find out on your own."

Very interesting classes and a reference to Harry Potter. I love it!

Great organization and presentation

I enjoyed your tutorial so much. I appreciate the simple and clear way you explained things, the practical character of lecturing resulting in much more information gained (and still knowing of much to be studied). Thank you, I enjoyed you so much and love HP too ☺️

Well presented, loved the Harry Potter theme and the practical part worked perfectly

It was a creative and educational session. Pretty awesome to spin up 100 environments and have it actually work. Lots of fun and knowledgeable`
    }
];

