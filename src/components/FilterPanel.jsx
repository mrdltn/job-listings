import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../store/filters/filter-selectors';
import { removeFilter, clearFilter } from '../store/filters/filter-actions';

import { Badge } from '../UI/Badge';
import { Stack } from '../UI/Stack';
import { Card } from '../UI/Card';

const FilterPanel = () => {
    const dispatch = useDispatch();

    const currentFilters = useSelector(selectFilters);

    if (currentFilters.length === 0) {
        return null;
    }

    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {currentFilters.map((filter) => (
                        <Badge
                            key={filter}
                            variant='clearable'
                            onClear={() => dispatch(removeFilter(filter))}
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button className='link' onClick={() => dispatch(clearFilter)}>
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
