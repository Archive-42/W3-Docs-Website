-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SL5](SL5)
-   [Next Technique: SL7](SL7)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Defining a UI Automation Peer for a Custom Silverlight Control
==============================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Microsoft Silverlight, versions 3 and greater
-   Silverlight managed programming model and Silverlight XAML

Note

Microsoft has stopped updating and distributing Silverlight, and authors are encouraged to use HTML for accessible web content.

This technique relates to [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient when used with [G10: Creating components using a technology that supports the accessibility notification of changes](../general/G10)).

Description
-----------

The objective of this technique is to create an `AutomationPeer` class for a custom Silverlight control. The `AutomationPeer` exposes accessibility properties of the control in a way that abstracts the Silverlight technology specifics of the control model and maps information to UI Automation concepts, so that these properties can be consumed by the UI Automation accessibility framework.

The AutomationPeer concept is part of the overall architecture design of the UI Automation system. The peer represents a deliberate abstraction of the control, such that a client can obtain pattern-based information about the specific purpose and capability of a control without knowing its implementation-specific object model or having to resort to using a framework-specific object model API. Also, the peers run in a different process than the controls they represent, which has performance and security advantages. For more information on UI Automation architecture, see [UI Automation Overview on MSDN](https://msdn.microsoft.com/en-us/library/ms747327.aspx).

Creating a custom Silverlight control is one way that Silverlight application authors can create user interface components either for their own application, or as a packaged redistributable that provides the control UI for third parties. Creating an automation peer for a custom control reports control-specific information to the UI Automation accessibility framework, and enables a custom control to participate in all of the same techniques involving UI Automation that can be used for a control that is distributed in the core Silverlight run time. Assistive technologies can use the UI Automation accessibility framework to discover the name and role of the user interface component, and can get and set values by accessing UI Automation patterns. UI Automation thus supports extensibility, while maintaining a discovery system for names, roles and values of UI components.

Control authors associate a peer with a class by implementing a method override for the class implementation. Control authors declare name and role through properties that are general to any UI Automation peer. Control authors expose the means to get and set values by choosing to support one or more patterns that are usually associated with a role. For example, a control in the role of "Button" would typically support an "Invoke" pattern. A consumer of UI Automation could check whether the pattern was supported and then call the pattern-based method Invoke, which would activate the button without any device input events being produced or required.

By convention, controls and their automation peers share a naming pattern. For example, if a control is named `Spinner`, its automation peer is named `SpinnerPeer`. However, the actual wiring for the class-peer association is made in the control code by overriding OnCreateAutomationPeer. Thus it is necessary to have access to the control code in order to associate a new peer class implementation with that control.

In addition to properties, automation peers can also expose methods as part of the implemented UI Automation control pattern. For example, a peer implementing the Value pattern can provide an implementation of the SetValue method. The SetValue method can be called by a UI Automation client in order to programmatically set the value of the owner control. The functionality exposed by the implementation of a control pattern can be accessed either by automation-based testing, or by assistive technologies.

Examples
--------

### Example 1: SimpleNumericUpDown control and its peer

The example implements a very simple Silverlight custom control named SimpleNumericUpDown. The control is a templateable control, meaning that the UI is defined in a XAML file that serves as the default UI, but any consumer of the control can change the visual appearance by applying a new template. Nevertheless, the basic accessibility characteristics of the control can be shaped by the control author, and can apply even for cases where the visible UI is noticably different. This separation between design-implementation and code-behavior is one reason for the peer-owner design in UI Automation. The majority of the example shows the C\# code, including the following :

-   Associating the peer with the class.
-   Defining the peer, and basic information such as the class name.
-   Reporting which patterns the peer supports. In this case the peer supports a Value pattern.

Control definition class:

       public class SimpleNumericUpDown : Control
       {
           public SimpleNumericUpDown()
           {
               this.DefaultStyleKey = typeof(SimpleNumericUpDown);
           protected override System.Windows.Automation.Peers.AutomationPeer OnCreateAutomationPeer()
           {
               return new SimpleNumericUpDownAutomationPeer(this);
           }
     // templating and event handlers omitted
           public static DependencyProperty NumericValueProperty = DependencyProperty.Register(
               "NumericValue",
               typeof(Int32),
               typeof(SimpleNumericUpDown),
               new PropertyMetadata(0)
               );
           public Int32 NumericValue
           {
               get { return (Int32)this.GetValue(NumericValueProperty); }
               set {this.SetValue(NumericValueProperty,value);}
           }
       }
       

Automation peer definition:

       public class SimpleNumericUpDownAutomationPeer : FrameworkElementAutomationPeer, IValueProvider
       {
           private SimpleNumericUpDown OwnerControl { get { return (SimpleNumericUpDown)Owner; } }
           public SimpleNumericUpDownAutomationPeer(SimpleNumericUpDown owner)
               : base(owner) {}
           //peer overrides
           protected override string GetClassNameCore()
           {
               return "SimpleNumericUpDown";
           }
           protected override AutomationControlType GetAutomationControlTypeCore()
           {
               return AutomationControlType.Spinner;
           }
           public override object GetPattern(PatternInterface patternInterface) {
               if (patternInterface == PatternInterface.Value)
               {
                   return this;
               }
               return base.GetPattern(patternInterface);
           }
           // Value pattern implementation
           String IValueProvider.Value
           {
               get { return OwnerControl.NumericValue.ToString(); }
           }
           bool IValueProvider.IsReadOnly {get{return false;}}
           void IValueProvider.SetValue(string value)
           {
               OwnerControl.NumericValue = Convert.ToInt32(value);
           }

This example is shown in operation in the [working example of Simple Numeric UpDown control](../../working-examples/silverlight-simple-numeric-up-down/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [UI Automation of a Silverlight Custom Control](https://msdn.microsoft.com/en-us/library/cc645045(VS.95).aspx)
-   [FrameworkElementAutomationPeer](https://msdn.microsoft.com/en-us/library/system.windows.automation.peers.frameworkelementautomationpeer%28VS.95%29.aspx)
-   [Accessibility](https://msdn.microsoft.com/en-us/library/ms753388.aspx)
-   Tools: [SilverlightSpy](http://firstfloorsoftware.com/silverlightspy) or [UIAVerify](http://uiautomationverify.codeplex.com/)

Related Techniques
------------------

-   [G10: Creating components using a technology that supports the accessibility notification of changes](https://www.w3.org/WAI/WCAG21/Techniques/general/G10)

Tests
-----

### Procedure

1.  Using a browser that supports Silverlight, open an HTML page that references a Silverlight application through an object tag. To see UI Automation, use Microsoft Windows as platform.
2.  Use a verification tool that is capable of showing the full automation tree, and an object’s UI Automation properties and patterns as part of the tree. (For example, use UIAVerify or Silverlight Spy; see Resources links.) Select the item in the automation tree that is accessing the relevant custom automation peer implementation.
3.  Examine the set of properties exposed in the tree. Check that name is reported by Name, that the class name is reported as ClassName, and that there is a role as reported by the value of ControlType.
4.  If the control is expected to report a value, check that the value is reported in the tree somehow. (Exactly which property reports the value varies depending on the control function and pattern; for more information, see [Windows Automation API](https://msdn.microsoft.com/en-us/library/ff486375%28VS.85%29.aspx)).
5.  Check whether a control pattern is reported in the tree. If a control pattern is reported, test the methods of that pattern using facilities in the verification tool. Verify that invoking the methods has changed the corresponding read only property values in the tree.

### Expected Results

\#3, \#4, and \#5 (if applicable) are true.
