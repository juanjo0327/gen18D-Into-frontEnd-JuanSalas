import SearchFilters from '../components/SearchFilters';
import Card from '../components/Card';
import ListCard from '../components/ListCard';

const trainerArray = [
    {
        name: 'Ash Ketchum',
        region: 'Kanto',
        rank: 2,
        team: [
            {name: 'pickachu', level: 100},
            {name: 'greninja', level: 100},
        ],
        history: 'lalalalalalala'
    },
    {
        name: 'Misty',
        region: 'Kanto',
        rank: 2,
        team: [
            {name: 'staryu', level: 30},
            {name: 'psyduck', level: 40},
        ],
        history: 'lalalalalalala'
    }
]

function SearchPages(){
    return(
        <>
            <SearchFilters></SearchFilters>
            <ListCard>
                {trainerArray.map((trainer,index) => <Card key={index} trainer={trainer}/>)}
            </ListCard>
        </>
    );
}

export default SearchPages