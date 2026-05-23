const allQuestions = [
    {
        question: "What is the function of the active verb in the independent clause the sentence below?\n\"Because the storm was approaching quickly, the sailors rushed to anchor the boat securely in the harbor.\"",
        options: ["A. transitive","B. intransitive","C. linking","D. helping"],
        answer: "A"
    },
    {
        question: "What is the function of the dependent clause the sentence below?\n\"Because the storm was approaching quickly, the sailors rushed to anchor the boat securely in the harbor.\"",
        options: ["A. adjective (modifies the storm)","B. adverbial (modifies rushed)","C. adjective (modifies the sailors)","D. adverbial (modifies approaching)"],
        answer: "B"
    },
    {
        question: "What is the function of the active verb in the independent clause of the sentence below?\n\"While the students studied diligently, the teacher graded the papers carefully at her desk.\"",
        options: ["A. transitive","B. intransitive","C. linking","D. helping"],
        answer: "A"
    },
    {
        question: "What is the function of the active verb in the independent clause of the sentence below?\n\"Although the weather was cold, the athletes ran through the park with determination.\"",
        options: ["A. transitive","B. intransitive","C. linking","D. helping"],
        answer: "B"
    },
    {
        question: "What is the function of the active verb in the independent clause of the sentence below?\n\"Before the concert began, the orchestra members tuned their instruments on stage.\"",
        options: ["A. transitive","B. intransitive","C. linking","D. helping"],
        answer: "A"
    },
    {
        question: "What is the function of the active verb in the independent clause of the sentence below?\n\"After the power outage occurred, the residents waited patiently for the electricity to return.\"",
        options: ["A. transitive","B. intransitive","C. linking","D. helping"],
        answer: "B"
    },
    {
        question: "What is the function of the dependent clause in the sentence below?\n\"Although the recipe was complicated, Felicia prepared the dessert without making any mistakes.\"",
        options: ["A. adjective (modifies Felicia)","B. adjective (modifies the recipe)","C. adverbial (modifies prepared)","D. adverbial (modifies complicated)"],
        answer: "C"
    },
    {
        question: "What is the function of the dependent clause in the sentence below?\n\"The student who completed the assignment early received extra credit.\"",
        options: ["A. adverbial (modifies received)","B. adjective (modifies teacher)","C. adverbial (modifies completed)","D. adjective (modifies student)"],
        answer: "A"
    },
    {
        question: "Identify the type of active verb in the independent clause of the sentence below:\n\"Although the medication was expensive, the patient felt much better after taking it for two weeks.\"",
        options: ["A. transitive","B. intransitive","C. linking","D. helping"],
        answer: "C"
    },
    {
        question: "What is the function of the participial phrase in the sentence below?\n\"Running through the forest, the deer escaped the hunter's pursuit.\"",
        options: ["A. adverbial (modifies escaped)","B. adjective (modifies hunter)","C. adjective (modifies deer)","D. adverbial (modifies pursuit)"],
        answer: "A"
    },
    {
        question: "What is the function of the participial phrase in the sentence below?\n\"Covered in mud and dust, the old truck sat abandoned in the junkyard.\"",
        options: ["A. adverbial (modifies sat)","B. adjective (modifies junkyard","C. adverbial (modifies abandoned)","D. adjective (modifies truck)"],
        answer: "D"
    },
    {
        question: "Which participial phrase in the sentence below functions as an adverbial modifier?\n\"Exhausted after the long meeting, the manager decided to take the rest of the day off, hoping to regain his energy before tomorrow.\"",
        options: ["A. exhausted after the long meeting","B. hoping to regain his energy before tomorrow","C. both A and B","D. non of the above"],
        answer: "B"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"It was a foggy evening in London when Sherlock Holmes and his loyal companion, Dr. John Watson, were seated by the fire at 221B Baker Street. Holmes was engrossed in a newspaper, while Watson perused his medical journals. Suddenly, a sharp knock echoed through the room.\"\nWhat is the main idea of this excerpt?",
        options: ["A. Holmes and Watson prefer to spend their evenings reading alone.","B. The fog in London is dangerous and causes mysterious events.","C. A visitor's sudden arrival interrupts Holmes and Watson's peaceful evening.","D. Holmes is more interested in newspapers than Watson is in his medical journals."],
        answer: "C"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"'It's a novel he has worked on for years—a work that could bring him great fame! Without it, his reputation is at stake!' Clara replied. She clasped her hands so tightly her knuckles were white.\"\nWhich detail best supports Clara's emotional state about the stolen manuscript?",
        options: ["A. The manuscript is a novel.","B. Her father has worked on it for years.","C. The work could bring great fame.","D. She clasped her hands so tightly her knuckles were white."],
        answer: "D"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"Holmes examined the room carefully. 'Tell me, Professor, when did you last see the manuscript?' 'I had it right here,' he said, pointing to a desk. 'I stepped out for a moment, and when I returned, it was gone!'\"\nWhat is the main idea of this exchange between Holmes and Professor Fenton?",
        options: ["A. Holmes does not believe the professor's story about the theft.","B. The manuscript was stolen from a desk in the library.","C. Professor Fenton is careless about protecting his valuable work.","D. Holmes is trying to determine when and where the manuscript disappeared."],
        answer: "D"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"'I only wanted to escape my employment to that absurd excuse of a man Grayson! Twenty years of service with no raise and no gratitude! I thought if I could get rid of Fenton, I could finally have my chance at a new life!'\"\nWhat do the butler's words reveal about his motivation for stealing the manuscript?",
        options: ["A. He was unhappy with his treatment by Grayson and sought a way out of his situation.","B. He wanted to help Victor Grayson become a famous author.","C. He believed Professor Fenton had stolen from him in the past.","D. He wanted to prove that he was a better detective than Holmes."],
        answer: "A"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"Holmes devised a plan. He sent a letter to Grayson implying that the manuscript's revisions had been hidden in a specific location, and that the manuscript was doomed to be known as incomplete without them. Knowing Grayson's ambition, he suspected he would attempt to retrieve it. Sherlock donned a disguise as a fish monger and lie in wait of the manuscript thief.\"\nWhat is the main idea of Holmes's strategy in this section?",
        options: ["A. Holmes believes the manuscript revisions are actually hidden in a barrel of fish.","B. Holmes wants to expose Victor Grayson as an ambitious and dishonest person.","C. Holmes plans to catch the real thief by using a trap based on his understanding of Grayson's character.","D. Holmes disguises himself as a fish monger to sell fish at the market."],
        answer: "C"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"One of the primary benefits of offline learning is the social interaction it provides. Students can collaborate, discuss, and debate ideas in real-time, fostering critical thinking and communication skills. This interaction often leads to forming meaningful relationships with peers and mentors, which can significantly impact personal and professional development.\"\nWhat can be inferred about students who lack social interaction in their learning environment?",
        options: ["A. They may struggle to develop critical thinking and communication abilities.","B. They will develop stronger communication skills than their peers.","C. They are more likely to succeed in professional settings.","D. They will have more meaningful relationships with mentors."],
        answer: "B"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"Students can attend classes from anywhere in the world, breaking down geographical barriers that have traditionally limited educational opportunities. This aspect allows individuals from diverse backgrounds, including those in remote areas or with disabilities, to access quality education that may have been previously unattainable.\"\nWhat does this passage suggest about educational access before online learning became widespread?",
        options: ["A. Students from remote areas had equal access to quality education.","B. Individuals with disabilities were fully supported by traditional institutions.","C. Many people were unable to access quality education due to their location or circumstances.","D. Online learning was always available to everyone."],
        answer: "C"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"However, critics of online learning argue that it lacks the personal touch and social interaction found in offline education. The absence of face-to-face communication can hinder relationship-building and reduce motivation. Furthermore, the potential for distractions in a home environment—such as social media and household chores—can impede the learning process.\"\nWhat can be inferred about the home environment as a learning space?",
        options: ["A. It contains more distractions that can negatively affect student focus and performance.","B. It is equally conducive to learning as a traditional classroom.","C. It is superior to offline learning environments.","D. It eliminates all social interaction among students."],
        answer: "A"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"As the educational landscape continues to evolve, many educators advocate a hybrid approach that combines the strengths of both offline and online learning. This model allows students to experience the best of both worlds, benefiting from the structure and social interaction of traditional education while enjoying the flexibility and accessibility of online learning.\"\nWhat can be inferred about the limitations of using only one learning method?",
        options: ["A. Both offline and online learning are equally effective for all students.","B. Hybrid learning is unnecessary and confuses students.","C. Online learning is sufficient for all educational needs.","D. Neither method alone provides all the benefits students need for optimal learning."],
        answer: "D"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"Her husband, Jian, was a kind man, but the strain of supporting a family often turned his affections into impatience. When Jian finally arrived, his face bore the marks of exhaustion and frustration. 'What's for dinner?' he asked curtly, barely glancing at the spread before him.\"\nWhat can be inferred about how Jian's external circumstances have affected his behavior toward Mei Lin?",
        options: ["A. He is rude after hard days at work.","B. He has been rude to her since their wedding.","C. He is abusive and plans how to hurt Mei's feelings each evening.","D. He is naturally unkind and unhappy."],
        answer: "A"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"She had always been the good wife, the obedient partner, but now, she felt a surge of defiance. The weight of her pregnancy seemed to melt away, replaced by a fierce resolve. In a moment of blind fury, she turned to the kitchen, her eyes darting to the heavy butcher's knife glinting under the light.\"\nWhat does Mei Lin's transition from \"obedient partner\" to violent action reveal about her character?",
        options: ["A. She has always had violent feelings, but she hides them.","B. Her frustration explodes after the emotional build up.","C. She is impulsive in her decision making.","D. She planned this violence after learning he was cheating on her."],
        answer: "B"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"As the warmth of the blood pooled around her, panic set in. She could not let anyone know what had happened. The baby needed her, and she needed to think clearly. She quickly cleaned the knife and placed it back in the drawer, wiping her hands on a towel as if to erase the crime from existence.\"\nWhat can be inferred about Mei Lin's priorities immediately after committing the murder?",
        options: ["A. She is overwhelmed with guilt and wants to turn herself in.","B. She is concerned primarily with self-preservation and protecting her unborn child.","C. She is relieved and feels no remorse for her actions.","D. She wants to confess to Mrs. Wang when she arrives."],
        answer: "B"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"She had spent the day preparing a delightful dinner, hoping to lift her husband's spirits after a long week at work. She set the table with care, placing their best dishes at the center along with a steaming pot of braised pork, a family recipe passed down through generations.\"\nWhat does Mei Lin's careful preparation of dinner reveal about her character before the tragedy?",
        options: ["A. She is selfish and only thinks about her own needs.","B. She is indifferent to her husband's feelings.","C. She is manipulative and uses food to control Jian.","D. She is nurturing and invested in her husband's well-being."],
        answer: "D"
    },
    {
        question: "Read the excerpt below and answer the question.\n\"As she dished out the pork, Mei Lin felt the weight of her actions pressing down on her like a heavy stone. But she couldn't let it show. Not now. She had to keep up the charade for the sake of her unborn child. Mrs. Wang plastered on a smile, opening the door wide. 'Hello, Mrs. Wang! What a lovely surprise!'\"\nWhat can be inferred about Mei Lin's ability to function and maintain composure after such a traumatic event?",
        options: ["A. She is emotionally detached and feels nothing about the murder.","B. She is completely unaffected by what has happened.","C. She is capable of suppressing her guilt and fear to protect her child.","D. She wants to be caught and is subconsciously sabotaging herself."],
        answer: "C"
    },
    {
        question: "Read the passage below and answer the question.\nTaylor Swift has built a career spanning nearly two decades, constantly reinventing her musical style and image. In interviews, she speaks thoughtfully about her songwriting process, often crediting personal experiences and relationships as inspiration. Despite her massive fame, she maintains close friendships with fellow celebrities and frequently attends their events. Swift has also been vocal about her personal beliefs and has donated millions to charitable causes, including education and disaster relief. However, critics have noted that she meticulously controls her public narrative, carefully curating what she shares with the media and her fans.\nBased on the passage, which characteristic best describes Taylor Swift?",
        options: ["A. Reckless and impulsive in her decision-making","B. Strategic and intentional about her personal and professional image","C. Isolated and disinterested in social connections","D. Unambitious and content with past successes"],
        answer: "B"
    },
    {
        question: "Read the passage below and answer the question.\nTom Blyth rose to prominence through his breakout role in \"The Hunger Games: The Ballad of Songbirds and Snakes,\" earning critical acclaim for his nuanced portrayal of a complex antagonist. In behind-the-scenes interviews, he demonstrates a deep understanding of character psychology and frequently discusses the emotional demands of his roles. Colleagues describe him as humble and collaborative on set, often crediting his scene partners for elevating his performances. Despite his growing fame, Blyth has chosen to limit his social media presence and rarely engages in the celebrity gossip cycle. He prioritizes quality over quantity in his project selections, turning down lucrative offers to pursue roles that challenge him artistically.\nBased on the passage, which characteristic best describes Tom Blyth?",
        options: ["A. Thoughtful and committed to artistic integrity","B. Attention-seeking and obsessed with social media fame","C. Arrogant and dismissive of his fellow actors","D. Athletic and heavily invested in physical fitness"],
        answer: "A"
    },
    {
        question: "Read the passage below and answer the question.\nSalish Matter, a popular content creator, has built a following by documenting her outdoor adventures and lifestyle through social media platforms. Her videos showcase her infectious enthusiasm and genuine love for nature, with viewers frequently commenting on her approachable demeanor. Despite her significant online presence, Salish maintains a relatively private personal life, rarely discussing her family or intimate relationships publicly. She has used her platform to promote environmental conservation and outdoor accessibility for diverse communities. Industry observers note that her success stems not from manufactured drama or controversy, but from her authentic connection with her audience and consistent, quality content creation.\nBased on the passage, which characteristic best describes Salish Matter?",
        options: ["A. Manipulative and strategically creates false personas for profit","B. Highly energetic and eclectic in content creation","C. Secretive and deliberately avoids meaningful connections with her audience","D. Authentic and genuinely passionate about sharing her interests with others"],
        answer: "D"
    },
    {
        question: "Read the passage below and answer the question.\nEileen Gu, an Olympic athlete and entrepreneur, has demonstrated exceptional resilience throughout her career, competing at elite levels while simultaneously launching business ventures. She is known for her articulate communication skills and frequently discusses her multicultural background and the importance of representation in sports. In interviews, Gu emphasizes her drive to excel in multiple domains, refusing to be limited by traditional expectations of what an athlete should pursue. Her teammates and coaches consistently praise her work ethic and mental toughness, describing her as someone who thrives under pressure. Critics, however, have questioned whether her divided attention between sports and business endeavors compromises her full commitment to either pursuit.\nBased on the passage, which characteristic best describes Eileen Gu?",
        options: ["A. Arrogant and uninterested in her coaches' and teammates' contributions","B. Focused resolutely on her athletic goals","C. Ambitious and determined to challenge conventional limitations on her potential","D. Unfocused and incapable of excelling in any single area"],
        answer: "C"
    },
    {
        question: "Read the passage below and answer the question.\nRobert Irwin, son of the legendary wildlife expert Steve Irwin, has followed in his father's footsteps as a passionate conservationist and television personality. He approaches every wildlife encounter with genuine curiosity and infectious energy, often expressing wonder at even the most dangerous animals he encounters. Colleagues and crew members consistently describe him as dedicated and hardworking, noting that he arrives early to film sets and stays late to ensure educational content meets his high standards. Through his social media presence and television appearances, Irwin actively promotes environmental conservation and animal welfare, frequently using his platform to advocate for habitat protection. Despite the immense pressure of living up to his father's legacy, he has carved his own path by emphasizing scientific accuracy and respectful wildlife interaction rather than seeking attention through reckless behavior.\nBased on the passage, which characteristic best describes Robert Irwin?",
        options: ["A. Reckless and willing to endanger animals for entertainment value","B. espectful and committed to honoring his father's legacy","C. Haphazard and sporadic in the scientific accuracy of his work","D. Reliant and efficient in his television work"],
        answer: "B"
    },
    {
        question: "Read the passage below and answer the question.\nSneaky Snail had devised an ingenious plan to infiltrate Mr. Anwar's chemistry classroom and pilfer the students' homework assignments. He crept silently through the hallways, leaving a glistening trail behind him as he approached the door. However, Mr. Anwar had anticipated his arrival and had strategically placed various chemical deterrents around the classroom perimeter. The caustic fumes emanating from these substances created an impenetrable barrier that even the most cunning snail could not breach.\nWhat does the word \"caustic\" most closely mean in this passage?",
        options: ["A. Pleasant-smelling and aromatic","B. Soft and soothing to the touch","C. Chemically burning or corrosive in nature","D. Colorless, tasteless, odorless"],
        answer: "C"
    },
    {
        question: "Read the passage below and answer the question.\nSneaky Snail's nefarious scheme had been thwarted once again. Mr. Anwar's vigilance in protecting the homework proved to be an insurmountable obstacle. The snail had attempted to exploit a ventilation shaft, but the chemistry teacher had sealed it with a compound that reacted violently to moisture. Sneaky Snail's slimy exterior made him particularly vulnerable to Mr. Anwar's defensive measures, which were specifically calibrated to repel gastropods of all sizes.\nWhat does the word \"nefarious\" most closely mean in this passage?",
        options: ["A. wicked and intended to cause harm","B. comical and entertaining for children","C. accidental and unplanned happenings","D. successful and well-executed plans"],
        answer: "A"
    },
    {
        question: "Read the passage below and answer the question.\nMr. Anwar's meticulous attention to detail proved invaluable in his ongoing battle against Sneaky Snail. Every evening, he would meticulously inspect the classroom, ensuring that all chemical barriers remained intact and effective. His perspicacious understanding of the snail's behavioral patterns allowed him to anticipate where the creature might attempt entry. By studying the snail's previous incursions, Mr. Anwar had developed a comprehensive defense system that left no vulnerability unexploited.\nWhat does the word \"perspicacious\" most closely mean in this passage?",
        options: ["A. carless and inattentive","B. physically strong and powerful","C. humerous and lighthearted","D. keen insight and understanding"],
        answer: "D"
    },
    {
        question: "Read the passage below and answer the question.\nSneaky Snail's relentless determination to acquire the chemistry homework was becoming increasingly irksome to Mr. Anwar. Night after night, the determined gastropod would attempt new and creative methods to circumvent the chemical defenses. On one particularly audacious night, Sneaky Snail tried to burrow beneath the classroom floor, but Mr. Anwar had presciently applied a pH-altering compound to the soil that rendered it inhospitable. The snail's exasperation was evident as he retreated once more into the darkness.\nWhat does the word \"circumvent\" most closely mean in this passage?",
        options: ["A. To surrender to a challenge","B. To strengthen or reinforce a barrier","C. To find a way around or bypass something","D. To go directly through an obstacle"],
        answer: "C"
    },
    {
        question: "Read the passage below and answer the question.\nMr. Anwar's propitious decision to implement a multi-layered chemical defense system had proven to be the definitive solution to the Sneaky Snail problem. The chemistry teacher's sagacious approach combined sodium chloride barriers, acidic gel traps, and moisture-reactive compounds in a labyrinthine arrangement that confused and deterred the persistent intruder. Sneaky Snail's futile attempts had become legendary among the other students, who now regarded Mr. Anwar's classroom as an inviolable fortress against gastropod invasion.\nWhat does the word \"inviolable\" most closely mean in this passage?",
        options: ["A. Easily broken or destroyed","B. Unable to be violated or breached","C. Temporary and unstable","D. Welcoming and open to all creatures"],
        answer: "B"
    },
    {
        question: "Read the passage below and answer the question.\nDr. Vigilante observed the creeping vanguard of Sneaky Snail’s army with a look of stoic resolve. To protect the students cramming for their finals, he deployed an ephemeral mist of lavender and salt-water vapor. While the students found the scent relaxing, the snails found the dehydrating atmosphere utterly deleterious to their progress, forcing them to halt their advance near the study room threshold.\nWhat does the word \"deleterious\" most closely mean in this passage?",
        options: ["A. Causing harm or damage","B. Sweet and pleasant","C. Beneficial and energizing","D. Invisible and hard to detect"],
        answer: "A"
    },
    {
        question: "Read the passage below and answer the question.\nMr. Guo was known for his equanimity, even when hundreds of gastropods were scaling the dormitory walls. Rather than panicking, he calmly adjusted the copper stripping around the doorframes. He knew that the galvanic reaction between the copper and the snails' mucus would act as a powerful deterrent, ensuring that the sanctity of the quiet study zone remained uncompromised by the slimy invaders.\nWhat does the word \"equanimity\" most closely mean in this passage?",
        options: ["A. Extreme fear or anxiety","B. Loud and aggressive behavior","C. Mental calmness and composure","D. Physical strength and agility"],
        answer: "C"
    },
    {
        question: "Read the passage below and answer the question.\nSneaky Snail’s army attempted to use a parsimonious strategy, sending only a few scouts to test the floor wax Dr. Vigilante had applied. They hoped to conserve their numbers for a final, massive push. However, the scouts quickly became mired in the tacky substance, proving that even a limited incursion would be met with total failure against the doctor’s sticky trap.\nWhat does the word \"parsimonious\" most closely mean in this passage?",
        options: ["A. Quick and agile","B. Complicated and messy","C. Extremely brave and heroic","D. Frugal or stingy with resources"],
        answer: "D"
    },
    {
        question: "Read the passage below and answer the question.\nAs the night wore on, the snails’ attempts to enter the dorm became more desultory. Without Sneaky Snail’s direct leadership, the army lacked focus, wandering aimlessly across the courtyard instead of coordinated climbing. Dr. Vigilante watched from the window, realizing that the threat was dissipating as the creatures lost their sense of purpose.\nWhat does the word \"desultory\" most closely mean in this passage?",
        options: ["A. Lacking a plan, purpose, or enthusiasm","B. Fragile and easily broken","C. Highly organized and efficient","D. Violent and highly energetic"],
        answer: "A"
    },
    {
        question: "Read the passage below and answer the question.\nIn a final act of hubris, Sneaky Snail himself appeared at the window ledge, believing his superior slime-shield could withstand Mr. Guo’s acidic barrier. This excessive pride proved to be his downfall, as the shield dissolved instantly upon contact. The defeated gastropod was forced to retreat, leaving the students to finish their studies in peace.\nWhat does the word \"hubris\" most closely mean in this passage?",
        options: ["A. Excessive pride or self-confidence","B. Technical skill and expertise","C. Unexpected luck or good fortune","D. Deep sadness and regret"],
        answer: "A"
    },
    {
        question: "Read the passage below and answer the question.\nSneaky Snail slithered across the ceiling of the main office, his heart set on the locked cabinet containing the final exams. Throughout every encounter with the faculty, his singular, unchanging motive remained the same: to pilfer academic documents at any cost. No matter how many salt barriers or chemical traps he faced, his personality never wavered, and he learned no lessons about honesty or hard work.\nWhich character type best describes Sneaky Snail based on this passage?",
        options: ["A. round","B. flat","C. static","D. dynamic"],
        answer: "C"
    },
    {
        question: "Read the passage below and answer the question.\nMs. Alincai stood guard at the vault door, her mind a whirlwind of conflicting emotions. She took pride in her duty to protect the exams, yet she felt a strange, secret pang of sympathy for the snail’s relentless ambition. She often questioned if her strictness was a byproduct of her own struggles as an ambitious AP student. She could see herself in Sneaky Snail's ambition, and often felt pity that he chose to use such an admirable quality for such chaotic harm. Still, she stood steadfastly at her post, ready to protect the exams no matter what from Sneaky Snail.\nWhich character type best describes Ms. Alincai in this passage?",
        options: ["A. flat","B. static","C. round","D. dynamic"],
        answer: "B"
    },
    {
        question: "Read the passage below and answer the question.\nMr. Quirk’s role in the defense was simple: he was the 'Door Monitor.' Every day, he sat in the same chair, wore the same blue tie, and said the exact same phrase to everyone who passed. \"Inch by inch, row by row, the exams will never go!\" In this story, he exists only to fulfill this single purpose in exam security.\nWhich character type best describes Mr. Quirk in this passage?",
        options: ["A. flat","B. antagonist","C. round","D. protagonist"],
        answer: "A"
    },
    {
        question: "Read the passage below and answer the question.\nDr. Wilkerson began the semester as a rigid traditionalist who believed only in physical locks and keys. However, after witnessing Sneaky Snail’s technological prowess, he realized his methods were obsolete. He spent weeks teaching herself advanced cybersecurity, eventually transforming into a tech-savvy guardian who valued innovation over tradition.\nWhich character type best describes Dr. Wilkerson in this passage?",
        options: ["A. dyanmic","B. static","C. foil","D. best friend"],
        answer: "A"
    },
    {
        question: "Read the following passage:\nElphaba stood in the shadows, her dark cloak blending into the stone walls of Shiz University. She clutched her spellbook, eyes fixed on the intricate ancient runes. Nearby, Glinda twirled in the center of a golden sunbeam, her pink sequins catching every light as she laughed, surrounded by a crowd of adoring students. While Elphaba sought the truth hidden in old texts, Glinda sought the approval reflected in the eyes of others.\nHow does Glinda serve as a foil to Elphaba in this paragraph?",
        options: ["A. Glinda's presence shows that Elphaba is jealous of those who are more popular than her.","B. Glinda's popularity and love for the spotlight highlight Elphaba's isolation and intellectual focus.","C. Glinda is a foil because she is the only person at the university who is nice to Elphaba.","D. Glinda's pink outfit suggests she is the protagonist while Elphaba is the antagonist."],
        answer: "B"
    },
    {
        question: "Read the following passage:\nFiyero lounged on the balcony, yawning as he dismissed the history lecture as 'too much effort.' He believed life was meant to be lived 'unexamined' and breezy. Inside the library, Elphaba paced between the aisles, her brow furrowed with the weight of the Ozians' political injustice. She couldn't understand how anyone could sleep while the world was changing for the worse.\nIn this context, what specific trait of Elphaba’s is emphasized by Fiyero’s 'carefree' attitude?",
        options: ["A. Her physical exhaustion and need for rest.","B. Her superiour intelligence compared to other stuudents.","C. Her desire to be a teacher at Shiz University.","D. Her deep sense of responsibility and moral urgency."],
        answer: "D"
    },
    {
        question: "Read the following passage:\nThe Wizard sat behind an elaborate clockwork head, his voice booming with a manufactured power that shook the floorboards. He spoke of 'giving the people what they want to believe.' Elphaba stood before him, her voice small but steady, refusing to use a script or a mask. She spoke only of what was true, even if the truth was 'unpopular.'\nWhich statement best describes the foil relationship between the Wizard and Elphaba?",
        options: ["A. They are foils because the Wizard is short and Elphaba is tall.","B. Elphaba is a foil because she wants the Wizard's job for herself.","C. The Wizard's reliance on illusion highlights Elphaba's commitment to honesty.","D. The Wizard's wisdom and experience is compared to Elphaba's naivity."],
        answer: "C"
    },
    {
        question: "Read the following passage:\nNessarose sat rigidly in her chair, her eyes fixed on Boq with a desperate, clinging need for affection. She solely needed his devotion to lift her spirits. Elphaba, meanwhile, prepared to leave for the Emerald City alone. Though her heart was heavy, she squared her shoulders, knowing that her path was her own to walk, with or without the approval of a man.\nHow does Nessarose’s characterization help the reader understand Elphaba in this scene?",
        options: ["A. Nessarose's dependency on others empasizes Elphaba's growing independence.","B. Nessarose cannot walk, but Elphaba can.","C. Nessarose is beautiful and friendly while Elphaba is ugly and cold.","D. Nessarose's kindness higlights Elphaba's anger toward the world."],
        answer: "A"
    }
];