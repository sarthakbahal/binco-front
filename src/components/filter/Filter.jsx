import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './filter.scss';

export default function SelectLabels() {
    const [category, setcategory] = React.useState('');
    const [sort, setsort] = React.useState('');

    const handleChange = (event) => {
        setcategory(event.target.value);

    };

    const handleSortChange = (event) => {
        setsort(event.target.value);
    };

    return (
        <div className='filters'>

            <div className="category">
                <FilterAltIcon className='icon' />

                <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">

                    <InputLabel id="category-label">All Categories</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                        disableUnderline
                        sx={{
                            '&:before, &:after': { borderBottom: 'none !important' },
                            '& .MuiSelect-select': { border: 'none !important', boxShadow: 'none !important' }
                        }}
                    >
                        <MenuItem value="">
                            <em>All Categories</em>
                        </MenuItem>
                        <MenuItem value="food">Food</MenuItem>
                        <MenuItem value="retail">Retail</MenuItem>
                        <MenuItem value="services">Services</MenuItem>
                        <MenuItem value="entertainment">Entertainment</MenuItem>
                    </Select>

                </FormControl>
            </div>

            <div className="sort">

                <FormControl sx={{ m: 1, minWidth: 120 }} variant='standard'>
                    <InputLabel id="sort-label">Sort</InputLabel>
                    <Select
                        value={sort}
                        onChange={handleSortChange}
                        disableUnderline
                        sx={{
                            '&:before, &:after': { borderBottom: 'none !important' },
                            '& .MuiSelect-select': { border: 'none !important', boxShadow: 'none !important' }
                        }}

                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>Sort</em>
                        </MenuItem>
                        <MenuItem value="popular">Popular</MenuItem>
                        <MenuItem value="newest">Newest</MenuItem>
                        <MenuItem value="low">Price: Low to High</MenuItem>
                        <MenuItem value="high">Price: High to Low</MenuItem>
                    </Select>

                </FormControl>
            </div>
        </div>
    );
}



