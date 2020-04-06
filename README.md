# team30

NOTE: This has been submitted late
START

HEROKU LINK: https://powerful-stream-32762.herokuapp.com

First, you should copy all files under folder client to your http server folder, or you can simply open 'index.html'. The app starts immediately on the home page in which a user is prompted to select a program they are interested in viewing. In our case we will be using the Major in Architecture program which gives us a good template for viewing our diagrams.

For server side, you need to run "npm start" under the server folder in command line(or bash on unix-like system) with necessary package installed.

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

Clicking on program requirement in the panel above will give a text summary if what the program needs. 

COMPLEXITY

Taking account the sheer amount of the programs and the possible configurations their courses have, its clear that turning it into a readable directed graph will have a lot of complications moving on with the project.

Firstly, we will need to find some sort of API if not create a webscraper to get the needed information. Then we have to create the appropriate edges and nodes and find a correct way to format them in cases such as too many disconnected nodes.

We are grabbing the program data from the database's program collection for the graph. Analyzing the information for each course from course collection then reform a graph to user to show the requirement courses with prerequisite and co-requisite by arrowlines. All works are done with dagre-d3 library.

For backend, we uses Mongodb as the website's database support and express.js for the RESTAPI support. We enabled CORS check in order to prevent invalid request from non-trusted web domain. Also, we do use cookie to check the status of the user; if the user is not a admin in the cookie, then even they send out the delete request to the server side, the server side would reject it.

We also connect to database to get realtime data for courses, programs,and user profiles from admin side by API communication with the server side.

FEATURES WE DID NOT IMPLEMENT AND WHY

1. In the case of hovering nodes, we wanted a tooltip to pop up with course information, however this wasn't feasible as any online resource was too old and said solutions seem deprecated.

2. Print and Save to PDF functionality was not implemented due to complexity of d3 graphing implementation.

4. We suppose to use different colour of clusters to distinguish the requirement under each program. However, due to the complexity of course and program data structure, we are unable to cluster courses. 

Citations:

1. https://github.com/dagrejs/dagre-d3/wiki
This was to help me set up the tree diagram

2. https://stackoverflow.com/questions/52536836/hover-effects-with-dagre-dagre-d3-d3-js
Helped me create the hover affect for each node
