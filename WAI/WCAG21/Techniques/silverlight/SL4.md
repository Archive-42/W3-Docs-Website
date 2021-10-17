-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SL3](SL3)
-   [Next Technique: SL5](SL5)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM
================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Microsoft Silverlight, versions 3 and greater
-   Silverlight managed programming model and Silverlight XAML

Note

Microsoft has stopped updating and distributing Silverlight, and authors are encouraged to use HTML for accessible web content.

This technique relates to [Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts) (Sufficient).

Description
-----------

The objective of this technique is use the HTML `Lang` attribute on the object tag to describe each Silverlight plug-in instance on the HTML hosting page as a "part" that has a different language. Assistive technologies that use HTML Lang as a determinant of language of parts can thus treat all Silverlight content as using that HTML Lang-declared language.

Most assistive technologies that are capable of determining Language for Web content will use the HTML Lang tag value as the determinant of the language of the page. Assistive technologies would also use HTML Lang tag values for the language of parts. HTML Lang is not specifically reported in accessibility frameworks. Assistive technologies would typically access the HTML DOM to get this information. This technique specifically addresses this known situation regarding how ATs obtain Language information from HTML rather than from accessibility frameworks that otherwise report other aspects of HTML content.

In order to support different language parts that each contain Silverlight content, authors declare one Silverlight object tag per continuous language part region in the HTML. For example, the following HTML is a simplication of HTML markup for a page that contains two Silverlight content areas, the first declaring Lang as English (en), the second declaring Lang as German (de):

         <body>
           <object type="application/x-silverlight-2" lang="en">
           </object>
           <object type="application/x-silverlight-2" lang="de">
           </object>
         </body>
         

To support communication between different Silverlight plug-in instances that are hosted on the same HTML page, application authors can use various techniques, including the following

-   System.Windows.Messaging APIs: this is the simplest technique, and this is shown in Example 1
-   Using a shared business object, and exchanging information by having each Silverlight instance reference two-way data binding to that business object's properties.
-   Exchanging information through the HTML DOM and declaring properties of one or both instances as Scriptable by the DOM.

### Silverlight runtime language determination

Regardless of how HTML Lang is declared on the defining object tags, many aspects of how Silverlight works with language and culture information at run time are not determined by HTML Lang, and are instead determined by the operating system and which culture that operating system is running. For more information, see [SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL27).

Examples
--------

### Example 1: Two Silverlight object tags, each with different HTML Lang, to support a simple language-translator application as a Web page

The Visual Studio solution for this example has a total of 4 project components:

-   The Web project that declares the HTML or ASP page that shows the framework of how the two Silverlight object tags exist on a page. This is where the HTML Lang is actually set.
-   A project for the English user control, a simple `TextBox`.
-   A project for a German user control, also a simple `TextBox`.
-   A library with a static translation function

In this example, the English user control implements a LocalMessageSender, which sends asynchronous messages to the German user control. The German user control has a LocalMessageReceiver, which is set to listen as soon as the control is instantiated. When a message is received, the German control calls a function of the translation library, and displays translated text.

The following is the HTML page (some infrastructure and parameters omitted for clarity):

    <html xmlns="http://www.w3.org/1999/xhtml" >
    <body>

        <object data="data:application/x-silverlight-2," type="application/x-silverlight-2" width="100%" height="25px" lang="en">
          <param name="source" value="ClientBin/SilverFish.xap"/>
        </object>

        <object data="data:application/x-silverlight-2," type="application/x-silverlight-2" width="100%" height="25px" lang="de">
          <param name="source" value="ClientBin/SilverFish_DE.xap"/>
        </object>

    </body>
    </html>

The following is the XAML for the English user control:

    <UserControl x:Class="SilverFish.MainPage"
       xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
       xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" Height="20" 
    >
       <Grid x:Name="LayoutRoot" Background="White">
           <TextBox AcceptsReturn="False" Language="en-us"
           Name="EnglishTranslationBox" 
           LostFocus="EnglishTranslationBox_LostFocus"/>
       </Grid>
    </UserControl>

The following is the code-behind for the English user control:

       public partial class MainPage : UserControl
       {
           private LocalMessageSender messagesender;
           public MainPage()
           {
               InitializeComponent();
           }
           private void EnglishTranslationBox_LostFocus(object sender, RoutedEventArgs e)
           {
               messagesender = new LocalMessageSender("receiver");
               messagesender.SendAsync((sender as TextBox).Text);
           }
       }
       

The following is the code-behind for the German user control (the XAML is minimal; the main relevant point is that it contains a `TextBox` target named GermanTranslationBox). The code invokes the translation function found in a separate library. The translation function is not shown, it simply takes an English string and returns a German translation.

       public partial class MainPage : UserControl
       {
           public MainPage()
           {
               InitializeComponent();
               LocalMessageReceiver lmr = new LocalMessageReceiver("receiver");
               lmr.MessageReceived += new EventHandler<MessageReceivedEventArgs>(lmr_MessageReceived);
               try
               {
                   lmr.Listen();
               }
               catch (ListenFailedException) {}
           }
           void lmr_MessageReceived(object sender, MessageReceivedEventArgs e)
           {
               if (e.Message!="") {
                   String translated;
                   translated = Translator.TranslateThat(e.Message);
                   GermanTranslationBox.Text = translated;
                   GermanTranslationBox.Focus();
               }
           }
       }

This example is shown in operation in the [working example of SilverFish](../../working-examples/silverlight-silver-fish/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Localizing Silverlight-based Applications](https://msdn.microsoft.com/en-us/library/cc838238(VS.95).aspx)
-   [How to: Implement Communication Between Local Silverlight-Based Applications](https://msdn.microsoft.com/en-us/library/dd833075%28VS.95%29.aspx)

Related Techniques
------------------

-   [SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL27)
-   [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)

Tests
-----

### Procedure

1.  Using a browser that supports Silverlight, open an HTML page that references multiple Silverlight object tags, each with different HTML Lang values.
2.  Verify that language settings through HTML Lang on object tags are respected by assistive technologies that can use HTML Lang values for language of parts determination.

### Expected Results

\#2 gives expected results.
