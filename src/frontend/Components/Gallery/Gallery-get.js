import BlackMirrorCover from '../../images/Black_Mirror_cover.jpg';
import BreakingBadCover from '../../images/Breaking_Bad_cover.jpg';
import DeathNoteCover from '../../images/Death_Note_cover.jpg';
import GameOfThronesCover from '../../images/Game_Of_Thrones_cover.jpg';
import TheWireCover from '../../images/The_Wire_cover.jpg';
import WalkingDeadCover from '../../images/Walking_Dead_cover.jpg';

export default function getGallery() {
  return [
    {
      id: "black-mirror", name: "Black Mirror", logo: BlackMirrorCover,
      details: "This sci-fi anthology series explores a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
      awards: "This TV series won Six Emmys, including two for Outstanding TV Movie ('USS Callister' & 'San Junipero')",
      castDetails: "Starring Jesse Plemons, Cristin Milioti & Jimmi Simpson",
      Director: "Created by: Charlie Brooker"
    },
    {
      id: "breaking-bad", name: "Breaking Bad", logo: BreakingBadCover,
      details: "A terminally ill chemistry teacher teams with a former student to manufacture crystal meth to secure his family's future.",
      awards: "Breaking Bad won a total of 16 Emmy Awards, including four Best Actor Emmys for star Bryan Cranston.",
      castDetails: "Starring: Bryan Cranston, Aaron Paul, Anna Gunn.",
      Director: "Created by: Vince Gilligan"
    },
    {
      id: "death-note", name: "Death Note", logo: DeathNoteCover,
      details: "When a Japanese high schooler comes into possession of a mystical notebook, he finds he has the power to kill anybody whose name he enters in it.",
      castDetails: "Starring:Kappei Yamaguchi, Mamoru Miyano, Ai Satou",
      Director: "Creators:Tsugumi Ohba, Takeshi Obata"
    },
    {
      id: "game-of-thrones", name: "Game Of Thrones", logo: GameOfThronesCover,
      details: "The all-conquering, multi-Emmy-winning adaptation of George R R Martin's rich yet brutal fantasy saga. George R.R. Martin's best-selling book series 'A Song of Ice and Fire' is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing a deadly game for control of the Seven Kingdoms of Westeros, and to sit atop the Iron Throne.",
      awards: "Game of Thrones is one of the biggest award winning TV Series, having won multiple Golden Globe Awards as well as currently holding six world records from the Guinness Book of World Records.",
      castDetails: "Starring: Kit Harington, Emilia Clarke, Lena Headey, Peter Dinklage",
      Director: "Creators: George R.R. Martin, David Benioff, D. B. Weiss"
    },
    {
      id: "the-walking-dead", name: "The Walking Dead", logo: WalkingDeadCover,
      details: "After the world is ravaged by a zombie apocalypse, a group of survivors, led by police officer Rick Grimes (Andrew Lincoln), find themselves traveling in search of a safe and secure home. As they struggle to fend off the zombie hordes, they soon realise that the dead are not their only threat. Are they prepared to do what it takes to survive?",
      awards: "Based on one of the most successful and popular comic books of all time,  The Walking Dead have won multiple Emmy awards, including 'Primetime Emmy Awards & The Golden Globe Award'. The Walking Dead vividly captures the tension, drama and devastation following a zombie apocalypse.",
      castDetails: "Starring: Andrew Lincoln, Norman Reedus, Melissa McBride, Chandler Riggs, Lauren Cohan",
      Director: "Created by: Greg Nicotero"
    },
    {
      id: "the-wire", name: "The Wire", logo: TheWireCover,
      details: "In the drug-ridden streets of West Baltimore, there are good guys and there are bad guys. Sometimes you need more than a badge to tell them apart.",
      awards: "Nominated for two primetime Emmy's and winning the Crime thriller awards, The Wire is lauded for its literary themes, uncommonly accurate exploration of society and politics, and its realistic portrayal of urban life.",
      castDetails: "Starring: Dominic West, Wendell Pierce, Sonja Sohn, Clarke Peters, Michael K. Williams",
      Director: "Created by: David Simon"
    }
  ];
}