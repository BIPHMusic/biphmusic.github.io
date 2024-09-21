const unit1 = [
    "Staff", "Treble Clef", "Bass Clef", "Ledger Lines", "Accidental", "Sharp", 
    "Flat", "Double Sharp", "Double Flat", "Natural", "Enharmonic", "Key", 
    "Key Signature", "Solfege", "Scale", "Major Scale", "Natural Minor Scale", 
    "Harmonic Minor Scale", "Melodic Minor Scale", "Relative Minor", "Parallel Minor", 
    "Slur", "Tie", "Rhythm", "Measure", "Time Signature", "Meter", 
    "Simple Meter", "Compound Meter", "Complex Meter", "Duple Pulse", 
    "Triple Pulse", "Quadruple Pulse", "Downbeat", "Upbeat", "Syncopation", 
    "Tempo", "BPM", "Ritardando", "Accelerando", "A Tempo", "Rubato", 
    "Largo/Lento", "Adagio", "Andante", "Moderato", "Allegro", 
    "Vivace", "Presto", "Dynamics", "Piano", "Forte", 
    "Mezzo Piano", "Mezzo Forte", "Pianissimo", "Fortissimo", "Crescendo", 
    "Decrescendo", "Diminuendo", "Forte Piano", "Articulation", "Staccato", 
    "Legato", "Accent / Bell Tone", "Marcato", "Tenuto", "Sforzando", 
    "Maestoso", "Glissando"
];

        const unit2 = [
    "Conjunct Motion", "Disjunct Motion", "Pentatonic Scale", "Chromatic Scale", 
    "Whole Tone Scale", "Octatonic Scale", "Improvisation", "Dissonance", 
    "Consonance", "Texture", "Alberti Bass", "Monophonic", "Homophonic", 
    "Polyphonic", "Heterophonic", "Solo", "Duet", "Trio", 
    "Quartet", "Arpeggio", "Interval", "Perfect Unison", 
    "Minor 2", "Major 2", "Minor 3", "Major 3", 
    "Perfect 4", "Tritone", "Perfect 5"
];

const cumulative = [
    "Accidental",
    "Sharp",
    "Flat",
    "Double Sharp",
    "Double Flat",
    "Natural",
    "Enharmonic",
    "Key",
    "Key Signature",
    "Solfege",
    "Scale",
    "Major Scale",
    "Natural Minor Scale",
    "Harmonic Minor Scale",
    "Melodic Minor Scale",
    "Relative Minor",
    "Parallel Minor",
    "Slur",
    "Tie",
    "Rhythm",
    "Measure",
    "Time Signature",
    "Meter",
    "Simple Meter",
    "Compound Meter",
    "Complex Meter",
    "Duple Pulse",
    "Triple Pulse",
    "Quadruple Pulse",
    "Downbeat",
    "Upbeat",
    "Syncopation",
    "Tempo",
    "BPM",
    "Ritardano",
    "Accelerando",
    "A Tempo",
    "Rubato",
    "Largo/Lento",
    "Adagio",
    "Andante",
    "Moderato",
    "Allegro",
    "Vivace",
    "Presto",
    "Dynamics",
    "Piano",
    "Forte",
    "Mezzo Piano",
    "Mezzo Forte",
    "Pianissimo",
    "Fortissimo",
    "Crescendo",
    "Decrescendo",
    "Diminuendo",
    "Forte Piano",
    "Articulation",
    "Staccato",
    "Legato",
    "Accent / Bell Tone",
    "Marcato",
    "Tenuto",
    "Sforzando",
    "Maestoso",
    "Glissando",
    "Conjunct Motion",
    "Disjunct Motion",
    "Pentatonic Scale",
    "Chromatic Scale",
    "Whole Tone Scale",
    "Octatonic Scale",
    "Improvisation",
    "Dissonance",
    "Consonance",
    "Texture",
    "Alberti Bass",
    "Monophonic",
    "Homophonic",
    "Polyphonic",
    "Heterophonic",
    "Solo",
    "Duet",
    "Trio",
    "Quartet",
    "Arpeggio",
    "Interval",
    "Perfect Unison",
    "Minor 2",
    "Major 2",
    "Minor 3",
    "Major 3",
    "Perfect 4",
    "Tritone",
    "Perfect 5"
];

        const theglossary = [
            {"Term":"Accidental","Definition":"Markings in the music that alter the pitch of a note"}, 
            {"Term":"Sharp","Definition":"Raises a natural pitch by one half step"}, 
            {"Term":"Flat","Definition":"Lowers a natural pitch by one half step"}, 
            {"Term":"Double Sharp","Definition":"Raises a natural pitch by two half steps"}, 
            {"Term":"Double Flat","Definition":"Lowers a natural pitch by two half steps"}, 
            {"Term":"Natural","Definition":"Returns a note to it's natural state, canceling any accidentals"}, 
            {"Term":"Enharmonic","Definition":"An alternate spelling of a note (i.e. C#/Db)"}, 
            {"Term":"Key","Definition":"The scale used in a piece of music"}, 
            {"Term":"Key Signature","Definition":"The set of sharps and flats which determine the key"}, 
            {"Term":"Solfege","Definition":"Do, Re, Mi, etc."}, 
            {"Term":"Scale","Definition":"The notes of a given key, ascending and descending"}, 
            {"Term":"Major Scale","Definition":"1, 2, 3, 4, 5, 6, 7, 8"}, 
            {"Term":"Natural Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♭7, 8"}, 
            {"Term":"Harmonic Minor Scale","Definition":"1, 2,♭3, 4, 5,♭6,♮7, 8"}, 
            {"Term":"Melodic Minor Scale","Definition":"1, 2,♭3, 4, 5,♮6,♮7, 8 ↗︎ ♭7,♭6, 5, 4,♭3, 2, 1 ↘︎"}, 
            {"Term":"Relative Minor","Definition":"A minor scale that uses the same key signature as the major (C major, A minor)"}, 
            {"Term":"Parallel Minor","Definition":"A minor scale that shares the same tonic as the major (C major, C minor)"}, 
            {"Term":"Slur","Definition":"A curved line between two different pitches, indicating that they should be played legato"}, 
            {"Term":"Tie","Definition":"A curved line between two notes of the same pitch, adding their lengths together"}, 
            {"Term":"Rhythm","Definition":"The way of organizing notes by length"}, 
            {"Term":"Measure","Definition":"The space between two vertical bar lines"}, 
            {"Term":"Time Signature","Definition":"A marking that describes the number of beats in a measure and how they are subdivided"}, 
            {"Term":"Meter","Definition":"Another way to say Time Signature"}, 
            {"Term":"Simple Meter","Definition":"Beat is divisible by groups of two"}, 
            {"Term":"Compound Meter","Definition":"Beat is divisible by groups of three"}, 
            {"Term":"Complex Meter","Definition":"Some beats are divisible by two, some by three"}, 
            {"Term":"Duple Pulse","Definition":"Time signature with two main beats"}, 
            {"Term":"Triple Pulse","Definition":"Time signature with three main beats"}, 
            {"Term":"Quadruple Pulse","Definition":"Time signature with four main beats"}, 
            {"Term":"Downbeat","Definition":"The beginning/strongest part of the beat"}, 
            {"Term":"Upbeat","Definition":"The weaker subdivision(s) between the beats"}, 
            {"Term":"Syncopation","Definition":"The practice of accenting the upbeats of a phrase"}, 
            {"Term":"Tempo","Definition":"the speed of music"}, 
            {"Term":"BPM","Definition":"The number of beats per minute"}, 
            {"Term":"Ritardano","Definition":"To gradually decrease in speed"}, 
            {"Term":"Accelerando","Definition":"To gradually increase in speed"}, 
            {"Term":"A Tempo","Definition":"To return to the original tempo (after rit/accel)"}, 
            {"Term":"Rubato","Definition":"To be played with free tempo"}, 
            {"Term":"Largo/Lento","Definition":"Very slow, 40-60 BPM"}, 
            {"Term":"Adagio","Definition":"Slowly, with expression, 60-75 BPM"}, 
            {"Term":"Andante","Definition":"Walking tempo, 75-90 BPM"}, 
            {"Term":"Moderato","Definition":"At a moderate speed, 100-120 BPM"}, 
            {"Term":"Allegro","Definition":"Fast, 120-140 BPM"}, 
            {"Term":"Vivace","Definition":"Lively and fast, 150-175 BPM"}, 
            {"Term":"Presto","Definition":"Very fast, 140-200 BPM"}, 
            {"Term":"Dynamics","Definition":"Markings in music which determine how loudly/softly it is to be played"}, 
            {"Term":"Piano","Definition":"Quiet"}, 
            {"Term":"Forte","Definition":"Loud"}, 
            {"Term":"Mezzo Piano","Definition":"Moderately quiet"}, 
            {"Term":"Mezzo Forte","Definition":"Moderately loud"}, 
            {"Term":"Pianissimo","Definition":"Very quiet"}, 
            {"Term":"Fortissimo","Definition":"Very loud"}, 
            {"Term":"Crescendo","Definition":"Gradually growing in strength"}, 
            {"Term":"Decrescendo","Definition":"Gradually decreasing in strength"}, 
            {"Term":"Diminuendo","Definition":"A very gradual decrease in volume, usually over multiple measures"}, 
            {"Term":"Forte Piano","Definition":"A dynamic starting strong and immediately going to quiet"}, 
            {"Term":"Articulation","Definition":"The way a note is played (i.e. smoothly, sharply, lightly, etc.)"}, 
            {"Term":"Staccato","Definition":"To be played short and separated, lightly"}, 
            {"Term":"Legato","Definition":"To be played smoothly and flowingly; connected, no breaks"}, 
            {"Term":"Accent / Bell Tone","Definition":"A marking placed above or below a note head to indicate a loud start"}, 
            {"Term":"Marcato ","Definition":"To be played short and separated, but with emphasis"}, 
            {"Term":"Tenuto","Definition":"To be played at the full length of the full value of the note, stressed"}, 
            {"Term":"Sforzando","Definition":"To articulate a note with a strong, accented beginning and immediately drop to quiet"}, 
            {"Term":"Maestoso","Definition":"To be played majestically, by accenting every note"}, 
            {"Term":"Glissando","Definition":"To quickly slide from a low note to a high note, or vice versa"},
            {"Term": "Conjunct Motion", "Definition": "Smooth voice leading, usually by step"},
            {"Term": "Disjunct Motion", "Definition": "Voice leading characterized by large leaps"},
            {"Term": "Pentatonic Scale", "Definition": "A scale only using 5 notes, major or minor"},
            {"Term": "Chromatic Scale", "Definition": "A scale utilizing all 12 notes"},
            {"Term": "Whole Tone Scale", "Definition": "A scale comprised only of whole steps"},
            {"Term": "Octatonic Scale", "Definition": "A scale using 8 notes, diminished scales"},
            {"Term": "Improvisation", "Definition": "Come up with new melodies, solos, etc. on the spot"},
            {"Term": "Dissonance", "Definition": "A sound of clashing produced by conflicting notes"},
            {"Term": "Consonance", "Definition": "The opposite of dissonance, pleasant sounds"},
            {"Term": "Texture", "Definition": "The way in which musical content is presented"},
            {"Term": "Alberti Bass", "Definition": "The practice of arpeggiating the chords under the main melody"},
            {"Term": "Monophonic", "Definition": "A musical texture consisting of a single melody, if multiple voices, sung in unison"},
            {"Term": "Homophonic", "Definition": "A musical texture consisting of a main melody and harmony of lesser importance"},
            {"Term": "Polyphonic", "Definition": "A musical texture using multiple melodies, each with semi-equal importance"},
            {"Term": "Heterophonic", "Definition": "A musical texture of a melody that is doubled but with slight variations"},
            {"Term": "Solo", "Definition": "A performance by a single musician"},
            {"Term": "Duet", "Definition": "Two musicians performing together"},
            {"Term": "Trio", "Definition": "Three musicians performing together"},
            {"Term": "Quartet", "Definition": "Four musicians performing together"},
            {"Term": "Arpeggio", "Definition": "Playing a chord one note at a time instead of all at once"},
            {"Term": "Interval", "Definition": "The distance between two notes"},
            {"Term": "Perfect Unison", "Definition": "No distance between the pitches; the same note"},
            {"Term": "Minor 2", "Definition": "One half step between the pitches, 'Jaws'"},
            {"Term": "Major 2", "Definition": "Two half steps between the pitches, 'Do-re'"},
            {"Term": "Minor 3", "Definition": "Three half steps between the pitches, 'Funeral March'"},
            {"Term": "Major 3", "Definition": "Four half steps between the pitches, 'Mario'"},
            {"Term": "Perfect 4", "Definition": "Five half steps between the pitches, 'Here comes the bride,' '起来'"},
            {"Term": "Tritone", "Definition": "Six half steps between the pitches, 'The Simpsons'"},
            {"Term": "Perfect 5", "Definition": "Seven half steps between the pitches, 'Star Wars'"}
        ];