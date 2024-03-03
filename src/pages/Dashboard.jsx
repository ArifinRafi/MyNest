

const Dashboard = () => {
        const handleSubmit = event => {
                event.preventDefault();
                const form = event.target;
                const propertyName = form.propertyName.value;
                const imageLink = form.imageLink.value;
                const price = form.price.value;
                const address = form.address.value;
                const bedrooms = form.bedrooms.value;
                const washrooms = form.washrooms.value;
                const year = form.year.value;
                const videoLink = form.videoLink.value;
                const location = form.location.value;
                const description = form.description.value;
                const property = {propertyName, imageLink, price, address, bedrooms, washrooms, year, videoLink, location,description};
                
                fetch('http://localhost:5000/properties', {
                  method: "POST",
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(property)      
                })
                .then(res=> res.json())
                .then(data => {
                  console.log(data);
                  if(data.insertedId){
                        alert('property added succesfully');
                        form.reset();
                  }
                  else {
                        alert('property added succesfully');
                        form.reset();
                        console.log("property added");
                  }
                })
                .catch(error=> {
                        console.log(error);
                });
        };
        return (
                <div className='max-w-screen-2xl mx-auto'>
                        <form onSubmit={handleSubmit} action="" className='grid grid-cols-2 mt-12 mb-24  gap-4 justify-items-center items-center'>
                        <input type="text" placeholder="Property Id" name='propertyName' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Image Link" name='imageLink' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Price" name='price' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Address" name='address' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Number of Bedrooms" name='bedrooms' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Number of Washrooms" name='washrooms' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Year Built" name='year' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Video Link" name='videoLink' className="input input-bordered w-full max-w-xs" />
                        <select name='location' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Location</option>
                        <option>Uttara</option>
                        <option>Purbachal</option>
                        <option>Gazipur</option>
                        </select>
                        <input type="text" name='description' placeholder="Description" className="input input-bordered h-32 w-full max-w-xs" />
                        <button className='btn col-span-2 text-white bg-black w-64 mt-12 hover:text-black'>Submit</button>
                        </form>
                </div>
        );
};

export default Dashboard;