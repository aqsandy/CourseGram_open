# team30

START

The app starts immediately on the home page in which a user is promted to select a program they are interested in viewing. In our case we will be using the Major in Architecture which gives us a good template for viewing our diagrams.

LOGIN

Login button is found on the top right corner of the website. Where users can either login or sign up.

Login credentials for regular users:
Login: user
Password: user

For admins:
Login: admin
Password: admin

On the top right hand corner of the website, where it said Login/Sign up before authentication, you will see either user or admin depending on how you logged in. Clicking on the name will take you to the user control panel, in which a regular user can do things such as change their username, email, and password. Admins can instead do the actions specified by the handout.

FUNCTIONALITY

On the home page (seen by clicking the top left corner) users can see the option of the programs they have saved, in this case it's Architecture. By clicking on it, they can see the program tree where each node contains a course code. One can drag the diagram or zoom in and out.
Hovering over a node will highlight its edges and its neighbors for visibility reasons.

Clicking on program requirement innthe panel above will give a text summary if what the program needs. On top of that, users will have the ability to print the diagram, save it, and download it as a pdf.

COMPLEXITY

Taking account the sheer amount of the programs and the possible configurations their courses have, its clear that turning it into a readable directed graph will have a lot of complications moving on with the project.

Firstly, we will need to find some sort of API if not create a webscraper to get the needed information. Then we have to create the appropriate edges and nodes and find a correct way to format them in cases such as too many disconnected nodes.


FEATURES WE DID NOT IMPLEMENT AND WHY

1. In the case of hovering nodes, we wanted a tooltip to pop up with course information, however this wasn't feasible as any online resource was too old and said solutions seem deprecated.

2. Saving an SVG to a PDF was far too complicated to do considering we may scrap DagreD3js to solution problem 1.


Citations:

