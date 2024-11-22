def compare(a, b):
  # Compare Function to Sort the points, a and b are points to compare
  if a['x'] < b['x']:
    return -1
  if a['x'] == b['x'] and a['y'] < b['y']:
    return -1
  return 1

def orientation(a, b, c):
  # Check orientation of Line(a,b) and Line(b,c)
  alpha = (b['y'] - a['y']) / (b['x'] - a['x']) if (b['x'] - a['x']) != 0 else float('inf')
  beta = (c['y'] - b['y']) / (c['x'] - b['x']) if (c['x'] - b['x']) != 0 else float('inf')

  # Clockwise
  if alpha > beta:
    return 1
  # Anticlockwise
  elif beta > alpha:
    return -1
  # Colinear
  return 0

def convex_hull(points):
  points_len = len(points)
  if points_len <= 2:
    raise ValueError('Minimum of 3 points is required to form closed polygon!')

  points.sort(key=lambda p: (p['x'], p['y']))
  p1 = points[0]
  p2 = points[points_len - 1]

  # Divide Hull in two halves
  upper_points = []
  lower_points = []

  upper_points.append(p1)
  lower_points.append(p1)

  for i in range(1, points_len):
    if i == points_len - 1 or orientation(p1, points[i], p2) != -1:
      while len(upper_points) >= 2 and orientation(upper_points[-2], upper_points[-1], points[i]) == -1:
        upper_points.pop()
      upper_points.append(points[i])
    if i == points_len - 1 or orientation(p1, points[i], p2) != 1:
      while len(lower_points) >= 2 and orientation(lower_points[-2], lower_points[-1], points[i]) == 1:
        lower_points.pop()
      lower_points.append(points[i])

  hull = []
  for i in range(1, len(upper_points) - 1):
    hull.append(upper_points[i])
  for i in range(len(lower_points) - 1, -1, -1):
    hull.append(lower_points[i])

  return hull

# Example
# points = [
#     {'x': 0, 'y': 3},
#     {'x': 1, 'y': 1},
#     {'x': 2, 'y': 2},
#     {'x': 4, 'y': 4},
#     {'x': 0, 'y': 0},
#     {'x': 1, 'y': 2},
#     {'x': 3, 'y': 1},
#     {'x': 3, 'y': 3}
# ]
# print(convex_hull(points))
