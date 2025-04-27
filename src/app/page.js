import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Accordion from "./components/Accordion";
import AccordionSlide from "./components/AccordionSlide";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import StaticMap from "./components/StaticMap";
import Segment from "./layouts/Segment";

const slides = [
  {
    title: 'Find the cheapest days to fly',
    description: 'With the date view and price chart, you can easily identify the best deals and find cheap flights.',
    subTitle: 'Useful tools for choosing your travel dates',
    subDescription: 'If your travel plans are flexible, use the form above to start searching for a specific trip and purchase your plane tickets. Then, try different combinations of the Dates and Price Chart options on the Search page to find the cheapest days to get to your destination (and return for round-trip flights).'
  },
  {
    title: 'Find the cheapest days to fly',
    description: 'With the date view and price chart, you can easily identify the best deals and find cheap flights.',
    subTitle: 'Useful tools for choosing your travel dates',
    subDescription: 'If your travel plans are flexible, use the form above to start searching for a specific trip and purchase your plane tickets. Then, try different combinations of the Dates and Price Chart options on the Search page to find the cheapest days to get to your destination (and return for round-trip flights).'
  },
  {
    title: 'Find the cheapest days to fly',
    description: 'With the date view and price chart, you can easily identify the best deals and find cheap flights.',
    subTitle: 'Useful tools for choosing your travel dates',
    subDescription: 'If your travel plans are flexible, use the form above to start searching for a specific trip and purchase your plane tickets. Then, try different combinations of the Dates and Price Chart options on the Search page to find the cheapest days to get to your destination (and return for round-trip flights).'
  }
]

export default async function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header>
        <Navbar />
        <div className="relative w-full flex overflow-hidden">
          <img className="w-full min-w-[568px] max-w-[1248px] justify-center relative left-[50%] -translate-x-[50%]" src="/flight_dark.svg" alt="intro" />
          <h2 className="absolute bottom-0 left-[50%] -translate-x-[50%] text-4xl md:text-6xl">Flight</h2>
        </div>
      </header>
      <main className="lg:px-25 lg:pt-6">
        <Search />
        <Segment title="Find cheap flights from Maracaibo to anywhere in the world">
          <StaticMap />
        </Segment>
        <Segment title="Useful tools to find the best deals">
          <Accordion>
            {
              slides.map(
                ({ title, description, subTitle, subDescription }, i) => (
                  <AccordionSlide
                    key={i}
                    title={title}
                    description={description}
                    subDescription={subDescription}
                    subTitle={subTitle}
                    icon={faCalendar}
                  />
                )
              )
            }
          </Accordion>
        </Segment>
        <Segment></Segment>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
