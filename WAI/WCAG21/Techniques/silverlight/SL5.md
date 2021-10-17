-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SL4](SL4)
-   [Next Technique: SL6](SL6)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Defining a Focusable Image Class for Silverlight
================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Microsoft Silverlight, versions 3 and greater
-   Silverlight managed programming model and Silverlight XAML

Note

Microsoft has stopped updating and distributing Silverlight, and authors are encouraged to use HTML for accessible web content.

This technique relates to [Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) (Sufficient).

Description
-----------

The objective of this technique is to wrap the Silverlight `Image` class inside a UI container class that is focusable. If the image is focusable, users who use the TAB sequence to navigate content while the assistive technology is active, and/or assistive technologies that construct navigation structures that are based on the TAB sequence, can both detect the image in navigation. The assistive technology can then associate alternative text for that image within the navigation structure, and report the information to the user.

Many existing assistive technologies do not construct initial navigation views that are derived from UI Automation information if it is coming from a non-focusable element in a Silverlight user interface. This is particularly true if the assistive technology is in a navigation mode that is specifically intended to help users enter information into a form or similar interactive interface element; an example of this situation is the Forms Mode of the JAWS screen reader.

[Image](https://msdn.microsoft.com/en-us/library/system.windows.controls.image%28VS.95%29.aspx) is an example of a Silverlight element that is not focusable. This technique and the example therein are intended to circumvent the possible omission of a nonfocusable Silverlight `Image` element from certain navigation views in existing assistive technology implementations. The Silverlight `Image` is wrapped with a display/viewer control class that is focusable. This image-wrapping control is initially presented in assistive technology representations of a Silverlight user interface that use only focusable elements when constructing the assistive technology's representation of the application.

The image wrapper class uses the `AutomationProperties.Name` property to provide a short text alternative for the contained `Image`, so that the alternative text can be read or otherwise presented by assistive technologies. The Silverlight API `AutomationProperties.Name` directly sets `Name` in the UI Automation tree. The properties in the UI Automation tree are reported to assistive technologies, when the assistive technology implements behavior that acts as a UI Automation client. `Name` is one of the accessibility framework properties that most assistive technologies present in some way, for purposes of both name and value information, and setting `Name` is the common technique for exposing text alternatives for any other `Control` class (for example, for a button with an image, as shown in the technique [](#SL18)).

This technique is intended for cases where application authors deliberately do not want a visible image caption for the image to be part of the user interface, and the image is a part of a larger interactive user interface control or page. Otherwise, if there is a visible caption, authors can use [](#SL26).

Examples
--------

The two examples are intended to be used together, if an application is both defining and consuming the focusable image control.

### Example 1: Defining the FocusableImage XAML template and C\# code behavior

Silverlight supports a control development model whereby the visual appearance of a control is largely defined in XAML, and the behavior of a control (such as its event handling and hookups to services) are implemented in a managed code language such as C\#. The following is the XAML template, which includes a visual state that shows visually when the control is focused in UI.

    <ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="clr-namespace:ImageEquivalent">
     <Style TargetType="local:FocusableImage">
       <Setter Property="Template">
        <Setter.Value>
          <ControlTemplate TargetType="local:FocusableImage">
            <Grid>
              <VisualStateManager.VisualStateGroups>
                <VisualStateGroup x:Name="FocusStates">
                  <VisualState x:Name="Focused">
                    <Storyboard>
                      <ColorAnimation  
     Storyboard.TargetName="focusborder"
     Storyboard.TargetProperty="(Border.BorderBrush).(SolidColorBrush.Color)"
     Duration="0" To="Blue"/>
                    </Storyboard>
                  </VisualState>
                  <VisualState x:Name="Unfocused"/>
                </VisualStateGroup>
              </VisualStateManager.VisualStateGroups>
              <Border
                x:Name="focusborder"
                BorderThickness="4"
                BorderBrush="Transparent">
                <Image
                 Margin="2" Opacity="10"
                 Source="{TemplateBinding Source}"/>
             </Border>
           </Grid>
        </ControlTemplate>
        </Setter.Value>
       </Setter>
     </Style>
    </ResourceDictionary>

The following is the C\# class definition and logic. The logic includes invoking a default automation peer on creation, and loading the template as defined in the previous XAML example through the Silverlight "generic.xaml" resource convention for custom controls.

    namespace ImageEquivalent
    {
       public class FocusableImage : Control
       {
           protected override System.Windows.Automation.Peers.AutomationPeer OnCreateAutomationPeer()
           {
               return new FrameworkElementAutomationPeer(this);
           }
           public FocusableImage()
           {
               this.DefaultStyleKey = typeof(FocusableImage);
           }
           public ImageSource Source
           {
               get { return (ImageSource)this.GetValue(SourceProperty); }
               set { this.SetValue(SourceProperty,value); }
           }
           public static DependencyProperty SourceProperty = DependencyProperty.Register(
             "Source",
             typeof(ImageSource),
             typeof(FocusableImage),
             null);
           Boolean _Focused;
           void ChangeState()
           {
               if (_Focused)
               {
                   VisualStateManager.GoToState(this,"Focused",false);
               }
               else
               {
                   VisualStateManager.GoToState(this,"Unfocused",false);
               }
           }
           protected override void OnGotFocus(RoutedEventArgs e)
           {
               base.OnGotFocus(e);
               this._Focused = true;
               ChangeState();
           }
           protected override void OnLostFocus(RoutedEventArgs e)
           {
               base.OnGotFocus(e);
               this._Focused = false;
               ChangeState();
           }
       }
    }

This example is shown in operation in the [working example of Focusable Image](../../working-examples/silverlight-focusable-image/).

### Example 2: Using the FocusableImage class in UI and applying AutomationProperties.Name

Now that the image is wrapped by a focusable control, you can instantiate an instance of the wrapper UI inside a Silverlight layout container, specify `AutomationProperties.Name` at the level of the wrapper control’s tag, and have that text serve as the alternative text for the referenced source image file.

       <StackPanel
       xmlns:local="clr-namespace:ImageEquivalent;assembly=FocusableImage"
       >
       <local:FocusableImage
         Height="300" Width="400
         AutomationProperties.Name="Diagram of secret lair"
         Source="/diagram_lair.png" />
       </StackPanel>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Automation Properties for Accessibility Support in UI](https://msdn.microsoft.com/en-us/library/ff400332%28VS.95%29.aspx)
-   [AutomationProperties.Name Attached Property](https://msdn.microsoft.com/en-us/library/system.windows.automation.automationproperties.name%28VS.95%29.aspx)
-   Tools: [SilverlightSpy](http://firstfloorsoftware.com/silverlightspy) or [UIAVerify](http://uiautomationverify.codeplex.com/)

Related Techniques
------------------

-   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)

Tests
-----

### Automation Tree

#### Procedure

1.  Open the test HTML page in a Silverlight-supported useragent host; to use UI Automation, use Microsoft Windows as platform.
2.  Use the tab sequence inside the Silverlight content area to focus the control.
3.  Using an accessibility framework verification tool, check that the string content is promoted as the default `Name` applied to the control.

Note

Accessibility framework verification tools typically show the entirety of an automation tree for a given application, and in fact will show the tree for all applications running on the Windows client machine. Focusing the control as in \#2 is thus not strictly speaking necessary. However, manually focusing using the application interface is often a faster way to step into the automation tree as opposed to having to open an extensive series of nested nodes starting from the browser host application root. Whether this functionality exists depends on which accessibility framework verification tool is being used for testing.

#### Expected Results

\#3 is true.

### Screen Reader

#### Procedure

1.  Using a browser that supports Silverlight, open an HTML page that references a Silverlight application through an object tag. To use UI Automation, use Microsoft Windows as platform.
2.  Engage the screen reader. Move focus to the control (for example, use the tab sequence).
3.  Check that the `Name` applied to the image is read by the screen reader.

#### Expected Results

\#3 is true.
