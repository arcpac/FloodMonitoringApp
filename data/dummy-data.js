import Category from "../models/category";
import Dam from "../models/dam";
import Newsfeed from "../models/newsfeed";
import Notification from "../models/notification";
import Unit from "../models/units";

export const CATEGORIES = [
  new Category(
    "c1",
    "Greater Sydney",
    require("../assets/images/greater.jpeg")
  ),
  new Category("c2", "Regional NSW", require("../assets/images/regional.jpeg")),
];

export const NEWSFEED = [
  new Newsfeed(
    "nf1",
    "N9NE News",
    require("../assets/images/9news.png"),
    "Two dams close to overflowing in South Australia",
    "Properties could also be affected along Deep Creek from Lobethal Road towards Elborough Avenue, the SES said.",
    require("../assets/images/news1.jpeg")
  ),
  new Newsfeed(
    "nf2",
    "7 News",
    require("../assets/images/7news.jpeg"),
    "Victoria flood emergency worsens as homes threatened.",
    "The Basket Range warning follows an alert from SES last night warning residents of Hope Forest, 40km south of Adelaide, to monitor weather conditions and be ready for floods.",
    require("../assets/images/news2.jpeg")
  ),
  new Newsfeed(
    "nf3",
    "ABC News",
    require("../assets/images/abcnews.jpeg"),
    "Flooding continues as more rain falls in NSW, Murray River peak yet to come",
    "Flood-affected communities remain on alert, including Barraba in northern NSW. (Supplied: Hart Rural Agency)",
    require("../assets/images/news3.jpeg")
  ),
];
export const UNITS = [
  // constructor(id, name, status, active)
  new Unit(
    "u1",
    "Flood Door A",
    require("../assets/images/protect1.jpeg"),
    "Stable",
    true
  ),
  new Unit(
    "u2",
    "Flood Door B",
    require("../assets/images/protect2.jpeg"),
    "Not Stable",
    true
  ),
  new Unit(
    "u3",
    "Flood Door C",
    require("../assets/images/protect3.jpeg"),
    "Stable",
    false
  ),
  new Unit(
    "u4",
    "Flood Door D",
    require("../assets/images/protect5.jpeg"),
    "Not Stable",
    true
  ),
  new Unit(
    "u5",
    "Flood Gate A",
    require("../assets/images/protect5.jpeg"),
    "Stable",
    false
  ),
];

export const NOTIFS = [
  new Notification(
    "n1",
    "Flood warning",
    "This is an urgent notification from the local authorities... "
  ),
  new Notification(
    "n2",
    "Flood warning",
    "There is a high likelihood of flooding in your area due..."
  ),
];

export const DAMS = [
  new Dam(
    "d1",
    ["c1", "c2"],
    ["u1", "u2", "u5"],
    "Blowering Dam",
    "Blowering Dam as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    require("../assets/images/dam1.jpg"),
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
    require("../assets/images/dam2.jpg"),
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
    require("../assets/images/dam3.jpg"),
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
    require("../assets/images/dam4.jpg"),
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
    require("../assets/images/dam5.jpg"),
    12,
    1607,
    45
  ),
  new Dam(
    "d6",
    ["c1"],
    ["u3", "u4"],
    "Napean Dam",
    "Napean as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    require("../assets/images/dam6.jpg"),
    12,
    1607,
    45
  ),
  new Dam(
    "d6",
    ["c2"],
    ["u4"],
    "Tallowa Dam",
    "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    require("../assets/images/dam11.jpg"),
    12,
    1607,
    45
  ),
  new Dam(
    "d7",
    ["c1"],
    ["u3", "u4"],
    "Warragama Dam",
    "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    require("../assets/images/dam8.jpg"),
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
    require("../assets/images/dam5.jpg"),
    12,
    1607,
    45
  ),
  new Dam(
    "d9",
    ["c1"],
    ["u3", "u4"],
    "Warragama Dam",
    "Famous as the site of the world water speed record in 1978, Blowering Dam is one of the biggest dams in NSW.",
    require("../assets/images/dam1.jpg"),
    12,
    1607,
    45
  ),
];
export const WATCHLIST = [];
