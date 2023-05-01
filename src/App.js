import './styles.scss';
import { Explanation, Table } from '../src/Components';
import Games from '../src/Assets/nes-games-north-america.json';

export default function App() {
  const head = [
    {
      id: 'game',
      label: 'Game',
      sortable: true,
    },
    {
      id: 'developer',
      label: 'Developer',
      sortable: true,
    },
    {
      id: 'year',
      label: 'Year',
      sortable: true,
    },
  ];

  const body = Games.map(({ game, developer, year }) => ({
    game: {
      displayValue: game,
      sortValue: String(game), // For games like 1942
    },
    developer: {
      displayValue: developer,
      sortValue: String(developer),
    },
    year: {
      displayValue: year,
      sortValue: year,
    },
  }));

  return (
    <main>
      <Explanation />
      <Table body={body} head={head} />
    </main>
  );
}
