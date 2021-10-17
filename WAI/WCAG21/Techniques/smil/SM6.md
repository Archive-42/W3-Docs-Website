-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SM2](SM2)
-   [Next Technique: SM7](SM7)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Providing audio description in SMIL 1.0
=======================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Applies whenever SMIL 1.0 player is available

This technique relates to:

-   [Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded) (Sufficient when used with [G173: Providing a version of a movie with audio descriptions](../general/G173))
-   [Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded) (Sufficient when used with [G173: Providing a version of a movie with audio descriptions](../general/G173))

Description
-----------

The objective of this technique is to provide a way for people who are blind or otherwise have trouble seeing the video in audio-visual material to be able to access the material. With this technique a description of the video is provided via audio description that will fit into the gaps in the dialogue in the audio-visual material.

Examples
--------

### Example 1: SMIL 1.0 audio description sample for QuickTime player

       
    <?xml version="1.0" encoding="UTF-8"?>
    <smil xmlns:qt="http://www.apple.com/quicktime/resources/smilextensions" 
      xmlns="https://www.w3.org/TR/REC-smil" qt:time-slider="true">
      <head>
        <layout>
          <root-layout background-color="black" height="266" width="320"/>
          <region id="videoregion" background-color="black" top="26" left="0" 
          height="144" width="320"/>
        </layout>
      </head>
      <body>
        <par>
          <video dur="0:01:20.00" region="videoregion" src="salesdemo.mov" 
          alt="Sales Demo"/>
          <audio dur="0:01:20.00" src="salesdemo_ad.mp3" 
          alt="Sales Demo Audio Description"/>
        </par>
      </body>
    </smil> 

### Example 2: SMIL 1.0 audio description sample for RealTime player

     
    <?xml version="1.0" encoding="UTF-8"?>
    <smil xmlns="https://www.w3.org/TR/REC-smil">
      <head>
        <layout>
          <root-layout background-color="black" height="266" width="320"/>
          <region id="videoregion" background-color="black" top="26" left="0" 
          height="144" width="320"/>
        </layout>
      </head>
      <body>
        <par>
          <video src="salesdemo.mov" region="videoregion" title="Sales Demo" 
          alt="Sales Demo"/>
          <audio src="salesdemo_ad.mp3" title="audio description" 
          alt="Sales Demo Audio Description"/>
        </par>
      </body>
    </smil>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](https://www.w3.org/TR/REC-smil/)
-   [Synchronized Multimedia Integration Language (SMIL 2.0)](https://www.w3.org/TR/SMIL/)
-   [Accessibility Features of SMIL](https://www.w3.org/TR/SMIL-access/)
-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)
-   [SAMI 1.0](https://msdn.microsoft.com/en-us/library/ms971327.aspx)
-   [Accessibility Features of SMIL](https://www.w3.org/TR/SMIL-access/)

Related Techniques
------------------

-   [SM2: Adding extended audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2)
-   [SM7: Providing audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7)

Tests
-----

### Procedure

1.  Find method for turning on audio description from content/player (unless it is always played by default)
2.  Play file with audio description
3.  Check whether audio description is played

### Expected Results

-   \#3 is true
