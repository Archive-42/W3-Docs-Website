[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.1.4 \[Abbreviations\]](meaning-located.html "Understanding SC  3.1.4 [Abbreviations]")
-   [**Next:** SC 3.1.6 \[Pronunciation\]](meaning-pronunciation.html "Understanding SC  3.1.6 [Pronunciation]")

On this page:

-   [Intent](#meaning-supplements-intent-head)
-   [Examples](#meaning-supplements-examples-head)
-   [Related Resources](#meaning-supplements-resources-head)
-   [Techniques & Failures](#meaning-supplements-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="meaning-supplements"></span> **Reading Level**<span class="screenreader">:</span> Understanding SC 3.1.5
==================================================================================================================

> **[3.1.5](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#meaning-supplements) Reading Level:** When text requires reading ability more advanced than the <a href="#lowseceddef" class="termref">lower secondary education level</a> after removal of proper names and titles, <a href="#suppcontentdef" class="termref">supplemental content</a>, or a version that does not require reading ability more advanced than the lower secondary education level, is available. (Level AAA)

Intent of this Success Criterion
--------------------------------

Content should be written as clearly and simply as possible. The intent of this Success Criterion is:

-   to ensure that additional content is available to aid the understanding of difficult or complex text;

-   to establish a testable measure indicating when such additional content is required.

This Success Criterion helps people with reading disabilities while also allowing authors to publish difficult or complex Web content. Text difficulty is described in terms of the level of education required to read the text. Education levels are defined according to the International Standard Classification of Education [\[UNESCO\]](appendixD.html#UNESCO), which was created to allow international comparison among systems of education.

Difficult or complex text may be appropriate for most members of the intended audience (that is, most of the people for whom the content has been created). But there are people with disabilities, including reading disabilities, even among highly educated users with specialized knowledge of the subject matter. It may be possible to accommodate these users by making the text more readable. If the text cannot be made more readable, then supplemental content is needed. Supplemental content is required when text demands reading ability more advanced than the lower secondary education level—that is, more than nine years of school. Such text presents severe obstacles to people with reading disabilities and is considered difficult even for people without disabilities who have completed upper secondary education.

Reading disabilities such as dyslexia make it difficult to recognize written or printed words and associate them with the correct sounds. This is called "decoding" the text. Decoding must be automatic in order for people to read fluently. The act of decoding text word by word consumes much of the mental energy that most people are able to use for understanding what they read. Text that uses short, common words and short sentences is easier to decode and usually requires less advanced reading ability than text that uses long sentences and long or unfamiliar words.

The education level required to read text content (also called "readability") is measured by analyzing selected passages of text from the Web page. If the Web page includes text written for different purposes or different styles are used, the selected passages include samples of the types of content in the Web page and the different styles in which the content is written. (In many cases, the Web page contains only one kind of text content—e.g., technical documentation, a legal notice, marketing material, etc.—and all the content uses the same style.)

Educators can also measure the education level required to read text content. For example, qualified teachers can evaluate text according to local education standards to determine if it requires reading ability beyond what is expected for students in the last year of lower secondary education.

Because people's names, the names of cities or other proper names cannot be changed to shorter names with fewer syllables, and because doing so or just referring to everyone by pronouns can make sentences harder to understand, the success criterion specifies that proper names can be removed from the text before assessing whether it meets reading ability requirement. Titles are the same in that a person cannot rewrite a title to make it simpler without making it impossible to find the item which the title refers (e.g. a book, academic paper, article, etc.). Therefore, titles are also exempted specifically.

When a Web page contains multiple languages, a readability result should be calculated for each language that constitutes at least 5% of the content and that is used in full sentences or paragraphs (not just individual words or phrases). The overall readability of the page should be judged on the language that yields the worst readability results.

The readability of content may also be determined by applying a readability formula to the selected passage. Many (though not all) readability formulas base their calculations on passages of 100 words. Such formulas have been developed for many languages. The number of words in the passage is counted and the length of the words is determined by counting either the number of syllables or the number of characters. Most readability formulas also count the number and length of sentences. The average length of words and sentences in the content is then used to calculate a readability score. (Some languages, such as Japanese, may include multiple scripts within the same passage. Readability formulas for these languages may use the number and length of such "runs" in their calculations.) The result may be presented as a number (for example, on a scale from 0-100) or as a grade level. These results can then be interpreted using the education levels described in the International Standard Classification of Education. Readability formulas are available for at least some languages when running the spell checkers in popular software if you specify in the options of this engine that you want to have the statistics when it has finished checking your documents.

<table><caption>Levels of education</caption><thead><tr class="header"><th>Primary education</th><th>Lower secondary education</th><th>Upper secondary education</th><th>Advanced education</th></tr></thead><tbody><tr class="odd"><td>First 6 years of school</td><td>7-9 years of school</td><td>10-12 years of school</td><td>More than 12 years of school</td></tr></tbody></table>

Adapted from International Standard Classification of Education [\[UNESCO\]](appendixD.html#UNESCO)

Note: According to the Open Society Mental Health Initiative, the concept of Easy to Read cannot be universal, and it will not be possible to write a text that will suit the abilities of all people with literacy and comprehension problems. Using the clearest and simplest language appropriate is highly desirable, but the WCAG Working Group could not find a way to test whether this had been achieved. The use of reading level is a way to introduce testability into a Success Criterion that encourages clear writing. Supplementary content can be a powerful technique for people with some classes of cognitive disability.

### Specific Benefits of Success Criterion 3.1.5:

This Success Criterion may help people who:

-   Have difficulty comprehending and interpreting written language (e.g. articles, instructions, or newspapers in text or braille), for the purpose of obtaining general knowledge or specific information

Examples of Success Criterion 3.1.5
-----------------------------------

1.  **A scientific journal including readable summaries of complex research articles**

    A scientific journal includes articles written in highly technical language aimed at specialists in the field. The journal's Table of Contents page includes a plain-language summary of each article. The summaries are intended for a general audience with eight years of school. The metadata for the journal uses the Dublin Core specification to identify the education level of the articles' intended audience as "advanced," and the education level of the intended audience for the summaries as "lower secondary education."

2.  **Medical information for members of the public.**

    A medical school operates a Web site that explains recent medical and scientific discoveries. The articles on the site are written for people without medical training. Each article uses the Dublin Core metadata specification to identify the education level of the intended audience as "lower secondary education" and includes the Flesch Reading Ease score for the article. A link on each page displays the education level and other metadata. No supplemental content is required because people who read at the lower secondary education level can read the articles.

3.  **An e-learning application.**

    An on-line course about Spanish cultural history includes a unit on Moorish architecture. The unit includes text written for students with different reading abilities. Photographs and drawings of buildings illustrate architectural concepts and styles. Graphic organizers are used to illustrate complex relationships, and an audio version using synthetic speech is available. The metadata for each version describes the academic level of the content and includes a readability score based on formulas developed for Spanish-language text. The learning application uses this metadata and metadata about the students to provide versions of instructional content that match the needs of individual students.

4.  **Science information that requires a reading ability at the lower secondary education level.**

    The text below (116 words total) requires a reading ability of grade 4.2 in the United States according to the Flesch-Kincaid formula. In the US, grade 4.2 is at the primary education level.

    Science is about testing — and about looking closely. Some scientists use microscopes to take a close look. We're going to use a simple piece of paper.

    Here's what you do: Print this page and cut out the square to make a "window" one inch square. (It's easiest to fold the page in half before you cut.)

    Choose something interesting: a tree trunk, a leaf, flower, the soil surface, or a slice of soil from a shovel.

    Put your window over the thing and look at it closely. Take your time — this is not a race.

    To help you see more details, draw a picture of what's inside your square.

    Now let's think about what you've found.

    (Source: Howard Hughes Medical Institute <http://www.hhmi.org/coolscience/forkids/inchsquare/>)

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   A Plain Language Audit Tool provides a checklist for determining whether documents can be edited for clarity and "plain language." The checklist includes a readability assessment. Available from the Northwest Territories (Canada) Literacy Council at <http://www.nwt.literacy.ca/resources/plainlang/auditool/cover.htm>.

-   The Plain Language Association INternational (PLAIN) Web site provides many useful resources to help writers produce documents that communicate clearly in a variety of cultural and rhetorical contexts. Refer to: <http://www.plainlanguagenetwork.org/>.

-   [The US Government's plain language Web site](http://www.plainlanguage.gov%20) provides general information about plain language as well as information about use of plain language in US Government documents, including legal requirements

-   [The Plain English Campaign Web site](http://www.plainenglish.co.uk/) provides useful information and guidance for authors writing in English.

-   [Juicy Studio's Readability Test](http://juicystudio.com/services/readability.php) analyzes the readability of all rendered content.

-   Hall, T., and Strangman, N. CAST: [Graphic organizers](http://www.cast.org/publications/ncac/ncac_go.html#startcontent). Retrieved 5 April 2005. This article illustrates several different kinds of graphic organizers, explains how each type may be useful, and summarizes research findings that graphic organizers support learning, especially among students with learning disabilities.

-   [Entry for Audience Education Level. Using Dublin Core – Dublin Core Qualifiers](http://dublincore.org/documents/usageguide/qualifiers.shtml)

-   [IMS Learner Information Packaging Model Information Specification, Table 6.3 "accessibility" learner information data structure detailed description](http://www.imsglobal.org/profiles/lipinfo01.html#tab6.3)

-   [TextQuest.de](http://www.textquest.de/lesbar.htm) lists references for readability formulas for different languages, including English, German, Spanish, Dutch, French, and Swedish.

-   [Richtlijnen Keurmerk Makkelijk Lezen](http://taalunieversum.org/onderwijs/publicaties/geletterd_in_de_lage_landen/richtlijnen.php) are the guidelines used by the Stichting Makkelijk Lezen (Easy Reading Foundation).

-   [Leesbaar Nederlands](http://www.leesbaarnederlands.nl/taal.htm) ("Readable Dutch") contains guidelines for writing text that is accessible for people with a reading disability. These guidelines address language, content and design.

-   [Wetenschappelijke verantwoording van de toetsserie Leestechniek & Leestempo](http://toetswijzer.kennisnet.nl/html/tg/4.pdf) describes the CILT (CITO index voor leestechniek - CITO index for reading ability), the formulas developed by the Dutch organization [CITO](http://www.cito.nl/) that relate readability to education level.

-   [d166 Reading](http://www.who.int/classifications/icf/site/onlinebrowser/icf.cfm?parentlevel=3&childlevel=4&itemslevel=4&ourdimension=d&ourchapter=1&ourblock=3&our2nd=66&our3rd=0&our4th=0) 2001. International Classification of Functioning, Disabilities, and Health. World Health Organization. See also [b16701 Reception of written language](http://www.who.int/classifications/icf/site/onlinebrowser/icf.cfm?parentlevel=5&childlevel=6&itemslevel=6&ourdimension=b&ourchapter=1&ourblock=2&our2nd=67&our3rd=0&our4th=1): mental functions of decoding written messages to obtain their meaning

-   [Guidelines for Creating Easy to Read Text, The Open Society Mental Health Initiative](http://www.osmhi.org/?page=139)

-   [European Easy-to-Read Guidelines](http://www.inclusion-europe.org/etr/)

-   [Flesch-Kincaid Readability Test](http://en.wikipedia.org/wiki/Flesch-Kincaid_Readability_Test)

Techniques and Failures for Success Criterion 3.1.5 - Reading Level
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G86: Providing a text summary that requires reading ability less advanced than the upper secondary education level](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G86)

2.  [G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G103)

3.  [G79: Providing a spoken version of the text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G79)

4.  [G153: Making the text easier to read](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G153)

5.  [G160: Providing sign language versions of information, ideas, and processes that must be understood in order to use the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G160)

Note: Different sites may address this Success Criterion in different ways. An audio version of the content may be helpful to some users. For some people who are deaf, a sign language version of the page may be easier to understand than a written language version since sign language may be their first language. Some sites may decide to do both or other combinations. No technique will help all users who have difficulty. So different techniques are provided as sufficient techniques here for authors trying to make their sites more accessible. Any numbered technique or combination above can be used by a particular site and it is considered sufficient by the Working Group.

### Additional Techniques (Advisory) for 3.1.5

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing text for navigational and landing pages that requires reading ability that is less advanced than the lower secondary education level (future link)

-   Providing text for interior pages that requires reading ability at the lower secondary education level (future link)

-   Including content summaries in metadata (future link)

-   Using the clearest and simplest language appropriate for the content (future link)

-   Using RDF to associate supplements with primary content (future link)

-   Providing a clear representational image on the site's home page (future link)

-   Clearly marking, by use of text or icon, content which has been optimized for easy reading (future link)

-   Using sentences that contain no redundant words, that is, words that do not change the meaning of the sentence (future link)

-   Using sentences that contain no more than two conjunctions (future link)

-   Using sentences that are no longer than the typical accepted length for secondary education (Note: In English that is 25 words) (future link)

-   Using sentences that do not contain complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence (future link)

-   Providing summaries for different sections of text (future link)

-   Using metadata to associate alternatives at different reading levels. (future link)

-   Using the Dublin Core accessibility element to associate text content with text, graphical, or spoken supplements (future link)

-   Using the ISO AfA accessibility element to associate text content with text, graphical, or spoken supplements (future link)

-   Using the IMS accessibility element to associate text content with text, graphical, or spoken supplements (future link)

-   Making metadata viewable by humans (future link)

    -   EXAMPLE: Providing, in metadata, URI(s) that point to a pre-primary-reading-level and a primary-reading-level text transcript of a new scientific discovery advanced-reading-level article.

### Common Failures for SC 3.1.5

The following are common mistakes that are considered failures of Success Criterion 3.1.5 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="lowseceddef"></span> lower secondary education level  
the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#primseceddef" class="termref">primary education</a>

Note: This definition is based on the International Standard Classification of Education [\[UNESCO\]](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#UNESCO).

 <span id="suppcontentdef"></span> supplemental content  
additional <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#contentdef" class="termref">content</a> that illustrates or clarifies the primary content

Example 1: An audio version of a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#webpagedef" class="termref">Web page</a>.

Example 2: An illustration of a complex <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a>.

Example 3: A paragraph summarizing the major outcomes and recommendations made in a research study.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.1.4 \[Abbreviations\]](meaning-located.html "Understanding SC  3.1.4 [Abbreviations]")
-   [**Next:** SC 3.1.6 \[Pronunciation\]](meaning-pronunciation.html "Understanding SC  3.1.6 [Pronunciation]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
