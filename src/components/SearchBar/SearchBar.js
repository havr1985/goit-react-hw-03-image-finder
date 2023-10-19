import { SearchBarStyles, SearchForm, SerchFormBtn, SearchInput } from "./SearchBar.styled";
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ onSubmit }) => {
    return (
        <SearchBarStyles>
            <SearchForm onSubmit={evt => {
                evt.preventDefault();
                const form = evt.currentTarget;
                const query = form.elements.search.value;
                onSubmit(query);
                form.reset();
            }}>
                <SerchFormBtn type="submit" >
                    <BsSearch size={25}/>
                </SerchFormBtn>

                <SearchInput
                    name="search"
                    type="text"
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchBarStyles>
    );
};