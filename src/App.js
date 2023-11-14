import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';
import { Header } from './components/Header';

function App() {
    return (
        <>
            <Header />
            <div className='container'>
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
