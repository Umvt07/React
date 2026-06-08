`a vs Link tag in react-router`

when we use a tag then at that time the entire page refresh
but in react there is no concept of refresh so that is why we use link tag
but not a tag

navlink has additional features compare to link 
ink
import { Link } from "react-router-dom";

<Link to=" /about">About</Link>

It simply navigates to another page.

NavLink
import { NavLink } from "react-router-dom";

<NavLink to="/about">About</NavLink>

It also navigates, but it knows whether the link is currently active.

Example

Current URL:

/about

Navigation bar:

<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/contact">Contact</NavLink>

React Router knows:

Home    ❌ inactive
About   ✅ active
Contact ❌ inactive
Why is this useful?

You can style the active page.

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  About
</NavLink>

When on /about:

About → red

When on another page:

About → black
Common Navbar Example
<NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "font-bold text-blue-500" : ""
  }
>
  Home
</NavLink>

If you're on the Home page, the link automatically gets:

font-bold text-blue-500
Summary
Feature	Link	NavLink
Navigation	✅	✅
Knows current route	❌	✅
isActive available	❌	✅
Best for navbar	❌	✅
Rule of thumb
Use Link for normal navigation.
Use NavLink in navigation bars where you want to highlight the current page.

if we use the classes in callback then we can change the classes like using nav link we can do it 
 