//------------ Assignment ----------------
// Add vertices for the cube as well as colors for corresponding vertices.
// Remember that:
// (1) The vertices for each triangle has to be provided in a counter-clockwise order to make the face culling work properly. If the order of vertices won't be correct the triangles won't be visible.
// (2) The current coordinate system has: x-axis pointing right, y-axis pointing up, and z-axis pointing towards the screen
// (3) Everything which is within [-1..1]x[-1..1]x[-1..1] volume will be projected onto the screen along z-axis
//-----------------------------------------

/*
vec3 p1 = vec3(-0.5, -0.5, 0.0);
vec3 p2 = vec3( 0.5, -0.5, 0.0);
vec3 p3 = vec3( 0.5,  0.5, 0.0);
vec3 p4 = vec3(-0.5,  0.5, 0.0);
vec3 p5 = vec3(-0.5, -0.5, 1);
vec3 p6 = vec3( 0.5, -0.5, 1);
vec3 p7 = vec3( 0.5,  0.5, 1);
vec3 p8 = vec3(-0.5,  0.5, 1);

vec3 red = vec3(1, 0, 0);
vec3 green = vec3(0, 1, 0);
vec3 blue = vec3(0, 0, 1);*/

var cube_vertices = [
  //front face triangles
  -0.5, -0.5, -0.5,    0.5, -0.5, -0.5,     -0.5, 0.5, -0.5,   //p1, p2, p4
   0.5, -0.5, -0.5,    0.5,  0.5, -0.5,     -0.5, 0.5, -0.5,   //p2, p3, p4
  //back face triangles
   0.5, -0.5, 0.5,    -0.5, -0.5, 0.5,     0.5, 0.5, 0.5,   //p6, p5, p7
   -0.5, -0.5, 0.5,   -0.5,  0.5, 0.5,     0.5, 0.5, 0.5,   //p5, p8, p7
  //left face triangles
  -0.5, -0.5, -0.5,    -0.5, 0.5, -0.5,    -0.5,  0.5, 0.5,   //p1, p4, p8
  -0.5, -0.5, -0.5,    -0.5, 0.5, 0.5,    -0.5, -0.5, 0.5,   //p1, p8, p5
  //right face triangles
   0.5, -0.5, -0.5,    0.5,  0.5, 0.5,      0.5, 0.5, -0.5,   //p2, p7, p3
   0.5, -0.5, -0.5,    0.5, -0.5, 0.5,      0.5, 0.5, 0.5,   //p2, p6, p7
  //top face triangles
  -0.5,  0.5, -0.5,    0.5, 0.5, 0.5,      -0.5, 0.5, 0.5,   //p4, p7, p8
  -0.5,  0.5, -0.5,    0.5, 0.5, -0.5,       0.5, 0.5, 0.5,   //p4, p3, p7
  //bottom face triangles
  -0.5, -0.5, -0.5,    -0.5, -0.5, 0.5,     0.5, -0.5, 0.5,  //p1, p5, p6
  -0.5, -0.5, -0.5,     0.5, -0.5, 0.5,     0.5, -0.5, -0.5,  //p1, p6, p2
];



var cube_colors = [
  //front face = red
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
  //back face = red
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
  //left face = blue
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  //right face = blue
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  //top face = green
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  //bottom face = green
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
];
