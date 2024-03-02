

const Dashboard = () => {
        const handleSubmit = event => {
                event.preventDefault();
                const propertyName = event.target.propertyName.value;
                const imageLink = event.target.imageLink.value;
                const price = event.target.price.value;
                const address = event.target.address.value;
                const bedrooms = event.target.bedrooms.value;
                const washrooms = event.target.washrooms.value;
                const year = event.target.year.value;
                const videoLink = event.target.videoLink.value;
                const location = event.target.location.value;
                const description = event.target.description.value;
                console.log(location);
                
                

        }
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