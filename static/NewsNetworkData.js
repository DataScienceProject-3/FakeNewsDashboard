var nodes = [
  {id: 1, label: 'Smoking In Cars With Children', title: 'City: ' + 'Chicago', value: 10, group: 1},
  {id: 2, label: 'Smoking In Cars With Children', title: 'City: ' + 'Atlanta', value:5, group: 1 },
  {id: 3, label: 'Smoking In Cars With Children', title: 'City: ' + 'Dallas', value: 4, group: 1},
  {id: 4, label: 'Smoking In Cars With Children', title: 'City: ' + 'Florida', value: 6, group: 1},
  {id: 5, label: 'Smoking In Cars With Children', title: 'City: ' + 'Houston', value: 6, group: 1},
  {id: 6, label: 'Smoking In Cars With Children', title: 'City: ' + 'Miami', value: 5, group: 1},
  {id: 7, label: 'Smoking In Cars With Children', title: 'City: ' + 'NewYork', value: 8, group: 1},
  {id: 8, label: 'Smoking In Cars With Children', title: 'City: ' + 'Ohio', value: 4, group: 1},
  {id: 9, label: 'Smoking In Cars With Children', title: 'City: ' + 'Philadelphia', value: 5, group: 1},
  {id: 10, label: 'Smoking In Cars With Children', title: 'City: ' + 'South Carolina', value: 4, group: 1},
  {id: 11, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Atlanta', value: 7, group: 2},
  {id: 12, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Chicago', value: 7, group: 2},
  {id: 13, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Los Angels', value: 14, group: 2},
  {id: 14, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Connecticut', value: 4, group: 2},
  {id: 15, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Dallas', value: 4, group: 2},
  {id: 16, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Delaware', value: 4, group: 2},
  {id: 17, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Florida', value: 9, group: 2},
  {id: 18, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Fort Worth', value: 3, group: 2},
  {id: 19, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Indiana', value: 5, group: 2},
  {id: 20, label: 'Bumble Bee Foods and tuna', title: 'City: ' + 'Las Vegas', value: 5, group: 2},
  {id: 21, label: 'Morgue employee and nap', title: 'City: ' + 'Atlanta', value: 5, group: 3},
  {id: 22, label: 'Morgue employee and nap', title: 'City: ' + 'Dallas', value: 7, group: 3},
  {id: 23, label: 'Morgue employee and nap', title: 'City: ' + 'Detroit', value: 5, group: 3},
  {id: 24, label: 'Morgue employee and nap', title: 'City: ' + 'Florida', value: 11, group: 3},
  {id: 25, label: 'Morgue employee and nap', title: 'City: ' + 'Houston', value: 5, group: 3},
  {id: 26, label: 'Morgue employee and nap', title: 'City: ' + 'Los Angeles', value: 7, group: 3},
  {id: 27, label: 'Morgue employee and nap', title: 'City: ' + 'Nashville', value: 5, group: 3},
  {id: 28, label: 'Morgue employee and nap', title: 'City: ' + 'NewYork', value: 15, group: 3},
  {id: 29, label: 'Morgue employee and nap', title: 'City: ' + 'San Antonio', value: 10, group: 3},
  {id: 30, label: 'Morgue employee and nap', title: 'City: ' + 'Las Vegas', value: 6, group: 3},
  {id: 31, label: 'Pope Francis', title: 'City: ' + 'Chicago', value: 5, group: 4},
  {id: 32, label: 'Pope Francis', title: 'City: ' + 'Denver', value: 4, group: 4},
  {id: 33, label: 'Pope Francis', title: 'City: ' + 'Florida', value: 7, group: 4},
  {id: 34, label: 'Pope Francis', title: 'City: ' + 'Houston', value: 4, group: 4},
  {id: 35, label: 'Pope Francis', title: 'City: ' + 'Dallas', value: 2, group: 4},
  {id: 36, label: 'Pope Francis', title: 'City: ' + 'Washington DC', value: 2, group: 4},
  {id: 37, label: 'Pope Francis', title: 'City: ' + 'Kansas', value: 2, group: 4},
  {id: 38, label: 'Pope Francis', title: 'City: ' + 'NewYork', value: 3, group: 4},
  {id: 39, label: 'Pope Francis', title: 'City: ' + 'North Carolina', value: 3, group: 4},
  {id: 40, label: 'Pope Francis', title: 'City: ' + 'Orlando', value: 2, group: 4},
  {id: 41, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Kansas', value: 4, group: 4},
  {id: 42, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Los Angels', value: 11, group: 5},
  {id: 43, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'New Jersey', value: 3, group: 5},
  {id: 44, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Atlanta', value: 5, group: 5},
  {id: 45, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Seattle', value: 2, group: 5},
  {id: 46, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'NewYork', value: 5, group: 5},
  {id: 47, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Philadephia', value: 4, group: 5},
  {id: 48, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Arkansas', value: 2, group: 5},
  {id: 49, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Houston', value: 2, group: 5},
  {id: 50, label: 'NFL Lawyer and Super Bowl', title: 'City: ' + 'Las Vegas', value: 2, group: 5}

];
// create an array with edges
var edges = [
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 1, to: 4},
  {from: 1, to: 5},
  {from: 1, to: 6},
  {from: 1, to: 7},
  {from: 1, to: 8},
  {from: 1, to: 9},
  {from: 1, to: 10},
  {from: 2, to: 3},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 2, to: 6},
  {from: 2, to: 7},
  {from: 2, to: 8},
  {from: 2, to: 9},
  {from: 2, to: 10},
  {from: 3, to: 4},
  {from: 3, to: 5},
  {from: 3, to: 6},
  {from: 3, to: 7},
  {from: 3, to: 8},
  {from: 3, to: 9},
  {from: 3, to: 10},
  {from: 4, to: 5},
  {from: 4, to: 6},
  {from: 4, to: 7},
  {from: 4, to: 8},
  {from: 4, to: 9},
  {from: 4, to: 10},
  {from: 5, to: 6},
  {from: 5, to: 7},
  {from: 5, to: 8},
  {from: 5, to: 9},
  {from: 5, to: 10},
  {from: 6, to: 7},
  {from: 6, to: 8},
  {from: 6, to: 9},
  {from: 6, to: 10},
  {from: 7, to: 8},
  {from: 7, to: 9},
  {from: 7, to: 10},
  {from: 8, to: 9},
  {from: 8, to: 10},
  {from: 9, to: 10},
  {from: 11, to: 12},
  {from: 11, to: 13},
  {from: 11, to: 14},
  {from: 11, to: 15},
  {from: 11, to: 16},
  {from: 11, to: 17},
  {from: 11, to: 18},
  {from: 11, to: 19},
  {from: 11, to: 20},
  {from: 12, to: 13},
  {from: 12, to: 14},
  {from: 12, to: 15},
  {from: 12, to: 16},
  {from: 12, to: 17},
  {from: 12, to: 18},
  {from: 12, to: 19},
  {from: 12, to: 20},
  {from: 13, to: 14},
  {from: 13, to: 15},
  {from: 13, to: 16},
  {from: 13, to: 17},
  {from: 13, to: 18},
  {from: 13, to: 19},
  {from: 13, to: 20},
  {from: 14, to: 15},
  {from: 14, to: 16},
  {from: 14, to: 17},
  {from: 14, to: 18},
  {from: 14, to: 19},
  {from: 14, to: 20},
  {from: 15, to: 16},
  {from: 15, to: 17},
  {from: 15, to: 18},
  {from: 15, to: 19},
  {from: 15, to: 20},
  {from: 16, to: 17},
  {from: 16, to: 18},
  {from: 16, to: 19},
  {from: 16, to: 20},
  {from: 17, to: 18},
  {from: 17, to: 19},
  {from: 17, to: 20},
  {from: 18, to: 19},
  {from: 18, to: 20},
  {from: 19, to: 20},
  {from: 21, to: 22},
  {from: 21, to: 23},
  {from: 21, to: 24},
  {from: 21, to: 25},
  {from: 21, to: 26},
  {from: 21, to: 27},
  {from: 21, to: 28},
  {from: 21, to: 29},
  {from: 21, to: 30},
  {from: 22, to: 23},
  {from: 22, to: 24},
  {from: 22, to: 25},
  {from: 22, to: 26},
  {from: 22, to: 27},
  {from: 22, to: 28},
  {from: 22, to: 29},
  {from: 22, to: 30},
  {from: 23, to: 24},
  {from: 23, to: 25},
  {from: 23, to: 26},
  {from: 23, to: 27},
  {from: 23, to: 28},
  {from: 23, to: 29},
  {from: 23, to: 30},
  {from: 24, to: 25},
  {from: 24, to: 26},
  {from: 24, to: 27},
  {from: 24, to: 28},
  {from: 24, to: 29},
  {from: 24, to: 30},
  {from: 25, to: 26},
  {from: 25, to: 27},
  {from: 25, to: 28},
  {from: 25, to: 29},
  {from: 25, to: 30},
  {from: 26, to: 27},
  {from: 26, to: 28},
  {from: 26, to: 29},
  {from: 26, to: 30},
  {from: 27, to: 28},
  {from: 27, to: 29},
  {from: 27, to: 30},
  {from: 28, to: 29},
  {from: 28, to: 30},
  {from: 29, to: 30},
  {from: 31, to: 32},
  {from: 31, to: 33},
  {from: 31, to: 34},
  {from: 31, to: 35},
  {from: 31, to: 36},
  {from: 31, to: 37},
  {from: 31, to: 38},
  {from: 31, to: 39},
  {from: 31, to: 40},
  {from: 32, to: 33},
  {from: 32, to: 34},
  {from: 32, to: 35},
  {from: 32, to: 36},
  {from: 32, to: 37},
  {from: 32, to: 38},
  {from: 32, to: 39},
  {from: 32, to: 40},
  {from: 33, to: 34},
  {from: 33, to: 35},
  {from: 33, to: 36},
  {from: 33, to: 37},
  {from: 33, to: 38},
  {from: 33, to: 39},
  {from: 33, to: 40},
  {from: 34, to: 35},
  {from: 34, to: 36},
  {from: 34, to: 37},
  {from: 34, to: 38},
  {from: 34, to: 39},
  {from: 34, to: 40},
  {from: 35, to: 36},
  {from: 35, to: 37},
  {from: 35, to: 38},
  {from: 35, to: 39},
  {from: 35, to: 40},
  {from: 36, to: 37},
  {from: 36, to: 38},
  {from: 36, to: 39},
  {from: 36, to: 40},
  {from: 37, to: 38},
  {from: 37, to: 39},
  {from: 37, to: 40},
  {from: 38, to: 39},
  {from: 38, to: 40},
  {from: 39, to: 40},
  {from: 41, to: 42},
  {from: 41, to: 43},
  {from: 41, to: 44},
  {from: 41, to: 45},
  {from: 41, to: 46},
  {from: 41, to: 47},
  {from: 41, to: 48},
  {from: 41, to: 49},
  {from: 41, to: 50},
  {from: 42, to: 43},
  {from: 42, to: 44},
  {from: 42, to: 45},
  {from: 42, to: 46},
  {from: 42, to: 47},
  {from: 42, to: 48},
  {from: 42, to: 49},
  {from: 42, to: 50},
  {from: 43, to: 44},
  {from: 43, to: 45},
  {from: 43, to: 46},
  {from: 43, to: 47},
  {from: 43, to: 48},
  {from: 43, to: 49},
  {from: 43, to: 50},
  {from: 44, to: 45},
  {from: 44, to: 46},
  {from: 44, to: 47},
  {from: 44, to: 48},
  {from: 44, to: 49},
  {from: 44, to: 50},
  {from: 45, to: 46},
  {from: 45, to: 47},
  {from: 45, to: 48},
  {from: 45, to: 49},
  {from: 45, to: 50},
  {from: 46, to: 47},
  {from: 46, to: 48},
  {from: 46, to: 49},
  {from: 46, to: 50},
  {from: 47, to: 48},
  {from: 47, to: 49},
  {from: 47, to: 50},
  {from: 48, to: 49},
  {from: 48, to: 50},
  {from: 49, to: 50},
  {from: 1, to: 12},
  {from: 1, to: 31},
  {from: 12, to: 31},
  {from: 2, to: 11},
  {from: 2, to: 21},
  {from: 2, to: 44},
  {from: 11, to: 21},
  {from: 11, to: 44},
  {from: 21, to: 44},
  {from: 3, to: 15},
  {from: 3, to: 22},
  {from: 3, to: 35},
  {from: 15, to: 22},
  {from: 15, to: 35},
  {from: 22, to: 35},
  {from: 4, to: 17},
  {from: 4, to: 24},
  {from: 4, to: 33},
  {from: 17, to: 24},
  {from: 17, to: 33},
  {from: 24, to: 33},
  {from: 5, to: 25},
  {from: 5, to: 34},
  {from: 5, to: 49},
  {from: 25, to: 34},
  {from: 25, to: 49},
  {from: 34, to: 49},
  {from: 7, to: 28},
  {from: 7, to: 38},
  {from: 7, to: 46},
  {from: 28, to: 38},
  {from: 28, to: 46},
  {from: 38, to: 46},
  {from: 13, to: 26},
  {from: 13, to: 42},
  {from: 26, to: 42}
  
];
