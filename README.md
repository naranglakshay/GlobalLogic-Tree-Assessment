# GlobalLogic-Tree-Assessment
Display a given json  tree as a node tree component using Angular Components

How to deliver code?

1.	Push the code to Github and share the repo details with public access.

Note: Don’t use Angular material/any 3PPs, only plain angular stuffs should be used.

Problem statement 
1.	Display a given json (attached file sample_node_tree_data.txt)  tree as a node tree component using Angular Components

example HTML skeleton output
India
              north
                             punjab,
                             j&k
              south
                             tamil nadu
                             kerala


Component Behavior & Requirements - 
1) Expand/Click "India" to display "north", "south"
2) Expand/Click "north" to display "Tamilnadu", "Kerala"
3) each node level should be sorted in alphabetically in ascending order
4) On click of state element - display state details, name, and population
5) Display population as "crores", "lakhs" etc.
6) Implement expand all and collapse all functionality. 
7) Write unit tests to verify
              a) click of parent node, should display child nodes
              b) default state is all are collapsed
              c) unit tests for expand and collapse functionality
              d) display details panel on click of node last(state) node 
              e) details panel should contain population in human readable format (crores", "lakhs" etc.)

Refer to below screenshot for screen mockup for node tree. Please implement CSS to align with the given screen mockup as much as possible. (attached file node_tree_mock.PNG)


