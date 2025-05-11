
const Search = ({ searchData}) => {
    const temp = searchData?.main?.temp;

    console.log(searchData)
    return ( 
        <>
      {searchData?.name && 
        <div className="text-5xl">
            <small>Today</small><br />
            <small>{searchData.name}</small><br />
            <h2 className="text-5xl text-bold text-white">{Math.round(temp -273.15)}&deg;C</h2>
        </div>
      }
        </>
     );
}
 
export default Search;