import './styles/Search.css';

type SearchProps = {
    handleChange: () => void;
    inputRef: React.RefObject<HTMLInputElement>;
    isButtonDisabled: boolean;
}

const Search = ({handleChange, inputRef, isButtonDisabled}: SearchProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleChange();
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input onChange={handleChange} ref={inputRef} type="text" placeholder="Search for a movie title..."/>
            <button disabled={isButtonDisabled}>Search</button>
        </form>
    );
};

export default Search;