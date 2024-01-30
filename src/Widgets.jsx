import "./Weather.json"

fetch("weather", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		name: "User 1",
	}),
})
	.then((res) => res.json())
	.then((coords) => {
		console.log(coords);
		console.log(coords.lon, coords.lat);
	
		});


const Widgets = () => {
    return ( 
        <>
            <div className="grid gap-20 grid-cols-4 w-screen">
                <div className="widget"></div>
                <div className="widget"></div>
                <div className="widget"></div>
                <div className="widget"></div>
                <div className="widget"></div>
                <div className="widget"></div>
                <div className="widget"></div>
                <div className="widget"></div>
            </div>
        </>
     );
}
 
export default Widgets;