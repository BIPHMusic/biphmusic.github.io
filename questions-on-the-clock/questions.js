const allQuestions = [
    {
        question: "Characterization is",
        options: [
            "A.  the central message in a story",
            "B.  the problem in a story",
            "C.  the process by which a writer reveals a character's personality and qualities"
        ],
        answer: "C"
    },
    {
        question: "What does STEAL stand for?",
        options: [
            "A.  Speech, Thoughts, Effect on others, Actions, and Looks",
            "B.  Statements, Time, Effort, Actions, and Love",
            "C.  Solitude, Thoughts, Enthusiasm, Actions, and Loss"
        ],
        answer: "A"
    },
    {
        question: "In indirect characterization....",
        options: [
            "A.  the writer describes the character",
            "B.  the character's personality is directly described by the author",
            "C.  the writer reveals the character through speech, thoughts, effect on others, actions, and looks"
        ],
        answer: "C"
    },
    {
        question: "Read the quote below then choose if it is direct characterization or indirect characterization: \"No wonder Johnny was hurt because his parents didn't want him.\"",
        options: [
            "A.  Direct characterization",
            "B.  Indirect characterization"
        ],
        answer: "B"
    },
    {
        question: "Read the quote and determine if it is direct characterization or indirect characterization: \"He glanced at her face - her eyes, which were honey brown, and her nose, which crinkled when she smiled.\"",
        options: [
            "A.  Direct characterization",
            "B.  Indirect characterization"
        ],
        answer: "B"
    },
    {
        question: "Which type of characterization best describes the quote below: \"But I am so much more than that! I am a musician, and a swimmer, and a person able to make my own decisions.\"",
        options: [
            "A.  Direct characterization",
            "B.  Indirect characterization"
        ],
        answer: "A"
    },
    {
        question: "Read the following, then decide if it is direct characterization or indirect characterization: \"Mark stomped to his room and slammed the door. Everything seemed so unfair.\"",
        options: [
            "A.  Direct characterization",
            "B.  Indirect characterization"
        ],
        answer: "B"
    },
    {
        question: "Based on the passage, which of the following is one of Victoria's traits?",
        options: [
            "A.  forgetful",
            "B.  confused",
            "C.  bold",
            "D.  shy"
        ],
        answer: "C"
    },
    {
        question: "Which detail from the passage best shows us that Dorothy is caring and kind?",
        options: [
            "A.  \"I cannot tell,\" she returned...\"",
            "B.  \"I don't know anything. You see, I am stuffed, so I have no brains at all,\"[the Scarecrow] answered sadly.",
            "C.  \"Oh\", said Dorothy, \"I am awfully sorry for you.\"",
            "D.  \"Do you think,\" he asked, \"if I go to the Emerald City with you, that Oz would give me some brains?"
        ],
        answer: "C"
    },
    {
        question: "What character trait is revealed in this passage? [Jonathan and the dog passage]",
        options: [
            "A.  impulsive",
            "B.  obsessed",
            "C.  humble",
            "D.  compassionate"
        ],
        answer: "D"
    },
    {
        question: "\"My heart, which has been pounding like a conga drum, is about to burst through my chest and run itself home.\"",
        options: [
            "A.  Direct Characterization",
            "B.  Indirect Characterization"
        ],
        answer: "B"
    },
    {
        question: "What is a static character?",
        options: [
            "A.  a one-dimensional character who lacks depth or a real personality",
            "B.  A character who shows little to no change in their personality, perspective, or outlook from the start of the story to the end",
            "C.  character who undergoes an important inner change over the course of the text",
            "D.  lifelike characters with complex, multifaceted personalities"
        ],
        answer: "B"
    },
    {
        question: "What is a flat character?",
        options: [
            "A.  a one-dimensional character who lacks depth or a real personality",
            "B.  A character who shows little to no change in their personality, perspective, or outlook from the start of the story to the end",
            "C.  character who undergoes an important inner change over the course of the text",
            "D.  lifelike characters with complex, multifaceted personalities"
        ],
        answer: "A"
    },
    {
        question: "What is an antagonist?",
        options: [
            "A.  central character or leading figure in a literary work",
            "B.  person who actively opposes or is hostile to someone or something; an adversary"
        ],
        answer: "B"
    },
    {
        question: "What is a protagonist?",
        options: [
            "A.  central character or leading figure in a literary work",
            "B.  person who actively opposes or is hostile to someone or something; an adversary"
        ],
        answer: "A"
    },
    {
        question: "What is a round character?",
        options: [
            "A.  a one-dimensional character who lacks depth or a real personality",
            "B.  A character who shows little to no change in their personality, perspective, or outlook from the start of the story to the end",
            "C.  character who undergoes an important inner change over the course of the text",
            "D.  lifelike characters with complex, multifaceted personalities"
        ],
        answer: "D"
    },
    {
        question: "What is a dynamic character?",
        options: [
            "A.  a one-dimensional character who lacks depth or a real personality",
            "B.  A character who shows little to no change in their personality, perspective, or outlook from the start of the story to the end",
            "C.  character who undergoes an important inner change over the course of the text",
            "D.  lifelike characters with complex, multifaceted personalities"
        ],
        answer: "C"
    },
    {
        question: "In this story, the bus driver’s name is Al. ... Al is likely a _________________ character.",
        options: [
            "A.  Flat",
            "B.  Round",
            "C.  Protagonist",
            "D.  Dynamic"
        ],
        answer: "A"
    },
    {
        question: "Keith must find a way to earn $100 ... His brother is most likely the_____________.",
        options: [
            "A.  Dynamic character",
            "B.  Antagonist",
            "C.  Protagonist",
            "D.  Flat character"
        ],
        answer: "B"
    },
    {
        question: "In this story, Bryan is the main character’s brother. ... Bryan is most likely a",
        options: [
            "A.  static character",
            "B.  dynamic character",
            "C.  protagonist",
            "D.  flat character"
        ],
        answer: "A"
    },
    {
        question: "At the beginning of the story, Jason has low self-esteem ... By the end of the story he has completely changed.",
        options: [
            "A.  dynamic",
            "B.  flat",
            "C.  static"
        ],
        answer: "A"
    },
    {
        question: "John's mother loves and supports him ... John's mother is a...",
        options: [
            "A.  dynamic character",
            "B.  flat character",
            "C.  static character"
        ],
        answer: "C"
    },
    {
        question: "Bowser had an evil plan. ... He is the ultimate villain!",
        options: [
            "A.  Dynamic character",
            "B.  Static Character",
            "C.  Round character",
            "D.  Flat Character"
        ],
        answer: "D"
    },
    {
        question: "What are foil characters in film and television?",
        options: [
            "A.  Characters who have similar qualities or characteristics as the main character.",
            "B.  Characters who have no impact on the main character's development.",
            "C.  Characters who are completely unrelated to the main character.",
            "D.  Characters who contrast with the main character, highlighting their qualities or characteristics."
        ],
        answer: "D"
    },
    {
        question: "What is the purpose of using foil characters?",
        options: [
            "A.  To create unnecessary complexity in the story.",
            "B.  To confuse the reader about the main character's traits.",
            "C.  To highlight and contrast the traits, actions, or beliefs of the main character.",
            "D.  To distract the reader from the main character."
        ],
        answer: "C"
    },
    {
        question: "What is a protagonist?",
        options: [
            "A.  The protagonist is the main character.",
            "B.  The protagonist is always the good guy.",
            "C.  The protagonist can only be one character.",
            "D.  The protagonist is always the bad guy."
        ],
        answer: "A"
    },
    {
        question: "What does the protagonist usually have?",
        options: [
            "A.  a large house",
            "B.  a problem or conflict",
            "C.  many friends",
            "D.  poor decision-making skills"
        ],
        answer: "B"
    },
    {
        question: "What is an antagonist?",
        options: [
            "A.  The person or thing that goes against the protagonist",
            "B.  The person or thing that is friends with the protagonist",
            "C.  The person or thing that is the main character",
            "D.  The person or thing that is the leader of the text"
        ],
        answer: "A"
    },
    {
        question: "Who is the Protagonist? [Grinch image]",
        options: [
            "A.  The Grinch",
            "B.  The Mayor",
            "C.  Max the dog",
            "D.  Cindy Lou Who"
        ],
        answer: "A"
    },
    {
        question: "Who is Simba in the Lion King?",
        options: [
            "A.  Protagonist",
            "B.  Antagonist"
        ],
        answer: "A"
    },
    {
        question: "If Ariel is the protagonist, who is the antagonist",
        options: [
            "A.  Sebastian",
            "B.  Eric",
            "C.  Ursula",
            "D.  King Triton"
        ],
        answer: "C"
    },
    {
        question: "These two characters are the same, but different. ... These characters are:",
        options: [
            "A.  static",
            "B.  dynamic",
            "C.  antagonists",
            "D.  character foils"
        ],
        answer: "D"
    },
    {
        question: "What type of character is used to help highlight the opposite character traits in another character? Think Cinderella and her step sisters as an example.",
        options: [
            "A.  Static",
            "B.  Foil",
            "C.  Stock"
        ],
        answer: "B"
    },
    {
        question: "Which of the following examples best demonstrates a character and his/her foil?",
        options: [
            "A.  two men who are in love with the same woman but one has confidence and money and the other does not.",
            "B.  two women who both want the same job but the more qualified one gets it and eventually hires the other woman as her assistant.",
            "C.  two friends who help each other to play tricks on one of their school’s meanest and most annoying teachers.",
            "D.  two enemies who end up being forced to work together and eventually become best friends."
        ],
        answer: "A"
    },
    {
        question: "“Lovely weather we’re having,” He growled as he walked through the pouring rain. This is an example of which type of IRONY:",
        options: [
            "A.  Situational",
            "B.  Verbal",
            "C.  Dramatic"
        ],
        answer: "B"
    },
    {
        question: "In the movie, Titanic... The form of irony used above is:",
        options: [
            "A.  Verbal",
            "B.  Situational",
            "C.  Dramatic"
        ],
        answer: "C"
    },
    {
        question: "A robber steals valuables from a police station. The sentence above is an example of which form of irony?",
        options: [
            "A.  Dramatic",
            "B.  Situational",
            "C.  Verbal"
        ],
        answer: "B"
    },
    {
        question: "Which form of IRONY is being used? The locker room smells amazing! Awesome! Another homework packet!",
        options: [
            "A.  Verbal",
            "B.  Situational",
            "C.  Dramatic"
        ],
        answer: "A"
    },
    {
        question: "Which form of irony is being used? When Romeo believes Juliet is dead, but the audience knows that she has only been given a potion to sleep.",
        options: [
            "A.  Dramatic",
            "B.  Verbal",
            "C.  Situational"
        ],
        answer: "A"
    },
    {
        question: "What type of irony does this image display? [Procrastinator's Meeting image]",
        options: [
            "A.  Verbal",
            "B.  Situational",
            "C.  Dramatic"
        ],
        answer: "B"
    },
    {
        question: "Which form of irony is being used? John's parents are proud of the \"A\" he got on the test, but we know he cheateD.  Sam writes a love poem to Jenny but we know that Jenny loves Peter.",
        options: [
            "A.  Dramatic",
            "B.  Verbal",
            "C.  Situational"
        ],
        answer: "A"
    },
    {
        question: "Analyze the irony in the following context: A pilot has a fear of heights. What does this reveal about the character?",
        options: [
            "A.  It shows the character's bravery.",
            "B.  It highlights the character's internal conflict.",
            "C.  It demonstrates the character's lack of experience.",
            "D.  It indicates the character's confidence."
        ],
        answer: "B"
    },
    {
        question: "Explain the theme of a story where a character learns that honesty is the best policy after a series of lies lead to trouble.",
        options: [
            "A.  The importance of friendship",
            "B.  The value of honesty",
            "C.  The power of love",
            "D.  The danger of adventure"
        ],
        answer: "B"
    },
    {
        question: "Interpret the author's use of irony in a story where a character wins the lottery but loses the ticket. What might the author be suggesting?",
        options: [
            "A.  Luck is unpredictable.",
            "B.  Money is the root of all evil.",
            "C.  Hard work always pays off.",
            "D.  Happiness is found in wealth."
        ],
        answer: "A"
    },
    {
        question: "Analyze the irony in the context: A character who is a professional chef burns their own dinner. What does this suggest about the character's situation?",
        options: [
            "A.  It shows the character's lack of skill.",
            "B.  It highlights the character's distraction or stress.",
            "C.  It demonstrates the character's carelessness.",
            "D.  It indicates the character's dislike for cooking."
        ],
        answer: "B"
    },
    {
        question: "Explain the theme of a story where a character discovers that true happiness comes from helping others, not from material possessions.",
        options: [
            "A.  The importance of wealth",
            "B.  The joy of giving",
            "C.  The thrill of adventure",
            "D.  The power of knowledge"
        ],
        answer: "B"
    },
    {
        question: "A long time ago there was a king who wanted nothing but golD.  ... What is the theme?",
        options: [
            "A.  Don't be greedy",
            "B.  Work together",
            "C.  Respect your elders",
            "D.  Don't steal"
        ],
        answer: "A"
    },
    {
        question: "One summer's day, a merry Grasshopper ... What is the theme?",
        options: [
            "A.  share with your neighbor",
            "B.  work before you play",
            "C.  be respectful",
            "D.  don't be greedy"
        ],
        answer: "B"
    },
    {
        question: "The boy got an A on the quiz",
        options: [
            "A.  Independent clause",
            "B.  Not an independent clause"
        ],
        answer: "A"
    },
    {
        question: "The family dog chewed on the leg of the coffee table",
        options: [
            "A.  Independent Clause",
            "B.  Dependent Clause"
        ],
        answer: "A"
    },
    {
        question: "Label the following clauses in the sentence.",
        options: [
            "A.  Dependent",
            "B.  Independent"
        ],
        answer: "a, b"
    },
    {
        question: "Label the following clauses in the sentence.",
        options: [
            "A.  Dependent",
            "B.  Independent"
        ],
        answer: "a, b"
    },
    {
        question: "If you have made your decision and are sure",
        options: [
            "A.  Dependent",
            "B.  Independent"
        ],
        answer: "A"
    },
    {
        question: "We ate lunch.",
        options: [
            "A.  Dependent",
            "B.  Independent"
        ],
        answer: "B"
    },
    {
        question: "She took great care of the dog and its puppies.",
        options: [
            "A.  Dependent",
            "B.  Independent"
        ],
        answer: "B"
    },
    {
        question: "After we left the party",
        options: [
            "A.  Dependent",
            "B.  Independent"
        ],
        answer: "A"
    },
    {
        question: "I couldn't find it.",
        options: [
            "A.  Dependent",
            "B.  Independent"
        ],
        answer: "B"
    },
    {
        question: "What is the adjective clause? The paper that David is writing must be finished by Friday.",
        options: [
            "A.  that David is writing",
            "B.  must be finished by Friday",
            "C.  that David is writing must be finished by Friday",
            "D.  The term paper"
        ],
        answer: "A"
    },
    {
        question: "What is the adjective clause? The doctor, who examined the sick child, was very kind.",
        options: [
            "A.  who examined the sick child",
            "B.  was very kind",
            "C.  the doctor who examined",
            "D.  who examined the sick child was very kind"
        ],
        answer: "A"
    },
    {
        question: "What is the relative clause? The man, whose opinions I respect the most, is my father.",
        options: [
            "A.  whose opinions I respect the most",
            "B.  whose opinions I respect",
            "C.  whose opinions I respect the most, is my father.",
            "D.  The man, whose opinions"
        ],
        answer: "A"
    },
    {
        question: "What is the relative clause? I know Kurt, who is my neighbor, served in World War II.",
        options: [
            "A.  who is my neighbor",
            "B.  who is my neighbor, served",
            "C.  I know",
            "D.  I know Kurt"
        ],
        answer: "A"
    },
    {
        question: "Combine the sentences using a relative clause. Zoe took the dogs for a walk. Zoe is a very helpful young lady.",
        options: [
            "A.  Zoe took the dogs for a walk, who is a very helpful young lady.",
            "B.  Zoe, which is a very helpful young lady, took the dogs for a walk.",
            "C.  Zoe, which took the dogs for a walk, is a very helpful young lady.",
            "D.  Zoe, who is a very helpful young lady, took the dogs for a walk."
        ],
        answer: "D"
    },
    {
        question: "Differentiate between the dependent and independent clause in the sentence: 'Although it was raining, we still went for a walk.'",
        options: [
            "A.  Dependent clause: Although it was raining; Independent clause: we still went for a run",
            "B.  Dependent clause: Although it was raining; Independent clause: we still went for a walk",
            "C.  Dependent clause: Although we still went for a walk; Independent clause: it was raining",
            "D.  Dependent clause: We still went for a walk; Independent clause: Although it was raining"
        ],
        answer: "B"
    },
    {
        question: "Create a sentence with a dependent clause that begins with 'When the bell rings.'",
        options: [
            "A.  When the bell rings, birds start singing.",
            "B.  When the bell rings, the sun sets.",
            "C.  When the bell rings, students will leave the classroom.",
            "D.  When the bell rings, the moon turns blue."
        ],
        answer: "C"
    },
    {
        question: "We usually travel during Christmas break, however this year will be different.",
        options: [
            "A.  The underlined clause is the independent clause.",
            "B.  The underlined clause is the dependent clause."
        ],
        answer: "A"
    },
    {
        question: "Select the sentence that uses the semicolon correctly",
        options: [
            "A.  All the garden tools are kept in the garage; and they are cleaned every spring.",
            "B.  All the garden tools are kept; in the garage they are cleaned every spring.",
            "C.  All the garden tools are kept in the garage; they are cleaned every spring.",
            "D.  All the garden tools are kept in the garage, they are cleaned; every spring."
        ],
        answer: "C"
    },
    {
        question: "He is a gourmet chef who always cooks meat with several different spices...",
        options: [
            "A.  ...spices; for example, my chicken...",
            "B.  ...spices, for example: my chicken...",
            "C.  ...spices; for example: my chicken...",
            "D.  ...spices; for example; my chicken..."
        ],
        answer: "A"
    },
    {
        question: "Where does the semicolon go?",
        options: [
            "A.  I spent a lot of time writing this poem; I hope you enjoy it.",
            "B.  I spent; a lot of time...",
            "C.  I spent a lot of time writing; this poem; I hope...",
            "D.  I spent a lot of time writing this poem I hope; you enjoy it."
        ],
        answer: "A"
    },
    {
        question: "What is a common MISTAKE with semicolons?",
        options: [
            "A.  Using semicolons to separate items in a list instead of commas.",
            "B.  Using semicolons to separate paragraphs instead of periods.",
            "C.  Using semicolons to introduce textual evidence.",
            "D.  Using semicolons to end a statement instead of a period."
        ],
        answer: "A"
    },
    {
        question: "Select the sentence that uses the semicolon correctly",
        options: [
            "A.  On the table were three piles: meat, chicken, and fish; rice, bread, and pasta; and spinach, broccoli, and kale.",
            "B.  On the table were three piles; meat; chicken; ...",
            "C.  On the table were three piles: meat, chicken, and fish & rice...",
            "D.  ..."
        ],
        answer: "A"
    },
    {
        question: "The score was tied ( ) the game went into overtime.",
        options: [
            "A.  comma",
            "B.  semicolon"
        ],
        answer: "B"
    },
    {
        question: "What is the purpose of using a semicolon in a sentence?",
        options: [
            "A.  The purpose of using a semicolon in a sentence is to connect closely related independent clauses and to improve the flow of the writing.",
            "B.  To indicate possession",
            "C.  To separate independent clauses",
            "D.  To introduce a list"
        ],
        answer: "A"
    },
    {
        question: "When should you use a comma in a series of items?",
        options: [
            "A.  Use a comma in a series of items to combine the individual items",
            "B.  Use a comma in a series of items to emphasize the individual items",
            "C.  Use a comma in a series of items to separate the individual items.",
            "D.  Use a comma in a series of items to separate the first and last items"
        ],
        answer: "C"
    },
    {
        question: "When should you use a semicolon instead of a comma?",
        options: [
            "A.  When you want to separate a subject and a verb in a sentence",
            "B.  When you want to separate two closely related independent clauses without using a conjunction.",
            "C.  When you want to join two independent clauses with a coordinating conjunction",
            "D.  When you want to separate items in a list"
        ],
        answer: "B"
    },
    {
        question: "Which of the following words best describes an inspiring tone in speeches?",
        options: [
            "A.  motivational",
            "B.  uplifting",
            "C.  encouraging",
            "D.  empowering"
        ],
        answer: "All apply, but primarily a, b, d"
    },
    {
        question: "Which word best describes the mood of this passage?",
        options: [
            "A.  Lively",
            "B.  Angry",
            "C.  Ominous",
            "D.  Amusing"
        ],
        answer: "C"
    },
    {
        question: "Does this passage give the reader a positive or negative mood?",
        options: [
            "A.  Positive",
            "B.  Negative"
        ],
        answer: "B"
    },
    {
        question: "What is the best definition of imagery?",
        options: [
            "A.  Imagery is the author's use of language that appeals to the five senses...",
            "B.  An act of saying what will or might happen in the future.",
            "C.  A figure of speech comparing two unlike things...",
            "D.  Exaggeration"
        ],
        answer: "A"
    },
    {
        question: "This sentence appeals to which sense: The sunset was the most gorgeous...",
        options: [
            "A.  sight",
            "B.  smell",
            "C.  touch",
            "D.  taste"
        ],
        answer: "A"
    },
    {
        question: "This excerpt appeals to which sense: Down in the street little eddies of wind...",
        options: [
            "A.  sight",
            "B.  smell",
            "C.  touch",
            "D.  taste"
        ],
        answer: "A"
    },
    {
        question: "This excerpt appeals to which sense: She went back to eating earth...",
        options: [
            "A.  taste",
            "B.  sight",
            "C.  sound",
            "D.  smell"
        ],
        answer: "A"
    },
    {
        question: "Which of the following lines from Robert Frost’s “Stopping by Woods on a Snowy Evening” contains imagery?",
        options: [
            "A.  The woods are lovely, dark and deep",
            "B.  But I have promises to keep",
            "C.  And miles to go before I sleep",
            "D.  All of the above"
        ],
        answer: "D"
    },
    {
        question: "Choose the phrase from the passage that appeals to your sense of sounD.  [Monkey's Paw]",
        options: [
            "A.  he took the box of matches",
            "B.  the darkness was oppressive...",
            "C.  he stood motionless",
            "D.  at the same moment a knock so quiet and stealthy as to be scarcely audible"
        ],
        answer: "D"
    },
    {
        question: "What is the purpose of imagery in writing?",
        options: [
            "A.  To engage the reader by changing points of view multiple times",
            "B.  To make the writing more interesting and help readers understand what is being described",
            "C.  To excite the reader by using different writing methods",
            "D.  To show the difference between dynamic and static character types"
        ],
        answer: "B"
    },
    {
        question: "What does the IMAGERY used in this passage tell the reader about the captain? [Treasure Island]",
        options: [
            "A.  He is in need of medical help",
            "B.  He is carrying treasure in his sea-chest",
            "C.  He has grown weak and tired with age",
            "D.  He has had a rough and adventurous life"
        ],
        answer: "D"
    },
    {
        question: "He walked all the way home shut the door, and went to the kitchen.",
        options: [
            "A.  correct",
            "B.  walked,",
            "C.  shut,",
            "D.  home,"
        ],
        answer: "C"
    },
    {
        question: "Which sentence uses the commas correctly?",
        options: [
            "A.  I play netball basketball hockey and football.",
            "B.  I play netball, basketball, hockey, football.",
            "C.  I play netball, basketball, hockey and football."
        ],
        answer: "C"
    },
    {
        question: "I like to update my Goodreads profile whenever I finish a book.",
        options: [
            "A.  ...profile, whenever...",
            "B.  No comma needed."
        ],
        answer: "B"
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "A.  I enjoy school but I don't like homework.",
            "B.  I enjoy school, but I don't like homework.",
            "C.  I enjoy school school. But I don't like homework.",
            "D.  I enjoy school, so I don't like homework."
        ],
        answer: "B"
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "A.  For our date, I either want to go out to the movies or to dinner.",
            "B.  For our date, I either want to go out to the movies, or to dinner.",
            "C.  For our date, I either want to go out to the movies or, to dinner.",
            "D.  For our date, I either want to go out to the movies. Or to dinner."
        ],
        answer: "A"
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "A.  If I get one more detention, I won't be allowed to attend the pep rally, so I better be well-behaved.",
            "B.  If I get one more detention, I won't be allowed to attend the pep rally so I better be well-behaved.",
        ],
        answer: "A"
    },
    {
        question: "Looking at his watch, Vance realized he was going to be late.",
        options: [
            "A.  sentence fragment",
            "B.  run-on sentence",
            "C.  comma splice",
            "D.  complete thought"
        ],
        answer: "D"
    },
    {
        question: "What are the THREE ways to fix run-on sentences?",
        options: [
            "A.  Divide the run-on into sentences.",
            "B.  Add a comma between the independent clauses",
            "C.  Add a comma and a coordinating conjunction between the two independent clauses",
            "D.  Separate the independent clauses with a semicolon."
        ],
        answer: "a,c,d"
    },
    {
        question: "Oliver climbed into the hot air balloon, he was so nervous!",
        options: [
            "A.  sentence fragment",
            "B.  run-on sentence",
            "C.  comma splice",
            "D.  complete thought"
        ],
        answer: "C"
    },
    {
        question: "Where do the commas belong in the following sentence? Transport trucks large and small cargo carriers come in all colors.",
        options: [
            "A.  Transport trucks,",
            "B.  , all colors.",
            "C.  , large and small cargo carriers,",
            "D.  , trucks,"
        ],
        answer: "C"
    },
    {
        question: "Where do the commas belong in the following sentence? Marcus my sister's hamster likes to run in a wheel.",
        options: [
            "A.  , my sister's hamster,",
            "B.  , Marcus my sister's,",
            "C.  , hamster likes to run,"
        ],
        answer: "A"
    },
    {
        question: "Is the comma used correctly in the next sentence? We bought cakes, rolls and a doughnut at the bakery.",
        options: [
            "A.  Yes",
            "B.  No"
        ],
        answer: "B"
    },
    {
        question: "Is the comma used in this sentence correctly? The garden still needs plenty of work, but the weather has been good.",
        options: [
            "A.  Yes",
            "B.  No"
        ],
        answer: "A"
    },
    {
        question: "Which sentence is correct?",
        options: [
            "A.  Before the end of the day, I would like to see your room get cleaned.",
            "B.  Before the end of the day I would, like to see your room get cleaned.",
            "C.  Before, the end of the day I would like to see your room get cleaned."
        ],
        answer: "A"
    },
    {
        question: "Which sentence is correct?",
        options: [
            "A.  When the, bell rings we should get to class.",
            "B.  When, the bell rings we should get to class.",
            "C.  When the bell rings, we should get to class."
        ],
        answer: "C"
    },
    {
        question: "This part of plot structure reveals the setting, time, place, characters, and conflict.",
        options: [
            "A.  exposition",
            "B.  rising action",
            "C.  falling action",
            "D.  climax"
        ],
        answer: "A"
    },
    {
        question: "A ________ occurs when a sentence is missing a subject or a predicate.",
        options: [
            "A.  Run-on",
            "B.  Fragment"
        ],
        answer: "B"
    },
    {
        question: "A _______ occurs when two or more complete sentences are connected improperly.",
        options: [
            "A.  Run-on",
            "B.  Fragment"
        ],
        answer: "A"
    },
    {
        question: "A complete sentence has a _______ and a ______.",
        options: [
            "A.  Subject, noun",
            "B.  Verb, action",
            "C.  Subject, predicate",
            "D.  Predicate, action"
        ],
        answer: "C"
    },
    {
        question: "What type of sentence is this? The beautiful, red bird.",
        options: [
            "A.  A complete sentence",
            "B.  A fragment",
            "C.  A compound sentence",
            "D.  A declarative sentence"
        ],
        answer: "B"
    },
    {
        question: "What type of sentence is this? When I am tired, I like to take a nap.",
        options: [
            "A.  Complex Sentence",
            "B.  Compound Sentence",
            "C.  Simple Sentence",
            "D.  Declarative Sentence"
        ],
        answer: "A"
    },
    {
        question: "Tonya was petting the cat eating a candy bar.",
        options: [
            "A.  contains a misplaced modifier",
            "B.  contains a dangling modifier",
            "C.  is correct as written",
            "D.  contains no modifier"
        ],
        answer: "A"
    },
    {
        question: "After the football game, the leftover pizza went into the refrigerator.",
        options: [
            "A.  contains a misplaced modifier",
            "B.  contains a dangling modifier",
            "C.  is correct as written",
            "D.  contains no modifier"
        ],
        answer: "A"
    },
    {
        question: "The man walked the dog in a pinstriped suit.",
        options: [
            "A.  The man in a pinstriped suit walked the dog.",
            "B.  While in a pinstriped suit, the dog was walked.",
            "C.  Because the dog was in a pinstriped suit...",
            "D.  Correct as is."
        ],
        answer: "A"
    },
    {
        question: "When he was a baby, John's father was elected mayor.",
        options: [
            "A.  Misplaced Modifier",
            "B.  Dangling Modifier",
            "C.  Correct"
        ],
        answer: "A"
    },
    {
        question: "The pianist played a new composition sitting on the piano bench.",
        options: [
            "A.  Misplaced Modifier",
            "B.  Dangling Modifier",
            "C.  Correct"
        ],
        answer: "A"
    },
    {
        question: "William is tired,.....happy.",
        options: [
            "A.  Yet",
            "B.  But",
            "C.  So"
        ],
        answer: "A"
    },
    {
        question: "I can work from home,......I prefer to go to the office.",
        options: [
            "A.  Or",
            "B.  So",
            "C.  But"
        ],
        answer: "C"
    },
    {
        question: "I work from home these days,.......my wife also does.",
        options: [
            "A.  And",
            "B.  So",
            "C.  Nor"
        ],
        answer: "A"
    },
    {
        question: "Singer Marian Anderson trained ______ in the United States and abroad.",
        options: [
            "A.  not just",
            "B.  and",
            "C.  both",
            "D.  not only"
        ],
        answer: "D"
    },
    {
        question: "Blindfish, which spend their whole lives in caves, have ______ eyes nor body pigments.",
        options: [
            "A.  either",
            "B.  not any",
            "C.  neither",
            "D.  without"
        ],
        answer: "C"
    },
    {
        question: "Thomas Eakins studied not only painting ______ anatomy when he was training to become an artist.",
        options: [
            "A.  but",
            "B.  as well as",
            "C.  and",
            "D.  but also"
        ],
        answer: "D"
    },
    {
        question: "Since I am a herbivore, I ______ eat eggs ______ meat.",
        options: [
            "A.  neither/nor",
            "B.  whether/or",
            "C.  either/or",
            "D.  both/and"
        ],
        answer: "A"
    },
    {
        question: "Identify the subordinating conjunction: If you get your work done, you can watch t.v.",
        options: [
            "A.  get",
            "B.  done",
            "C.  if",
            "D.  can"
        ],
        answer: "C"
    },
    {
        question: "Identify the subordinating conjunction: Do not touch the paint until it dries.",
        options: [
            "A.  it",
            "B.  not",
            "C.  touch",
            "D.  until"
        ],
        answer: "D"
    }
];