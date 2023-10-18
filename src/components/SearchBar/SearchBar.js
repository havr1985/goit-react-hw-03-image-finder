

export const SearchBar = ({ onSubmit }) => {
    return (
        <header>
            <form onSubmit={evt => {
                evt.preventDefault();
                const form = evt.currentTarget;
                const query = form.elements.search.value;
                onSubmit(query);
                form.reset();
            }}>
                <button type="submit" >
                    <span>Search</span>
                </button>

                <input
                    name="search"
                    type="text"
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};