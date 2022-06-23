const sequelize = require("../config/connection");
const { Book } = require("../models");

const bookData = [
  {
    book_name: "The Fellowship of the Ring",
    author_name: "J.R.R. Tolkien",
    description:
      "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
    category_id: 1,
    price: 15.99,
    image_url:
      "http://tolkiengateway.net/w/images/thumb/4/44/J.R.R._Tolkien_-_The_Fellowship_of_the_Ring.jpg/180px-J.R.R._Tolkien_-_The_Fellowship_of_the_Ring.jpg",
    review:
      "Incredible world building! I love this slow unveiling of history and present danger. I enjoyed the film, but the book is SO much better - you really get to know Middle Earth as well as the characters. Left me yearning for more... - JiriO",
  },
  {
    book_name: "A Song of Ice and Fire",
    author_name: "George R.R. Martin",
    description:
      "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.",
    category_id: 1,
    price: 15.99,
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
    review:
      "I just love this series. I have read the books 3 times and I watch the show on HBO. - pamkaye",
  },
  {
    book_name: "Harry Potter and the Sorcerers Stone",
    author_name: "J.K. Rowling",
    description:
      "Harry Potter spent ten long years living with Mr. and Mrs. Dursley, an aunt and uncle whose outrageous favoritism of their perfectly awful son Dudley leads to some of the most inspired dark comedy since Charlie and the Chocolate Factory. But fortunately for Harry, hes about to be granted a scholarship to a unique boarding school called THE HOGWORTS SCHOOL OF WITCHCRAFT AND WIZARDRY, where he will become a school hero at the game of Quidditch a kind of aerial soccer played high above the ground on broomsticks, he will make some wonderful friends, and, unfortunately, a few terrible enemies. For although he seems to be getting your run-of-the-mill boarding school experience, Harry Potter has a destiny that he was born to fulfill. A destiny that others would kill to keep him from.",
    category_id: 1,
    price: 24.29,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    review:
      "Wont say anything more, it is the best book ever in my opinion. Read the whole series! 10/10 recommend - @nOnymOus",
  },
  {
    book_name: "The Lion, the Witch and the Wardrobe",
    author_name: "C.S. Lewis",
    description:
      "The full-color jacket features art by three-time Caldecott Medal-winning illustrator David Wiesner. The interior includes gorgeous black-and-white illustrations by Pauline Baynes, the original illustrator of Narnia. Four adventurous siblings—Peter, Susan, Edmund, and Lucy Pevensie—step through a wardrobe door and into the land of Narnia, a land frozen in eternal winter and enslaved by the power of the White Witch. But when almost all hope is lost, the return of the Great Lion, Aslan, signals a great change . . . and a great sacrifice.Journey into the land beyond the wardrobe! The Lion, the Witch and the Wardrobe is the second book in the C. S. Lewis classic fantasy series, which has been captivating readers of all ages for over sixty years. This is a stand-alone novel, but if you would like journey back to Narnia, read The Horse and His Boy, the third book in The Chronicles of Narnia.",
    category_id: 1,
    price: 8.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/51erHMLhIzL.jpg",
    review:
      "I grew up reading this book as a child & had misplaced that copy. I still had the rest of the books for the Chronicles series. I did not want my kids to miss out on this beloved book, so I bought it! My son finished reading it within 2-3 day- he loved that much! - Reebok10",
  },
  {
    book_name: "The Eye of the World",
    author_name: "Robert Jordan",
    description:
      "The Eye of the World, the first novel in Robert Jordans #1 New York Times bestselling epic fantasy series, The Wheel of Time®, follows Moiraine Damodred as she arrives in Emonds Field on a quest to find the one prophesized to stand against The Dark One.",
    category_id: 1,
    price: 35.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/913FyPpDusL.jpg",
    review:
      "It is really the best epic fantasy. I finally started reading it. - Rhete Sch",
  },
  {
    book_name: "Dune",
    author_name: "Frank Herbert",
    description:
      'Dune, Frank Herberts epic science-fiction masterpiece set in the far future amidst a sprawling feudal interstellar society, tells the story of Paul Atreides as he and his family accept control of the desert planet Arrakis. A stunning blend of adventure and mysticism, environmentalism, and politics, Dune is a powerful, fantastical tale that takes an unprecedented look into our universe, and is transformed by the graphic novel format. Brian Herbert and Kevin J. Anderson’s adaptation retains the integrity of the original novel, and Raúl Allén and Patricia Martín’s magnificent illustrations, along with cover art by Bill Sienkiewicz, bring the book to life for a new generation of readers. A national bestseller, Dune: The Graphic Novel, is now available in a deluxe collectors edition with an increased trim size of 7 1/2" x 11 1/4", printed on high-quality matte art paper in a faux-cloth slipcase with gold foil stamping tip-on cover.',
    category_id: 2,
    price: 41.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg",
    review: "Excellent!!! - Dude452",
  },
  {
    book_name: "1984",
    author_name: "George Orwell",
    description:
      "In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.",
    category_id: 2,
    price: 19.49,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/51sdWhtHOwL.jpg",
    review:
      "Read this book four times and will never get tired of reading it! - justalexiaaa",
  },
  {
    book_name: "Foundation",
    author_name: "Issac Asimov",
    description:
      "For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Sheldon, creator of the revolutionary science of psychohistory, can see into the future—to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save mankind, Seldon gathers the best minds in the Empire—both scientists and scholars—and brings them to a bleak planet at the edge of the Galaxy to serve as a beacon of hope for a fututre generations. He calls his sanctuary the Foundation. But soon the fledgling Foundation finds itself at the mercy of corrupt warlords rising in the wake of the receding Empire. Mankinds last best hope is faced with an agonizing choice: submit to the barbarians and be overrun—or fight them and be destroyed.",
    category_id: 2,
    price: 15.3,
    image_url:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg",
    review:
      "Really cool book that transcends the decade it was written in. Beyond some minor gripes of “samey” writing between characters, it is a really cool read! - Dadams46",
  },
  {
    book_name: "Enders Game",
    author_name: "Orson Scott Card",
    description:
      "Once again, Earth is under attack. An alien species is poised for a final assault. The survival of humanity depends on a military genius who can defeat the aliens. But who? Ender Wiggin. Brilliant. Ruthless. Cunning. A tactical and strategic master. And a child. Recruited for military training by the world government, Enders childhood ends the moment he enters his new home: Battle School. Among the elite recruits Ender proves himself to be a genius among geniuses. He excels in simulated war games. But is the pressure and loneliness taking its toll on Ender? Simulations are one thing. How will Ender perform in real combat conditions? After all, Battle School is just a game. Isnt it?",
    category_id: 2,
    price: 13.49,
    image_url: "https://m.media-amazon.com/images/I/51YfSAtW63L.jpg",
    review:
      "Excellent!! What more can I say. Very technical. Some was hard to follow but I made it through. Way better than the movie. - 224perweek",
  },
  {
    book_name: "The Time Machine",
    author_name: "H.G. Wells",
    description:
      "The Time Machine first appeared in 1896 and stunned readers with a vivid narrative studded with vital ideas unlike any seen in print before. The narrator describes a voyage into the future that depicts the disturbing evolution of society, introduces him to strange companions and stranger foes, and eventually stretches into eras so distant that the dying sun shines dull red an unrecognizable landscape. The sheer scope of the authors imagination still provokes delight and has provided impetus for countless time travel narratives since.",
    category_id: 2,
    price: 14.97,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/A12DaLoLozL.jpg",
    review: "Good show, Mr Wells! - Anonymous",
  },
  {
    book_name: "And Then There Were None",
    author_name: "Agatha Christie",
    description:
      "Ten people, each with something to hide and something to fear, are invited to an isolated mansion on Indian Island by a host who, surprisingly, fails to appear. On the island they are cut off from everything but each other and the inescapable shadows of their own past lives. One by one, the guests share the darkest secrets of their wicked pasts. And one by one, they die…",
    category_id: 3,
    price: 18.8,
    image_url:
      "https://agathachristie.imgix.net/hcus-paperback/Jacket_AndThenThereWereNoneUS.jpg?auto=compress,format&fit=clip&q=65&w=400",
    review:
      "The book itself was in great condition, and it is my favorite mystery novel. I love it, and it went on my showcase shelf! - Star_Beloved",
  },
  {
    book_name: "The Big Sheep",
    author_name: "Robert Kroese",
    description:
      "Los Angeles of 2039 is a baffling and bifurcated place. After the Collapse of 2028, a vast section of LA, the Disincorporated Zone, was disowned by the civil authorities, and became essentially a third world country within the borders of the city. Navigating the boundaries between DZ and LA proper is a tricky task, and there is no one better suited than eccentric private investigator Erasmus Keane. When a valuable genetically altered sheep mysteriously goes missing from Esper Corporations labs, Keane is the one they call. But while the erratic Keane and his more grounded partner, Blake Fowler, are on the trail of the lost sheep, they land an even bigger case. Beautiful television star Priya Mistry suspects that someone is trying to kill her - and she wants Keane to find out who. When Priya vanishes and then reappears with no memory of having hired them, Keane and Fowler realize something very strange is going on. As they unravel the threads of the mystery, it soon becomes clear that the two cases are connected - and both point to a sinister conspiracy involving the most powerful people in the city. Saving Priya and the sheep will take all of Keanes wits and Fowlers skills, but in the end, they may discover that some secrets are better left hidden.",
    category_id: 3,
    price: 34.99,
    image_url: "https://m.media-amazon.com/images/I/51PxdhiBRSL.jpg",
    review: "Loved it!!! - Lady678",
  },
  {
    book_name: "Gone Girl",
    author_name: "Gillian Flynn",
    description:
      "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunnes fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nicks clever and beautiful wife disappears. Husband-of-the-Year Nick isnt doing himself any favors with cringe-worthy daydreams about the slope and shape of his wifes head, but passages from Amys diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amys fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and hes definitely bitter—but is he really a killer? ",
    category_id: 3,
    price: 24.99,
    image_url:
      "https://www.pluggedin.com/wp-content/uploads/2020/01/gone-girl-cover.jpg",
    review:
      "Great read. Keeps you on the edge of your seat. Highly recommend. - Shootah87",
  },
  {
    book_name: "The Postman Awlays Rings Twice",
    author_name: "James M. Cain",
    description:
      "First published in 1934 and banned in Boston for its explosive mixture of violence and eroticism, The Postman Always Rings Twice is a classic of the roman noir. It established James M. Cain as a major novelist with an unsparing vision of Americas bleak underside, and was acknowledged by Albert Camus as the model for The Stranger.",
    category_id: 3,
    price: 15.0,
    image_url:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1282407491l/1870095.jpg",
    review:
      "An interesting plot with interesting twists and turns. If its your first mystery book, be sure to give it a try. - bookNerd35",
  },
  {
    book_name: "In Cold Blood",
    author_name: "Truman Capote",
    description:
      "On November 15, 1959, in the small town of Holcomb, Kansas, four members of the Clutter family were savagely murdered by blasts from a shotgun held a few inches from their faces. There was no apparent motive for the crime, and there were almost no clues. ",
    category_id: 3,
    price: 14.95,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/914SzWORucL.jpg",
    review:
      "Book was beautifully written but had many lows where I would get board and have trouble picking the book back up to finish. - slowReader99",
  },
  {
    book_name: "The Odyssey",
    author_name: "Homer",
    description:
      "Ten years have passed since the fall of Troy. The surviving Greek warriors who destroyed that city have returned home. All except Odysseus, whose wife, Penelope, and son, Telemachus, await him. Claiming that Odysseus is dead, a host of suitors have taken up residence in his home, eating up his wealth and trying to persuade Penelope to marry one of them. Penelope steadfastly refuses. Odysseus, in fact, is alive. Having spent seven years as a captive of the nymph Calypso, the gods finally take pity on him and persuade her to set him free. When he resumes his journey home, the sea god Poseidon sends a great storm to destroy his raft. Exhausted and near death, Odysseus and his men wash up on an island shore. They are delayed by Polyphemus the Cyclops, the Lotus-eaters, the Sirens, the sorceress Circe, and other strange creatures. Set in a time that was ancient even when Homer composed it almost 2,800 years ago, The Odyssey reveals a universal order where gods intercede directly and sometimes capriciously in the destinies of men, where heroes are as deceitful as they are brave, and where a sea voyage becomes a test of human ingenuity and courage in the face of helplessness. The Odyssey is one of Smart-Books Collectible Editions classics. Each volume features authoritative texts by the worlds greatest authors in an exquisitely designed foil-stamped binding, with distinctive colored edging and an attractive ribbon bookmark. Decorative, durable, and collectible, these books offer hours of pleasure to readers young and old and are an indispensable cornerstone for any home library.",
    category_id: 4,
    price: 39.95,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/81QAAnCNM7L.jpg",
    review: "An old classic!! - frankieG",
  },
  {
    book_name: "Gullivers Travels",
    author_name: "Jonathan Swift",
    description:
      "Considered the greatest satire ever written in English, Jonathan Swift’s Gulliver’s Travels chronicles the fantastic voyages of Lemuel Gulliver, principally to four marvelous realms: Lilliput, where the people are six inches tall; Brobdingnag, a land inhabited by giants; Laputa, a wondrous flying island; and a country where the Houyhnhnms, a race of intelligent horses, are served by savage humanoid creatures called Yahoos. Beneath the surface of this enchanting fantasy lurks a devastating critique of human malevolence, stupidity, greed, vanity, and short-sightedness. A brilliant combination of adventure, humor, and philosophy, Gullivers Travels is one of literatures most durable masterpieces.",
    category_id: 4,
    price: 19.49,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/813YyI2mdmL.jpg",
    review: "I really enjoyed it.  -bob1bob",
  },
  {
    book_name: "Moby Dick",
    author_name: "Herman Melville",
    description:
      '"Call me Ismael" is one of the most remembered opening phrases in the history of literature. Thus begins Moby Dick, the great masterpiece of Herman Melville, a tireless traveler who began in literature by narrating his adventures in the South Seas. The epic duel between the white whale and Captain Ahab symbolizes the eternal struggle between good and evil and is the most accomplished example of something many other American authors have pursued since then: the Great American Novel.',
    category_id: 4,
    price: 15.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/51aV053NRjL.jpg",
    review:
      "I was going to write a review on this great novel, but after reading these others what more can I add? It was required reading when I was in ninth grade (a long time ago) and I have never forgotten it as one of the classics! I love all the great American novelists, and Melville is among my favorotes. - booknoob23",
  },
  {
    book_name: "Treasure Island",
    author_name: "Robert Louis Stevenson",
    description:
      "Featuring one of literatures most beloved villains, Robert Louis Stevensons classic pirate story Treasure Island has been entertaining readers for generations by telling a story of friendship, loyalty, courage, and honor.",
    category_id: 4,
    price: 17.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/51W7H0q4HPL._SX328_BO1,204,203,200_.jpg",
    review:
      "This is a great adventure book for kids and adults. It holds your interest and has lots of characters you]ll love to follow through the twists and rutns of the plot. A definite two thumbs up. - ruthey12",
  },
  {
    book_name: "King Solomons Mines",
    author_name: "H. Rider Haggard",
    description:
      "One of the best-selling novels of the nineteenth century, King Solomons Mines has inspired dozens of adventure stories, including Edgar Rice Burroughs Tarzan books and the Indiana Jones movies. Vivid and enormously action-packed, H. Rider Haggards tale of danger and discovery continues to shock and thrill, as it has since it was first presented to the public and heralded as “the most amazing book ever written.” The story begins when renowned safari hunter Allan Quartermain agrees to help Sir Henry Curtis and Captain John Good search for King Solomons legendary cache of diamonds. Eager to find out what is true, what is myth, and what is really buried in the darkness of the mines, the tireless adventurers delve into the Saharas treacherous Veil of Sand, where they stumble upon a mysterious lost tribe of African warriors. Finding themselves in deadly peril from that countrys cruel king and the evil sorceress who conspires behind his throne, the explorers escape, but what they seek could be the most savage trap of all—the forbidden, impenetrable, and spectacular King Solomons Mines.",
    category_id: 4,
    price: 15.99,
    image_url:
      "https://almabooks.com/wp-content/uploads/2019/08/King-Solomons-Mines.jpg",
    review:
      "Good book but the escape from certain death was a little too contrived. - teddy54",
  },
  {
    book_name: "The 4-Hour Workweek",
    author_name: "Timothy Ferriss",
    description:
      "Forget the old concept of retirement and the rest of the deferred-life plan, there is no need to wait and every reason not to, especially in unpredictable economic times. Whether your dream is escaping the rat race, experiencing high-end world travel, or earning a monthly five-figure income with zero management, The 4-Hour Workweek is the blueprint.",
    category_id: 5,
    price: 22.49,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/81qW97ndkvL.jpg",
    review:
      "I love this book! It really opened my eyes up to a lot of lessons both in work life and personal life. MUST READ!!!!!!!!! - janjam56",
  },
  {
    book_name: "Outliers",
    author_name: "Malcom Gladwell",
    description:
      'In this stunning book, Malcolm Gladwell takes us on an intellectual journey through the world of "outliers"—the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different?',
    category_id: 5,
    price: 26.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/71PP92fxyEL.jpg",
    review:
      "Insightful, a book anyone can take a lesson or two from. - OutTheDoor",
  },
  {
    book_name: "The Power of Positive Thinking",
    author_name: "Norman Vincent Peale",
    description:
      'The book describes the power positive thinking has and how a firm belief in something, does actually help in achieving it. In order to live a successful and constructive life, one needs to know about the secrets of positive thinking says the author for it is the most important ingredient for a better and blissful life. The Power of Positive Thinking will help you overcome negative attitudes, such as fear and lack of confidence and replace them with the traits of a positive thinker optimism, determination, patience and focus.Simple techniques of elevating low moods and energy levels by positive thinking also improve ones overall mental and physical health.This book will show you how you can deal more effectively with tough situations and difficult people and dramatically improve your performance and confidence. You must learn that the easiest way to an easy mind is to create an easy mind. This is done by practice and by the application such as "Believe in yourself and in everything you do", "Build new power and determination", "Improve your personal and professional relationships" and "Be kind to yourself" etc.',
    category_id: 5,
    price: 22.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/615xhgxzDSL.jpg",
    review:
      "I love this book. I am getting four more to share with family. -rainMan35",
  },
  {
    book_name: "The Secret",
    author_name: "Rhonda Byrne",
    description:
      "The worldwide bestselling phenomenon that has helped millions tap the power of the law that governs all our lives to create—intentionally and effortlessly—a joyful life.",
    category_id: 5,
    price: 15.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/81MArWaiw1L.jpg",
    review: "Worth the read. - doug99",
  },
  {
    book_name: "Meditations",
    author_name: "Marcus Aurelius",
    description:
      "Written in Greek by an intellectual Roman emperor without any intention of publication, the Meditations of Marcus Aurelius  offer a wide range of fascinating spiritual reflections and exercises developed as the leader struggled to understand himself and make sense of the universe. Spanning from doubt and despair to conviction and exaltation, they cover such diverse topics as the question of virtue, human rationality, the nature of the gods and the values of leadership. But while the Meditations were composed to provide personal consolation, in developing his beliefs Marcus also created one of the greatest of all works of philosophy: a series of wise and practical aphorisms that have been consulted and admired by statesmen, thinkers and ordinary readers for almost two thousand years.",
    category_id: 5,
    price: 24.99,
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/51cQEdN9KuL._SX331_BO1,204,203,200_.jpg",
    review:
      "Could not put this translation down. Made me think and was not verbose. I plan on re-reading soon. - ATXHailey",
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
