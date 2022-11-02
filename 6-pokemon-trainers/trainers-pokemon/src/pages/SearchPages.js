import Card from "../components/Card";
import ListCard from "../components/ListCard";
import SearchFilters from "../components/SearchFilters";

const trainersArray = [
    {
        name: 'Ash Ketchum',
        region: 'Kanto',
        rank: 2,
        team: [
            { name: 'pikachu', level: 100 },
            { name: 'greninja', level: 50 },
        ],
        history: 'lalalalalalala',
    },
    {
        name: 'Misty',
        region: 'Kanto',
        rank: 2,
        team: [
            { name: 'staryu', level: 30 },
            { name: 'psyduck', level: 40 },
        ],
        history: 'lalalalalalala',
    },
    {
        name: 'Jose',
        region: 'Kalos',
        rank: 99,
        team: [
            { name: 'staryu', level: 30 },
            { name: 'psyduck', level: 40 },
        ],
        history: 'lalalalalalala',
    }
];

const searchD = {
    name: '',
    isChampion: ''
}

function SearchPage() {
    return(
        <>
            <SearchFilters name={searchD.name} isChampion={searchD.isChampion}/>
            name: {searchD.name}
            isChampion: {searchD.isChampion}
            <ListCard>
                {trainersArray.map((trainerInArray, index) => <Card key={index} trainerComponent={trainerInArray}/> )}
            </ListCard>
        </>
    );
}

export default SearchPage;