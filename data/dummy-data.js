import Category from "../models/category";
import Dam from "../models/dam";
import Unit from "../models/units";

export const CATEGORIES = [
  new Category("c1", "Greater Sydney", "#f5428d"),
  new Category("c2", "Regional NSW", "#f54242"),
];
export const UNITS = [
  new Unit("u1", "Flood Door A", "Stable", true),
  new Unit("u2", "Flood Door B", "Stable", true),
  new Unit("u3", "Flood Door C", "Stable", false),
  new Unit("u4", "Flood Door D", "Stable", true),
  new Unit("u5", "Flood Gate A", "Stable", false),
];

export const DAMS = [
  new Dam(
    "d1",
    ["c1", "c2"],
    ["u1", "u2", "u5"],
    "Blowering Dam",
    "Blowering Dam as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d2",
    ["c1", "c2"],
    ["u1"],
    "Avon Dam",
    "Avon Dam as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d3",
    ["c1"],
    ["u1", "u2", "u5"],
    "Hume Dam",
    "Hume Dam as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d4",
    ["c1"],
    ["u5"],
    "Cataract Dam",
    "Cataract Dam as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d5",
    ["c1"],
    ["u3", "u4"],
    "Cordeaux Dam",
    "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d6",
    ["c1"],
    "Napean Dam",
    "Napean as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d6",
    ["c2"],
    ["u4", "u5"],
    "Tallowa Dam",
    "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d7",
    ["c2"],
    "Warragama Dam",
    "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  new Dam(
    "d8",
    ["c2"],
    ["u1", "u2", "u3", "u4", "u5"],
    "Waranora Dam",
    "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
    12,
    1607,
    45
  ),
  // new Dam(
  //   "d9",
  //   ["c2"],
  //   "Blowering Dam",
  //   "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
  //   "https://upload.wikimedia.org/wikipedia/commons/2/21/The_man_made_lake_at_West_Lakes_Shore.JPG",
  //   12,
  //   1607,
  //   45
  // ),
];
export const WATCHLIST = [];
