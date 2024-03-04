const Dashboard = () => {
        const handleSubmit = async event => {
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
            const image = form.image.files[0]; // Get the file from input[type=file]
    
            // Upload image using imgbb API
            const imageData = new FormData();
            imageData.append("image", image);
    
            try {
                const imgbbResponse = await fetch('https://api.imgbb.com/1/upload?key=028d6e8a62a029df822aaeca99a5c917', {
                    method: "POST",
                    body: imageData
                });
                const imgbbData = await imgbbResponse.json();
                const imageUploadUrl = imgbbData.data.url; // Get the uploaded image URL
    
                // Prepare property data
                const property = {
                    propertyName,
                    imageLink: imageUploadUrl, // Use the uploaded image URL
                    price,
                    address,
                    bedrooms,
                    washrooms,
                    year,
                    videoLink,
                    location,
                    description,
                    image: imageUploadUrl // Also include the image URL in the property data
                };
    
                // Send property data to your server
                const propertyResponse = await fetch('http://localhost:5000/properties', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(property)
                });
    
                if (propertyResponse.ok) {
                    const propertyData = await propertyResponse.json();
                    if (propertyData.insertedId) {
                        alert('Property added successfully');
                        form.reset();
                    } else {
                        alert('Failed to add property');
                    }
                } else {
                    alert('Failed to add property');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to add property');
            }
        };
    
        return (
            <div className='max-w-screen-2xl mx-auto'>
                <form onSubmit={handleSubmit} action="" className='grid grid-cols-4 mt-12 mb-24 gap-4 justify-items-center items-center'>
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
                    <input type="file" className="input" name="image" />
                    <button className='btn col-span-2 text-white bg-black w-64 mt-12 hover:text-black'>Submit</button>
                </form>
            </div>
        );
    };
    
    export default Dashboard;
    