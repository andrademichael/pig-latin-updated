# _Pig Latin Generator_

#### _Translates plain English into Pig Latin, {08-17-2016}_

#### By _**Kevin Johnston and J'ena SanCartier**_

## Description

_This program allows users to input a single English word into a form and upon submitting, the program will translate the word into Pig Latin and display the result. This program is an exercise in Behavior Driven Development, JavaScript, jQuery, CSS, and HTML._

## Setup/Installation Requirements

1. Clone this repository at:
  * https://github.com/jenasancartier/pig-latin.git or
  * https://github.com/kjohnston1149/pig-latin.git
2. Move into the project folder
3. Open index.html in the browser of your choice (we suggest Chrome)
4. And enjoy!

## Specs


1. The program does nothing non-alphabetical characters, since they do not contain consonants or vowels.
  * **Input Example:** 3
  * **Output Example:** 3
2. The program adds “ay” to single-letter words beginning with a vowel.
  * **Output Example:** “iay”
3. The program adds “ay” to multiple-character words that begin with a vowel.
  * **Input Example:** “oatmeal”
  * **Output Example:** “oatmealay”
4. The program moves the first consonant to the end of a word beginning with one consonant.
  * **Input Example:** “time”
  * **Output Example:** “imet”
5. The program recognizes “y” as a consonant.
  * **Input Example:** “your”
  * **Output Example:** “oury”
6. The program adds “ay” to the end of words where the first consonant has already been moved to the end of the word.
  * **Input Example:** “imet”
  * **Output Example:** “imetay”
  * **Input Example:** “oury”
  * **Output Example:** “ouryay”
7. The program moves the first consecutive consonants to the end of a word that begins with multiple consonants.
  * **Input Example:** “thistle”
  * **Output Example:** “istleth”
8. The program treats “qu” as two consecutive consonants.
  * **Input Example:** “quail”
  * **Output Example:** “ailqu”
  * **Input Example:** “squeal”
  * **Output Example:** “ealsqu”
9. The program adds “ay” to the end of words where the first consecutive consonants has been moved to the end of the word.
  * **Input Example:** “ealsqu”
  * **Output Example:** “ealsquay”
  * **Input Example:** “istleth”
  * **Output Example:** “islethay”


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_For help, contact us:_
* [jenasancartier@gmail.com](mailto:jenasancartier@gmail.com)
* [kjohnston1149@gmail.com](mailto:kjohnston1149@gmail.com)

## Technologies Used

_HTML, CSS, JavaScript & jQuery, Bootstrap_

### License

This website is licensed under the MIT license

Copyright (c) 2016 **_{Kevin Johnston and J'ena SanCartier}_**
