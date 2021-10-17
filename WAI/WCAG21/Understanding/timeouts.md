-   [Contents](. "Table of Contents")
-   [GL: Enough Time](enough-time)
-   [Previous SC: Re-authenticating](re-authenticating)
-   [Next SC: Three Flashes or Below Threshold](three-flashes-or-below-threshold)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.2.6: Timeouts
===============================================

> Success Criterion [2.2.6 Timeouts](https://www.w3.org/TR/WCAG21/#timeouts) (Level AAA): Users are warned of the duration of any [user inactivity](#dfn-user-inactivity) that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.
>
> Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.

Intent
------

The intent of this Success Criterion is to ensure that when a timeout is used, users know what duration of inactivity will cause the page to time out and result in lost data. The use of timed events can present significant barriers for users with cognitive disabilities, as these users may require more time to read content or to perform functions, such as completing an online form.

During the completion of an online process, such as to reserve a hotel room or purchase a plane ticket, a user with a cognitive impairment may become overwhelmed with lengthy instructions and data input required to complete the process. The user may not be able to complete the process in one sitting and may need to take a break. Users should be able to leave a process without losing their current place within the process, and without losing information that has already been entered. If users cannot take a break and check their work, many will often be unable to complete a task correctly.

This Success Criterion works in tandem with Success Criterion 2.2.1 Timing Adjustable, but is specifically focused on notification of timeouts related to user inactivity.

The best way to conform to this success criteria is to keep the user data for at least 20 hours. This enables the user with disabilities and the aging community to start and finish a task, taking breaks as needed. However, when it is not practical to save the user data the author must warn the user about the duration of inactivity which will result in a timeout. Timeouts should be displayed to the user once at the beginning of the related task or process and not at each step.

This success criterion only applies to timeouts that are within the content provider's knowledge or control. For example, if the user closes a web browser or device and loses content in an open page that has not yet been submitted, the success criteria has not been violated.

Benefits
--------

This Success Criterion helps users by ensuring they are notified about timeouts related to inactivity.

When a user knows how much time they are allowed for a task, they will know whether they can take a needed break and resume their work without needing to start again. This enables many users to complete tasks online that they otherwise could not do. If a situation exists where a timeout is necessary, the user is warned at the start of the task about the length of inactivity that would generate a timeout. The user can then decide if they can manage this task or not in the given time, or if they need to prepare materials in advance of starting a process. This will reduce the frustration of losing work due to a timeout.

This Success Criterion helps people with many different cognitive disabilities, including people with:

-   language-related disabilities;
-   memory-related disabilities;
-   focus-and-attention-related disabilities; and
-   disabilities that affect executive function and decision making.

Examples
--------

-   While making a purchase on an e-commerce Web site, the information input by the user is stored for more than 20 hours. This helps ensure that if they need to stop working for a while that they are more likely to be able to continue the purchase when they return.
-   A web application allowing people to file tax returns provides a notice that the application will time out for security purposes. The notice indicates that a lack of activity for a continuous period of time that is greater than an hour will trigger initiate the time out process.
-   An online contact form does not implement any type of time out process. Information entered into the contact form can be submitted at any time and would only be lost if the user closes their browser window.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [User Needs Table 3: Entering data, error prevention & recovery](https://rawgit.com/w3c/coga/master/gap-analysis/table.html)
-   [SSA Best Practices Library: Timeouts](https://www.ssa.gov/accessibility/bpl/bps/forms/timeout/default.htm)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   Setting a session timeout to occur following at least 20 hours of inactivity.
-   Store user data for more than 20 hours.
-   Provide a warning of the duration of user inactivity at the start of a process.

Key Terms
---------

user inactivity

any continuous period of time where no user actions occur

The method of tracking will be determined by the web site or application.
