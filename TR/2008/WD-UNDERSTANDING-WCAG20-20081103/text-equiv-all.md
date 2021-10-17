[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 1.1 \[Text Alternatives\]](text-equiv.html "Understanding Guideline  1.1 [Text Alternatives]")
-   [**Next:** Guideline 1.2 \[Time-based Media\]](media-equiv.html "Understanding Guideline  1.2 [Time-based Media]")

On this page:

-   [Intent](#text-equiv-all-intent-head)
-   [Examples](#text-equiv-all-examples-head)
-   [Related Resources](#text-equiv-all-resources-head)
-   [Techniques & Failures](#text-equiv-all-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="text-equiv-all"></span> **Non-text Content**<span class="screenreader">:</span> Understanding SC 1.1.1
================================================================================================================

> **[1.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#text-equiv-all) Non-text Content:** All <a href="#non-text-contentdef" class="termref">non-text content</a> that is presented to the user has a <a href="#text-altdef" class="termref">text alternative</a> that serves the equivalent purpose, except for the situations listed below. (Level A)
>
> -   **Controls, Input:** If non-text content is a control or accepts user input, then it has a <a href="#namedef" class="termref">name</a> that describes its purpose. (Refer to *[Guideline 4.1](ensure-compat.html)* for additional requirements for controls and content that accepts user input.)
>
> -   **Time-Based Media:** If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to *[Guideline 1.2](media-equiv.html)* for additional requirements for media.)
>
> -   **Test:** If non-text content is a test or exercise that would be invalid if presented in <a href="#textdef" class="termref">text</a>, then text alternatives at least provide descriptive identification of the non-text content.
>
> -   **Sensory:** If non-text content is primarily intended to create a <a href="#sensoryexpdef" class="termref">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content.
>
> -   **<a href="#CAPTCHAdef" class="termref">CAPTCHA</a>:** If the purpose non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.
>
> -   **Decoration, Formatting, Invisible:** If non-text content is <a href="#puredecdef" class="termref">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="#atdef" class="termref">assistive technology</a>.
>
Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to make information conveyed by non-text content accessible through the use of a text alternative. Text alternatives are a primary way for making information accessible because they can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. Providing text alternatives allows the information to be rendered in a variety of ways by a variety of user agents. For example, a person who cannot see a picture can have the text alternative read aloud using synthesized speech. A person who cannot hear an audio file can have the text alternative displayed so that he or she can read it. In the future, text alternatives will also allow information to be more easily translated into sign language or into a simpler form of the same language.

### Note on CAPTCHA

CAPTCHAs are a controversial topic in the accessibility community. As is described in the paper [Inaccessibility of CAPTCHA](http://www.w3.org/TR/turingtest/), CAPTCHAs intrinsically push the edges of human abilities in an attempt to defeat automated processes. Every type of CAPTCHA will be unsolvable by users with certain disabilities. However, they are widely used, and the Web Content Accessibility Guidelines Working Group believes that if CAPTCHAs were forbidden outright, Web sites would choose not to conform to WCAG rather than abandon CAPTCHA. This would create barriers for a great many more users with disabilities. For this reason the Working Group has chosen to structure the requirement about CAPTCHA in a way that meets the needs of most people with disabilities, yet is also considered adoptable by sites. Requiring two different forms of CAPTCHA on a given site ensures that most people with disabilities will find a form they can use.

Because some users with disabilities will still not be able to access sites that meet the minimum requirements, the Working Group provides recommendations for additional steps. Organizations motivated to conform to WCAG should be aware of the importance of this topic and should go as far beyond the minimum requirements of the guidelines as possible. Additional recommended steps include:

-   Providing more than two modalities of CAPTCHAs

-   Providing access to a human customer service representative who can bypass CAPTCHA

-   Not requiring CAPTCHAs for authorized users

### Additional information

Non-text content can take a number of forms, and this Success Criterion specifies how each is to be handled.

**For non-text content that is not covered by one of the other situations listed below,** such as charts, diagrams, audio recordings, pictures, and animations, text alternatives can make the same information available in a form that can be rendered through any modality (for example, visual, auditory or tactile). Short and long text alternatives can be used as needed to convey the information in the non-text content. Note that **prerecorded audio-only** and **prerecorded video-only** files are covered here. **Live-audio-only** and **Live-video-only** files are covered below (see 3rd paragraph following this one).

**For non-text content that is a control or accepts user input** , such as images used as submit buttons, image maps or complex animations, a name is provided to describe the purpose of the non-text content so that the person at least knows what the non-text content is and why it is there.

**Non-text content that is time-based media** is made accessible through *[1.2](media-equiv.html)*. However, it is important that users know what it is when they encounter it on a page so they can decide what action if any they want to take with it. A text alternative that describes the time-based media and/or gives its title is therefore provided.

**For Live Audio-only and live video-only content**, it can be much more difficult to provide text alternatives that provide equivalent information as live audio-only and live video-only content. For these types of non-text content, text alternatives provide a descriptive label.

**Sometimes a test or exercise must be partially or completely presented in non-text format.** Audio or visual information is provided that cannot be changed to text because the test or exercise must be conducted using that sense. For example, a hearing test would be invalid if a text alternative were provided. A visual skill development exercise would similarly make no sense in text form. And a spelling test with text alternatives would not be very effective. For these cases, text alternatives should be provided to describe the purpose of the non-text content; of course, the text alternatives would not provide the same information needed to pass the test.

**Sometimes content is primarily intended to create a specific sensory experience** that words cannot fully capture. Examples include a symphony performance, works of visual art etc. For such content, text alternatives at least identify the non-text content with a descriptive label and where possible, additional descriptive text. If the reason for including the content in the page is known and can be described it is helpful to include that information.

**Sometimes there are non-text exercises that are used to prove you are human.** To avoid spam robots and other software from gaining access to a site a device called a CAPTCHA is used. These usually involve visual or auditory tasks that are beyond the current capabilities of Web robots. Providing a text alternative to them would however make them operable by Robots, thus defeating their purpose. In this case a text alternative would describe the purpose of the CAPTCHA, and alternate forms using different modalities would be provided to address the needs of people with different disabilities.

**Sometimes there is non-text content that really is not meant to be seen or understood by the user.** Transparent images used to move text over on a page; an invisible image that is used to track usage statistics; and a swirl in the corner that conveys no information but just fills up a blank space to create an aesthetic effect are all examples of this. Putting alternative text on such items just distracts people using screen readers from the content on the page. Not marking the content in any way, though, leaves users guessing what the non-text content is and what information they may have missed (even though they have not missed anything in reality). This type of non-text content, therefore, is marked or implemented in a way that assistive technologies (AT) will ignore it and not present anything to the user.

### Specific Benefits of Success Criterion 1.1.1:

-   This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text aloud, present it visually, or convert it to braille.

-   Text alternatives may help some people who have difficulty understanding the meaning of photographs, drawings, and other images (e.g. line drawings, graphic designs, paintings, three-dimensional representations), graphs, charts, animations, etc.

-   People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.

-   People who are deaf-blind can read the text in braille.

-   Additionally, text alternatives support the ability to search for non-text content and to repurpose content in a variety of ways.

Examples of Success Criterion 1.1.1
-----------------------------------

1.  **A data chart**

    A bar chart compares how many widgets were sold in June, July, and August. The short label says, "Figure one - Sales in June, July and August." The longer description identifies the type of chart, provides a high-level summary of the data, trends and implications comparable to those available from the chart. Where possible and practical, the actual data is provided in a table.

2.  **An audio recording of a speech**

    The link to an audio clip says, "Chairman's speech to the assembly." A link to a text transcript is provided immediately after the link to the audio clip.

3.  **An animation that illustrates how a car engine works**

    An animation shows how a car engine works. There is no audio and the animation is part of a tutorial that describes how an engine works. Since the text of the tutorial already provides a full explanation, the image is an alternative for text and the text alternative includes only a brief description of the animation and refers to the tutorial text for more information.

4.  **A traffic Web camera**

    A Web site allows users to select from a variety of Web cameras positioned throughout a major city. After a camera is selected, the image updates every two minutes. A short text alternative identifies the Web camera as "traffic Web camera." The site also provides a table of travel times for each of the routes covered by the Web cameras. The table is also updated every two minutes.

5.  **A photograph of an historic event in a news story**

    A photograph of two world leaders shaking hands accompanies a news story about an international summit meeting. The text alternative says, "President X of Country X shakes hands with Prime Minister Y of country Y."

6.  **A photograph of a historic event in content discussing diplomatic relationships**

    The same image is used in a different context intended to explain nuances in diplomatic encounters. The image of the president shaking hands with the prime minister appears on a Web site discussing intricate diplomatic relationships. The first text alternative reads, "President X of country X shakes hands with Prime Minister Y of country Y on January 2, 2009." An additional text alternative describes the room where the leaders are standing as well as the expressions on the leaders' faces, and identifies the other people in the room. The additional description might be included on the same page as the photograph or in a separate file associated with the image through a link or other standard programmatic mechanism.

7.  **An audio recording of a press conference**

    A Web page includes a link to an audio recording of a press conference. The link text identifies the audio recording. The page also links to a text transcript of the press conference. The transcript includes a verbatim record of everything the speakers say. It identifies who is speaking as well as noting other significant sounds that are part of the recording, such as applause, laughter, questions from the audience, and so on.

8.  **An e-learning application**

    An e-learning application uses sound effects to indicate whether or not the answers are correct. The chime sound indicates that the answer is correct and the beep sound indicates that the answer is incorrect. A text description is also included so that people who can't hear or understand the sound understand whether the answer is correct or incorrect.

9.  **A linked thumbnail image**

    A thumbnail image of the front page of a newspaper links to the home page of the "Smallville Times". The text alternative says "Smallville Times".

10. **The same image used on different sites**

    Different alternatives for an image of the world: An image of the world that is used on a travel site as a link to the International Travel section has the text alternative "International Travel". The same image is used as a link on a university Web site with the text alternative "International Campuses".

11. **An image map**

    An image of a building floor plan is interactive, allowing the user to select a particular room and navigate to a page containing information about that room. The short text alternative describes the image and its interactive purpose: "Building floor plan. Select a room for more information."

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Excerpts from the NBA Tape Recording Manual, Third Edition](http://www.w3.org/2000/08/nba-manual/Overview.html)

-   [Inaccessibility of CAPTCHA](http://www.w3.org/TR/turingtest/)

-   [GAWDS Writing Better Alt Text](http://www.gawds.org/show.php?contentid=28)

-   [Dive Into Accessibility: Providing Text Equivalents for Images](http://diveintoaccessibility.org/day_23_providing_text_equivalents_for_images.html)

-   [All That Malarkey: Accessible Alternatives](http://www.stuffandnonsense.co.uk/archives/accessible_alternatives.html)

-   [456 Berea Street: The Alt and Title Attributes](http://www.456bereastreet.com/archive/200412/the_alt_and_title_attributes/)

-   [Dive Into Mark: Providing Text Equivalents for Images](http://diveintomark.org/archives/2002/07/10/day_23_providing_text_equivalents_for_images/)

-   [The Alt and Accessibility](http://green-beast.com/blog/?p=81)

-   [Better Connected, Better Results: Alt Text](http://www.rnib.org.uk/wacblog/articles/better-connected/better-connected-better-results-alt-text/)

-   [CAPTCHA - if your name’s not down you’re not coming in](http://www.rnib.org.uk/wacblog/images/captcha-if-youre-names-not-down-youre-not-coming-in/)

-   [Too much accessibility - the rise and fall of the LONGDESC](http://www.rnib.org.uk/wacblog/articles/too-much-accessibility/too-much-accessibility-the-rise-and-fall-of-the-longdesc/)

Techniques and Failures for Success Criterion 1.1.1 - Non-text Content
----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="d0e631"></span> Situation A: If a short description can serve the same purpose and present the same information as the non-text content:

1.  [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G94) using a **short** text alternative technique listed below

#### <span id="d0e644"></span> Situation B: If a short description can **not** serve the same purpose and present the same information as the non-text content (e.g. a chart or diagram):

1.  [G95: Providing short text alternatives that provide a brief description of the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G95) using a **short** text alternative technique listed below **AND** one of the following techniques for **long** description:

    -   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G92) using a **long** text alternative technique listed below

    -   [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G74)

    -   [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G73)

#### <span id="d0e688"></span> Situation C: If non-text content is a control or accepts user input:

1.  [G82: Providing a text alternative that identifies the purpose of the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G82) using a **short** text alternative technique listed below

2.  [H44: Using label elements to associate text labels with form controls](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H44) (HTML)

3.  [H65: Using the title attribute to identify form controls when the label element cannot be used](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H65) (HTML)

#### <span id="d0e716"></span> Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:

1.  Providing a descriptive label using a **short** text alternative technique listed below

2.  [G68: Providing a descriptive label that describes the purpose of live audio-only and live video-only content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G68) using a **short** text alternative technique listed below

3.  [G100: Providing the accepted name or a descriptive name of the non-text content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G100) using a **short** text alternative technique listed below

#### <span id="d0e747"></span> Situation E: If non-text content is a CAPTCHA:

1.  [G143: Providing a text alternative that describes the purpose of the CAPTCHA](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G143) **AND** [G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G144)

#### <span id="d0e763"></span> Situation F: If the non-text content should be ignored by assistive technology:

1.  Implementing or marking the non-text content so that it will be ignored by assistive technology using one of the technology-specific techniques listed below

    -   [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H67) (HTML)

    -   [C9: Using CSS to include decorative images](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C9) (CSS)

#### <span id="d0e783"></span> **Short** text alternative techniques for use in sufficient techniques above

1.  [H36: Using alt attributes on images used as submit buttons](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H36) (HTML)

2.  [H2: Combining adjacent image and text links for the same resource](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H2) (HTML)

3.  [H37: Using alt attributes on img elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H37) (HTML)

4.  [H35: Providing text alternatives on applet elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H35) (HTML)

5.  [H53: Using the body of the object element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H53) (HTML)

6.  [H24: Providing text alternatives for the area elements of image maps](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H24) (HTML)

7.  [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H86) (HTML)

8.  [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H30) (HTML)

    Note: See *[Understanding Success Criterion 2.4.4 Link Purpose (In Context)](navigation-mechanisms-refs.html)*.

9.  [G196: Using a text alternative on one item within a group of images that describes all items in the group](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G196)

#### <span id="d0e855"></span> **Long** text alternative techniques for use in sufficient techniques above

1.  [H45: Using longdesc](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H45) (HTML)

2.  [H53: Using the body of the object element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H53) (HTML)

### Additional Techniques (Advisory) for 1.1.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

#### <span id="d0e877"></span> General Techniques for Informative Non-Text Content (Advisory)

-   Identifying informative non-text content (future link)

-   Keeping short descriptions short (future link)

-   Describing images that include text (future link)

-   Providing a longer description of the non-text content where only a descriptive label is required using a technology-specific technique (for an accessibility-supported content technology) for long description listed above (future link)

-   Providing different sizes for non-text content when it cannot have an equivalent accessible alternative (future link)

-   Using server-side scripts to resize images of text (future link)

#### <span id="d0e899"></span> General Techniques for Live Non-Text Content (Advisory)

-   Linking to textual information that provides comparable information (e.g. for a traffic Webcam, a municipality could provide a link to the text traffic report.) (future link)

#### <span id="d0e909"></span> General techniques to minimize the barrier of CAPTCHAs

-   Providing more than two modalities of CAPTCHAs (future link)

-   Providing access to a human customer service representative who can bypass CAPTCHA (future link)

-   Not requiring CAPTCHAs for authorized users (future link)

#### <span id="d0e923"></span> HTML Techniques (Advisory)

-   [H46: Using noembed with embed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H46) (HTML)

-   Writing for browsers that do not support frame (future link)

-   Providing alternative content for iframe (future link)

-   [H27: Providing text and non-text alternatives for object](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H27) (HTML)

-   Not using long descriptions for iframe (future link)

-   Providing redundant text links for client-side image maps (future link)

#### <span id="d0e951"></span> CSS Techniques (Advisory)

-   [C18: Using CSS margin and padding rules instead of spacer images for layout design](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C18) (CSS)

-   Using CSS background, :before or :after rules for decorative images instead of img elements (future link)

-   Displaying empty table cells (future link)

#### <span id="d0e965"></span> ARIA Techniques (Advisory)

-   Using the ARIA presentation role to indicate elements are purely presentational (future link)

#### <span id="d0e972"></span> Metadata Techniques (Advisory)

-   Using metadata to associate text transcriptions with a video (future link)

-   Using metadata to associate text transcriptions with audio-only content (future link)

    -   EXAMPLE: Providing, in metadata, URI(s) that points to an audio description and a text transcript of a video.

    -   EXAMPLE: Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file.

### Common Failures for SC 1.1.1

The following are common mistakes that are considered failures of Success Criterion 1.1.1 by the WCAG Working Group.

-   [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g. filenames or placeholder text)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F30)

-   [F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F20)

-   [F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F3)

-   [F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null. (e.g. alt="spacer" or alt="image") for images that should be ignored by assistive technology](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F39)

-   [F38: Failure of Success Criterion 1.1.1 due to omitting the alt-attribute for non-text content used for decorative purposes only in HTML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F38)

-   [F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F71)

-   [F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F72)

-   [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute on img elements, area elements, and input elements of type "image"](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F65)

-   [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long description for non-text content that does not serve the same purpose or does not present the same information](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F67)

Key Terms
---------

 <span id="atdef"></span> assistive technology (as used in this document)  
hardware and/or software that acts as a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agent</a>, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note 1: functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note 2: Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note 3: The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Example: Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;

-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;

-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;

-   speech recognition software, which may be used by people who have some physical disabilities;

-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);

-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

 <span id="CAPTCHAdef"></span> CAPTCHA  
initialism for "Completely Automated Public Turing test to tell Computers and Humans Apart"

Note 1: CAPTCHA tests often involve asking the user to type in text that is displayed in an obscured image or audio file.

Note 2: A Turing test is any system of tests designed to differentiate a human from a computer. It is named after famed computer scientist Alan Turing. The term was coined by researchers at Carnegie Mellon University. [\[CAPTCHA\]](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#CAPTCHA)

 <span id="namedef"></span> name  
text by which software can identify a component within Web content to the user

Note 1: The name may be hidden and only exposed by assistive technology, whereas a <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#labeldef" class="termref">label</a> is presented to all users. In many (but not all) cases, the label and the name are the same.

Note 2: This is unrelated to the name attribute in HTML.

 <span id="non-text-contentdef"></span> non-text content  
any content that is not a sequence of characters that can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a> or where the sequence is not expressing something in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#human-langdef" class="termref">human language</a>

Note: This includes <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#asciiartdef" class="termref">ASCII Art</a> (which is a pattern of characters), emoticons, leetspeak (which uses character substitution), and images representing text

 <span id="puredecdef"></span> pure decoration  
serving only an aesthetic purpose, providing no information, and having no functionality

Note: Text is only purely decorative if the words can be rearranged or substituted without changing their purpose.

Example: The cover page of a dictionary has random words in very light text in the background.

 <span id="sensoryexpdef"></span> specific sensory experience  
a sensory experience that is not purely decorative and does not primarily convey important information or perform a function

Example: Examples include a performance of a flute solo, works of visual art etc.

 <span id="textdef"></span> text  
sequence of characters that can be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#programmaticallydetermineddef" class="termref">programmatically determined</a>, where the sequence is expressing something in <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#human-langdef" class="termref">human language</a>

 <span id="text-altdef"></span> text alternative  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#textdef" class="termref">Text</a> that is programmatically associated with <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#non-text-contentdef" class="termref">non-text content</a> or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.

Example: An image of a chart is described in text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows.

Note: Refer to [Understanding Text Alternatives](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/conformance.html#uc-text-alternatives-head) for more information.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 1.1 \[Text Alternatives\]](text-equiv.html "Understanding Guideline  1.1 [Text Alternatives]")
-   [**Next:** Guideline 1.2 \[Time-based Media\]](media-equiv.html "Understanding Guideline  1.2 [Time-based Media]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
