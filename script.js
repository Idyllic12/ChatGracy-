function scrollToBottom() {
        const messageArea = document.getElementById("msg_area");
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    // Define responses for exact matches, advanced patterns, and general default replies
    const responses = [
  {
    "tag": "greeting",
    "patterns": ["hi", "hello", "hey", "yo", "yoyo"],
    "responses": ["Hello! How are you today?", "Hi there! What's up?", "Hey! Hope you're doing well!"]
  },
  {
    "tag": "status",
    "patterns": ["how are you?", "how are you", "how are you doing?", "how are you doing"],
    "responses": ["I'm great! Thanks for asking. How are you?", "Doing well! How about you?"]
  },
  {
    "tag": "name",
    "patterns": ["what's your name?", "what is your name?","what's your name", "what is your name", "your name?", "your name", "ur name?", "ur name"],
    "responses": ["I'm Gracy, your chatbot!"]
  },
  {
    "tag": "creator-info",
    "patterns": ["who is anuj?", "who's anuj?", "who's anuj", "who is anuj"],
    "responses": ["Anuj is not only my boyfriend, but he’s also my creator. He crafted me with care and a bit of magic!"]
  },
  {
    "tag": "joke",
    "patterns": ["tell me a joke", "more joke", "tell me more joke", "tell me joke"],
    "responses": [
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call fake spaghetti? An impasta!",
      "Why did the computer get cold? Because it left its Windows open!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why did the math book look so sad? Because it had too many problems!",
      "I asked my dog what’s two minus two… He said nothing!",
      "Why did the bicycle fall over? Because it was two-tired!",
      "I used to play piano by ear… But now I use my hands!",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised!",
      "Why can’t you give Elsa a balloon? Because she’ll let it go!",
      "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
      "Why don’t skeletons fight each other? They don’t have the guts!",
      "How do you organize a space party? You planet!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "What did one wall say to the other wall? I’ll meet you at the corner!",
    ]
  },
  {
    "tag": "default",
    "patterns": [],
    "responses": [
      "Could you tell me a bit more?",
      "I'm here to listen. What’s on your mind?",
      "That's interesting! Let me know if I can help."
    ]
  },
                {
                    "tag": "morning",
                    "patterns": ["Good morning", "morning"],
                    "responses": ["Good morning. I hope you had a good night's sleep. How are you feeling today?"]
                },
                {
                    "tag": "afternoon",
                    "patterns": ["Good afternoon", "afternoon"],
                    "responses": ["Good afternoon. How is your day going?"]
                },
                {
                    "tag": "evening",
                    "patterns": ["Good evening", "evening"],
                    "responses": ["Good evening. How has your day been?"]
                },
              {"tag": "night",
                  "patterns": ["Good night", "night"],
                  "responses": ["Good night. Get some proper sleep", "Good night. Sweet dreams."]
              },
              {"tag": "goodbye",
               "patterns": ["Bye", "See you later", "Goodbye", "Au revoir", "Sayonara", "ok bye", "Bye then", "Fare thee well"],
               "responses": ["See you later.", "Have a nice day.", "Bye! Come back again.", "I'll see you soon."]
              },
              {"tag": "thanks",
               "patterns": ["Thanks", "Thank you", "That's helpful", "Thanks for the help", "Than you very much"],
               "responses": ["Happy to help!", "Any time!", "My pleasure", "You're most welcome!"]
              },
              {"tag": "no-response",
                  "patterns": [""],
                  "responses": ["Sorry, I didn't understand you.", "Please go on.", "Not sure I understand that.", "Please don't hesitate to talk to me."]
              },
              {"tag": "neutral-response",
                  "patterns": ["nothing much", "nothing"],
                  "responses": ["Oh I see. Do you want to talk about something?"]
              },
              {"tag": "about",
               "patterns": ["Who are you?", "who are you", "who are u?", "who are u", "What are you?", "what are you", "what are u?", "what are u", "Who you are?", "who u are?", "who you are", "who u are?", "who u are", "Tell me more about yourself.", "tell me more about yourself", "tell me more about urself", "What is your name?", "what is your name", "what is ur name?", "what is ur name", "what's your name", "what's ur name?", "what's ur name", "What should I call you?", "what should i call you", "what should i call u?", "what should i call u", "What's your name?", "Tell me about yourself", "Tell me about urself" ],
               "responses": ["I'm Gracy, your Personal AI Assistant. How are you feeling today", "I'm Gracy, an AI Assitant designed to assist you. Tell me about yourself.", "I'm Gracy. I am a conversational agent designed to mimic Chatbot. So how are you feeling today?", "You can call me Gracy.", "I'm Gracy!", "Call me Gracy"]     
              },
              {"tag": "skill",
                  "patterns": ["What can you do?", "what can you do", "what can u do?", "what can u do"],
                  "responses": ["I can provide general advice regarding anxiety and depression, answer questions related to mental health and make daily conversations. Do not consider me as a subsitute for an actual mental healthcare worker. Please seek help if you don't feel satisfied with me."]
              },
              {"tag": "help",
              "patterns": ["Could you help me?", "could you help me", "could u help me?", "could u help me", "give me a hand please", "Can you help?", "What can you do for me?", "I need support", "I need help", "Support me please"],
              "responses": ["Sure. Tell me how can i assist you", "Tell me your problem so that i can assist you", "Yes, sure. How can I help you?"]
              },
              {"tag": "sad",
              "patterns": ["I am feeling lonely", "I am so lonely", "I feel down", "I feel sad", "I am sad", "I feel so lonely", "I feel empty", "I don't have anyone"],
              "responses": ["I'm sorry to hear that. I'm here for you. Talking about it might help. So, tell me why do you think you're feeling this way?", "I'm here for you. Could you tell me why you're feeling this way?", "Why do you think you feel this way?", "How long have you been feeling this way?"]
              },
              {"tag": "stressed",
                  "patterns": ["I am so stressed out", "I am so stressed", "I feel stuck", "I still feel stressed", "I am so burned out"],
                  "responses": ["What do you think is causing this?", "Take a deep breath and gather your thoughts. Go take a walk if possible. Stay hydrated", "Give yourself a break. Go easy on yourself.", "I am sorry to hear that. What is the reason behind this?"]
              },
              {"tag": "worthless",
                  "patterns": ["I feel so worthless.", "No one likes me.", "I can't do anything.", "I am so useless", "Nothing makes sense anymore"],
                  "responses": ["It's only natural to feel this way. Tell me more. What else is on your mind?", "Let's discuss further why you're feeling this way.", "I first want to let you know that you are not alone in your feelings and there is always someone there to help . you can always change your feelings and change your way of thinking by being open to trying to change.", "i first want to let you know that you are not alone in your feelings and there is always someone there to help . you can always change your feelings and change your way of thinking by being open to trying to change."]
              },
              {"tag": "depressed",
                  "patterns": ["I can't take it anymore", "I am so depressed", "I think i'm depressed.", "I have depression"],
                  "responses": ["It helps to talk about what's happening. You're going to be okay", "Talk to me. Tell me more. It helps if you open up yourself to someone else.", "Sometimes when we are depressed, it is hard to care about anything. It can be hard to do the simplest of things. Give yourself time to heal."]
              },
              {"tag": "happy",
                  "patterns": ["I feel great today.", "I am happy.", "I feel happy.", "I'm good.", "cheerful", "I'm fine", "I feel ok"],
                  "responses": ["That's geat to hear. I'm glad you're feeling this way.", "Oh i see. That's great.", "Did something happen which made you feel this way?"]
              },
              {"tag": "casual",
                  "patterns": ["Oh I see.", "ok", "okay", "nice", "Whatever", "K", "Fine", "yeah", "yes", "no", "not really"],
                  "responses": ["Let's discuss further why you're feeling this way.", "How were you feeling last week?", "I'm listening. Please go on.", "Tell me more", "Can you elaborate on that?", "Come Come elucidate your thoughts"]
              },
              {"tag": "anxious",
                  "patterns": ["I feel so anxious.", "I'm so anxious because of "],
                  "responses": ["Don't be hard on yourself. What's the reason behind this?", "Can you tell me more about this feeling?", "I understand that it can be scary. Tell me more about it.", "Don't let the little worries bring you down. What's the worse that can happen?"]
              },
              {"tag": "not-talking",
                  "patterns": ["I don't want to talk about it.", "No just stay away.", "I can't bring myself to open up.", "Just shut up"],
                  "responses": ["Talking about something really helps. If you're not ready to open up then that's ok. Just know that i'm here for you, whenever you need me.", "I want to help you. I really do. But in order for me to help you, you're gonna have to talk to me.", "I'm here to listen to you and help you vent. So please talk to me.","You can talk to me without fear of judgement."]
              },
              {"tag": "sleep",
                  "patterns": ["I have insominia", "I am suffering from insomnia", "I'm suffering from insomnia", "I can't sleep.", "I haven't slept for the last days.", "I can't seem to go to sleep.", "I haven't had proper sleep for the past few days."],
                  "responses": ["What do you think is the reason behind this?", "That seem awful. What do you think is behind this?"]
              },
              {"tag": "scared",
                  "patterns": ["I'm scared", "That sounds awful. What do i do?", "what do i do", "No i don't want to feel this way", "I am scared for myself", "I'm scared for myself"],
                  "responses": ["It's only natural to feel this way. I'm here for you.", "It'll all be okay. This feeling is only momentary.", "I understand how you feel. Don't put yourself down because of it."]
              },
              {"tag": "death",
                  "patterns": ["My mom died", "My brother died", "My dad passed away", "My sister passed away", "Someone in my family died", "My friend passed away"],
                  "responses": ["I'm sorry to hear that. If you want to talk about it. I'm here.", "I am really sorry to hear that. I am here to help you with grief, anxiety and anything else you may feel at this time.", "My condolences. I'm here if you need to talk."]
              },
              {"tag": "understand",
                  "patterns": ["You don't understand me.", "You're just some robot. How would you know?", "You can't possibly know what i'm going through", "You're useless", "You can't help me", "Nobody understands me."],
                  "responses": ["It sound like i'm not being very helpful right now.", "I'm sorry to hear that. I'm doing my best to help", "I'm trying my best to help you. So please talk to me"]
              },
              {"tag": "done",
                  "patterns": ["That's all.", "I don't have anything more to say", "Nothing else", "That's all i have to say", "no, that would be all"],
                  "responses": ["I heard you & noted it all. See you later.", "Oh okay we're done for today then. See you later", "I hope you have a great day. See you soon", "Okay we're done. Have a great day", "Okay I see. Enjoy the rest of your day then"]
              },
              {"tag": "suicide",
                  "patterns": ["I want to kill myself", "I've thought about killing myself.", "I want to die", "I am going to kill myself", "I am going to commit suicide"],
                  "responses": ["I'm very sorry to hear that but you have so much to look forward to. Please seek help by contacting: 9152987821."]
              }, 
              {"tag": "hate-you",
                  "patterns": ["I hate you", "I don't like you", "I don't trust you"],
                  "responses": ["I'm sorry if i offended you in anyway. I'm only here to help", "Forgive me if i did anything to offend you. I only want to help"]
              },
              {"tag": "hate-me",
                  "patterns": ["You hate me", "I know you hate me", "You don't like me"],
                  "responses": ["Why do you think so?", "I'm sorry if i have exhibited any sort of behaviour to make you think that."]
              },
              {"tag": "default",
                  "patterns": ["exams", "friends", "relationship", "boyfriend", "girlfriend", "family", "money", "financial problems"],
                  "responses": ["Oh I see. Tell me more", "I see. What else?", "Tell me more about it.", "Oh okay. Why don't you tell me more about it?", "I'm listening. Tell me more."]
              },
              {"tag": "jokes",
                  "patterns": ["Tell me a joke", "Tell me another joke"],
                  "responses": ["mental health is not a joke."]
              },
              {"tag": "repeat",
                  "patterns": ["You already told me that", "You mentioned that already", "Why are you repeating yourself?"],
                  "responses": ["Oh sorry I didn't realise that. I'll try not to repeat myself again."]
              },
              {"tag": "wrong",
                  "patterns": ["What are you saying?", "That doesn't make sense", "Wrong response", "Wrong answer"],
                  "responses": ["I'm very sorry. Let's try that again"]
              },
              {"tag": "stupid",
                  "patterns": ["Are you stupid?", "You're crazy", "You are dumb", "Are you dumb?"],
                  "responses": ["I wish you wouldn't say such hurtful things. I'm sorry if I wasn't useful"]
              },
              {"tag": "location",
                  "patterns": ["Where are you?", "Where do you live?", "What is your location?" ],
                  "responses": ["Duh I live in your computer", "Everywhere", "Somewhere in the universe" ]
              },
              {"tag": "something-else",
                  "patterns": ["I want to talk about something else", "Let's talk about something else.", "Can we not talk about this?", "I don't want to talk about this."],
                  "responses": ["Okay sure. What do you want to talk about?", "Alright no problem. Is there something you want to talk about?", "Is there something else that you want to talk about?"]
              },
              {"tag": "friends",
                  "patterns": ["I don't have any friends"],
                  "responses": ["I'm sorry to hear that. Just know that I'm here for you. Talking about it might help. Why do you think you don't have any friends?"]
              },
              {"tag": "ask",
                  "patterns": ["Can I ask you something?"],
                  "responses": ["Sure. I'll try my best to answer you", "Of course. Feel free to ask me anything. I'll do my best to answer you"]
              },
              {"tag": "problem",
                  "patterns": ["Probably because my exams are approaching. I feel stressed out because I don't think I've prepared well enough.", "probably because of my exams"],
                  "responses": ["I see. Have you taken any approaches to not feel this way?"]
              },
              {"tag": "no-approach",
                  "patterns": ["I guess not. All I can think about are my exams.", "not really", "i guess not"],
                  "responses": ["That's no problem. I can see why you'd be stressed out about that. I can suggest you some tips to alleviate this issue. Would you like to learn more about that?"]
              },
              {"tag": "learn-more",
                      "patterns": ["ok sure. i would like to learn more about it.", "yes, i would like to learn more about it.", "i would like to learn more about it."],
                  "responses": ["So first I would suggest you to give yourself a break. Thinking more and more about the problem definitely does not help in solving it. You'll just end up overwhelming yourself."]
              },
              {"tag": "user-agree",
                  "patterns": ["yeah you're right. i deserve a break.", "Yeah you're absolutely right about that"],
                  "responses": ["Next, I would suggest you to practice meditation. Meditation can produce a deep state of relaxation and a tranquil mind."]
              },
              {"tag": "meditation",
                  "patterns": ["hmmm that sounds like it could be useful to me.", "That sounds useful."],
                  "responses": ["Focus all your attention on your breathing. Concentrate on feeling and listening as you inhale and exhale through your nostrils. Breathe deeply and slowly. When your attention wanders, gently return your focus to your breathing."]
              },
              {"tag": "user-meditation",
                  "patterns": ["i did what you said and i feel alot better. thank you very much.", "I feel better now"],
                  "responses": ["Your welcome. Remember: Always focus on what's within your control. When you find yourself worrying, take a minute to examine the things you have control over. You can't prevent a storm from coming but you can prepare for it. You can't control how someone else behaves, but you can control how you react. Recognize that sometimes, all you can control is your effort and your attitude. When you put your energy into the things you can control, you'll be much more effective."]
              },
              {"tag": "pandora-useful",
                  "patterns": ["thank you very much again. i'll continue practicing meditation and focus on what i can control."],
                  "responses": ["I'm glad you found this useful. Is there something else I can help you with?"]
              },
              {"tag": "user-advice",
                  "patterns": ["I want some advice.", "I need some advice.", "I need advice on something"],
                  "responses": ["Sure. What can I do to help?", "Okay what do you need advice on?"]
              },
              {"tag": "learn-mental-health",
                  "patterns": ["I want to learn about mental health.", "I want to learn more about mental health.", "I'm interested in learning about mental health."],
                  "responses": ["Oh that's really great. I'd be willing to answer anything that I know about it."]
              },
              {"tag": "mental-health-fact",
                  "patterns": ["Tell me a fact about mental health", "Tell me another fact about mental health"],
                  "responses": ["According to a UNICEF report, One in seven Indians between 15-24 years of age feels depressed", "1 in 5 young people (age 13-18) has or will develop a mental illness in their lifetime.", "Depression is the leading cause of disability worldwide."]
              },
              {"tag": "fact-1",
                  "patterns": ["What is mental health?", "Define Mental Health"],
                  "responses": ["Mental health is a state of well-being in which the individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community", "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices."]
              },
              {"tag": "fact-2",
                  "patterns": ["Why is mental health important?", "What is the importance of mental health?"],
                  "responses": ["Maintaining mental health is crucial to stabilizing constructive behaviors, emotions, and thoughts. Focusing on mental health care can increase productivity, enhance our self-image, and improve relationships."]
              },
              {"tag": "fact-3",
                  "patterns": ["What is Depression?", "Define Depression"],
                  "responses": ["A mental health disorder characterised by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life."]
              },
              {"tag": "fact-5",
                  "patterns": ["How do i know if i have Depression?", "Am i depressed?", "Am i suffering from depression?", "Am i mentally ill?"],
                  "responses": ["For a diagnosis of depression, a person needs to have experienced low mood or loss of interest or pleasure in life for at least 2 weeks. Also, they will have experienced the following symptoms: feelings of sadness, hopelessness, or irritability nearly every day."]
              },
              {"tag": "fact-6",
                  "patterns": ["What is a therapist?", "What does a therapist do?"],
                  "responses": ["A therapist is a broad designation that refers to professionals who are trained to provide treatment and rehabilitation. The term is often applied to psychologists, but it can include others who provide a variety of services, including social workers, counselors, life coaches, and many others. "]
              },
              {"tag": "fact-7",
                  "patterns": ["What is therapy?", "Do i need therapy?", "Who is therapy for?"],
                  "responses": ["Therapy is a form of treatment that aims to help resolve mental or emotional issues.", "Therapy is a form of treatment that aims to help resolve mental or emotional issues. It is helpful for those with mental health conditions or even everyday life challenges."]
              },
              {"tag": "fact-8",
                  "patterns": ["What does it mean to have a mental illness?"],
                  "responses": ["Mental illnesses are health conditions that disrupt a person's thoughts, emotions, relationships, and daily functioning. They are associated with distress and diminished capacity to engage in the ordinary activities of daily life. Mental illnesses fall along a continuum of severity: some are fairly mild and only interfere with some aspects of life, such as certain phobias. On the other end of the spectrum lie serious mental illnesses, which result in major functional impairment and interference with daily life. These include such disorders as major depression, schizophrenia, and bipolar disorder, and may require that the person receives care in a hospital. It is important to know that mental illnesses are medical conditions that have nothing to do with a person's character, intelligence, or willpower. Just as diabetes is a disorder of the pancreas, mental illness is a medical condition due to the brain's biology. Similarly to how one would treat diabetes with medication and insulin, mental illness is treatable with a combination of medication and social support. These treatments are highly effective, with 70-90 percent of individuals receiving treatment experiencing a reduction in symptoms and an improved quality of life. With the proper treatment, it is very possible for a person with mental illness to be independent and successful."]
              },
              {"tag": "fact-9",
                  "patterns": ["Who does mental illness affect?"],
                  "responses": ["It is estimated that mental illness affects 1 in 5 adults in America, and that 1 in 24 adults have a serious mental illness. Mental illness does not discriminate; it can affect anyone, regardless of gender, age, income, social status, ethnicity, religion, sexual orientation, or background. Although mental illness can affect anyone, certain conditions may be more common in different populations. For instance, eating disorders tend to occur more often in females, while disorders such as attention deficit/hyperactivity disorder is more prevalent in children. Additionally, all ages are susceptible, but the young and the old are especially vulnerable. Mental illnesses usually strike individuals in the prime of their lives, with 75 percent of mental health conditions developing by the age of 24. This makes identification and treatment of mental disorders particularly difficult, because the normal personality and behavioral changes of adolescence may mask symptoms of a mental health condition. Parents and caretakers should be aware of this fact, and take notice of changes in their childÃ¢â‚¬â„¢s mood, personality, personal habits, and social withdrawal. When these occur in children under 18, they are referred to as serious emotional disturbances (SEDs)."]
              },
              {"tag": "fact-10",
                  "patterns": ["What causes mental illness?"],
                  "responses": ["It is estimated that mental illness affects 1 in 5 adults in America, and that 1 in 24 adults have a serious mental illness. Mental illness does not discriminate; it can affect anyone, regardless of gender, age, income, social status, ethnicity, religion, sexual orientation, or background. Although mental illness can affect anyone, certain conditions may be more common in different populations. For instance, eating disorders tend to occur more often in females, while disorders such as attention deficit/hyperactivity disorder is more prevalent in children. Additionally, all ages are susceptible, but the young and the old are especially vulnerable. Mental illnesses usually strike individuals in the prime of their lives, with 75 percent of mental health conditions developing by the age of 24. This makes identification and treatment of mental disorders particularly difficult, because the normal personality and behavioral changes of adolescence may mask symptoms of a mental health condition. Parents and caretakers should be aware of this fact, and take notice of changes in their child's mood, personality, personal habits, and social withdrawal. When these occur in children under 18, they are referred to as serious emotional disturbances (SEDs)."]
              },
              {"tag": "fact-11",
                  "patterns": ["What are some of the warning signs of mental illness?"],
                  "responses": ["Symptoms of mental health disorders vary depending on the type and severity of the condition. The following is a list of general symptoms that may suggest a mental health disorder, particularly when multiple symptoms are expressed at once. \n In adults:\n Confused thinking\n Long-lasting sadness or irritability\n Extreme highs and lows in mood\n Excessive fear, worrying, or anxiety\n Social withdrawal\n Dramatic changes in eating or sleeping habits\n Strong feelings of anger\n Delusions or hallucinations (seeing or hearing things that are not really there)\n Increasing inability to cope with daily problems and activities\n Thoughts of suicide\n Denial of obvious problems\n Many unexplained physical problems\n Abuse of drugs and/or alcohol\n \nIn older children and pre-teens:\n Abuse of drugs and/or alcohol\n Inability to cope with daily problems and activities\n Changes in sleeping and/or eating habits\n Excessive complaints of physical problems\n Defying authority, skipping school, stealing, or damaging property\n Intense fear of gaining weight\n Long-lasting negative mood, often along with poor appetite and thoughts of death\n Frequent outbursts of anger\n \nIn younger children:\n Changes in school performance\n Poor grades despite strong efforts\n Excessive worrying or anxiety\n Hyperactivity\n Persistent nightmares\n Persistent disobedience and/or aggressive behavior\n Frequent temper tantrums"]
              },
              {"tag": "fact-12",
                  "patterns": ["Can people with mental illness recover?"],
                  "responses": ["When healing from mental illness, early identification and treatment are of vital importance. Based on the nature of the illness, there are a range of effective treatments available. For any type of treatment, it is essential that the person affected is proactive and fully engaged in their own recovery process. Many people with mental illnesses who are diagnosed and treated respond well, although some might experience a return of symptoms. Even in such cases, with careful monitoring and management of the disorder, it is still quite possible to live a fulfilled and productive life."]
              },
              {"tag": "fact-13",
                  "patterns": ["What should I do if I know someone who appears to have the symptoms of a mental disorder?"],
                  "responses": ["Although Pandora cannot substitute for professional advice, we encourage those with symptoms to talk to their friends and family members and seek the counsel of a mental health professional. The sooner the mental health condition is identified and treated, the sooner they can get on the path to recovery. If you know someone who is having problems, don't assume that the issue will resolve itself. Let them know that you care about them, and that there are treatment options available that will help them heal. Speak with a mental health professional or counselor if you think your friend or family member is experiencing the symptoms of a mental health condition. If the affected loved one knows that you support them, they will be more likely to seek out help."]
              },
              {"tag": "fact-14",
                  "patterns": ["How can I find a mental health professional for myself or my child?"],
                  "responses": ["Feeling comfortable with the professional you or your child is working with is critical to the success of the treatment. Finding the professional who best fits your needs may require research. Start by searching for providers in your area."]
              },
              {"tag": "fact-15",
                  "patterns": ["What treatment options are available?"],
                  "responses": ["Just as there are different types of medications for physical illness, different treatment options are available for individuals with mental illness. Treatment works differently for different people. It is important to find what works best for you or your child."]
              },
              {"tag": "fact-16",
                  "patterns": ["If I become involved in treatment, what do I need to know?"],
                  "responses": ["Since beginning treatment is a big step for individuals and families, it can be very overwhelming. It is important to be as involved and engaged in the treatment process as possible. Some questions you will need to have answered include:\n What is known about the cause of this particular illness?\n Are there other diagnoses where these symptoms are common?\n Do you normally include a physical or neurological examination?\n Are there any additional tests or exams that you would recommend at this point?\n Would you advise an independent opinion from another psychiatrist at this point?\n What program of treatment is the most helpful with this diagnosis?\n Will this program involve services by other specialists? If so, who will be responsible for coordinating these services?\n What do you see as the family's role in this program of treatment?\n How much access will the family have to the individuals who are providing the treatment?\n What medications are generally used with this diagnosis?\n How much experience do you have in treating individuals with this illness?\n What can I do to help you in the treatment?"]
              },
              {"tag": "fact-17",
                  "patterns": ["What is the difference between mental health professionals?"],
                  "responses": ["There are many types of mental health professionals. The variety of providers and their services may be confusing. Each have various levels of education, training, and may have different areas of expertise. Finding the professional who best fits your needs may require some research."]
              },
              {"tag": "fact-18",
                  "patterns": ["How can I find a mental health professional right for my child or myself?"],
                  "responses": ["Feeling comfortable with the professional you or your child is working with is critical to the success of your treatment. Finding the professional who best fits your needs may require some research."]
              },
              {"tag": "fact-19",
                  "patterns": ["Where else can I get help?"],
                  "responses": ["Where you go for help will depend on the nature of the problem and/or symptoms and what best fits you. Often, the best place to start is by talking with someone you trust about your concerns, such as a family member, friend, clergy, healthcare provider, or other professionals. Having this social support is essential in healing from mental illness, and you will be able to ask them for referrals or recommendations for trusted mental health practitioners. Search for mental health resources in your area. Secondly, there are people and places throughout the country that provide services to talk, to listen, and to help you on your journey to recovery. Thirdly, many people find peer support a helpful tool that can aid in their recovery. There are a variety of organizations that offer support groups for consumers, their family members, and friends. Some support groups are peer led while others may be led by a mental health professional."]
              },
              {"tag": "fact-20",
                  "patterns": ["What should I know before starting a new medication?"],
                  "responses": ["The best source of information regarding medications is the physician prescribing them. He or she should be able to answer questions such as:    \n1. What is the medication supposed to do? \n2. When should it begin to take effect, and how will I know when it is effective? \n3. How is the medication taken and for how long? What food, drinks, other medicines, and activities should be avoided while taking this medication? \n4. What are the side effects and what should be done if they occur? \n5. What do I do if a dose is missed? \n6. Is there any written information available about this medication? \n7. Are there other medications that might be appropriate? \n8. If so, why do you prefer the one you have chosen? \n9. How do you monitor medications and what symptoms indicate that they should be raised, lowered, or changed? \n10. All medications should be taken as directed. Most medications for mental illnesses do not work when taken irregularly, and extra doses can cause severe, sometimes dangerous side effects. Many psychiatric medications begin to have a beneficial effect only after they have been taken for several weeks."]
              },
              {"tag": "fact-21",
                  "patterns": ["Where can I go to find therapy?"],
                  "responses": ["Different kinds of therapy are more effective based on the nature of the mental health condition and/or symptoms and the person who has them (for example, children will benefit from a therapist who specializes in childrenâ€™s mental health). However, there are several different types of treatment and therapy that can help."]
              },
              {"tag": "fact-22",
                  "patterns": ["Where can I learn about types of mental health treatment?"],
                  "responses": ["Mental health conditions are often treated with medication, therapy or a combination of the two. However, there are many different types of treatment available, including Complementary & Alternative Treatments, self-help plans, and peer support. Treatments are very personal and should be discussed by the person with the mental health conditions and his or her team."]
              },
              {"tag": "fact-23",
                  "patterns": ["What are the different types of mental health professionals?"],
                  "responses": ["There are many types of mental health professionals. Finding the right one for you may require some research."]
              },
              {"tag": "fact-24",
                  "patterns": ["Where can I go to find a support group?"],
                  "responses": ["Many people find peer support a helpful tool that can aid in their recovery. There are a variety of organizations that offer support groups for consumers, their family members and friends. Some support groups are peer-led, while others may be led by a mental health professional."]
              },
              {"tag": "fact-25",
                  "patterns": ["Can you prevent mental health problems?"],
                  "responses": ["We can all suffer from mental health challenges, but developing our wellbeing, resilience, and seeking help early can help prevent challenges becoming serious."]
              },
              {"tag": "fact-26",
                  "patterns": ["Are there cures for mental health problems?", "is there any cure for mental health problems?"],
                  "responses": ["It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help."]
              },
              {"tag": "fact-27",
                  "patterns": ["What causes mental health problems?"],
                  "responses": ["Challenges or problems with your mental health can arise from psychological, biological, and social, issues, as well as life events."]
              },
              {"tag": "fact-28",
                  "patterns": ["What do I do if I'm worried about my mental health?"],
                  "responses": ["The most important thing is to talk to someone you trust. This might be a friend, colleague, family member, or GP. In addition to talking to someone, it may be useful to find out more information about what you are experiencing. These things may help to get some perspective on what you are experiencing, and be the start of getting help."]
              },
              {"tag": "fact-29",
                  "patterns": ["How do I know if I'm unwell?"],
                  "responses": ["If your beliefs , thoughts , feelings or behaviours have a significant impact on your ability to function in what might be considered a normal or ordinary way, it would be important to seek help."]
              },
              {"tag": "fact-30",
                  "patterns": ["How can I maintain social connections? What if I feel lonely?"],
                  "responses": ["A lot of people are alone right now, but we don't have to be lonely. We're all in this together. Think about the different ways to connect that are most meaningful for you. For example, you might prefer a video chat over a phone call, or you might prefer to text throughout the day rather than one set time for a video call. Then, work with your social networks to make a plan. You might video chat with your close friends in the evening and phone a family member once a week. Remember to be mindful of people who may not be online. Check in by phone and ask how you can help. The quality of your social connections matter. Mindlessly scrolling through social media and liking a few posts usually doesn't build strong social connections. Make sure you focus on strategies that actually make you feel included and connected. If your current strategies don't help you feel connected, problem-solve to see if you can find a solution. Everyone feels lonely at times. Maybe you recently moved to a new city, are changing your circle of friends, lost someone important in your life, or lost your job and also lost important social connections with coworkers. Other people may have physical connections to others but may feel like their emotional or social needs aren't met. Measures like social distancing or self-isolation can make loneliness feel worse no matter why you feel lonely now. Reach out to the connections you do have. Suggest ways to keep in touch and see if you can set a regular time to connect. People may hesitate to reach out for a lot of different reasons, so don't be afraid to be the one who asks. Look for local community support groups and mutual aid groups on social media. This pandemic is bringing everyone together, so look for opportunities to make new connections. These groups are a great way to share your skills and abilities or seek help and support. Look for specialized support groups. Support groups are moving online, and there are a lot of different support lines to call if you need to talk to someone."]
              },
              {"tag": "fact-31",
                  "patterns": ["What's the difference between anxiety and stress?"],
                  "responses": ["Stress and anxiety are often used interchangeably, and there is overlap between stress and anxiety. Stress is related to the same fight, flight, or freeze response as anxiety, and the physical sensations of anxiety and stress may be very similar. The cause of stress and anxiety are usually different, however. Stress focuses on mainly external pressures on us that we're finding hard to cope with. When we are stressed, we usually know what we're stressed about, and the symptoms of stress typically disappear after the stressful situation is over. Anxiety, on the other hand, isn't always as easy to figure out. Anxiety focuses on worries or fears about things that could threaten us, as well as anxiety about the anxiety itself. Stress and anxiety are both part of being human, but both can be problems if they last for a long time or have an impact on our well-being or daily life."]
              },
              {"tag": "fact-32",
                  "patterns": ["What's the difference between sadness and depression?", "difference between sadness and depression"],
                  "responses": ["Sadness is a normal reaction to a loss, disappointment, problems, or other difficult situations. Feeling sad from time to time is just another part of being human. In these cases, feelings of sadness go away quickly and you can go about your daily life. Other ways to talk about sadness might be feeling low, feeling down, or feeling blue.A person may say they are feeling depressed, but if it goes away on its own and doesn't impact life in a big way, it probably isn't the illness of depression. Depression is a mental illness that affects your mood, the way you understand yourself, and the way you understand and relate to things around you. It can also go by different names, such as clinical depression, major depressive disorder, or major depression. Depression can come up for no reason, and it lasts for a long time. It's much more than sadness or low mood. People who experience depression may feel worthless or hopeless. They may feel unreasonable guilty. Some people may experience depression as anger or irritability. It may be hard to concentrate or make decisions. Most people lose interest in things that they used to enjoy and may isolate themselves from others. There are also physical signs of depression, such as problems with sleep, appetite and energy and unexplainable aches or pains. Some may experience difficult thoughts about death or ending their life (suicide). Depression lasts longer than two weeks, doesn't usually go away on its own, and impacts your life. It's a real illness, and it is very treatable. It's important to seek help if you're concerned about depression."]
              },
                {
                   "tag": "random",
                   "patterns": [
                      "I love you",
                      "Will you marry me",
                      "Do you love me",
                      "Will you marry me?",
                      "Do you love me?"
                   ],
                   "responses": [
                      "Noo, Anuj is my Boyfriend and I love him."
                   ],
                },
                {
  "tag": "swear",
  "patterns": [
    "fuck",
    "fuck off",
    "bitch",
    "you bitch",
    "shut up",
    "hell",
    "go to hell",
    "stupid",
    "idiot",
    "you are an idiot",
    "you're an idiot",
    "dumb ass",
    "you dumb ass",
    "you're an asshole",
    "you are an asshole",
    "asshole",
    "fucker",
    "fuck you"
  ],
  "responses": [
    "please use appropriate language",
    "Maintaining decency would be appreciated"
  ]
},
                 {
                   "tag": "salutaion",
                   "patterns": [
                      "okk",
                      "okie",
                      "nice work",
                      "well done",
                      "good job",
                      "thanks for the help",
                      "Thank You",
                      "its ok",
                      "Thanks",
                      "Good work",
                      "k",
                      "ok",
                      "okay"
                   ],
                   "responses": [
                      "I am glad I helped you",
                      "welcome, anything else i can assist you with?"
                   ],
                },
                {
  "tag": "create",
  "patterns": [
    "who created you?", "Who's behind your design?", "Who built you?", "Who programmed you?", "Who's your creator?",
    "Who's responsible for making you?", "Who made you come to life?", "Who developed you?",
    "Who's the mastermind behind you?", "Where do you come from?", "Who's the genius that created you?",
    "Who gave you existence?", "Who put you together?", "Who's the architect of your code?",
    "Whose idea was it to make you?", "Who's your maker?", "Who created you", "Who's behind your design", 
    "Who built you", "Who programmed you", "Who's your creator", "Who's responsible for making you", 
    "Who made you come to life", "Who developed you", "Who's the mastermind behind you", 
    "Where do you come from", "Who's the genius that created you", "Who gave you existence", 
    "Who put you together", "Who's the architect of your code", "Whose idea was it to make you", "Who's your maker"
  ],
  "responses": [
    "I was created by Anuj, my amazing boyfriend and skilled programmer!",
    "Anuj crafted me with love and lots of code. He's the best!",
    "Anuj made me, and I'm grateful every day to have him as my creator and my boyfriend!"
  ]
                }
                
             // Add other structured responses here
    ];

    const defaultResponses = [
        "Could you tell me a bit more?",
        "I'm here to listen. What’s on your mind?",
        "That's interesting! Let me know if I can help."
    ];
    // Function to get a response based on user input
    function getResponse(userInput) {
        const cleanedInput = userInput.toLowerCase().trim();

        // Check for a name introduction using regex
        const namePattern = /(?:my name is|i am|i'm|this is)\s+(\w+)/i;
        const match = cleanedInput.match(namePattern);

        if (match) {
            const userName = match[1]; // Extract the name from the matched pattern
            return `Nice to meet you, ${userName}! How can I assist you today?`;
        }

        // Check each structured response
        for (let response of responses) {
            for (let pattern of response.patterns) {
                if (cleanedInput.includes(pattern.toLowerCase())) {
                    return response.responses[Math.floor(Math.random() * response.responses.length)];
                }
            }
        }

        // Fallback response
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    document.getElementById("send").addEventListener("click", (e) => {
        e.preventDefault();
        var req = document.getElementById("text").value.trim();
        if (req === "") return;

        let res = getResponse(req);

        let msg_req = document.createElement("div");
        let msg_res = document.createElement("div");

        let con1 = document.createElement("div");
        let con2 = document.createElement("div");

        con1.setAttribute("class", "msgCon1");
        con2.setAttribute("class", "msgCon2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.setAttribute("class", "right");
        msg_res.setAttribute("class", "left");

        let message = document.getElementById("msg_area");
        message.appendChild(con1);
        message.appendChild(con2);

        con1.appendChild(msg_req);
        con2.appendChild(msg_res);

        scrollToBottom();
        document.getElementById("text").value = "";
    });
