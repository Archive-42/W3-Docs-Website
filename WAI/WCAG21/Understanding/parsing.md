-   [Contents](. "Table of Contents")
-   [GL: Compatible](compatible)
-   [Previous SC: Error Prevention (All)](error-prevention-all)
-   [Next SC: Name, Role, Value](name-role-value)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Techniques](#techniques)

Understanding Success Criterion 4.1.1: Parsing
==============================================

> Success Criterion [4.1.1 Parsing](https://www.w3.org/TR/WCAG21/#parsing) (Level A): In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.
>
> Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

Intent
------

The intent of this Success Criterion is to ensure that user agents, including assistive technologies, can accurately interpret and parse content. If the content cannot be parsed into a data structure, then different user agents may present it differently or be completely unable to parse it. Some user agents use "repair techniques" to render poorly coded content.

Since repair techniques vary among user agents, authors cannot assume that content will be accurately parsed into a data structure or that it will be rendered correctly by specialized user agents, including assistive technologies, unless the content is created according to the rules defined in the formal grammar for that technology. In markup languages, errors in element and attribute syntax and failure to provide properly nested start/end tags lead to errors that prevent user agents from parsing the content reliably. Therefore, the Success Criterion requires that the content can be parsed using only the rules of the formal grammar.

Note

The concept of "well formed" is close to what is required here. However, exact parsing requirements vary amongst markup languages, and most non XML-based languages do not explicitly define requirements for well formedness. Therefore, it was necessary to be more explicit in the success criterion in order to be generally applicable to markup languages. Because the term "well formed" is only defined in XML, and (because end tags are sometimes optional) valid HTML does not require well formed code, the term is not used in this success criterion.

With the exception of one success criterion ( [1.4.2: Resize text](resize-text), which specifically mentions that the effect specified by the success criterion must be achieved without relying on an assistive technology) authors can meet the success criteria with content that assumes use of an assistive technology (or access features in use agents) by the user, where such assistive technologies (or access features in user agents) exist and are available to the user.

Benefits
--------

-   Ensuring that Web pages have complete start and end tags and are nested according to specification helps ensure that assistive technologies can parse the content accurately and without crashing.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G134" class="general">G134: Validating Web pages</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G192" class="general">G192: Fully conforming to specifications</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H88" class="html">H88: Using HTML according to spec</a>
4.  Ensuring that Web pages can be parsed by using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H74" class="html">H74: Ensuring that opening and closing tags are used according to specification</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H93" class="html">H93: Ensuring that id attributes are unique on a Web page</a> **AND** <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H94" class="html">H94: Ensuring that elements do not contain duplicate attributes</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H75" class="html">H75: Ensuring that Web pages are well-formed</a>

5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL33" class="silverlight">SL33: Using Well-Formed XAML to Define a Silverlight User Interface</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F70" class="failure">F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F77" class="failure">F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID</a>
