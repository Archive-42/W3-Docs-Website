[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 4.1.2 \[Name, Role, Value\]](ensure-compat-rsv.html "Understanding SC  4.1.2 [Name, Role, Value]")
-   [**Next:** Referencing WCAG 2.0](appendixA.html "Understanding  Referencing WCAG 2.0")

On this page:

-   [What does conformance mean?](#uc-conformance-whatis-head)
-   [Understanding Conformance Requirements](#uc-conformance-requirements-head)
-   [Understanding Conformance Claims](#uc-conformance-claims-head)
-   [Understanding Levels of Conformance](#uc-levels-head)
-   [Understanding Accessibility Support](#uc-accessibility-support-head)
-   [Understanding "Programmatically Determined"](#uc-programmatically-determined-head)
-   [Understanding Conforming Alternate Versions](#uc-conforming-alt-versions-head)
-   [Understanding "Web Page"](#uc-web-page-head)
-   [Understanding "Text Alternatives"](#uc-text-alternatives-head)
-   [Key Terms](#uc-conformance-terms-head)

<span id="maincontent">-</span>

<span id="conformance"></span> Understanding Conformance
========================================================

All WCAG 2.0 Success Criteria are written as testable criteria for objectively determining if content satisfies them. Testing the Success Criteria would involve a combination of automated testing and human evaluation. The content should be tested by those who understand how people with different types of disabilities use the Web.

Testing and testable in the context refer to functional testing, that is verifying that the content functions as expected, or in this case, that it satisfies the Success Criteria. Although content may satisfy all Success Criteria, the content may not always be usable by people with a wide variety of disabilities. Therefore, usability testing is recommended, in addition to the required functional testing. Usability testing aims to determine how well people can use the content for its intended purpose. It is recommended that users with disabilities be included in test groups when performing usability testing.

What does conformance mean?
---------------------------

Conformance to a standard means that you meet or satisfy the 'requirements' of the standard. In WCAG 2.0 the 'requirements' are the Success Criteria. To conform to WCAG 2.0, you need to satisfy the Success Criteria, that is, there is no content which violates the Success Criteria.

*Note:* This means that if there is no content to which a success criterion applies, the success criterion is satisfied.

Most standards only have one level of conformance. In order to accommodate different situations that may require or allow greater levels of accessibility than others, WCAG 2.0 has three levels of conformance, and therefore, three levels of Success Criteria.

Understanding Conformance Requirements
--------------------------------------

There are five requirements that must be met in order for content to be classified as 'conforming' to WCAG 2.0. This section provides brief notes on those requirements. This section will be expanded over time to address questions that may arise or to provide new examples of ways to meet the different conformance requirements.

### Understanding Requirement 1

> **1. Conformance Level:** One of the following levels of conformance is met in full.
>
> -   **Level A:** For Level A conformance (the minimum level of conformance), the <a href="#webpagedef" class="termref">Web page</a> <a href="#satisfiesdef" class="termref">satisfies</a> all the Level A Success Criteria, or a <a href="#conforming-alternate-versiondef" class="termref">conforming alternate version</a> is provided.
>
> -   **Level AA:** For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided.
>
> -   **Level AAA:** For Level AAA conformance, the Web page satisfies all the Level A, Level AA and Level AAA Success Criteria, or a Level AAA conforming alternate version is provided.
>
> *Note 1:* Although conformance can only be achieved at the stated levels, authors are encouraged to report (in their claim) any progress toward meeting success criteria from all levels beyond the achieved level of conformance.
>
> *Note 2:* It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

The first requirement deals with the levels of conformance. It basically says that all information on a page conforms or has a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#conforming-alternate-versiondef" class="gl-ref">conforming alternate version</a> that is available from the page. The requirement also explains that no conformance is possible without at least satisfying all of the Level A Success Criteria.

The note points out that authors are encouraged to go beyond conformance to a particular level and to complete, and report if they desire, any progress toward higher levels of conformance.

See also [Understanding Conforming Alternate Versions](#uc-conforming-alt-versions-head) which includes techniques for providing Conforming Alternate Versions.

### Understanding Requirement 2

> **2. Full pages:** <a href="#conformancedef" class="termref">Conformance</a> (and conformance level) is for full <a href="#webpagedef" class="termref">Web page(s)</a> only, and cannot be achieved if part of a Web page is excluded.
>
> *Note 1:* For the purpose of determining conformance, alternatives to part of a page's content are considered part of the page when the alternatives can be obtained directly from the page, e.g., a long description or an alternative presentation of a video.
>
> *Note 2:* Authors of Web pages that cannot conform due to content outside of the author's control may consider a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#conformance-partial" class="gl-ref">Statement of Partial Conformance</a>.

This provision simply requires that the whole page conform. Statements about "part of a page conforming" cannot be made.

Sometimes, supplemental information may be available from another page for information on a page. The `longdesc` attribute in HTML is an example. With `longdesc`, a long description of a graphic might be on a separate page that the user can jump to from the page with the graphic. This makes it clear that such content is considered part of the Web page, so that requirement \#2 is satisfied for the combined set of Web pages considered as a single Web page. Alternatives can also be provided on the same page. For example creating an equivalent to a user interface control.

*Note 1:* Because of conformance requirement 5, a whole page may conform even if parts of the page use non accessibility-supported content technologies as long as they do not interfere with the rest of the page and all information and function is available elsewhere on or from the page.

*Note 2:* It is possible to include non-conforming content. See <a href="conformance.html#uc-conf-req5-head" class="understanding-ref">Understanding Conformance Requirement 5</a>.

### Understanding Requirement 3

> **3. Complete processes:** When a <a href="#webpagedef" class="termref">Web page</a> is one of a series of Web pages presenting a <a href="#processdef" class="termref">process</a> (i.e., a sequence of steps that need to be completed in order to accomplish an activity), all Web pages in the process conform at the specified level or better. (Conformance is not possible at a particular level if any page in the process does not conform at that level or better.)
>
> *Example:* An online store has a series of pages that are used to select and purchase products. All pages in the series from start to finish (checkout) conform in order for any page that is part of the process to conform.

This provision prevents a Web page that is part of a larger process from being considered conforming if the process overall is not. This would prevent a shopping site from being classified as conforming if the checkout or other features of the site that are part of the shopping and buying process do not conform.

### Understanding Requirement 4

> **4. Only Accessibility-Supported Ways of Using Technologies:** Only <a href="#accessibility-supporteddef" class="termref">accessibility-supported</a> ways of using <a href="#technologydef" class="termref">technologies</a> are <a href="#reliedupondef" class="termref">relied upon</a> to satisfy the success criteria. Any information or functionality that is provided in a way that is not accessibility supported is also available in a way that is accessibility supported. (See <a href="conformance.html#uc-accessibility-support-head" class="understanding-ref">Understanding accessibility support</a>.)

This conformance requirement is explained below under <a href="conformance.html#uc-accessibility-support-head" class="understanding-ref">Understanding Accessibility Support</a>.

### Understanding Requirement 5

> **5. Non-Interference:** If <a href="#technologydef" class="termref">technologies</a> are used in a way that is not <a href="#accessibility-supporteddef" class="termref">accessibility supported</a>, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. In addition, the <a href="#webpagedef" class="termref">Web page</a> as a whole continues to meet the conformance requirements under each of the following conditions:
>
> 1.  when any technology that is not <a href="#reliedupondef" class="termref">relied upon</a> is turned on in a user agent,
>
> 2.  when any technology that is not relied upon is turned off in a user agent, and
>
> 3.  when any technology that is not relied upon is not supported by a user agent
>
> In addition, the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:
>
> -   **1.4.2 - Audio Control**,
>
> -   **2.1.2 - No Keyboard Trap**,
>
> -   **2.3.1 - Three Flashes or Below Threshold**, and
>
> -   **2.2.2 - Pause, Stop, Hide**.
>
This basically says that technologies that are **not accessibility supported** can be used, as long as all the information is also available using technologies that **are accessibility supported** and as long as the **non-accessibility-supported** material does not interfere.

Technologies that are not accessibility supported can be used, or technologies that are accessibility supported can be used in a non conforming manner, as long as all the information is also available using technologies that are accessibility supported, in a manner that does conform, and as long as the non-accessibility-supported material does not interfere.

There are four provisions that particularly deal with issues of interference with use of the page. These four are included in a note here. A note on each of the provisions indicates that these Success Criteria need to be met for all content including content created using technologies that are not accessibility supported.

*Example:* A Web page incorporates a new interactive graphic technology called "ZAP". Although ZAP is accessibility-supported, the information that is presented in ZAP is also presented on the page in HTML, so ZAP is not relied upon. So, this page would pass conformance requirement \#1. However, if the user tries to tab through the ZAP content, the focus drops into the ZAP object and gets stuck there. Once inside, there is nothing the user can do to get the focus back out. So keyboard users cannot use the bottom half of the page. The ZAP content also is continually flashing brightly at different rates and doesn't stop. So, people with attention deficit are distracted and those with photosensitive seizure disorders may have seizures. Conformance requirement \#5 prevents situations like these from being possible on a conforming page.

Understanding Conformance Claims
--------------------------------

It is not required to make any conformance claim in order to conform. If one does make a claim, however, the rules must be followed.

Sometimes, one may want to make a claim for just the content that was added after a certain date. Or, one may want to claim WCAG 1.0 conformance for content up to a date and WCAG 2.0 for content that was created or modified after that date. There are no prohibitions in WCAG 2.0 to any of these practices as long as it is clear which pages are claiming conformance to which version of WCAG.

*Note 1:* When talking about technologies that are "relied upon," we're talking about Web content technologies (HTML, CSS, JavaScript, etc.), not user agents (browsers, assistive technologies, etc.).

*Note 2:* Conformance claims are not usually located on each Web page within the scope of conformance.

### Partial conformance claims due to third party content

When an author makes a decision to use a third party implementation, they should choose products that meet WCAG requirements. If all content on a page, including third party content, meets all WCAG success criteria then the page conforms to WCAG. However, if the page does not conform to WCAG only for reasons that are legitimately outside the author's control then the author can make a claim of partial conformance. It is important to recognize that this is a statement of non-conformance and there are users who may not be able to access some of the content this page.

One reason that content may be outside the author's control is because it is being provided by a third party (blogs, portals, news sites). Web pages may also include content via third party libraries, plugins, or widgets.

Be sure to monitor any content that can change without approval from the web page author, as a page which once conformed may suddenly fail to conform. If it is not possible to monitor and repair the third party content, it is necessary to identify the non-conforming parts of the page for users. If the rest of the web page conforms to WCAG, such a page qualifies for a statement of partial conformance, third party content.

### Information about any additional steps taken that go beyond the Success Criteria

One of the optional components of a conformance claim is "Information about any additional steps taken that go beyond the Success Criteria to enhance accessibility." This can include additional Success Criteria that have been met, advisory techniques that were implemented, information about any additional protocols used to aid access for people with particular disabilities or needs, etc. Any information that would be useful to people in understanding the accessibility of the pages may be included.

### Use of metadata to report conformance claims

The most useful way of attaching conformance claims to content would be to do so in standard machine readable form. When this practice is widespread, search tools or special user agents will be able to make use of this information to find and provide content that is more accessible or so the user agents can adjust to the content. There are a number of metadata based options under development for making claims, and authors and tool developers are encouraged to support them.

In addition, metadata can be used to report conformance to individual Success Criteria once Level A conformance has been achieved.

There are also programmatic reporting formats such as [Evaluation and Report Language (EARL)](http://www.w3.org/WAI/intro/earl.php) that are being developed that could provide machine readable formats for detailed conformance information. As the reporting formats are formalized and support for them develops, they will be documented here.

### Examples of Conformance Claims

#### <span id="uc-section-65-head"></span> Examples of Required Components of Conformance Claims

*Example 1:* On 20 September 2009, all Web pages at http://www.example.com conform to Web Content Accessibility Guidelines 2.0 at http://www.w3.org/TR/2008/REC-WCAG20-20081211/. Level A conformance.

-   The documented set of accessibility-supported content technologies **relied upon** for this claim is a subset of ISA- AsCTset\#1-2008 at http://ISA.example.gov/AsCTsets/AS2-2008.

*Example 2:* (using a regular expression) On 12 August 2009, pages matching the pattern http://www.example.com/(marketing|sales|contact)/.\* conform to Web Content Accessibility Guidelines 2.0 at http://www.w3.org/TR/2008/REC-WCAG20-20081211/. Level AA conformance.

-   The technologies that this content "**relies upon**" is: XHTML 1.0 Transitional, CSS 2.0 and JavaScript 1.2.

*Example 3:* (using boolean logic) On 6 January 2009, http://example.com/ AND NOT (http://example.com/archive/ OR http://example.com/publications/archive/) conforms to Web Content Accessibility Guidelines 2.0 at http://www.w3.org/TR/2008/REC-WCAG20-20081211/. Level AA conformance.

-   The documented set of accessibility-supported content technologies **relied upon** for this claim includes XHTML 1.0 and SMIL from ISA- AsCTset\#1-2008 at http://ISA.example.gov/AsCTsets/AS2-2008.

#### <span id="uc-section-66-head"></span> Examples of Conformance Claims including optional components

*Example 1:* On 5 May 2009, the page "G7: An Introduction" http://telcor.example.com/nav/G7/intro.html conforms to Web Content Accessibility Guidelines 2.0 at http://www.w3.org/TR/2008/REC-WCAG20-20081211/. Level AA conformance.

-   The following additional Success Criteria have also been met: 1.1.2, 1.2.5, and 1.4.3.

-   The documented set of accessibility-supported content technologies used for this claim is AsCTset\#1-2006 at http://UDLabs.org/AsCTset\#1-2006.html.

-   The technologies that this content "**relies upon**" is: XHTML 1.0 (Strict), and Real Video.

-   The technologies that this content "**uses but does not rely upon**" are: JavaScript 1.2, CSS2.

*Example 2:* On 21 June 2009, all content beginning with the URI http://example.com/nav and http://example.com/docs conform to Web Content Accessibility Guidelines 2.0 at http://www.w3.org/TR/2008/REC-WCAG20-20081211/. Level AAA conformance.

-   The documented set of accessibility-supported content technologies used for this claim is SMITH- AsCTset\#2-2008 at http://smithreports.example.com/AsCTsets/AS2-2008.

-   The technologies that this content "**relies upon**" are: XHTML 1.0 (Strict), CSS2, JavaScript 1.2, JPEG, PNG.

-   The user agents, including assistive technologies, that this content has been tested with can be found at http://example.com/docs/WCAG20/test/technologies.html.

*Example 3:* On 23 March 2009, all content available on the server at http://www.wondercall.example.com conforms to Web Content Accessibility Guidelines 2.0 at http://www.w3.org/TR/2008/REC-WCAG20-20081211/. Single-A conformance.

-   The technology that this content "**relies upon**" is: HTML 4.01.

-   The technologies that this content "**uses but does not rely upon**" are: CSS2, and gif.

-   This content was tested using the following user agents and assistive technologies: Firefox 1.5 on Windows Vista with Screenreader X 4.0, Firefox 1.5 on Windows XP SP 2 with Screenreader X 3.5, IE 6.0 on Windows 2000 SP4 with Screenreader Y 5.0, IE 6.0 on Windows 2000 SP4 with Screenreader Z 2.0, and Firefox 1.5 on Windows XP SP2 with Screenreader X 4.0, Safari 2.0 with OS X 10.4.

### Techniques for Conformance Claims

#### <span id="uc-tech-optional-67-head"></span> Advisory Techniques

-   Expressing a conformance claim to WCAG 2.0 in Dublin Core elements (future link)

Understanding Levels of Conformance
-----------------------------------

First, there are a number of conditions that must be met for a Success Criterion to be included at all. These include:

1.  All Success Criteria must be **important access issues for people with disabilities** that address problems beyond the usability problems that might be faced by all users. In other words, the access issue must cause a proportionately greater problem for people with disabilities than it causes people without disabilities in order to be considered an accessibility issue (and covered under these accessibility guidelines).

2.  All Success Criteria must also be testable. This is important since otherwise it would not be possible to determine whether a page met or failed to meet the Success Criteria. The Success Criteria can be tested by a combination of machine and human evaluation as long as it is possible to determine whether a Success Criterion has been satisfied with a high level of confidence.

The Success Criteria were assigned to one of the three levels of conformance by the working group after taking into consideration a wide range of interacting issues. Some of the common factors evaluated when setting the level included:

-   whether the Success Criterion is **essential** (in other words, if the Success Criterion isn't met, then even assistive technology can't make content accessible)

-   whether it is possible to satisfy the Success Criterion for **all Web sites and types of content** that the Success Criteria would apply to (e.g., different topics, types of content, types of Web technology)

-   whether the Success Criterion requires skills that could **reasonably be achieved by the content creators** (that is, the knowledge and skill to meet the Success Criteria could be acquired in a week's training or less)

-   whether the Success Criterion would impose limits on the "look & feel" and/or function of the Web page. (limits on function, presentation, freedom of expression, design or aesthetic that the Success Criteria might place on authors)

-   whether there are no workarounds if the Success Criterion is not met

Understanding Accessibility Support
-----------------------------------

Many of the Success Criteria deal with providing accessibility through assistive technologies or special accessibility features in mainstream user agents (for example, a 'show captions' option in a media player). That is, the Success Criteria require that something be done in the Web content that would make it possible for assistive technologies to successfully present the content's information to the user. For example, a picture that you were supposed to click on to go to a topic would not be accessible to a person who was blind unless text alternatives for the picture were provided in a way that user agents including assistive technologies can find and display them. The key here is that the text alternative must be included in a way that user agents including assistive technologies can understand and use – in a way that is "Accessibility Supported."

Another example would be a custom control that is included on a Web page. In this case, a standard user agent would not ordinarily be able to present an alternative to the user. If, however, information about the control including its name, role, value, how to set it etc. are provided in a way that assistive technologies can understand and control them, then users with assistive technologies will be able to use these controls.

When new technologies are introduced, two things must happen in order for people using assistive technologies to be able to access them. First, the technologies must be designed in a way that user agents including assistive technologies could access all the information they need to present the content to the user. Secondly, the user agents and assistive technologies may need to be redesigned or modified to be able to actually work with these new technologies.

"**Accessibility Supported**" means that both of these have been done and that the technology will work with user agents and assistive technologies.

### Level of Assistive Technology Support Needed for "Accessibility Support"

This topic raises the question of how many or which assistive technologies must support a Web technology in order for that Web technology to be considered "accessibility supported". The WCAG Working group and the W3C do not specify which or how many assistive technologies must support a Web technology in order for it to be classified as accessibility supported. This is a complex topic and one that varies both by environment and by language. There is a need for an external and international dialogue on this topic. Some notes to help in understanding and exploring this topic are:

1.  Accessibility support of Web technologies varies by environment

    -   Web technologies may only need to be supported by those specific user agents and assistive technologies deployed at a company. (These may be older versions of user agents and assistive technologies or the very newest versions).

    -   Content posted to the public Web may need to work with a broader range of user agents and assistive technologies, including older versions.

2.  Accessibility support of Web technologies varies by language (and dialect)

    -   There are different levels of older assistive technologies support in different languages and even countries. Some environments or countries may provide free assistive technologies.

3.  New technologies won't be supported in older assistive technologies

    -   Clearly, a new technology cannot be supported by all past assistive technologies, so requiring that a technology be supported by all assistive technologies is not possible.

4.  Support for a single older assistive technology is usually not sufficient

    -   Support by just one assistive technology (for a given disability) would not usually be enough, especially if most users who need it in order to access content do not have and cannot afford that assistive technology. The exception here would be information distributed to company employees only where they all have one assistive technology (of that type).

5.  Currently assistive technology that is affordable by the general public is often very poor

    -   Creating content that can't be used by the general public with disabilities should be avoided. In many cases, the cost of assistive technologies is too high for users who need it. Also, the capabilities of free or low cost AT is often so poor today that Web content cannot be realistically restricted to this lowest (or even middle) common denominator. This creates a very difficult dilemma that needs to be addressed.

The Working Group, therefore, limited itself to defining what constituted support and defers the judgment of how much, how many, or which AT must support a technology to the community and to entities closer to each situation that set requirements for an organization, purchase, community, etc.

The Working Group encourages more discussion of this topic in the general forum of society since this lack of generally available yet robust assistive technologies is a problem that affects users, technology developers and authors negatively.

### Technical Definition of "Accessibility Support"

Basically, a Web content technology is "accessibility supported" when users' assistive technologies will work with the Web technologies **AND** when the accessibility features of mainstream technologies will work with the technology. Specifically, to qualify as an accessibility-supported technology, the following must be true for a technology:

 <span id="accessibility-supporteddef"></span> accessibility supported  
supported by users' <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a> as well as the accessibility features in browsers and other <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>

To qualify as an accessibility-supported use of a Web content technology (or feature of a technology), both 1 and 2 must be satisfied for a Web content technology (or feature):

1.  **The way that the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#technologydef" class="termref">Web content technology</a> is used must be supported by users' assistive technology (AT).** This means that the way that the technology is used has been tested for interoperability with users' assistive technology in the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#human-langdef" class="termref">human language(s)</a> of the content,

    **AND**

2.  **The Web content technology must have accessibility-supported user agents that are available to users.** This means that at least one of the following four statements is true:

    1.  The technology is supported natively in widely-distributed user agents that are also accessibility supported (such as HTML and CSS);

        **OR**

    2.  The technology is supported in a widely-distributed plug-in that is also accessibility supported;

        **OR**

    3.  The content is available in a closed environment, such as a university or corporate network, where the user agent required by the technology and used by the organization is also accessibility supported;

        **OR**

    4.  The user agent(s) that support the technology are accessibility supported and are available for download or purchase in a way that:

        -   does not cost a person with a disability any more than a person without a disability **and**

        -   is as easy to find and obtain for a person with a disability as it is for a person without disabilities.

*Note 1:* The WCAG Working group and the W3C do not specify which or how much support by assistive technologies there must be for a particular use of a Web technology in order for it to be classified as accessibility supported. (See <a href="conformance.html#uc-support-level-head" class="understanding-ref">Level of Assistive Technology Support Needed for "Accessibility Support"</a>.)

*Note 2:* Web technologies can be used in ways that are not accessibility supported as long as they are not <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#reliedupondef" class="termref">relied upon</a> and the page as a whole meets the conformance requirements, including *[Conformance Requirement 4: Only Accessibility-Supported Ways of Using Technologies](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#cc4)* and *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#cc5)*, are met.

*Note 3:* When a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#technologydef" class="termref">Web Technology</a> is used in a way that is "accessibility supported," it does not imply that the entire technology or all uses of the technology are supported. Most technologies, including HTML, lack support for at least one feature or use. Pages conform to WCAG only if the uses of the technology that are accessibility supported can be relied upon to meet WCAG requirements.

*Note 4:* When citing Web content technologies that have multiple versions, the version(s) supported should be specified.

*Note 5:* One way for authors to locate uses of a technology that are accessibility supported would be to consult compilations of uses that are documented to be accessibility supported. (See <a href="conformance.html#uc-documented-lists-head" class="understanding-ref">Understanding Accessibility-Supported Web Technology Uses</a>.) Authors, companies, technology vendors, or others may document accessibility-supported ways of using Web content technologies. However, all ways of using technologies in the documentation would need to meet the definition of accessibility-supported Web content technologies above.

### Understanding Accessibility-Supported Web Technology Uses

Individual authors will not usually be able to do all of the testing necessary to determine which ways of using which Web technologies are actually supported by which versions of assistive technologies and user agents. Authors may therefore rely on publicly documented compilations that document which assistive technologies support which ways of using which Web technologies. By public, we do not mean that the compilation and its documentation are necessarily generated by a public agency, only that they are available to the public. Anyone can create publicly documented compilations of "Web Technology Uses and their Accessibility Support." People may create compilations and give them names that authors can refer to them by. As long as they are publicly documented, authors or customers etc. can easily select uses that meet their needs. Customers or others can pick technologies that fit their environment or language at any point in time and specify those to be used in creating their content. Authors are strongly encouraged to use sources that have an established reputation for accuracy and usefulness. Technology developers are strongly encouraged to provide information about the accessibility support for their technologies. The Working Group anticipates that only documents that provide accurate information and benefit both authors and users will achieve market recognition in the long term.

There is no requirement in WCAG that a publicly documented compilation be used or that only technology uses from such a compilation be used. The publicly documented compilations are described only as a method to make an otherwise critical, but somewhat complicated, aspect of conformance easier for authors who are not themselves experts on assistive technology support (or who just don't have the time to keep up with advances in mainstream and assistive technology support for each other).

Authors, companies or others may wish to create and use their own compilations of accessibility-supported technology uses and this is allowed in meeting WCAG. Customers, companies or others may, however, specify that technology uses from a custom or public compilation be used. See [Appendix B Documenting Accessibility Support for Uses of a Web Technology](appendixB.html).

### Accessibility Support Statements

Examples of ways in which a conformance claim might document its accessibility support include:

1.  This conformance claim meets the accessibility support requirement based on testing content in language(s) of the content with User Agents A, B, and C, and Assistive Technologies X, Y, and Z. This means that we were able to pass all of the success criteria for level A of WCAG 2.0 using these products.

2.  This conformance claim meets the accessibility support requirement for the language(s) of the content based on the use of techniques and user agent notes documented in Techniques for WCAG 2.0. It is also based on the accessibility support documentation for the technologies (that we relied upon for conformance), which is available in " XYZ Organization's Documentation of Accessibility Support."

3.  This conformance claim meets the accessibility support requirement for the language(s) of the content based on the use of technology Z as documented in "Technology Z accessibility supported techniques for WCAG 2.0."

4.  This conformance claim meets the accessibility support requirement for the language of the content based on the use of Accessibility Guidelines for Technology A and Accessibility Guidelines for Technology B. User agent and assistive technology support information can be found in "Product XYZ Accessibility Support Requirements", which are documented in these guidelines.

Understanding "Programmatically Determined"
-------------------------------------------

Several Success Criteria require that content (or certain aspects of content) can be "programmatically determined." This means that the content is authored in such a way that user agents, including assistive technologies, can access the information.

In order for content created with Web technologies (such as HTML, CSS, PDF, GIF, MPEG, Flash etc.) to be accessible to people with different types of disabilities, it is essential that the technologies used work with the accessibility features of browsers and other user agents, including assistive technologies. In order for something to meet a Success Criterion that requires it to be "programmatically determined," it would need to be implemented using a technology that has assistive technology support.

Content that can be "programmatically determined" can be transformed (by user agents including AT) into different sensory formats (e.g., visual, auditory) or styles of presentation need by individual users. If existing assistive technologies cannot do this, then the information cannot be said to be programmatically determined.

The term was created in order to allow the working group to clearly identify those places where information had to be accessible to assistive technologies (and other user agents acting as accessibility aids) without specifying exactly how this needed to be done. This is important because of the continually changing nature of the technologies. The term allows the guidelines to identify what needs to be "programmatically determined" in order to meet the guidelines, and then have separate documents (the How to Meet, Understanding, and Technique documents), which can be updated over time, list the specific techniques that will work and be sufficient at any point in time based on user agent and assistive technology support.

### "Accessibility Supported" vs. "Programmatically Determined"

"Accessibility supported" relates to support by user agents (including assistive technologies) of particular ways of using Web technologies. Uses of Web technologies that are accessibility supported will work with assistive technologies and access features in mainstream user agents (browsers and players etc.).

"Programmatically determined" relates to the information in Web Content. If technologies that are accessibility supported are used properly, then assistive technologies and user agents can access the information in the content (i.e., programmatically determine the information in the content) and present it to the user.

The two concepts work together to ensure that information can be presented to the user by user agents including assistive technologies. Authors must rely only on uses of technologies that are accessibility-supported — and must use them properly in order for the information to be programmatically determinable — and hence presentable, by assistive technologies and user agents to users with disabilities.

Understanding Conforming Alternate Versions
-------------------------------------------

Conformance requirement \#1 allows non-conforming pages to be included within the scope of conformance as long as they have a "conforming alternate version". The conforming alternative version is defined as:

 <span id="conforming-alternate-versiondef"></span> conforming alternate version  
version that

1.  conforms at the designated level, and

2.  provides all of the same information and <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#functiondef" class="termref">functionality</a> in the same <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#human-langdef" class="termref">human language</a>, and

3.  is as up to date as the non-conforming content, and

4.  for which at least one of the following is true:

    1.  the conforming version can be reached from the non-conforming page via an <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#accessibility-supporteddef" class="termref">accessibility-supported</a> <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#mechanismdef" class="termref">mechanism</a>, or

    2.  the non-conforming version can only be reached from the conforming version, or

    3.  the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version

*Note 1:* In this definition, "can only be reached" means that there is some mechanism, such as a conditional redirect, that prevents a user from "reaching" (loading) the non-conforming page unless the user had just come from the conforming version.

*Note 2:* The alternate version does not need to be matched page for page with the original (e.g., the conforming alternate version may consist of multiple pages).

*Note 3:* If multiple language versions are available, then conforming alternate versions are required for each language offered.

*Note 4:* Alternate versions may be provided to accommodate different technology environments or user groups. Each version should be as conformant as possible. One version would need to be fully conformant in order to meet <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#cc1" class="gl-ref">conformance requirement 1</a>.

*Note 5:* The conforming alternative version does not need to reside within the scope of conformance, or even on the same Web site, as long as it is as freely available as the non-conforming version.

*Note 6:* Alternate versions should not be confused with <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#suppcontentdef" class="termref">supplementary content</a>, which support the original page and enhance comprehension.

*Note 7:* Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.

This ensures that all of the information and all of the functionality that is on the pages inside of the scope of conformance is available on conforming Web pages.

### Why permit alternate versions?

Why does WCAG permit conforming alternate versions of Web pages to be included in conformance claims? That is, why include pages that do not satisfy the Success Criteria for a conformance level in the scope of conformance or a claim?

-   Sometimes, pages use technologies that are not yet accessibility supported. When a new technology emerges, assistive technology support may lag behind, or may only be available to some target audiences. So authors may not be able to rely on the new technology for all users. However, there may be other benefits to using the new technology, e.g., better performance, a wider range of modalities available, etc. The alternate version requirement allows authors to include such Web pages in their Web site by providing an accessible alternative page in technologies that are accessibility supported. Users for whom the new technology is adequately supported get the benefits of the new version. Authors who look ahead to future accessibility support can satisfy the Success Criteria now with the alternate version page, and also work with the other page to build in future access when assistive technology (AT) support is available.

-   For a variety of reasons, it may not be possible to modify some content on a Web page. For instance,

    -   It may be critical to include an exact visual copy of a document for legal or historical reasons

    -   The Web page may be included in a site but the site owner may not have the legal rights to modify the content on the original page

    -   The company may not legally be able to remove, or alter in any way, something that was previously posted.

    -   An author may not have permission to alter a document from another department, agency, or company

-   Sometimes, the best experience for users with certain types of disabilities is provided by tailoring a Web page specifically to accommodate that disability. In such a situation, it may not be possible or practical to make the Web page accommodate all disabilities by satisfying all of the Success Criteria. The alternate versions requirement permits such specialized pages to be included within a conformance claim as long as there is a fully conformant 'alternate version' page.

-   Many sites which are committed to accessibility have large quantities of legacy documents. While the information has been made available in accessible formats, there would be significant institutional resistance and procedural obstacles to removing these files en mass. Some organizations, especially governmental bodies, give precedence to traditional print-oriented processes. Even as these organizations have adapted to Internet publishing and embraced the need for accessible formats, they still retain a paper mindset and often insist on formats designed for hard copy as the "primary" version (even for documents that are only ever "published" electronically). Although the Working Group feels these approaches should be deprecated it does not feel they can be forbidden so long as accessible versions are readily available.

A concern when permitting Web pages that do not satisfy the Success Criteria is that people with disabilities will encounter these non-conforming pages, not be able to access their content, and not be able to find the “conforming alternate version." A key part of the Alternate Versions provision, therefore, is the ability to find the conforming page (the alternate version) from the non-conforming page when it is encountered. The conformance requirement that permits alternate pages, therefore, also requires a way for users to find the accessible version among the alternate versions.

Note that providing an alternate version is a fallback option for conformance to WCAG and the preferred method of conformance is to make all content directly accessible.

### Techniques for Providing a Conforming Alternate Version

The most important part of providing a conforming alternate version is providing a mechanism to find it from the non-conforming version. A number of different methods for doing this have been identified since particular techniques may not always be possible for specific technologies or situations. For example, if the author has control of the server there are some powerful techniques that will allow users to always have the choice up front. In many cases however the author may not have control of the services on their Web server. In these cases other techniques are provided. A link on the non-conforming page is another powerful technique but not all non-conforming technologies support hypertext links.

Below are the techniques that have been identified to date. We expect that additional techniques will also be developed over time and they will be added here as they arise and the support for these approaches by user agents including assistive technologies can be demonstrated. For example a developer of a new technology that some assistive technologies cannot access might build in a feature that would allow those technologies to automatically present a link to users that could take them to an alternate version.

#### <span id="uc-altvertechs-head"></span> Sufficient Techniques for Providing Conforming Alternative Versions of Web pages

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see *[Understanding Techniques for WCAG Success Criteria](understanding-techniques.html)*, particularly the "Other Techniques" section.

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G136" class="tech-ref">G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G190" class="tech-ref">G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C29" class="tech-ref">C29: Using a style switcher to provide a conforming alternate version</a> (CSS)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR38" class="tech-ref">SCR38: Creating a conforming alternate version for a web page designed with progressive enhancement</a> (Scripting)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR2" class="tech-ref">SVR2: Using .htaccess to ensure that the only way to access non-conforming content is from conforming content</a> (SERVER)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR3" class="tech-ref">SVR3: Using HTTP referer to ensure that the only way to access non-conforming content is from conforming content</a> (SERVER)

7.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR4" class="tech-ref">SVR4: Allowing users to provide preferences for the display of conforming alternate versions</a> (SERVER)

#### <span id="uc-failures-69-head"></span> Common Failures Identified by the Working Group

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F19" class="tech-ref">F19: Failure of Conformance Requirement 1 due to not providing a method for the user to find the alternative conforming version of a non-conforming Web page</a>

#### <span id="uc-tech-optional-70-head"></span> Additional Techniques (Advisory) for providing conforming alternative versions of Web pages

-   Providing reciprocal links between conforming and non-conforming versions (future link)

-   Excluding non-conforming content from search results (future link)

-   Using content negotiation (future link)

-   Not displaying content that relies on technologies that are not accessibility-supported when the technology is turned off or not supported. (future link)

-   Using metadata to allow location of a conforming alternative version from the URI of a non-conforming page (future link)

#### <span id="uc-examples-71-head"></span> Examples of Conforming Alternate Versions

-   **An intranet site with multiple versions.**

    A large company was concerned that the use of emerging Web technologies on an intranet site might limit their ability to address the needs of diverse office locations that have different technology bases and individual employees who use a wide variety of user agents and assistive technologies. To address these concerns, the company created an alternate version of the content that met all Level A Success Criteria using a more limited set of uses of accessibility-supported content technologies. The two versions link to each other.

-   **An informational site ensuring backward compatibility.**

    An information site covers a wide variety of subjects and wants to enable visitors to quickly find the topics they are looking for. To do this, the site has implemented an interactive menu system that is only supported in the most recent version of two popular user agents. To ensure that visitors who do not use these specific user agents are still able to effectively use the site, a navigation mechanism that does not depend on the interactive menu system is presented to user agents that do not support the newer technology.

Understanding "Web Page"
------------------------

The definition of a Web Page is:

 <span id="webpagedef"></span> Web page  
a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>

*Note 1:* Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

*Note 2:* For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

*Example 1:* A Web resource including all embedded images and media.

*Example 2:* A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

*Example 3:* A customizable portal site, where users can choose content to display from a set of different content modules.

*Example 4:* When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.

It is important to note that, in this standard, the term "Web page" includes much more than static HTML pages. The term 'Web Page' was used in these guidelines to allow the guidelines to be more understandable. But the term has grown in meaning with advancing technologies to encompass a wide range of technologies, many of which are not at all 'page-like'. It also includes the increasingly dynamic Web pages that are emerging on the Web, including "pages" that can present entire virtual interactive communities. For example, the term "Web page" would include an immersive interactive movie-like experience that you find at a single URI.

Understanding "Text Alternatives"
---------------------------------

A text alternative is text that is used in place of non-text content for those who cannot view the non-text content. Non-text content includes such things as pictures, charts, applets, audio files, etc. People who cannot see for example would not be able to see information presented in a picture or chart. A text alternative is therefore provided that allows the user to be able to convert the information (the text) into speech. In the future, having the information in text also makes it possible to translate the information into sign language, into pictures, or into a simpler form of writing.

In order for people with disabilities to be able to use this text - the text must be "programmatically determinable." This means that the text must be able to be read and used by the assistive technologies (and the accessibility features in browsers) that people with disabilities use.

It must also be possible for people using assistive technologies to find these text alternatives when they encounter non-text content that they cannot use. To accomplish this, we say that the text must be "programmatically associated" with the non-text content. This means that the user must be able to use their assistive technology to find the alternative text (that they can use) when they land on the non-text content (that they can't use).

Key Terms
---------

 <span id="conformancedef"></span> conformance  
satisfying all the requirements of a given standard, guideline or specification

<!-- -->

 <span id="processdef"></span> process  
series of user actions where each action is required in order to complete an activity

*Example 1:* Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

*Example 2:* An account registration page requires successful completion of a Turing test before the registration form can be accessed.

<!-- -->

 <span id="reliedupondef"></span> relied upon (technologies that are)  
the content would not <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#conformancedef" class="termref">conform</a> if that <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#technologydef" class="termref">technology</a> is turned off or is not supported

<!-- -->

 <span id="satisfiesdef"></span> satisfies a success criterion  
the success criterion does not evaluate to 'false' when applied to the page

<!-- -->

 <span id="technologydef"></span> technology (Web content)  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#mechanismdef" class="termref">mechanism</a> for encoding instructions to be rendered, played or executed by <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>

*Note 1:* As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

*Note 2:* Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

*Example:* Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

------------------------------------------------------------------------

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 4.1.2 \[Name, Role, Value\]](ensure-compat-rsv.html "Understanding SC  4.1.2 [Name, Role, Value]")
-   [**Next:** Referencing WCAG 2.0](appendixA.html "Understanding  Referencing WCAG 2.0")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
